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

  // ---------- 프로젝트 목록: data.js 프로젝트 + Drilling(대표작 정보로 만든 카드) ----------
  const F = D.featured;
  const fact = (term) => F.facts.find((f) => f.term === term)?.desc;
  const drilling = {
    id: "drilling", kind: "game", title: F.title,
    period: `${F.milestones[0].date} – ${F.milestones.at(-1).date}`,
    team: fact("팀"), role: fact("역할"),
    oneLine: F.oneLine,
    thumb: F.image.src, images: [F.image],
    sections: [
      { title: "맡은 시스템", items: F.systems.map((s) => `${s.title}: ${s.body}`) },
      { title: "출시", items: [...F.milestones.map((m) => `${m.date} ${m.label}`), fact("지원")].filter(Boolean) }
    ],
    result: fact("출시"),
    stack: (fact("엔진") || "").split(/,\s*/).filter(Boolean),
    links: { demo: D.person.steam }, demoLabel: "Steam 상점 페이지 열기"
  };
  const all = [...D.projects, drilling];
  const byId = (id) => all.find((p) => p.id === id);
  const projects = P.order.map(byId).filter(Boolean);

  // ---------- 바인딩 ----------
  document.querySelectorAll("[data-bind]").forEach((el) => { const v = pick(D, el.dataset.bind); if (v) el.textContent = v; });
  document.querySelectorAll("[data-prof]").forEach((el) => { const v = pick(P, el.dataset.prof); if (v) el.textContent = v; else el.hidden = true; });
  document.querySelectorAll("[data-href]").forEach((el) => { const v = pick(D, el.dataset.href); if (v) el.href = v; else el.hidden = true; });
  document.querySelectorAll("[data-mail-link]").forEach((el) => { el.href = `mailto:${D.person.email}`; });
  document.querySelectorAll("[data-mail-text]").forEach((el) => { el.textContent = D.person.email; });

  // ---------- 지금 하는 일 ----------
  const nowP = byId(P.now.id);
  fill("now", [
    h("p.now-label", null, P.now.label),
    h("p.now-text", null, P.now.text),
    h("div.actions", null,
      nowP?.links?.demo && h("a.btn-tint", { href: nowP.links.demo, target: "_blank", rel: "noopener" }, "사이트 열기"),
      nowP && h("button.btn-gray", { type: "button", "data-open": nowP.id, "aria-haspopup": "dialog" }, "자세히 보기"))
  ]);

  // ---------- 숫자 칸 → 누르면 거른 목록으로 ----------
  const count = (tag) => (tag === "all" ? projects.length : (P.tags[tag] || []).filter(byId).length);
  fill("tiles", P.tiles.map((t) => h("li", null,
    h("button", { type: "button", class: `tile${t.strong ? " tile-strong" : ""}`, "data-filter": t.tag },
      h("span.tile-label", null, t.label),
      h("span.tile-num", null, String(count(t.tag)), h("span.tile-unit", null, t.unit)),
      h("span.tile-note", null, t.note)))));

  // ---------- 일하는 방식 ----------
  fill("ways", D.strengths.map((s) => h("li.card", null,
    h("h3", null, s.title),
    h("p", null, s.line),
    h("ul.proof", null, s.proof.map((t) => h("li.badge", null, t))))));

  // ---------- 프로젝트 ----------
  const FILTERS = [
    ["all", "전체"], ["award", "수상"], ["live", "배포·운영"],
    ["ai", "AI"], ["web", "웹"], ["game", "게임"]
  ];
  const match = (p, f) => f === "all" || (P.tags[f] ? P.tags[f].includes(p.id) : p.kind === f);
  let current = "all";

  function card(p) {
    const [label, tone] = P.status[p.id] || [];
    return h("li", null,
      h("article.card.pcard", { "aria-labelledby": `p-${p.id}` },
        p.thumb ? h("div.pthumb", null, h("img", { src: asset(p.thumb), alt: "", loading: "lazy", decoding: "async" })) : // 화면이 없는 프로젝트는 쓴 기술을 대신 보인다
          h("div.pthumb.pthumb-empty", null, h("ul.d-stack", { "aria-label": "사용 기술" }, p.stack.map((t) => h("li.badge.badge-white", null, t)))),
        h("div.phead", null,
          h("h3", { id: `p-${p.id}` }, p.title),
          label && h("span", { class: `badge${tone === "done" ? " badge-done" : ""}` }, label)),
        h("p.pline", null, p.oneLine),
        h("div.psum", null,
          h("dl", null,
            h("div", null, h("dt", null, "분야"), h("dd", null, KIND[p.kind])),
            h("div", null, h("dt", null, "기간"), h("dd", null, p.period)),
            h("div", null, h("dt", null, "구성"), h("dd", null, p.team))),
          h("button.btn-tint", { type: "button", "data-open": p.id, "aria-haspopup": "dialog" }, "자세히 보기", h("span.visually-hidden", null, `: ${p.title}`)))));
  }
  function render(f) {
    current = f;
    const list = projects.filter((p) => match(p, f));
    fill("projects", list.map(card));
    const name = FILTERS.find(([k]) => k === f)?.[1] || "전체";
    slot("count").textContent = f === "all" ? `프로젝트 ${list.length}개` : `${name} ${list.length}개`;
    document.querySelectorAll("[data-chip]").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.chip === f)));
  }
  fill("chips", FILTERS.map(([k, label]) => h("button.chip", { type: "button", "data-chip": k, "aria-pressed": String(k === "all"), onclick: () => render(k) }, label)));
  render("all");

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-filter]");
    if (!t) return;
    render(t.dataset.filter);
    $("#projects").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    // 고른 칩에 포커스를 옮겨 키보드로도 이어서 고를 수 있게
    document.querySelector(`[data-chip="${t.dataset.filter}"]`)?.focus({ preventScroll: true });
  });

  // ---------- 이력 (표 → 모바일 카드) ----------
  const certLabel = (t) => (t.kind === "수상" ? "상장 보기" : "수료증 보기");
  fill("timeline", D.timeline.map((t, i) => {
    const id = t.projectId || (t.link === "#drilling" ? "drilling" : null);
    const title = id && byId(id)
      ? h("button.btn-text", { type: "button", "data-open": id, "aria-haspopup": "dialog" }, t.title)
      : h("span", null, t.title);
    return h("tr", null,
      h("td", { "data-label": "날짜", class: "num" }, t.date),
      h("td", { "data-label": "구분" }, h("span", { class: `badge${t.kind === "수상" || t.kind === "출시" ? " badge-done" : ""}` }, t.kind)),
      // 모바일 카드에서 칸 이름 옆 한 칸에 들어가도록 제목과 설명을 한 덩어리로 묶는다
      h("td", { "data-label": "내용" }, h("div", null, h("div.tl-title", null, title), h("div.tl-meta", null, [t.org, t.note].filter(Boolean).join(", ")))),
      h("td", { "data-label": "증서", class: t.cert ? null : "empty" },
        t.cert && h("button.btn-tint", { type: "button", "data-cert": i, "aria-haspopup": "dialog" }, certLabel(t))));
  }));
  fill("education", D.education.map((e) => h("li", null, h("strong", null, e.school), h("span", null, e.period))));

  // ---------- 기술 (막대 목록) ----------
  const groups = [...D.skills].sort((a, b) => P.skillOrder.indexOf(a.group) - P.skillOrder.indexOf(b.group));
  fill("skills", groups.map((g) => h("section.card", { "aria-label": g.group },
    h("h3", null, g.group),
    h("ul.bars", null, g.items.map((s) => h("li", null,
      h("span.bar-name", null, s.name),
      h("span.bar-track", { role: "img", "aria-label": `${s.level}, ${s.pct}%` }, h("span.bar-fill", { style: `width:${Math.max(4, Math.min(100, s.pct))}%` })),
      h("span.bar-level", null, s.level),
      s.proof && h("span.bar-proof", null, s.proof)))))));

  // ---------- 상세 창 (PC는 가운데, 모바일은 아래에서 올라오는 시트) ----------
  const dialog = $("#detail"), viewer = $("#viewer");
  const certsFor = (id) => D.timeline.map((t, i) => [i, t]).filter(([, t]) => t.projectId === id && t.cert);

  function detail(p) {
    const [label, tone] = P.status[p.id] || [];
    const meta = [["기간", p.period], ["구성", p.team], ["역할", p.role]].filter(([, v]) => v);
    // 채운 버튼은 화면마다 하나: 배포 사이트가 있으면 그것, 없으면 저장소
    const main = p.links?.demo ? [p.links.demo, p.demoLabel || "배포된 사이트 열기"] : p.links?.repo ? [p.links.repo, "GitHub 저장소 열기"] : null;
    const subs = [];
    if (p.links?.demo && p.links?.repo) subs.push(h("a.btn-tint", { href: p.links.repo, target: "_blank", rel: "noopener" }, "GitHub 저장소"));
    certsFor(p.id).forEach(([i, t]) => subs.push(h("button.btn-tint", { type: "button", "data-cert": i, "aria-haspopup": "dialog" }, certLabel(t))));
    return h("div.detail", null,
      h("div.d-head", null,
        h("span.badge", null, KIND[p.kind]),
        label && h("span", { class: `badge${tone === "done" ? " badge-done" : ""}` }, label)),
      h("h2", { id: "detail-title" }, p.title),
      h("p.d-lead", null, p.oneLine),
      p.result && h("div.d-result", null,
        h("p.d-label", null, "결과"),
        h("p.d-result-text", null, p.result),
        (main || subs.length) && h("div.actions", null,
          main && h("a.btn-primary", { href: main[0], target: "_blank", rel: "noopener" }, main[1]), subs)),
      !p.result && (main || subs.length) && h("div.actions", null, main && h("a.btn-primary", { href: main[0], target: "_blank", rel: "noopener" }, main[1]), subs),
      h("dl.d-meta", null, meta.map(([k, v]) => h("div", null, h("dt", null, k), h("dd", null, v)))),
      p.images?.length && h("div.d-gallery", null,
        h("div.d-shots", { tabindex: "0", "aria-label": "화면 모음, 옆으로 넘겨 보기" },
          p.images.map((im) => h("figure", null,
            h("img", { src: asset(im.src), width: im.w, height: im.h, alt: im.alt, loading: "lazy" }),
            h("figcaption", null, im.alt)))),
        p.images.length > 1 && h("div.d-pager", null,
          h("button.btn-gray", { type: "button", onclick: (e) => page(e, -1) }, "이전 화면"),
          h("span.d-count", null, `화면 ${p.images.length}장`),
          h("button.btn-gray", { type: "button", onclick: (e) => page(e, 1) }, "다음 화면"))),
      h("div.d-sections", null, p.sections.map((s) => h("section.d-sec", null, h("h3", null, s.title), h("ul", null, s.items.map((t) => h("li", null, t)))))),
      h("div.d-foot", null,
        h("h3.visually-hidden", null, "사용 기술"),
        h("ul.d-stack", { "aria-label": "사용 기술" }, p.stack.map((t) => h("li.badge", null, t))),
        p.codeNote && h("p.d-note", null, p.codeNote)));
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
    dialog.scrollTop = 0;
    history.replaceState(null, "", `#${id}`);
  }
  function viewCert(i, from) {
    const t = D.timeline[i];
    if (!t?.cert || !viewer) return;
    const c = t.cert;
    if (from && document.activeElement !== from) from.focus({ preventScroll: true });
    fill("viewer", [
      h("h2", { id: "viewer-title" }, t.title),
      h("p.d-lead", null, [t.org, t.date].filter(Boolean).join(", ")),
      h("img.v-img", { src: asset(c.img), width: c.w, height: c.h, alt: `${t.title} ${t.kind === "수상" ? "상장" : "수료증"}` }),
      c.file && h("p.v-foot", null, h("a.btn-text", { href: asset(c.file), download: "" }, "원본 PDF 내려받기"))
    ]);
    if (!viewer.open) viewer.showModal();
    viewer.scrollTop = 0;
  }
  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-open]");
    if (o) { e.preventDefault(); open(o.dataset.open, o); return; }
    const c = e.target.closest("[data-cert]");
    if (c) { e.preventDefault(); viewCert(Number(c.dataset.cert), c); }
  });
  [dialog, viewer].forEach((d) => d?.addEventListener("click", (e) => { if (e.target === d || e.target.closest("[data-close]")) d.close(); }));
  dialog?.addEventListener("close", () => { history.replaceState(null, "", location.pathname); opener?.focus(); });
  const openFromHash = () => { const id = decodeURIComponent(location.hash.slice(1)); if (byId(id)) open(id); };
  openFromHash();
  addEventListener("hashchange", openFromHash);

  // ---------- 메뉴: 지금 보고 있는 구간 표시 ----------
  const items = [...document.querySelectorAll(".menu-item")];
  const secs = items.map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
  function spy() {
    const y = innerHeight * 0.3;
    let cur = secs[0];
    for (const s of secs) if (s.getBoundingClientRect().top <= y) cur = s;
    // 맨 아래에 닿으면 마지막 구간
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) cur = secs.at(-1);
    items.forEach((a) => (a.getAttribute("href") === `#${cur.id}` ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current")));
  }
  let tick = false;
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(() => { tick = false; spy(); }); } }, { passive: true });
  spy();
})();
