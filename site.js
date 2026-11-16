// data.js 의 window.PORTFOLIO 를 읽어 화면을 그린다.
// 문자열은 전부 textContent 로 넣는다(innerHTML 미사용).
(() => {
  const D = window.PORTFOLIO;
  if (!D) return;

  const KIND = { game: "게임", ai: "AI", web: "웹" };

  // h("tag.class", {attr}, ...children)
  function h(spec, attrs, ...kids) {
    const [tag, ...cls] = spec.split(".");
    const el = document.createElement(tag || "div");
    if (cls.length) el.className = cls.join(" ");
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat()) {
      if (kid == null || kid === false) continue;
      el.append(kid instanceof Node ? kid : String(kid));
    }
    return el;
  }

  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), D);
  const slot = (name) => document.querySelector(`[data-slot="${name}"]`);
  const fill = (name, nodes) => {
    const s = slot(name);
    if (s) s.replaceChildren(...nodes.filter((n) => n != null && n !== false && n !== 0 && n !== ""));
  };
  const dlPairs = (pairs) => pairs.map(({ term, desc }) => h("div", null, h("dt", null, term), h("dd", null, desc)));

  // data-bind / data-href
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = get(el.dataset.bind);
    if (v) el.textContent = v; else el.hidden = true;
  });
  document.querySelectorAll("[data-href]").forEach((el) => {
    const v = get(el.dataset.href);
    if (v) el.href = v; else el.hidden = true;
  });
  document.querySelectorAll("[data-mail]").forEach((el) => {
    el.href = `mailto:${D.person.email}`;
    el.textContent = D.person.email;
  });

  // ---------- home ----------
  fill("intro", D.person.intro.map((t) => h("p", null, t)));

  const proof = slot("proof");
  if (proof) proof.replaceChildren(...D.proof.flatMap(({ term, desc }) => [h("dt", null, term), h("dd", null, desc)]));

  fill("facts", dlPairs(D.featured.facts));
  fill("systems", D.featured.systems.map((s) => h("li", null, h("h4", null, s.title), h("p", null, s.body))));

  fill("timeline", D.timeline.map((t) => {
    const title = t.projectId && t.projectId !== D.featured.id
      ? h("a", { href: `#${t.projectId}`, "data-open": t.projectId }, t.title)
      : t.projectId === D.featured.id
        ? h("a", { href: "#drilling" }, t.title)
        : t.title;
    const meta = [t.org, t.note].filter(Boolean).join(", ");
    return h("li", null,
      h("time", null, t.date),
      h("div", null, h("div.tl-title", null, title), meta && h("div.tl-meta", null, meta)));
  }));

  fill("education", D.education.map((e) => h("li", null, h("strong", null, e.school), h("span", null, e.period))));
  const skills = slot("skills");
  if (skills) skills.replaceChildren(...D.skills.map((g) => h("div", null, h("dt", null, g.group), ...g.items.map((i) => h("dd", null, i)))));

  // ---------- project rows ----------
  function row(p) {
    return h("li.row", { "data-kind": p.kind },
      h("button.row-btn", { type: "button", "data-open": p.id, "aria-haspopup": "dialog" },
        h("span.row-period", null, p.period),
        h("span", null, h("span.row-title", null, p.title), h("span.row-summary", null, p.summary)),
        h("span.row-side", null, h("span.kind", null, KIND[p.kind]), p.result && h("span.row-result", null, p.result))));
  }
  fill("home-projects", D.projects.filter((p) => p.home).map(row));

  // 대표작은 첫 페이지에 따로 있지만, 전체 목록에서도 맨 앞에 보여 준다.
  function featuredRow() {
    const f = D.featured;
    return h("li.row", { "data-kind": "game" },
      h("a.row-btn", { href: "index.html#drilling" },
        h("span.row-period", null, "2025.06 – 2026.11"),
        h("span", null, h("span.row-title", null, `${f.title} (대표작)`), h("span.row-summary", null, f.oneLine)),
        h("span.row-side", null, h("span.kind", null, KIND.game), h("span.row-result", null, "Steam 정식 출시"))));
  }

  const all = slot("all-projects");
  if (all) {
    const list = (kind) => D.projects.filter((p) => kind === "all" || p.kind === kind);
    const render = (kind) => all.replaceChildren(
      ...(kind === "all" || kind === "game" ? [featuredRow()] : []),
      ...list(kind).map(row));
    const opts = [["all", "전체"], ["game", "게임"], ["ai", "AI"], ["web", "웹"]];
    const buttons = opts.map(([k, label]) => {
      const n = list(k).length + (k === "all" || k === "game" ? 1 : 0);
      return h("button", {
        type: "button", "aria-pressed": String(k === "all"),
        onclick: (e) => {
          buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === e.currentTarget)));
          render(k);
        }
      }, `${label} ${n}`);
    });
    fill("filters", buttons);
    render("all");
  }

  // ---------- detail dialog ----------
  const dialog = document.getElementById("detail");
  let opener = null;

  function detail(p) {
    const meta = [
      { term: "기간", desc: p.period },
      { term: "구성", desc: p.team },
      { term: "결과", desc: p.result }
    ].filter((m) => m.desc);

    const links = [];
    if (p.links?.demo) links.push(h("a.btn.btn-ore", { href: p.links.demo, target: "_blank", rel: "noopener" }, "배포된 사이트 열기"));
    if (p.links?.repo) links.push(h("a.btn.btn-line", { href: p.links.repo, target: "_blank", rel: "noopener" }, "GitHub 저장소"));

    return [
      h("h2", { id: "detail-title" }, p.title),
      h("p.d-summary", null, p.summary),
      h("dl.d-meta", null, ...meta.flatMap((m) => [h("dt", null, m.term), h("dd", null, m.desc)])),
      p.highlights?.length && h("h3.d-sub", null, "한 일"),
      p.highlights?.length && h("ul.d-list", null, p.highlights.map((t) => h("li", null, t))),
      p.stack?.length && h("h3.d-sub", null, "기술"),
      p.stack?.length && h("ul.d-stack", null, p.stack.map((t) => h("li", null, t))),
      p.images?.length && h("h3.d-sub", null, "화면"),
      p.images?.length && h("div.d-shots", null, p.images.map((i) => h("img", { src: i.src, width: i.w, height: i.h, alt: i.alt, loading: "lazy" }))),
      (links.length || p.codeNote) && h("div.d-links", null,
        links.length && h("div.link-row", null, links),
        p.codeNote && h("p.note", null, p.codeNote))
    ];
  }

  function open(id, from) {
    const p = D.projects.find((x) => x.id === id);
    if (!p || !dialog) return;
    opener = from || null;
    fill("detail", detail(p));
    dialog.showModal();
    dialog.querySelector(".sheet-inner").scrollTop = 0;
    dialog.scrollTop = 0;
    history.replaceState(null, "", `#${id}`);
  }

  function close() {
    if (dialog?.open) dialog.close();
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open]");
    if (t) { e.preventDefault(); open(t.dataset.open, t); }
  });
  dialog?.addEventListener("click", (e) => {
    if (e.target === dialog || e.target.closest("[data-close]")) close();
  });
  dialog?.addEventListener("close", () => {
    history.replaceState(null, "", location.pathname);
    opener?.focus();
  });

  // 주소에 #프로젝트id 가 있으면 바로 연다(링크 공유용).
  const openFromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (D.projects.some((p) => p.id === id) && !dialog?.open) open(id);
  };
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
