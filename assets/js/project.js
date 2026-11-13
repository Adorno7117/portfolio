const getProjectSlug = () => new URLSearchParams(window.location.search).get("slug");

const renderProjectCarousel = (project) => {
  const carousel = createElement("section", "project-carousel");
  const stage = createElement("div", "carousel-stage");
  const track = createElement("div", "carousel-track");
  const controls = createElement("div", "carousel-controls");
  const previousButton = createElement("button", "carousel-button");
  const nextButton = createElement("button", "carousel-button");
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
    img.decoding = "async";
    img.draggable = false;
    slide.setAttribute("aria-label", `Imagem ${index + 1} de ${project.images.length}`);
    slide.append(img);
    return slide;
  });

  const showSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", slideIndex === currentIndex ? "false" : "true");
    });

    dotButtons.forEach((button, dotIndex) => {
      button.classList.toggle("is-active", dotIndex === currentIndex);
      button.setAttribute("aria-current", dotIndex === currentIndex ? "true" : "false");
    });

    caption.textContent = `Imagem ${currentIndex + 1} de ${slides.length}`;
  };

  const dotButtons = project.images.map((_, index) => {
    const button = createElement("button", "carousel-dot");
    button.type = "button";
    button.setAttribute("aria-label", `Ver imagem ${index + 1}`);
    button.addEventListener("click", () => showSlide(index));
    return button;
  });

  previousButton.type = "button";
  nextButton.type = "button";
  previousButton.append(createIcon("chevronLeft"));
  nextButton.append(createIcon("chevronRight"));
  previousButton.setAttribute("aria-label", "Imagem anterior");
  nextButton.setAttribute("aria-label", "Próxima imagem");
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

  let touchStartX = null;
  stage.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
    },
    { passive: true },
  );
  stage.addEventListener("touchend", (event) => {
    if (touchStartX === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;

    if (Math.abs(deltaX) > 40) {
      showSlide(currentIndex + (deltaX < 0 ? 1 : -1));
    }
  });

  track.append(...slides);
  stage.append(track);

  if (slides.length > 1) {
    controls.append(previousButton, nextButton);
    stage.append(controls);
    dots.append(...dotButtons);
  }

  footer.append(caption, dots);
  carousel.append(stage, footer);
  showSlide(0);

  return carousel;
};

const renderProjectNotFound = () => {
  const back = createElement("a", "button button-primary", "Voltar para a página inicial");
  back.href = "index.html#projetos";

  const wrapper = createElement("div", "not-found");
  wrapper.append(
    createElement("h1", "", "Projeto não encontrado"),
    createElement("p", "hero-copy", "Volte para a página inicial e escolha um projeto disponível."),
  );

  const actions = createElement("div", "hero-actions");
  actions.append(back);
  wrapper.append(actions);

  getElement("#project-detail").replaceChildren(wrapper);
};

const renderProject = (project) => {
  document.title = `${project.title} | Portfólio`;
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
      const link = createElement("a", "button button-primary", item.label);
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.append(createIcon("external"));
      return link;
    }),
  );
};

getElement("#footer-name").textContent = portfolioData.profile.name;

const currentProject = portfolioData.projects.find((item) => item.slug === getProjectSlug());

if (currentProject) {
  renderProject(currentProject);
} else {
  renderProjectNotFound();
}

initUI();
