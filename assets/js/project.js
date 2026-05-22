const getElement = (selector) => document.querySelector(selector);

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
};

const setImageOrientation = (image, container) => {
  const applyOrientation = () => {
    const { naturalWidth, naturalHeight } = image;

    if (!naturalWidth || !naturalHeight) {
      return;
    }

    container.classList.remove("is-landscape", "is-portrait", "is-square");

    if (naturalWidth > naturalHeight * 1.12) {
      container.classList.add("is-landscape");
      return;
    }

    if (naturalHeight > naturalWidth * 1.12) {
      container.classList.add("is-portrait");
      return;
    }

    container.classList.add("is-square");
  };

  if (image.complete) {
    applyOrientation();
  } else {
    image.addEventListener("load", applyOrientation, { once: true });
  }
};

const getProjectSlug = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug");
};

const renderProjectCarousel = (project) => {
  const carousel = createElement("section", "project-carousel");
  const stage = createElement("div", "carousel-stage");
  const track = createElement("div", "carousel-track");
  const controls = createElement("div", "carousel-controls");
  const previousButton = createElement("button", "carousel-button", "<");
  const nextButton = createElement("button", "carousel-button", ">");
  const footer = createElement("div", "carousel-footer");
  const caption = createElement("p", "carousel-caption");
  const dots = createElement("div", "carousel-dots");
  let currentIndex = 0;

  const slides = project.images.map((image, index) => {
    const slide = createElement("figure", "carousel-slide");
    const img = createElement("img");

    img.src = image;
    img.alt = `${project.title} - imagem ${index + 1}`;
    img.loading = index === 0 ? "eager" : "lazy";
    setImageOrientation(img, slide);
    slide.setAttribute("aria-label", `Imagem ${index + 1} de ${project.images.length}`);
    slide.append(img);
    return slide;
  });

  const dotButtons = project.images.map((_, index) => {
    const button = createElement("button", "carousel-dot");
    button.type = "button";
    button.setAttribute("aria-label", `Ver imagem ${index + 1}`);
    button.addEventListener("click", () => showSlide(index));
    return button;
  });

  const showSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentIndex);
      slide.setAttribute("aria-hidden", slideIndex === currentIndex ? "false" : "true");
    });

    dotButtons.forEach((button, dotIndex) => {
      button.classList.toggle("is-active", dotIndex === currentIndex);
      button.setAttribute("aria-current", dotIndex === currentIndex ? "true" : "false");
    });

    caption.textContent = `Imagem ${currentIndex + 1} de ${slides.length}`;
  };

  previousButton.type = "button";
  nextButton.type = "button";
  previousButton.setAttribute("aria-label", "Imagem anterior");
  nextButton.setAttribute("aria-label", "Proxima imagem");
  previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

  carousel.tabIndex = 0;
  carousel.setAttribute("aria-label", "Carrossel de imagens do projeto");
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(currentIndex + 1);
    }
  });

  track.append(...slides);
  controls.append(previousButton, nextButton);
  dots.append(...dotButtons);
  footer.append(caption, dots);
  stage.append(track, controls);
  carousel.append(stage, footer);
  showSlide(0);

  return carousel;
};

const renderProjectNotFound = () => {
  getElement("#project-detail").replaceChildren(
    createElement("h1", "", "Projeto não encontrado"),
    createElement(
      "p",
      "hero-copy",
      "Volte para a página inicial e escolha um projeto disponível.",
    ),
  );
};

const renderProject = (project) => {
  document.title = `${project.title} | Portfólio`;
  getElement("#footer-name").textContent = portfolioData.profile.name;
  getElement("#project-type").textContent = project.type;
  getElement("#project-title").textContent = project.title;
  getElement("#project-description").textContent = project.description;
  getElement("#project-long-description").textContent = project.longDescription;

  getElement("#project-gallery").replaceChildren(renderProjectCarousel(project));

  getElement("#project-stack").replaceChildren(
    ...project.stack.map((item) => createElement("span", "tag", item)),
  );

  getElement("#project-links").replaceChildren(
    ...project.links.map((item) => {
      const link = createElement("a", "button button-secondary", item.label);
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      return link;
    }),
  );
};

const project = portfolioData.projects.find((item) => item.slug === getProjectSlug());

if (project) {
  renderProject(project);
} else {
  renderProjectNotFound();
}
