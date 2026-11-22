// 게임 외 직무용 포트폴리오. ../data.js(window.PORTFOLIO)와 data-dev.js(window.DEV)를 읽어 화면을 그린다.
// 문자열은 전부 textContent 로 넣는다(innerHTML 미사용).
(() => {
  const D = window.PORTFOLIO, X = window.DEV;
  if (!D || !X) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const KIND = { game: "게임", ai: "AI", web: "웹" };

  function h(spec, attrs, ...kids) {
    const [tag, ...cls] = spec.split(".");
    const el = document.createElement(tag || "div");
    if (cls.length) el.className = cls.join(" ");
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false || kid === "") continue;
      el.append(kid instanceof Node ? kid : text(String(kid)));
    }
    return el;
  }
  // "push --force" 처럼 하이픈이 이어지면 커닝으로 붙어 긴 대시처럼 보인다. 그 부분만 커닝을 끈다.
  function text(s) {
    if (!s.includes("--")) return s;
    const frag = document.createDocumentFragment();
    s.split(/(-{2,})/).forEach((part) => {
      if (!part) return;
      if (/^-{2,}$/.test(part)) { const sp = document.createElement("span"); sp.className = "dd"; sp.textContent = part; frag.append(sp); }
      else frag.append(part);
    });
    return frag;
  }
  const pick = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const $ = (sel) => document.querySelector(sel);
  const slot = (name) => $(`[data-slot="${name}"]`);
  const fill = (name, nodes) => { const s = slot(name); if (s) s.replaceChildren(...[nodes].flat(Infinity).filter((n) => n != null && n !== false && n !== "")); };
  // data.js 의 이미지 경로는 루트 기준이라 이 폴더에서는 ../ 를 붙인다
  const asset = (p) => (!p || /^(https?:|\/|\.\.\/)/.test(p) ? p : `../${p}`);

  const projects = [...D.projects, ...(X.extra || [])];
  const byId = (id) => projects.find((p) => p.id === id);

  // ---------- 바인딩 ----------
  document.querySelectorAll("[data-bind]").forEach((el) => { const v = pick(D, el.dataset.bind); if (v) el.textContent = v; });
  document.querySelectorAll("[data-dev]").forEach((el) => { const v = pick(X, el.dataset.dev); if (v) el.textContent = v; });
  document.querySelectorAll("[data-href]").forEach((el) => { const v = pick(D, el.dataset.href); if (v) el.href = v; else el.hidden = true; });
  document.querySelectorAll("[data-mail]").forEach((el) => { el.href = `mailto:${D.person.email}`; el.textContent = D.person.email; });
  document.querySelectorAll("[data-mail-link]").forEach((el) => { el.href = `mailto:${D.person.email}`; });

  // 첫 화면 그림: 파일이 있을 때만 보인다
  const art = $(".hero-art");
  if (art) {
    const img = art.querySelector("img");
    const show = () => { art.hidden = false; document.body.classList.add("has-art"); };
    if (img.complete && img.naturalWidth) show(); else img.addEventListener("load", show, { once: true });
  }

  // ---------- 지금 돌아가는 것 ----------
  fill("live", X.live.map((s) => {
    const p = byId(s.id);
    if (!p) return null;
    return h("li", { class: `st st-${s.state}` },
      h("span.st-dot", { "aria-hidden": "true" }),
      h("span.st-label", null, s.label),
      h("button.st-name", { type: "button", "data-open": p.id, "aria-haspopup": "dialog" }, p.title),
      h("span.st-note", null, s.note),
      p.links?.demo ? h("a.st-link", { href: p.links.demo, target: "_blank", rel: "noopener" }, "열기", h("span.sr", null, `: ${p.title}`)) : h("span.st-link.st-none", null, "비공개"));
  }));

  // ---------- 대표 프로젝트 ----------
  function pipeline(nodes) {
    const list = h("ol.pipe", { "aria-label": "데이터 흐름" });
    nodes.forEach((n, i) => {
      list.append(h("li", { class: `pn${n.model ? " pn-model" : ""}`, style: `--i:${i}` },
        h("span.pn-label", null, n.label),
        n.sub && h("span.pn-sub", null, n.sub),
        n.model && h("span.sr", null, " (AI 모델)")));
    });
    const loop = nodes.find((n) => n.loop);
    return h("div.pipe-wrap", null, list, loop && h("p.pipe-loop", null, h("span.pipe-loop-mark", { "aria-hidden": "true" }), loop.loop));
  }

  fill("featured", X.featured.map((f, i) => {
    const p = byId(f.id);
    if (!p) return null;
    const shot = f.cover || p.thumb;
    const alt = f.cover ? "" : (p.images?.[0]?.alt || "");
    return h("article", { class: `feat k-${p.kind}${i % 2 ? " feat-alt" : ""}`, "aria-labelledby": `f-${p.id}` },
      h("div.wrap", null,
        h("header.feat-head", null,
          h("p.feat-meta", null,
            h("span.kind", null, KIND[p.kind]),
            h("span", null, p.team),
            h("span", null, p.period)),
          h("h3.feat-title", { id: `f-${p.id}` }, p.title),
          h("p.feat-line", null, p.oneLine)),
        pipeline(f.pipeline),
        h("div.feat-body", null,
          h("dl.points", null, f.points.map((pt) => h("div", null, h("dt", null, pt.q), h("dd", null, pt.a)))),
          shot && h("figure.feat-shot", null, h("img", { src: asset(shot), alt, loading: "lazy", decoding: "async",
            // 그림 파일이 아직 없으면 자리를 비우지 않고 통째로 뺀다
            onerror: (e) => e.currentTarget.closest("figure").remove() }))),
        h("p.feat-actions", null,
          p.links?.demo && h("a.btn.btn-ink", { href: p.links.demo, target: "_blank", rel: "noopener" }, "배포된 사이트 열기"),
          p.links?.repo && h("a.btn.btn-line", { href: p.links.repo, target: "_blank", rel: "noopener" }, "GitHub 저장소"),
          h("button.btn.btn-line", { type: "button", "data-open": p.id, "aria-haspopup": "dialog" }, "자세히 보기"))));
  }));

  fill("more", X.more.map((id) => {
    const p = byId(id);
    if (!p) return null;
    return h("li", null,
      h("button.mcard", { type: "button", class: `mcard k-${p.kind}`, "data-open": p.id, "aria-haspopup": "dialog" },
        p.thumb ? h("span.mthumb", null, h("img", { src: asset(p.thumb), alt: "", loading: "lazy", decoding: "async" })) : h("span.mthumb.mthumb-empty"),
        h("span.mbody", null,
          h("span.kind", null, KIND[p.kind]),
          h("span.mtitle", null, p.title),
          h("span.mline", null, p.oneLine),
          h("span.mresult", null, p.result))));
  }));

  // ---------- 일하는 방식 ----------
  fill("strengths", X.strengths.map((s) => h("li", null,
    h("h3", null, s.title),
    h("p", null, s.line),
    h("ul.proof", null, s.proof.map((t) => h("li", null, t))))));

  // ---------- 경력, 학력 ----------
  fill("timeline", D.timeline.map((t) => {
    let title = t.title;
    const id = t.projectId || (t.link === "#drilling" ? "drilling" : null);
    if (id && byId(id)) title = h("button", { type: "button", "data-open": id, "aria-haspopup": "dialog" }, t.title);
    return h("li", null,
      h("time", null, t.date),
      h("span", { class: `badge b-${t.kind}` }, t.kind),
      h("div", null, h("div.tl-title", null, title), h("div.tl-meta", null, [t.org, t.note].filter(Boolean).join(", "),
        t.cert && h("button.tl-cert", { type: "button", "data-cert": D.timeline.indexOf(t), "aria-haspopup": "dialog" }, t.kind === "수상" ? "상장 보기" : "수료증 보기"))));
  }));
  fill("education", D.education.map((e) => h("li", null, h("strong", null, e.school), h("span", null, e.period))));

  // ---------- 기술 ----------
  const groups = [...D.skills].sort((a, b) => X.skillOrder.indexOf(a.group) - X.skillOrder.indexOf(b.group));
  fill("skills", groups.map((g) => h("section", { class: `sgroup k-${g.kind}`, "aria-label": g.group },
    h("h3", null, g.group),
    h("ul", null, g.items.map((s) => {
      const on = Math.max(1, Math.min(5, Math.round(s.pct / 20)));
      return h("li.srow", null,
        h("span.sname", null, s.name),
        h("span.gauge", { role: "img", "aria-label": `5칸 중 ${on}칸` }, Array.from({ length: 5 }, (_, i) => h("i", { class: i < on ? "on" : null }))),
        h("span.slvl", null, s.level),
        s.proof && h("span.sproof", null, s.proof));
    })))));

  // ---------- 파이프라인: 처음 보일 때 신호가 한 번 지나간다 ----------
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      e.target.classList.add("run");
    }), { threshold: 0.6 });
    document.querySelectorAll(".pipe").forEach((el) => { el.classList.add("armed"); io.observe(el); });
  }

  // ---------- 상세 창 ----------

  // ---------- 상장·수료증 팝업 (경력 항목과 프로젝트 상세 창에서 연다) ----------
  const viewer = $("#viewer");
  const certAsset = asset;
  const certLabel = (t) => (t.kind === "수상" ? "상장 보기" : "수료증 보기");
  const certsFor = (id) => D.timeline.map((t, i) => [i, t]).filter(([, t]) => t.projectId === id && t.cert);
  function viewCert(i, from) {
    const t = D.timeline[i];
    if (!t?.cert || !viewer) return;
    const c = t.cert, what = t.kind === "수상" ? "상장" : "수료증";
    // 닫을 때 브라우저가 '열기 직전 포커스'로 되돌리므로, 여는 버튼에 먼저 포커스를 둔다.
    if (from && document.activeElement !== from) from.focus({ preventScroll: true });
    fill("viewer", [
      h("h2", { id: "viewer-title" }, t.title),
      h("p.v-org", null, [t.org, t.date].filter(Boolean).join(", ")),
      h("img.v-img", { src: certAsset(c.img), width: c.w, height: c.h, alt: `${t.title} ${what}` }),
      c.file && h("p.v-foot", null, h("a", { href: certAsset(c.file), download: "" }, "원본 PDF 내려받기"))
    ]);
    if (!viewer.open) viewer.showModal();
    viewer.scrollTop = 0;
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cert]");
    if (b) { e.preventDefault(); viewCert(Number(b.dataset.cert), b); }
  });
  viewer?.addEventListener("click", (e) => { if (e.target === viewer || e.target.closest("[data-close]")) viewer.close(); });

  const dialog = $("#detail");
  let opener = null;

  function detail(p) {
    const meta = [["기간", p.period], ["구성", p.team], ["역할", p.role], ["결과", p.result]].filter(([, v]) => v);
    const links = [];
    if (p.links?.demo) links.push(h("a.btn.btn-ink", { href: p.links.demo, target: "_blank", rel: "noopener" }, p.demoLabel || "배포된 사이트 열기"));
    if (p.links?.repo) links.push(h("a.btn.btn-line", { href: p.links.repo, target: "_blank", rel: "noopener" }, "GitHub 저장소"));
    certsFor(p.id).forEach(([i, t]) => links.push(h("button.btn.btn-line", { type: "button", "data-cert": i, "aria-haspopup": "dialog" }, certLabel(t))));
    return h("div", { class: `k-${p.kind}` },
      h("span.kind", null, KIND[p.kind]),
      h("h2", { id: "detail-title" }, p.title),
      h("p.d-line", null, p.oneLine),
      h("dl.d-meta", null, meta.map(([k, v]) => h("div", null, h("dt", null, k), h("dd", null, v)))),
      p.images?.length && h("div.d-gallery", { tabindex: "0", "aria-label": "화면 모음, 옆으로 넘겨 보기" },
        p.images.map((im) => h("figure", null, h("img", { src: asset(im.src), width: im.w, height: im.h, alt: im.alt, loading: "lazy" }), h("figcaption", null, im.alt)))),
      p.images?.length > 1 && h("div.d-pager", null,
        h("button.btn.btn-line", { type: "button", onclick: (e) => pageGallery(e, -1) }, "이전 화면"),
        h("span.d-count", null, `화면 ${p.images.length}장`),
        h("button.btn.btn-line", { type: "button", onclick: (e) => pageGallery(e, 1) }, "다음 화면")),
      h("div.d-sections", null, p.sections.map((s) => h("section.d-sec", null, h("h3", null, s.title), h("ul", null, s.items.map((t) => h("li", null, t)))))),
      h("div.d-foot", null,
        h("ul.d-stack", { "aria-label": "사용 기술" }, p.stack.map((t) => h("li", null, t))),
        (links.length || p.codeNote) && h("div.d-links", null, links, p.codeNote && h("span.d-note", null, p.codeNote))));
  }
  function pageGallery(e, dir) {
    const g = e.currentTarget.closest(".d-pager").previousElementSibling;
    if (g) g.scrollBy({ left: dir * g.clientWidth, behavior: reduce ? "auto" : "smooth" });
  }
  function open(id, from) {
    const p = byId(id);
    if (!p || !dialog) return;
    opener = from || null;
    // 닫을 때 브라우저가 '열기 직전 포커스'로 되돌리므로, 여는 요소에 먼저 포커스를 둔다.
    if (opener && document.activeElement !== opener) opener.focus({ preventScroll: true });
    fill("detail", detail(p));
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    history.replaceState(null, "", `#${id}`);
  }
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open]");
    if (t) { e.preventDefault(); open(t.dataset.open, t); }
  });
  dialog?.addEventListener("click", (e) => { if (e.target === dialog || e.target.closest("[data-close]")) dialog.close(); });
  dialog?.addEventListener("close", () => { history.replaceState(null, "", location.pathname); opener?.focus(); });
  const openFromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (byId(id)) open(id);
  };
  openFromHash();
  addEventListener("hashchange", openFromHash);
})();
