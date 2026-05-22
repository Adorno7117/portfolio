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

const getProjectSlug = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug");
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

  getElement("#project-gallery").replaceChildren(
    ...project.images.map((image, index) => {
      const figure = createElement("figure", "gallery-item");
      const img = createElement("img");
      const caption = createElement("figcaption", "", `Imagem ${index + 1}`);

      img.src = image;
      img.alt = `${project.title} - imagem ${index + 1}`;
      figure.append(img, caption);
      return figure;
    }),
  );

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
