/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./static/resources/scripts/product.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
var selectors = {
  sliderThumbnails: '[data-slide-index]',
  splideSlide: '.splide__slide',
  videoWrapper: '.gallery-video',
  videoPlayButton: '.gallery-video__button'
};
var classes = {
  videoPlaying: 'gallery-video--playing'
};
function gallery() {
  var gallery = document.querySelector('.product-gallery .splide');
  var options = {
    type: 'loop',
    rewind: true,
    autoplay: false,
    pagination: false,
    gap: '0.5rem',
    padding: {
      left: 0,
      right: '10%'
    },
    arrows: false,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        padding: {
          left: 0,
          right: 0
        }
      },
      1024: {
        destroy: true
      }
    }
  };
  var slider = new Splide(gallery, options).mount(window.splide.Extensions);
  var videoWrappers = gallery.querySelectorAll(selectors.videoWrapper);
  var videos = gallery.querySelectorAll('video');
  var activeVideo = null;
  var pauseActiveVideo = function pauseActiveVideo() {
    videos.forEach(function (video) {
      video.pause();
    });
  };
  var playVideo = function playVideo(index) {
    activeVideo = videos[index];
    activeVideo.play();
    activeVideo.setAttribute('controls', true);
  };
  slider.on('move', function () {
    pauseActiveVideo();
  });
  videoWrappers.forEach(function (videoWrapper, index) {
    var video = videoWrapper.querySelector('video');
    video.addEventListener('ended', function () {
      videoWrapper.classList.remove(classes.videoPlaying);
      video.removeAttribute('controls');

      // A slightly hacky way to reset the video so the poster image is shown again.
      video.src = video.src;
    });
    videoWrapper.querySelector(selectors.videoPlayButton).addEventListener('click', function () {
      pauseActiveVideo();
      playVideo(index);
      videoWrapper.classList.add(classes.videoPlaying);
    });
  });
  document.querySelectorAll(selectors.sliderThumbnails).forEach(function (slide) {
    slide.addEventListener('click', function (event) {
      event.preventDefault();
      gallery.querySelectorAll(selectors.splideSlide)[slide.dataset.slideIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  });
}
document.addEventListener('DOMContentLoaded', function () {
  gallery();
});
/******/ })()
;