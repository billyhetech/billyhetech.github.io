(function () {
  'use strict';

  var KEY = 'feather-site-lang';
  var root = document.documentElement;

  function apply(lang) {
    root.setAttribute('data-lang', lang);
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';

    var title = root.getAttribute('data-title-' + lang);
    if (title) { document.title = title; }

    var desc = root.getAttribute('data-desc-' + lang);
    var tag = document.querySelector('meta[name="description"]');
    if (desc && tag) { tag.setAttribute('content', desc); }

    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute(
        'aria-pressed',
        buttons[i].getAttribute('data-set-lang') === lang ? 'true' : 'false'
      );
    }
  }

  apply(root.getAttribute('data-lang') === 'en' ? 'en' : 'zh');

  document.addEventListener('click', function (event) {
    var button = event.target.closest ? event.target.closest('[data-set-lang]') : null;
    if (!button) { return; }
    var lang = button.getAttribute('data-set-lang');
    if (lang !== 'zh' && lang !== 'en') { return; }
    try { localStorage.setItem(KEY, lang); } catch (e) {  }
    apply(lang);
  });

  var topbar = document.querySelector('.topbar');
  if (topbar) {
    var sync = function () {
      topbar.classList.toggle('is-scrolled', window.scrollY > 4);
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }

  var years = document.querySelectorAll('.js-year');
  var now = String(new Date().getFullYear());
  for (var j = 0; j < years.length; j++) { years[j].textContent = now; }
}());
