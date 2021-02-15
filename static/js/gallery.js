'use strict';

(function () {
  var galleryItems = document.querySelectorAll('[data-gallery]');
  var galleryModal = document.getElementById('gallery-modal');
  var galleryModalImage = document.getElementById('gallery-modal-image');

  galleryModal.addEventListener('click', function () {
    galleryModal.classList.remove('gallery-modal-active');
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      galleryModal.classList.remove('gallery-modal-active');
    }
  });

  galleryItems.forEach(function (node) {
    node.addEventListener('click', function (event) {
      event.preventDefault();
      galleryModalImage.src = event.currentTarget.href;
      galleryModal.classList.add('gallery-modal-active');
    });
  });
})();
