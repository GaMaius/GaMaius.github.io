// 범용 포트폴리오. ../data.js(window.PORTFOLIO)와 data-profile.js(window.PROFILE)를 읽어 화면을 그린다.
// 문자열은 전부 textContent 로 넣는다(innerHTML 미사용).
(() => {
  const D = window.PORTFOLIO, P = window.PROFILE;
  if (!D || !P) return;
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
  // data.js 의 파일 경로는 루트 기준이라 이 폴더에서는 ../ 를 붙인다
  const asset = (p) => (!p || /^(https?:|\/|\.\.\/)/.test(p) ? p : `../${p}`);
  const yearOf = (period) => (String(period).match(/\d{4}/) || [""])[0];

  // ---------- 프로젝트: data.js 프로젝트 + Drilling(대표작 정보로 만든 항목) ----------
  const F = D.featured;
  const fact = (term) => F.facts.find((f) => f.term === term)?.desc;
  const drilling = {
    id: "drilling", kind: "game", title: F.title,
    period: `${F.milestones[0].date} – ${F.milestones.at(-1).date}`,
    team: fact("팀"), role: fact("역할"), oneLine: F.oneLine,
    thumb: F.image.src, images: [F.image],
    sections: [
      { title: "맡은 시스템", items: F.systems.map((s) => `${s.title}: ${s.body}`) },
      { title: "출시", items: [...F.milestones.map((m) => `${m.date} ${m.label}`), fact("지원")].filter(Boolean) }
    ],
    result: fact("출시"),
    stack: (fact("엔진") || "").split(/,\s*/).filter(Boolean),
    links: { demo: D.person.steam }, demoLabel: "Steam 상점 페이지"
  };
  const all = [...D.projects, drilling];
  const byId = (id) => all.find((p) => p.id === id);
  const ordered = P.order.map(byId).filter(Boolean);

  // ---------- 바인딩 ----------
  document.querySelectorAll("[data-bind]").forEach((el) => { const v = pick(D, el.dataset.bind); if (v) el.textContent = v; });
  document.querySelectorAll("[data-prof]").forEach((el) => { const v = pick(P, el.dataset.prof); if (v) el.textContent = v; else el.hidden = true; });
  document.querySelectorAll("[data-href]").forEach((el) => { const v = pick(D, el.dataset.href); if (v) el.href = v; else el.hidden = true; });
  document.querySelectorAll("[data-mail-link]").forEach((el) => { el.href = `mailto:${D.person.email}`; });
  document.querySelectorAll("[data-mail]").forEach((el) => { el.href = `mailto:${D.person.email}`; el.textContent = D.person.email; });

  // ---------- 첫 화면 ----------
  fill("statement", P.statement.map((line) => h("span.line", null, line)));
  fill("facts", P.facts.map((f) => h("li", null,
    h("button.fact", { type: "button", "data-open": f.open, "aria-haspopup": "dialog" },
      h("span.fact-label", null, f.label),
      h("span.fact-text", null, f.text)))));

  // ---------- 대표 작업 ----------
  fill("featured", P.featured.map((f, i) => {
    const p = byId(f.id);
    if (!p) return null;
    return h("article", { class: `feat${i % 2 ? " feat-flip" : ""}`, "aria-labelledby": `f-${p.id}` },
      h("div.wrap.feat-grid", null,
        h("button.feat-shot", { type: "button", "data-open": p.id, "aria-haspopup": "dialog", "aria-label": `${p.title} 자세히 보기` },
          h("img", { src: asset(p.thumb), alt: "", loading: "lazy", decoding: "async" })),
        h("div.feat-text", null,
          h("p.kicker", null, h("span", null, KIND[p.kind]), h("span", null, yearOf(p.period))),
          h("h3.feat-title", { id: `f-${p.id}` }, p.title),
          h("p.feat-line", null, p.oneLine),
          h("ul.feat-points", null, f.points.map((t) => h("li", null, t))),
          h("dl.feat-meta", null,
            h("div", null, h("dt", null, "역할"), h("dd", null, p.role)),
            h("div", null, h("dt", null, "결과"), h("dd", null, p.result))),
          h("p.feat-actions", null,
            h("button.btn.btn-green", { type: "button", "data-open": p.id, "aria-haspopup": "dialog" }, "자세히 보기"),
            p.links?.demo && h("a.btn.btn-line", { href: p.links.demo, target: "_blank", rel: "noopener" }, p.demoLabel || "사이트 열기")))));
  }));

  // ---------- 전체 작업 목록 ----------
  const TABS = [["all", "전체"], ["ai", "AI"], ["web", "웹"], ["game", "게임"]];
  function renderIndex(k) {
    const list = ordered.filter((p) => k === "all" || p.kind === k);
    fill("index", list.map((p) => h("li", null,
      h("button.row", { type: "button", "data-open": p.id, "data-peek": p.thumb ? asset(p.thumb) : null, "aria-haspopup": "dialog" },
        h("span.row-year", null, yearOf(p.period)),
        h("span.row-main", null, h("span.row-title", null, p.title), h("span.row-line", null, p.oneLine)),
        h("span.row-kind", null, KIND[p.kind]),
        h("span.row-result", null, p.result)))));
    document.querySelectorAll("[data-tab]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.tab === k)));
  }
  fill("tabs", TABS.map(([k, label]) => h("button.tab", { type: "button", "data-tab": k, "aria-pressed": String(k === "all"), onclick: () => renderIndex(k) }, label)));
  renderIndex("all");

  // 마우스를 올린 줄의 화면을 커서 옆에 띄운다 (마우스가 있는 기기만)
  const peek = $(".peek"), peekImg = peek?.querySelector("img"), index = slot("index");
  if (peek && index && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let raf = 0, x = 0, y = 0;
    index.addEventListener("pointermove", (e) => {
      const row = e.target.closest("[data-peek]");
      if (!row) { peek.classList.remove("on"); return; }
      if (peekImg.getAttribute("src") !== row.dataset.peek) peekImg.src = row.dataset.peek;
      x = e.clientX; y = e.clientY;
      peek.classList.add("on");
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; peek.style.transform = `translate(${Math.min(x + 28, innerWidth - 340)}px, ${y - 100}px)`; });
    });
    index.addEventListener("pointerleave", () => peek.classList.remove("on"));
  }

  // ---------- 이력 ----------
  const certLabel = (t) => (t.kind === "수상" ? "상장 보기" : "수료증 보기");
  fill("timeline", D.timeline.map((t, i) => {
    const id = t.projectId || (t.link === "#drilling" ? "drilling" : null);
    return h("li", null,
      h("span.tl-date", null, t.date),
      h("div.tl-body", null,
        h("p.tl-title", null,
          id && byId(id) ? h("button.link", { type: "button", "data-open": id, "aria-haspopup": "dialog" }, t.title) : t.title),
        h("p.tl-meta", null, [t.org, t.note].filter(Boolean).join(", ")),
        t.cert && h("button.link.tl-cert", { type: "button", "data-cert": i, "aria-haspopup": "dialog" }, certLabel(t))),
      h("span", { class: `tl-kind${t.kind === "수상" || t.kind === "출시" ? " tl-kind-strong" : ""}` }, t.kind));
  }));
  fill("education", D.education.map((e) => h("li", null,
    h("span.tl-date", null, e.period.match(/\d{4}\.\d{2}/)?.[0] || ""),
    h("div.tl-body", null, h("p.tl-title", null, e.school), h("p.tl-meta", null, e.period)))));

  // ---------- 기술 ----------
  const groups = [...D.skills].sort((a, b) => P.skillOrder.indexOf(a.group) - P.skillOrder.indexOf(b.group));
  fill("skills", groups.map((g) => h("section.sgroup", { "aria-label": g.group },
    h("h3", null, g.group),
    h("ul", null, g.items.map((s) => {
      const on = Math.max(1, Math.min(5, Math.round(s.pct / 20)));
      return h("li", null,
        h("span.s-name", null, s.name),
        h("span.s-dots", { role: "img", "aria-label": `5칸 중 ${on}칸, ${s.level}` }, Array.from({ length: 5 }, (_, i) => h("i", { class: i < on ? "on" : null }))),
        h("span.s-level", null, s.level),
        s.proof && h("span.s-proof", null, s.proof));
    })))));

  // ---------- 상세 서랍, 증서 서랍 ----------
  const dialog = $("#detail"), viewer = $("#viewer");
  const certsFor = (id) => D.timeline.map((t, i) => [i, t]).filter(([, t]) => t.projectId === id && t.cert);

  function detail(p) {
    const meta = [["기간", p.period], ["구성", p.team], ["역할", p.role], ["결과", p.result]].filter(([, v]) => v);
    const links = [];
    if (p.links?.demo) links.push(h("a.btn.btn-green", { href: p.links.demo, target: "_blank", rel: "noopener" }, p.demoLabel || "배포된 사이트 열기"));
    if (p.links?.repo) links.push(h("a.btn.btn-line", { href: p.links.repo, target: "_blank", rel: "noopener" }, "GitHub 저장소"));
    certsFor(p.id).forEach(([i, t]) => links.push(h("button.btn.btn-line", { type: "button", "data-cert": i, "aria-haspopup": "dialog" }, certLabel(t))));
    return [
      h("p.kicker", null, h("span", null, KIND[p.kind]), h("span", null, yearOf(p.period))),
      h("h2", { id: "detail-title" }, p.title),
      h("p.d-line", null, p.oneLine),
      links.length && h("p.d-actions", null, links),
      p.images?.length && h("div.d-gallery", null,
        h("div.d-shots", { tabindex: "0", "aria-label": "화면 모음, 옆으로 넘겨 보기" },
          p.images.map((im) => h("figure", null,
            h("img", { src: asset(im.src), width: im.w, height: im.h, alt: im.alt, loading: "lazy" }),
            h("figcaption", null, im.alt)))),
        p.images.length > 1 && h("p.d-pager", null,
          h("button.link", { type: "button", onclick: (e) => page(e, -1) }, "이전 화면"),
          h("span", null, `화면 ${p.images.length}장`),
          h("button.link", { type: "button", onclick: (e) => page(e, 1) }, "다음 화면"))),
      h("dl.d-meta", null, meta.map(([k, v]) => h("div", null, h("dt", null, k), h("dd", null, v)))),
      p.sections.map((s) => h("section.d-sec", null, h("h3", null, s.title), h("ul", null, s.items.map((t) => h("li", null, t))))),
      h("div.d-foot", null,
        h("h3", null, "사용 기술"),
        h("ul.d-stack", null, p.stack.map((t) => h("li", null, t))),
        p.codeNote && h("p.d-note", null, p.codeNote))
    ];
  }
  function page(e, dir) {
    const g = e.currentTarget.closest(".d-gallery").querySelector(".d-shots");
    g.scrollBy({ left: dir * g.clientWidth, behavior: reduce ? "auto" : "smooth" });
  }

  let opener = null;
  function open(id, from) {
    const p = byId(id);
    if (!p || !dialog) return;
    opener = from || null;
    // 닫을 때 브라우저가 '열기 직전 포커스'로 되돌리므로, 여는 요소에 먼저 포커스를 둔다.
    if (opener && document.activeElement !== opener) opener.focus({ preventScroll: true });
    fill("detail", detail(p));
    if (!dialog.open) dialog.showModal();
    dialog.querySelector(".drawer-body").scrollTop = 0;
    history.replaceState(null, "", `#${id}`);
  }
  function viewCert(i, from) {
    const t = D.timeline[i];
    if (!t?.cert || !viewer) return;
    const c = t.cert;
    if (from && document.activeElement !== from) from.focus({ preventScroll: true });
    fill("viewer", [
      h("p.kicker", null, h("span", null, t.kind), h("span", null, t.date)),
      h("h2", { id: "viewer-title" }, t.title),
      t.org && h("p.d-line", null, t.org),
      h("img.v-img", { src: asset(c.img), width: c.w, height: c.h, alt: `${t.title} ${t.kind === "수상" ? "상장" : "수료증"}` }),
      c.file && h("p.d-actions", null, h("a.btn.btn-line", { href: asset(c.file), download: "" }, "원본 PDF 내려받기"))
    ]);
    if (!viewer.open) viewer.showModal();
    viewer.querySelector(".drawer-body").scrollTop = 0;
  }
  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-open]");
    if (o) { e.preventDefault(); peek?.classList.remove("on"); open(o.dataset.open, o); return; }
    const c = e.target.closest("[data-cert]");
    if (c) { e.preventDefault(); viewCert(Number(c.dataset.cert), c); }
  });
  [dialog, viewer].forEach((d) => d?.addEventListener("click", (e) => { if (e.target === d || e.target.closest("[data-close]")) d.close(); }));
  dialog?.addEventListener("close", () => { history.replaceState(null, "", location.pathname); opener?.focus(); });
  const openFromHash = () => { const id = decodeURIComponent(location.hash.slice(1)); if (byId(id)) open(id); };
  openFromHash();
  addEventListener("hashchange", openFromHash);

  // 첫 화면(짙은 초록)을 지나면 위 막대를 밝은 색으로
  const top = $(".top"), hero = $("#hero"), contact = $("#contact");
  const tone = () => {
    const y = 40;
    const dark = hero.getBoundingClientRect().bottom > y || contact.getBoundingClientRect().top < y;
    top.classList.toggle("light", !dark);
  };
  addEventListener("scroll", tone, { passive: true });
  tone();
})();
