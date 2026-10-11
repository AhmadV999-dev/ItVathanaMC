// Made by VATHANA
// Official VATHANA website — © 2026 VATHANA

(function () {
  "use strict";
  if (window.__vathanaInit) {
    initTheme();
    return;
  }
  window.__vathanaInit = true;

  var THEME_KEY = "vathana-theme";
  var scrollY = 0;
  var activeOverlay = null;
  var toastTimer = 0;

  var SOCIAL = {
    tiktok: {
      name: "TikTok",
      username: "@vathana1200",
      url: "https://www.tiktok.com/@vathana1200",
      icon: "assets/icons/tiktok.png",
      photo: "assets/profile.jpg",
    },
    youtube: {
      name: "YouTube",
      username: "@Vathana120",
      url: "https://www.youtube.com/@Vathana120",
      icon: "assets/icons/youtube.png",
      photo: "assets/profile.jpg",
    },
    telegram: {
      name: "Telegram",
      username: "@Vathana0120",
      url: "",
      icon: "assets/icons/telegram.png",
      photo: "assets/profile.jpg",
    },
    discord: {
      name: "Discord",
      username: "@vathana120",
      url: "",
      icon: "assets/icons/discord.png",
      photo: "assets/profile.jpg",
    },
  };

  var GROUPS = {
    telegram: {
      name: "VATHANA Telegram",
      purpose: "Minecraft Bedrock and talking",
      url: "https://t.me/+yMYt3tWMw8Y5NDll",
      icon: "assets/icons/telegram.png",
    },
    discord: {
      name: "VATHANA Discord",
      purpose: "Minecraft Bedrock and talking",
      url: "https://discord.gg/sR6PFdVy9X",
      icon: "assets/icons/discord.png",
    },
  };

  var MODS = {
    "low-opacity": {
      kind: "mod",
      name: "Vathana Low Opacity V1.1",
      icon: "assets/mods/vathana-low-opacity.png",
      gameVersion: "1.26+",
      modVersion: "1.1",
      description:
        "Low opacity touch buttons for recording. Made by Vathana. This mod is BigFan only. It makes the controls less visible for recording video. The author spent 14 days learning and finding the UI controls. Working on Minecraft 1.26+.",
      notes:
        "For download join my BigFan telegram. Make sure in BigFan Mod has telegram button click to join the bigfun group.",
      features: [
        "Clean UI opacity: 1%, 5%, 10%, 20%, 30%, 50%",
        "HD UI opacity: 1%, 5%, 10%, 20%, 30%, 50%",
        "Built for recording with low-opacity touch buttons",
        "Minecraft Bedrock 1.26+",
      ],
      bigfan: true,
      bigfanUrl: "https://t.me/+3ppmpRpvBhgzMzM9",
      download: null,
    },
  };

  var PROJECTS = {
    "vathana-bot": {
      kind: "project",
      name: "Vathana Bot",
      icon: "assets/mods/vathana-bot.png",
      gameVersion: "Not provided",
      modVersion: "Not provided",
      status: "Testing / Writing",
      description:
        "This mod is made by Vathana alone. Status is in testing and writing. This mod adds Minecraft bot full control.",
      features: ["Minecraft bot full control"],
      bigfan: false,
      download: null,
    },
  };

  var USED = {
    deesse: {
      kind: "used",
      name: "Déesse UI Pack",
      icon: "assets/mods/deesse-ui-pack.jpg",
      gameVersion: "Not provided",
      modVersion: "Version not provided",
      type: "UI Pack",
      description: "Not provided",
      openUrl: "https://www.curseforge.com/minecraft-bedrock/texture-packs/deesse-ui-pack",
      openLabel: "Open on CurseForge",
      features: [],
      bigfan: false,
      download: null,
    },
    "low-opacity-used": {
      kind: "used",
      name: "Vathana Low Opacity V1.1",
      icon: "assets/mods/vathana-low-opacity.png",
      gameVersion: "1.26+",
      modVersion: "1.1",
      type: "Resource pack",
      description: "Low opacity touch buttons for recording. Made by Vathana.",
      features: [
        "Clean UI and HD UI opacity variants",
        "Used for recording with low-opacity controls",
      ],
      bigfan: true,
      bigfanUrl: "https://t.me/+3ppmpRpvBhgzMzM9",
      download: null,
    },
  };

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function theme() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  }

  function applyTheme(next) {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
    syncThemeToggle();
  }

  function syncThemeToggle() {
    var btn = $("#theme-toggle");
    if (!btn) return;
    var img = btn.querySelector("img");
    var isLight = theme() === "light";
    if (img) {
      img.src = isLight ? "assets/icons/sun.png" : "assets/icons/moon.png";
      img.alt = isLight ? "Light mode" : "Dark mode";
    }
    btn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    btn.title = isLight ? "Sun — tap for dark mode" : "Moon — tap for light mode";
  }

  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (e) {}
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    } else if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    syncThemeToggle();
  }

  function toast(msg) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 1600);
  }

  function lockScroll() {
    scrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";
  }

  function unlockScroll() {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.documentElement.style.overflow = "";
    window.scrollTo(0, scrollY);
  }

  function onOverlayTouchMove(e) {
    if (!activeOverlay) return;
    var modal = activeOverlay.querySelector(".modal");
    if (modal && modal.contains(e.target)) {
      if (modal.scrollHeight <= modal.clientHeight) e.preventDefault();
      return;
    }
    e.preventDefault();
  }

  function openOverlay(el) {
    if (!el) return;
    if (activeOverlay && activeOverlay !== el) closeOverlay(activeOverlay, true);
    el.classList.add("is-open");
    el.setAttribute("aria-hidden", "false");
    activeOverlay = el;
    lockScroll();
    document.addEventListener("touchmove", onOverlayTouchMove, { passive: false });
    var closeBtn = el.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeOverlay(el, keepLock) {
    var target = el || activeOverlay;
    if (!target) return;
    target.classList.remove("is-open");
    target.setAttribute("aria-hidden", "true");
    if (activeOverlay === target) activeOverlay = null;
    document.removeEventListener("touchmove", onOverlayTouchMove, { passive: false });
    if (!keepLock) unlockScroll();
  }

  function copyText(text) {
    if (!text) {
      toast("Not provided");
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          toast("Copied");
        },
        function () {
          fallbackCopy(text);
        }
      );
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      toast("Copied");
    } catch (e) {
      toast("Copy failed");
    }
    document.body.removeChild(ta);
  }

  function fillSocial(id) {
    var data = SOCIAL[id];
    var modal = $("#modal-social");
    if (!data || !modal) return;
    $("#social-icon", modal).src = data.icon;
    $("#social-icon", modal).alt = data.name + " logo";
    $("#social-name", modal).textContent = data.name;
    $("#social-user", modal).textContent = data.username;
    $("#social-photo", modal).src = data.photo;
    $("#social-photo", modal).alt = "VATHANA account picture";
    var go = $("#social-go", modal);
    var missing = $("#social-missing", modal);
    var copyBtn = $("#social-copy", modal);
    copyBtn.dataset.copy = data.username;
    if (data.url) {
      go.hidden = false;
      go.href = data.url;
      missing.hidden = true;
    } else {
      go.hidden = true;
      go.removeAttribute("href");
      missing.hidden = false;
    }
    go.style.display = go.hidden ? "none" : "";
    openOverlay(modal);
  }

  function fillGroup(id) {
    var data = GROUPS[id];
    var modal = $("#modal-group");
    if (!data || !modal) return;
    $("#group-icon", modal).src = data.icon;
    $("#group-icon", modal).alt = data.name + " icon";
    $("#group-hero-icon", modal).src = data.icon;
    $("#group-hero-icon", modal).alt = data.name;
    $("#group-name", modal).textContent = data.name;
    $("#group-purpose", modal).textContent = data.purpose;
    $("#group-copy", modal).dataset.copy = data.url;
    var join = $("#group-join", modal);
    join.href = data.url;
    openOverlay(modal);
  }

  function fillInfo(record) {
    var modal = $("#modal-info");
    if (!record || !modal) return;
    $("#info-icon", modal).src = record.icon;
    $("#info-icon", modal).alt = record.name + " icon";
    $("#info-name", modal).textContent = record.name;
    $("#info-game", modal).textContent = record.gameVersion || "Not provided";
    $("#info-version", modal).textContent = record.modVersion || "Not provided";
    $("#info-desc", modal).textContent = record.description || "Not provided";
    var notes = $("#info-notes", modal);
    if (record.notes) {
      notes.hidden = false;
      notes.textContent = record.notes;
    } else {
      notes.hidden = true;
    }
    var status = $("#info-status", modal);
    if (record.status) {
      status.hidden = false;
      status.textContent = record.status;
    } else {
      status.hidden = true;
    }
    var typeRow = $("#info-type-wrap", modal);
    if (record.type) {
      typeRow.hidden = false;
      $("#info-type", modal).textContent = record.type;
    } else {
      typeRow.hidden = true;
    }
    var list = $("#info-features", modal);
    list.innerHTML = "";
    if (record.features && record.features.length) {
      record.features.forEach(function (f) {
        var li = document.createElement("li");
        li.textContent = f;
        list.appendChild(li);
      });
      $("#info-features-wrap", modal).hidden = false;
    } else {
      $("#info-features-wrap", modal).hidden = true;
    }
    var big = $("#info-bigfan", modal);
    var bigLink = $("#info-bigfan-link", modal);
    if (record.bigfan) {
      big.hidden = false;
      if (record.bigfanUrl) {
        bigLink.hidden = false;
        bigLink.href = record.bigfanUrl;
        bigLink.textContent = "Join BigFan Telegram";
        $("#info-bigfan-missing", modal).hidden = true;
      } else {
        bigLink.hidden = true;
        $("#info-bigfan-missing", modal).hidden = false;
      }
    } else {
      big.hidden = true;
      $("#info-bigfan-missing", modal).hidden = true;
      bigLink.hidden = true;
    }
    var dl = $("#info-download", modal);
    if (record.download) {
      dl.hidden = false;
      dl.href = record.download;
      dl.setAttribute("download", record.downloadName || "");
    } else {
      dl.hidden = true;
      dl.removeAttribute("href");
    }
    var openBtn = $("#info-open", modal);
    if (record.openUrl) {
      openBtn.hidden = false;
      openBtn.href = record.openUrl;
      openBtn.textContent = record.openLabel || "Open";
    } else {
      openBtn.hidden = true;
      openBtn.removeAttribute("href");
    }
    ["#info-open", "#info-download", "#info-bigfan-link", "#info-bigfan-missing", "#info-notes", "#info-status"].forEach(function (sel) {
      var el = $(sel, modal);
      if (el) el.style.display = el.hidden ? "none" : "";
    });
    openOverlay(modal);
  }

  function fillNotice() {
    openOverlay($("#modal-notice"));
  }

  /* ---------- Theme song ---------- */
  var MUSIC_SRC = "assets/music/theme-song.mp3";
  var MUSIC_VOLUME = 0.25; // soft background level (0 - 1)
  var PAUSED_KEY = "vathana-music-off";
  var TIME_KEY = "vathana-music-time";
  var userOff = false; // true when the visitor pressed pause/stop themselves
  try {
    userOff = localStorage.getItem(PAUSED_KEY) === "1";
  } catch (e) {}

  // The song is only requested after the page's pictures have loaded,
  // so a 1 MB download never slows the images down.
  var audio = new Audio();
  var audioReady = false;
  audio.loop = true;
  audio.preload = "none";
  audio.volume = MUSIC_VOLUME;
  try {
    var savedTime = parseFloat(sessionStorage.getItem(TIME_KEY));
    if (savedTime > 0) {
      audio.addEventListener("loadedmetadata", function () {
        if (savedTime < audio.duration) audio.currentTime = savedTime;
      }, { once: true });
    }
  } catch (e) {}

  function fmt(sec) {
    if (!isFinite(sec) || sec < 0) sec = 0;
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function setOff(value) {
    userOff = value;
    try {
      localStorage.setItem(PAUSED_KEY, value ? "1" : "0");
    } catch (e) {}
  }

  function tryPlay() {
    if (!audioReady) {
      audioReady = true;
      audio.preload = "auto";
      audio.src = MUSIC_SRC;
    }
    var p = audio.play();
    if (p && p.catch) p.catch(function () {});
  }

  function syncPlayer() {
    var box = $("[data-player]");
    if (!box) return;
    var playing = !audio.paused;
    box.classList.toggle("is-playing", playing);
    var state = $("[data-player-state]", box);
    if (state) {
      state.textContent = playing
        ? "Now playing"
        : audio.currentTime > 0.5
          ? "Paused"
          : userOff
            ? "Stopped"
            : "Tap play";
    }
    var btn = $('[data-action="music-toggle"]', box);
    if (btn) btn.setAttribute("aria-label", (playing ? "Pause" : "Play") + " Theme song");
    var dur = audio.duration;
    var ratio = dur ? Math.min(1, audio.currentTime / dur) : 0;
    var fill = $("[data-player-fill]", box);
    if (fill) fill.style.width = ratio * 100 + "%";
    var bar = $(".bar", box);
    if (bar) bar.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
    var now = $("[data-player-time]", box);
    if (now) now.textContent = fmt(audio.currentTime);
    var total = $("[data-player-total]", box);
    if (total && dur) total.textContent = fmt(dur);
  }

  function musicToggle() {
    if (audio.paused) {
      setOff(false);
      tryPlay();
    } else {
      setOff(true);
      audio.pause();
    }
  }

  function musicStop() {
    setOff(true);
    audio.pause();
    audio.currentTime = 0;
    syncPlayer();
  }

  function musicSeek(e) {
    var bar = e.target.closest(".bar");
    if (!bar || !audio.duration) return;
    var rect = bar.getBoundingClientRect();
    var ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    syncPlayer();
  }

  // Keep the song only where the player is on screen (Home page).
  function musicRoute() {
    if (!$("[data-player]")) {
      if (!audio.paused) audio.pause();
      return;
    }
    syncPlayer();
    if (userOff || !audio.paused) return;
    var start = function () {
      setTimeout(function () {
        if ($("[data-player]") && !userOff && audio.paused) tryPlay();
      }, 1200);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
  }

  var lastSaved = 0;
  ["play", "pause", "ended", "loadedmetadata"].forEach(function (name) {
    audio.addEventListener(name, syncPlayer);
  });
  audio.addEventListener("timeupdate", function () {
    syncPlayer();
    var now = Date.now();
    if (now - lastSaved > 1000) {
      lastSaved = now;
      try {
        sessionStorage.setItem(TIME_KEY, String(audio.currentTime));
      } catch (e) {}
    }
  });

  // Browsers block sound until the visitor touches the page once.
  function unlockMusic(e) {
    if (e.target.closest && e.target.closest("[data-player]")) return;
    document.removeEventListener("click", unlockMusic, true);
    document.removeEventListener("keydown", unlockMusic, true);
    if ($("[data-player]") && !userOff && audio.paused) tryPlay();
  }
  document.addEventListener("click", unlockMusic, true);
  document.addEventListener("keydown", unlockMusic, true);

  // If a picture fails to load (slow or busy connection), try again a few times.
  document.addEventListener(
    "error",
    function (e) {
      var img = e.target;
      if (!img || img.tagName !== "IMG") return;
      var n = parseInt(img.getAttribute("data-retry") || "0", 10);
      if (n >= 3) return;
      img.setAttribute("data-retry", String(n + 1));
      var base = (img.getAttribute("src") || "").split("?")[0];
      if (!base) return;
      setTimeout(function () {
        img.src = base + "?r=" + Date.now();
      }, 500 * (n + 1));
    },
    true
  );

  function onClick(e) {
    var t = e.target.closest("[data-action]");
    if (!t) {
      if (e.target.classList && e.target.classList.contains("overlay")) {
        closeOverlay(e.target);
      }
      return;
    }
    var action = t.getAttribute("data-action");
    if (action === "theme") {
      applyTheme(theme() === "dark" ? "light" : "dark");
    } else if (action === "open-social") {
      fillSocial(t.getAttribute("data-id"));
    } else if (action === "open-group") {
      fillGroup(t.getAttribute("data-id"));
    } else if (action === "open-mod") {
      fillInfo(MODS[t.getAttribute("data-id")]);
    } else if (action === "open-project") {
      fillInfo(PROJECTS[t.getAttribute("data-id")]);
    } else if (action === "open-used") {
      fillInfo(USED[t.getAttribute("data-id")]);
    } else if (action === "open-facebook") {
      fillNotice();
    } else if (action === "close") {
      closeOverlay(t.closest(".overlay"));
    } else if (action === "copy") {
      copyText(t.getAttribute("data-copy"));
    } else if (action === "music-toggle") {
      musicToggle();
    } else if (action === "music-stop") {
      musicStop();
    } else if (action === "music-seek") {
      musicSeek(e);
    }
  }

  function onKey(e) {
    if (e.key === "Escape" && activeOverlay) {
      closeOverlay(activeOverlay);
    }
  }

  if (!window.__vathanaBound) {
    window.__vathanaBound = true;
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
  }
  initTheme();

  var path = (location.pathname || "/").replace(/\/+$/, "") || "/";
  document.querySelectorAll(".nav-link").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href) return;
    var isHelp = path.indexOf("help") !== -1;
    if (href.indexOf("help") !== -1) a.classList.toggle("is-active", isHelp);
    else a.classList.toggle("is-active", !isHelp);
  });
  window.vathanaBoot = function () {
    initTheme();
    musicRoute();
  };
  musicRoute();
})();

