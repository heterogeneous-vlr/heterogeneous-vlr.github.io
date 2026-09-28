document.addEventListener('DOMContentLoaded', function () {
  // Mobile navbar toggle.
  var burger = document.querySelector('.navbar-burger');
  var menu = document.getElementById('nav-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a.navbar-item').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Toast helper.
  var toast = document.getElementById('toast');
  var toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 1800);
  }

  // Links that are not released yet: data-placeholder and still href="#".
  document.querySelectorAll('a[data-placeholder][href="#"]').forEach(function (link) {
    link.setAttribute('title', 'Coming soon');
    link.addEventListener('click', function (event) {
      event.preventDefault();
      showToast('Coming soon');
    });
  });

  // Copy BibTeX.
  var copyButton = document.querySelector('.copy-bibtex');
  var bibtex = document.getElementById('bibtex-code');
  if (copyButton && bibtex) {
    var label = copyButton.querySelector('.copy-label');
    var resetTimer = null;
    var setLabel = function (text) {
      if (!label) return;
      label.textContent = text;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(function () { label.textContent = 'Copy'; }, 1500);
    };
    var report = function (ok) {
      setLabel(ok ? 'Copied!' : 'Copy failed');
      showToast(ok ? 'BibTeX copied' : 'Copy failed: please select the text and copy it manually');
    };
    copyButton.addEventListener('click', function () {
      var text = bibtex.textContent;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          function () { report(true); },
          function () { report(fallbackCopy(text)); });
      } else {
        report(fallbackCopy(text));
      }
    });
  }

  function fallbackCopy(text) {
    var previousFocus = document.activeElement;
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'absolute';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(area);
    if (previousFocus && previousFocus.focus) previousFocus.focus();
    return ok;
  }
});
