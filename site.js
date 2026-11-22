// data.js 의 window.PORTFOLIO 를 읽어 화면을 그리고, 스크롤 연출(깊이계, 해상도 전환)을 붙인다.
// 문자열은 전부 textContent 로 넣는다(innerHTML 미사용).
(() => {
  const D = window.PORTFOLIO;
  if (!D) return;
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
  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), D);
  const $ = (sel) => document.querySelector(sel);
  const slot = (name) => $(`[data-slot="${name}"]`);
  const fill = (name, nodes) => { const s = slot(name); if (s) s.replaceChildren(...[nodes].flat(Infinity).filter((n) => n != null && n !== false && n !== "")); };

  // 도트 아이콘. 원본은 24×24이고, 픽셀이 고르게 보이도록 24의 정수배(24·48·72·96)로만 그린다.
  // 파일이 없으면 같은 크기의 광석 모양으로 대체한다.
  const ICON_KIND = { game: "k-game", ai: "k-ai", web: "k-web", tool: "k-tool" };
  function sprite(name, size = 24) {
    size = Math.max(24, Math.round(size / 24) * 24);
    const fallback = () => {
      const o = h("span.ore", { class: `ore${/gold|cert|launch|minigame|medal/.test(name || "") ? " gold" : ""}`, "aria-hidden": "true" });
      o.style.width = o.style.height = `${size}px`;
      return o;
    };
    if (!name) return fallback();
    const img = h("img.sprite", { src: `img/px/${name}.png?v=25`, width: size, height: size, alt: "", "aria-hidden": "true", decoding: "async" });
    img.addEventListener("error", () => img.replaceWith(fallback()), { once: true });
    return img;
  }
  function bgArt(el, file) {
    if (!el) return;
    const probe = new Image();
    probe.onload = () => { el.style.backgroundImage = `url("${file}")`; el.classList.add("has-art"); };
    probe.src = file;
  }

  // ---------- 바인딩 ----------
  document.querySelectorAll("[data-bind]").forEach((el) => { const v = get(el.dataset.bind); if (v) el.textContent = v; else el.hidden = true; });
  document.querySelectorAll("[data-href]").forEach((el) => { const v = get(el.dataset.href); if (v) el.href = v; else el.hidden = true; });
  document.querySelectorAll("[data-mail]").forEach((el) => { el.href = `mailto:${D.person.email}`; el.textContent = D.person.email; });
  document.querySelectorAll("[data-sprite]").forEach((el) => el.prepend(sprite(el.dataset.sprite, Number(el.dataset.size) || 24)));

  // ---------- 1. 동굴 ----------
  bgArt($(".cave-bg"), "img/px/cave.png");
  bgArt($(".moon"), "img/px/surface.png");

  fill("slots", D.slots.map((s) => h("li", null,
    h("div.px.slot", null, sprite(s.icon, 48), s.count && h("span.slot-count", null, s.count)),
    h("div", null, h("strong", null, s.label), h("span.sub", null, s.sub)))));

  const typed = $(".typed");
  if (typed) {
    const text = get(typed.dataset.type) || "";
    if (reduce) typed.textContent = text;
    else {
      let i = 0;
      const tick = () => { typed.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(tick, 55); };
      setTimeout(tick, 350);
    }
  }

  // 광물 입자: 동굴 안을 천천히 떠오른다 (도트처럼 칸 단위로 끊어서 움직임)
  document.querySelectorAll(".sparkles").forEach((box) => {
    const n = Number(box.dataset.count) || 22, left = Number(box.dataset.left) || 50;
    for (let i = 0; i < n; i++) {
      const s = h("i");
      s.style.left = `${left + Math.random() * (98 - left)}%`;
      s.style.top = `${20 + Math.random() * 78}%`;
      s.style.animationDuration = `${(6 + Math.random() * 7).toFixed(1)}s`;
      s.style.animationDelay = `${(-Math.random() * 12).toFixed(1)}s`;
      if (Math.random() < 0.35) s.className = "gold";
      if (Math.random() < 0.25) s.classList.add("big");
      box.append(s);
    }
  });

  // 랜턴: 첫 화면에서 마우스를 따라 동굴을 비춘다 (터치·움직임 줄이기 설정에서는 고정)
  const cave = $(".cave");
  if (cave && !reduce && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let tx = 0, ty = 0, raf = 0;
    cave.addEventListener("pointermove", (e) => {
      const r = cave.getBoundingClientRect();
      tx = e.clientX - r.left; ty = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        // 도트 느낌이 나도록 8px 단위로 끊어서 움직인다
        cave.style.setProperty("--mx", `${Math.round(tx / 8) * 8}px`);
        cave.style.setProperty("--my", `${Math.round(ty / 8) * 8}px`);
      });
    });
    cave.addEventListener("pointerleave", () => { cave.style.removeProperty("--mx"); cave.style.removeProperty("--my"); });
  }

  // ---------- 2. Drilling ----------
  const F = D.featured;
  fill("facts", F.facts.map((f) => h("div", null, sprite(f.icon, 24), h("dt", null, f.term), h("dd", null, f.desc))));
  if (slot("milestones")) {
    const toMonths = (d) => { const [y, m] = d.split(".").map(Number); return y * 12 + m; };
    const a = toMonths(F.milestones[0].date), b = toMonths(F.milestones.at(-1).date);
    fill("milestones", [
      h("div.xp-fill", { "aria-hidden": "true" }),
      F.milestones.map((m) => {
        const li = h("li", null, h("span.xp-node", { "aria-hidden": "true" }), h("time", null, m.date), h("span", null, m.label));
        li.style.left = `${((toMonths(m.date) - a) / (b - a)) * 100}%`;
        return li;
      })
    ]);
  }
  fill("systems", F.systems.map((s) => h("li.px", null, h("div.px.slot", null, sprite(s.icon, 72)), h("h4", null, s.title), h("p", null, s.body))));

  // 썸네일이 처음 보일 때 저해상도 도트에서 원본으로 "렌더링"되는 연출
  const resolveIO = "IntersectionObserver" in window && !reduce
    ? new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { resolveIO.unobserve(e.target); pixelIn(e.target); } }), { threshold: 0.35 })
    : null;
  function watchResolve(img) { if (resolveIO) resolveIO.observe(img); }

  // 큰 도트 아이콘(48px 이상)도 처음 보일 때 3칸 → 6칸 → 12칸 → 원본(24칸)으로 나타난다
  const iconIO = "IntersectionObserver" in window && !reduce
    ? new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { iconIO.unobserve(e.target); iconIn(e.target); } }), { threshold: 0.5 })
    : null;
  function watchIcons(root) {
    if (!iconIO) return;
    root.querySelectorAll("img.sprite").forEach((img) => { if (Number(img.getAttribute("width")) >= 48) iconIO.observe(img); });
  }
  function iconIn(img) {
    const run = () => {
      const S = Number(img.getAttribute("width")), N = img.naturalWidth || 24;
      const c = document.createElement("canvas");
      c.width = S; c.height = S; c.className = img.className; c.setAttribute("aria-hidden", "true");
      c.style.width = c.style.height = `${S}px`;
      const ctx = c.getContext("2d"), tmp = document.createElement("canvas"), t = tmp.getContext("2d");
      img.replaceWith(c);
      const steps = [3, 6, 12, N];
      let i = 0;
      const frame = () => {
        if (i >= steps.length) { c.replaceWith(img); return; }
        const n = steps[i++];
        tmp.width = tmp.height = n;
        t.clearRect(0, 0, n, n); t.imageSmoothingEnabled = true; t.drawImage(img, 0, 0, n, n);
        ctx.clearRect(0, 0, S, S); ctx.imageSmoothingEnabled = false; ctx.drawImage(tmp, 0, 0, S, S);
        setTimeout(frame, 80);
      };
      frame();
    };
    if (img.complete && img.naturalWidth) run(); else img.addEventListener("load", run, { once: true });
  }
  function pixelIn(img) {
    const run = () => {
      const box = img.parentElement.getBoundingClientRect();
      if (!box.width) return;
      const canvas = h("canvas", { "aria-hidden": "true" });
      const ctx = canvas.getContext("2d");
      const W = Math.round(box.width), H = Math.round(box.height);
      canvas.width = W; canvas.height = H;
      img.after(canvas);
      img.style.visibility = "hidden";
      // object-fit: cover; object-position: top 과 같은 잘라내기
      const s = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const sw = W / s, sh = H / s, sx = (img.naturalWidth - sw) / 2;
      const steps = [32, 18, 10, 5, 2];
      let i = 0;
      const tmp = document.createElement("canvas"), tctx = tmp.getContext("2d");
      const frame = () => {
        if (i >= steps.length) { img.style.visibility = ""; canvas.remove(); return; }
        const block = steps[i++];
        tmp.width = Math.max(1, Math.round(W / block)); tmp.height = Math.max(1, Math.round(H / block));
        tctx.imageSmoothingEnabled = true;
        tctx.drawImage(img, sx, 0, sw, sh, 0, 0, tmp.width, tmp.height);
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, W, H);
        ctx.drawImage(tmp, 0, 0, W, H);
        setTimeout(frame, 90);
      };
      frame();
    };
    if (img.complete && img.naturalWidth) run(); else img.addEventListener("load", run, { once: true });
  }

  // ---------- 3. 프로젝트 카드 ----------
  function card(p) {
    const thumb = p.thumb
      ? h("div.thumb", null, h("img", { src: p.thumb, alt: "", loading: "lazy", decoding: "async", "data-resolve": "" }))
      : h("div.thumb.icon-only", null, sprite(p.icon, 96));
    thumb.prepend(h("span.px.kind-tag", null, sprite(ICON_KIND[p.kind], 24), KIND[p.kind]));
    return h("li", { "data-kind": p.kind },
      h("button.px.card", { type: "button", class: `px card k-${p.kind}`, "data-open": p.id, "aria-haspopup": "dialog" },
        thumb,
        h("div.card-body", null,
          h("h3", null, p.title),
          h("p.line", null, p.oneLine),
          h("p.meta", null, h("span", null, h("b", null, "기간"), p.period), h("span", null, h("b", null, "구성"), p.team)),
          h("ul.chips", null, p.chips.map((c) => h("li", null, c)))),
        h("span.more", null, sprite("n-magnify", 24), "자세히 보기")));
  }
  const cards = slot("projects");
  if (cards) {
    const render = (kind) => {
      cards.replaceChildren(...D.projects.filter((p) => kind === "all" || p.kind === kind).map(card));
      cards.querySelectorAll("img[data-resolve]").forEach(watchResolve);
      watchIcons(cards);
    };
    const opts = [["all", "전체"], ["game", "게임"], ["ai", "AI"], ["web", "웹"]];
    const buttons = opts.map(([k, label]) => {
      const n = k === "all" ? D.projects.length : D.projects.filter((p) => p.kind === k).length;
      return h("button.px", { type: "button", class: "px", "aria-pressed": String(k === "all"),
        onclick: (e) => { buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === e.currentTarget))); render(k); } },
        sprite(k === "all" ? "ore-cyan" : ICON_KIND[k], 24), `${label} ${n}`);
    });
    fill("filters", buttons);
    render("all");
  }

  // ---------- 4. 지상 ----------
  fill("strengths", D.strengths.map((s) => h("li.px.rv", null, sprite(s.icon, 48), h("h3", null, s.title), h("p", null, s.line), h("ul.proof", null, s.proof.map((t) => h("li", null, t))))));

  fill("timeline", D.timeline.map((t) => {
    let title = t.title;
    if (t.projectId) title = h("button", { type: "button", "data-open": t.projectId, "aria-haspopup": "dialog" }, t.title);
    else if (t.link) title = h("a", { href: t.link }, t.title);
    return h("li.px.rv", null,
      h("time", null, t.date),
      h("span.tl-icon", null, sprite(t.icon, 48)),
      h("div", null, h("div.tl-title", null, title), h("div.tl-meta", null, [t.org, t.note].filter(Boolean).join(", "),
        t.cert && h("a.tl-cert", { href: t.cert, target: "_blank", rel: "noopener" }, t.kind === "수상" ? "상장 보기" : "수료증 보기"))),
      h("span.kbadge", { class: `kbadge kc-${t.kind}` }, t.kind));
  }));
  fill("education", D.education.map((e) => h("li.px.rv", null, sprite(e.icon, 48), h("div", null, h("strong", null, e.school), h("span", null, e.period)))));

  fill("skills", D.skills.map((g) => h("section.px.rv.sgroup", { class: `px rv sgroup k-${g.kind}`, "aria-label": g.group },
    h("h3", null, sprite(ICON_KIND[g.kind], 24), g.group),
    g.items.map((s) => {
      const on = Math.max(1, Math.min(5, Math.round(s.pct / 20)));
      return h("div.srow", null,
        h("span.sname", null, s.name),
        h("span.gauge", { role: "img", "aria-label": `5칸 중 ${on}칸` }, Array.from({ length: 5 }, (_, i) => h("i", { class: i < on ? "on" : null }))),
        h("span.slvl", null, s.level),
        s.proof && h("span.sproof", null, s.proof));
    }))));

  // 해상도 전환: .rv 와 .xp 는 보이면 .in
  const reveal = (el) => el.classList.add("in");
  const rvIO = "IntersectionObserver" in window && !reduce
    ? new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { rvIO.unobserve(e.target); reveal(e.target); } }), { threshold: 0.25, rootMargin: "0px 0px -8% 0px" })
    : null;
  document.querySelectorAll(".rv, .xp").forEach((el) => {
    if (!rvIO) return reveal(el);
    el.classList.add("anim");
    rvIO.observe(el);
  });

  // 카드 밖의 큰 아이콘(첫 화면 HUD, 담당한 시스템, 강점, 경력, 제목)
  [".cave", ".mine", "#about", "#skills", "#contact"].forEach((sel) => { const r = $(sel); if (r) watchIcons(r); });

  // ---------- 디더링 띠: 위 색 → 아래 색 (data-from / data-to) ----------
  // 동굴 → 지상(밝은 화면), 지상 → 밤하늘(마지막 달 그림) 두 군데에 쓴다.
  const dithers = [...document.querySelectorAll(".dither")];
  function drawDither() {
    const bayer = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
    for (const c of dithers) {
      const cell = 6, rows = 12;
      const cols = Math.ceil(c.clientWidth / cell);
      if (!cols) continue;
      c.width = cols; c.height = rows;
      const ctx = c.getContext("2d");
      ctx.fillStyle = c.dataset.to || "#f3f5f7"; ctx.fillRect(0, 0, cols, rows);
      ctx.fillStyle = c.dataset.from || "#181c22";
      for (let y = 0; y < rows; y++) {
        const amount = 1 - (y + 0.5) / rows;
        for (let x = 0; x < cols; x++) if (bayer[y % 4][x % 4] / 16 < amount) ctx.fillRect(x, y, 1, 1);
      }
    }
  }
  drawDither();
  addEventListener("resize", () => { clearTimeout(drawDither.t); drawDither.t = setTimeout(drawDither, 150); });

  // ---------- 사이드 깊이계: 구간 표식(누르면 이동) + 스크롤을 따라 내려가는 드릴 ----------
  const trail = $(".depth-trail"), drill = $(".depth-drill"), num = $(".depth-num"), zoneLabel = $(".depth-zone"), shaft = $(".depth-shaft");
  const zones = [...document.querySelectorAll("[data-zone]")];
  const marks = $(".depth-marks");
  if (marks) {
    const seen = new Set();
    zones.forEach((z) => {
      if (!z.id || seen.has(z.dataset.zone)) return;
      seen.add(z.dataset.zone);
      marks.append(h("li", { "data-for": z.id },
        h("a.px", { class: "px", href: `#${z.id}`, "aria-label": `${z.dataset.zone}로 이동` }, sprite(z.dataset.icon || "ore-cyan", 24)),
        h("span.depth-tip", { "aria-hidden": "true" }, z.dataset.zone)));
    });
  }
  function placeMarks() {
    if (!marks || !shaft) return;
    const max = document.documentElement.scrollHeight - innerHeight, H = shaft.clientHeight;
    marks.querySelectorAll("li").forEach((li) => {
      const z = document.getElementById(li.dataset.for);
      const t = max > 0 ? Math.min(1, Math.max(0, (z.offsetTop - 60) / max)) : 0;
      li.style.top = `${Math.round(t * H)}px`;
    });
  }
  placeMarks();
  addEventListener("load", placeMarks);
  let ticking = false;
  function onScroll() {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    const t = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    if (shaft) {
      const H = shaft.clientHeight;
      trail.style.height = `${Math.round(t * H)}px`;
      drill.style.transform = `translateY(${Math.round(t * H)}px)`;
      num.textContent = Math.round(t * 1200);
    }
    const bg = $(".cave-bg");
    if (bg && !reduce && scrollY < innerHeight * 1.2) bg.style.transform = `translate3d(0, ${Math.round(scrollY * 0.35)}px, 0)`;
    const probe = 70;
    let current = zones[0];
    for (const z of zones) if (z.getBoundingClientRect().top <= probe) current = z;
    if (zoneLabel && current) zoneLabel.textContent = current.dataset.zone;
    marks?.querySelectorAll("li").forEach((li) => li.classList.toggle("on", current && (li.dataset.for === current.id || document.getElementById(li.dataset.for)?.dataset.zone === current.dataset.zone)));
    const light = current && current.classList.contains("lv-smooth");
    document.body.dataset.tone = light ? "light" : "dark";
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener("resize", () => { placeMarks(); onScroll(); });
  onScroll();

  // ---------- 상세 창 ----------
  const dialog = $("#detail");
  let opener = null;

  function detail(p) {
    const meta = [["기간", p.period], ["구성", p.team], ["역할", p.role], ["결과", p.result]].filter(([, v]) => v);
    const links = [];
    if (p.links?.demo) links.push(h("a.btn.btn-ink", { href: p.links.demo, target: "_blank", rel: "noopener" }, "배포된 사이트 열기"));
    if (p.links?.repo) links.push(h("a.btn.btn-line", { href: p.links.repo, target: "_blank", rel: "noopener" }, "GitHub 저장소"));
    return h("div", { class: `k-${p.kind}` },
      h("div.d-head", null, sprite(p.icon, 48), h("div", null, h("span.d-kind", null, sprite(ICON_KIND[p.kind], 24), KIND[p.kind]), h("h2", { id: "detail-title" }, p.title))),
      h("p.d-line", null, p.oneLine),
      h("dl.d-meta", null, meta.map(([k, v]) => h("div", null, h("dt", null, k), h("dd", null, v)))),
      p.images?.length && h("div.d-gallery", { tabindex: "0", "aria-label": "화면 모음, 옆으로 넘겨 보기" },
        p.images.map((im) => h("figure", null, h("img", { src: im.src, width: im.w, height: im.h, alt: im.alt, loading: "lazy" }), h("figcaption", null, im.alt)))),
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
    const p = D.projects.find((x) => x.id === id);
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
    if (D.projects.some((p) => p.id === id)) open(id);
  };
  openFromHash();
  addEventListener("hashchange", openFromHash);
})();
