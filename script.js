// Header shadow on scroll (overlay header waits until it has cleared the hero banner)
const header = document.getElementById('site-header');
if (header) {
  const isOverlay = header.classList.contains('header--overlay');
  const banner = document.querySelector('.cs-banner, .pd-banner');
  const threshold = isOverlay && banner ? banner.getBoundingClientRect().height - 40 : 4;
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > threshold);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Home hero: domain filter pills swap the description text, auto-rotating every 4s
const filterButtons = document.querySelectorAll('.filters__btn');
const filterDescription = document.getElementById('filter-description');

if (filterButtons.length && filterDescription) {
  const ROTATE_MS = 4000;
  let activeIndex = 0;
  let rotateTimer = null;

  const activate = (index) => {
    activeIndex = index;
    filterButtons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
    const key = filterButtons[index].dataset.filter;
    filterDescription.textContent = filterDescription.dataset[key];
  };

  const startRotation = () => {
    clearInterval(rotateTimer);
    rotateTimer = setInterval(() => {
      activate((activeIndex + 1) % filterButtons.length);
    }, ROTATE_MS);
  };

  filterButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      activate(index);
      startRotation();
    });
  });

  startRotation();
}

// Case Study hero: banner image + label auto-rotate every 4s
const bannerLayers = document.querySelectorAll('.cs-banner__bg');
const bannerButtons = document.querySelectorAll('.cs-banner__filters .filters__btn');

if (bannerLayers.length && bannerButtons.length) {
  const ROTATE_MS = 4000;
  let activeIndex = 0;
  let rotateTimer = null;

  const activate = (index) => {
    activeIndex = index;
    bannerLayers.forEach((layer, i) => layer.classList.toggle('is-active', i === index));
    bannerButtons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
  };

  const startRotation = () => {
    clearInterval(rotateTimer);
    rotateTimer = setInterval(() => {
      activate((activeIndex + 1) % bannerButtons.length);
    }, ROTATE_MS);
  };

  bannerButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      activate(index);
      startRotation();
    });
  });

  startRotation();
}

// Project detail pages / Creations: click any gallery, feature or poster
// image to view it enlarged
const lightboxTargets = document.querySelectorAll(
  '.pd-gallery img, .pd-feature-card__image, .creations-gallery img'
);
const posterFrames = document.querySelectorAll('.creations-poster__frame');

if (lightboxTargets.length || posterFrames.length) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img class="lightbox-overlay__img" alt="">';
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector('.lightbox-overlay__img');

  const open = (src, alt) => {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('is-open');
  };

  const close = () => {
    overlay.classList.remove('is-open');
  };

  lightboxTargets.forEach((img) => {
    img.classList.add('is-zoomable');
    img.addEventListener('click', () => open(img.currentSrc || img.src, img.alt));
  });

  // Posters have a hover overlay sitting on top of the image, so the click
  // target is the whole frame rather than the <img> itself. Touch devices
  // have no hover, so the description would never be reachable there —
  // first tap reveals it (same visual as desktop hover), second tap opens
  // the lightbox. Desktop keeps its original click-opens-lightbox behavior.
  const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  posterFrames.forEach((frame) => {
    const img = frame.querySelector('.creations-poster__img');
    if (!img) return;

    if (isTouchDevice) {
      frame.addEventListener('click', (e) => {
        if (!frame.classList.contains('is-active')) {
          e.preventDefault();
          posterFrames.forEach((f) => f.classList.remove('is-active'));
          frame.classList.add('is-active');
          return;
        }
        open(img.currentSrc || img.src, img.alt);
      });
    } else {
      frame.addEventListener('click', () => open(img.currentSrc || img.src, img.alt));
    }
  });

  if (isTouchDevice && posterFrames.length) {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.creations-poster__frame')) {
        posterFrames.forEach((f) => f.classList.remove('is-active'));
      }
    });
  }

  overlay.addEventListener('click', close);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}
