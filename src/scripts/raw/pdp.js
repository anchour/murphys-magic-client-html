window.addEventListener("load", () => {
  const sliders = document.querySelectorAll(".splide");

  sliders.forEach((s) => {
    new Splide(s, {
      type: "loop",
      rewind: true,
      autoplay: false,
      gap: "0.5rem",
      pagination: false,
      arrows: false,
      mediaQuery: "min",
      lazyLoad: "nearby",
      breakpoints: {
        1024: {
          destroy: true,
        },
      },
    }).mount(window.splide.Extensions);
  });
});
