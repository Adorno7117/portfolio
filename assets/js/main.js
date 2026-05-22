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

const renderTags = (items, container) => {
  container.replaceChildren(
    ...items.map((item) => createElement("span", "tag", item)),
  );
};

const renderProfile = ({ profile }) => {
  document.title = `Portfolio | ${profile.name}`;
  getElement("#profile-role").textContent = profile.role;
  getElement("#hero-title").textContent = profile.headline;
  getElement("#profile-summary").textContent = profile.summary;
  getElement("#profile-name").textContent = profile.name;
  getElement("#profile-location").textContent = profile.location;
  getElement("#profile-photo").src = profile.photo;
  getElement("#about-text").textContent = profile.about;
  getElement("#footer-name").textContent = profile.name;

  getElement("#profile-stats").replaceChildren(
    ...profile.stats.map((stat) => {
      const item = createElement("div");
      item.append(createElement("dt", "", stat.label), createElement("dd", "", stat.value));
      return item;
    }),
  );

  renderTags(profile.technologies, getElement("#tech-list"));

  getElement("#strengths-list").replaceChildren(
    ...profile.strengths.map((strength) => createElement("li", "", strength)),
  );
};

const renderProjects = ({ projects }) => {
  getElement("#projects-grid").replaceChildren(
    ...projects.map((project) => {
      const card = createElement("a", "project-card project-card-link");
      const image = createElement("div", "project-image", project.type);
      const title = createElement("h3", "", project.title);
      const description = createElement("p", "", project.description);
      const meta = createElement("div", "project-meta");
      const linkLabel = createElement("span", "text-link", "Ver detalhes do projeto");

      meta.replaceChildren(
        ...project.stack.map((item) => createElement("span", "meta-pill", item)),
      );

      card.href = `project.html?slug=${encodeURIComponent(project.slug)}`;
      card.setAttribute("aria-label", `Ver detalhes do projeto: ${project.title}`);

      card.append(image, title, description, meta, linkLabel);
      return card;
    }),
  );
};

const renderFreelances = ({ freelances }) => {
  getElement("#freelance-grid").replaceChildren(
    ...freelances.map((service) => {
      const card = createElement(
        service.url ? "a" : "article",
        service.url ? "service-card service-card-link" : "service-card",
      );
      const title = createElement("h3", "", service.title);
      const description = createElement("p", "", service.description);
      const detail = createElement("span", "service-price", service.detail);

      if (service.url) {
        card.href = service.url;
        card.target = "_blank";
        card.rel = "noreferrer";
        card.setAttribute("aria-label", `Acessar trabalho: ${service.title}`);
      }

      card.append(title, description, detail);
      return card;
    }),
  );
};

const renderTimeline = ({ timeline }) => {
  getElement("#timeline-list").replaceChildren(
    ...timeline.map((item) => {
      const card = createElement("article", "timeline-card");
      const period = createElement("span", "timeline-period", item.period);
      const content = createElement("div");

      content.append(createElement("h3", "", item.title), createElement("p", "", item.description));
      card.append(period, content);
      return card;
    }),
  );
};

const renderContacts = ({ contacts }) => {
  getElement("#contact-links").replaceChildren(
    ...contacts.map((contact, index) => {
      const link = createElement(
        "a",
        index === 0 ? "button button-primary" : "button button-secondary",
        contact.label,
      );
      link.href = contact.url;

      if (contact.url.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }

      return link;
    }),
  );
};

renderProfile(portfolioData);
renderProjects(portfolioData);
renderFreelances(portfolioData);
renderTimeline(portfolioData);
renderContacts(portfolioData);
