const selectors = {
  sliderThumbnails: '[data-slide-index]',
  splideSlide: '.splide__slide',
  videoWrapper: '.gallery-video',
  videoPlayButton: '.gallery-video__button',
};

const classes = {
  videoPlaying: 'gallery-video--playing',
};

function gallery() {
  const gallery = document.querySelector('.product-gallery .splide');
  const options = {
    type: 'loop',
    rewind: true,
    autoplay: false,
    pagination: false,
    gap: '0.5rem',
    padding: {
      left: 0,
      right: '10%',
    },
    arrows: false,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        padding: {
          left: 0,
          right: 0,
        },
      },
      1024: {
        destroy: true,
      },
    },
  };

  const slider = new Splide(gallery, options).mount(window.splide.Extensions);

  let videoWrappers = gallery.querySelectorAll(selectors.videoWrapper);
  let videos = gallery.querySelectorAll('video');
  let activeVideo = null;

  const pauseActiveVideo = () => {
    videos.forEach((video) => {
      video.pause();
    });
  };

  const playVideo = (index) => {
    activeVideo = videos[index];

    activeVideo.play();
    activeVideo.setAttribute('controls', true);
  };

  slider.on('move', () => {
    pauseActiveVideo();
  });

  videoWrappers.forEach((videoWrapper, index) => {
    const video = videoWrapper.querySelector('video');

    video.addEventListener('ended', () => {
      videoWrapper.classList.remove(classes.videoPlaying);

      video.removeAttribute('controls');

      // A slightly hacky way to reset the video so the poster image is shown again.
      video.src = video.src;
    });

    videoWrapper.querySelector(selectors.videoPlayButton).addEventListener('click', () => {
      pauseActiveVideo();
      playVideo(index);

      videoWrapper.classList.add(classes.videoPlaying);
    });
  });

  document.querySelectorAll(selectors.sliderThumbnails).forEach((slide) => {
    slide.addEventListener('click', (event) => {
      event.preventDefault();

      gallery
        .querySelectorAll(selectors.splideSlide)
        [slide.dataset.slideIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

function cardCarousels() {
  const options = {
    type: 'loop',
    rewind: true,
    autoplay: false,
    pagination: false,
    gap: '0.5rem',
    padding: {
      left: 0,
      right: '10%',
    },
    arrows: false,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        padding: {
          left: 0,
          right: 0,
        },
      },
      1024: {
        destroy: true,
      },
    },
  };

  const sliders = document.querySelectorAll('.card-carousel .splide');

  sliders.forEach((slider) => {
    new Splide(slider, options).mount(window.splide.Extensions);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  gallery();
  cardCarousels();
});
