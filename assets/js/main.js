const withReveal = (element, index = 0) => {
  element.classList.add("reveal");
  element.style.setProperty("--delay", `${Math.min(index, 4) * 80}ms`);
  return element;
};

const renderProfile = ({ profile }) => {
  document.title = `Portfólio | ${profile.name}`;
  getElement("#profile-role").textContent = profile.role;
  getElement("#hero-title").textContent = profile.headline;
  getElement("#profile-summary").textContent = profile.summary;
  getElement("#profile-name").textContent = profile.name;
  getElement("#profile-location").textContent = profile.location;
  getElement("#about-text").textContent = profile.about;
  getElement("#footer-name").textContent = profile.name;

  const photo = getElement("#profile-photo");
  if (!photo.getAttribute("src").endsWith(profile.photo)) {
    photo.src = profile.photo;
  }

  getElement("#profile-stats").replaceChildren(
    ...profile.stats.map((stat) => {
      const item = createElement("div");
      item.append(createElement("dt", "", stat.label), createElement("dd", "", stat.value));
      return item;
    }),
  );

  getElement("#tech-list").replaceChildren(
    ...profile.technologies.map((item) => createElement("span", "tag", item)),
  );

  getElement("#strengths-list").replaceChildren(
    ...profile.strengths.map((strength) => createElement("li", "", strength)),
  );
};

const renderProjects = ({ projects }) => {
  getElement("#projects-grid").replaceChildren(
    ...projects.map((project, index) => {
      const card = createElement("a", "project-card");
      const thumb = createElement("div", "project-thumb");
      const type = createElement("span", "project-type", project.type);
      const body = createElement("div", "project-body");
      const title = createElement("h3", "", project.title);
      const description = createElement("p", "", project.description);
      const meta = createElement("div", "project-meta");
      const linkLabel = createElement("span", "text-link", "Ver detalhes do projeto");

      if (project.images.length) {
        const image = createElement("img");
        image.src = project.images[0];
        image.alt = "";
        image.loading = "lazy";
        image.decoding = "async";
        markPortrait(image, thumb);
        thumb.append(image);
      }

      thumb.append(type);
      linkLabel.append(createIcon("arrowRight"));
      meta.replaceChildren(
        ...project.stack.map((item) => createElement("span", "meta-pill", item)),
      );

      card.href = `project.html?slug=${encodeURIComponent(project.slug)}`;
      card.setAttribute("aria-label", `Ver detalhes do projeto: ${project.title}`);

      body.append(title, description, meta, linkLabel);
      card.append(thumb, body);
      return withReveal(card, index % 2);
    }),
  );
};

const renderTimeline = ({ timeline }) => {
  getElement("#timeline-list").replaceChildren(
    ...timeline.map((item, index) => {
      const card = createElement("article", "timeline-card");
      const period = createElement("span", "timeline-period", item.period);
      const content = createElement("div");

      content.append(createElement("h3", "", item.title), createElement("p", "", item.description));
      card.append(period, content);
      return withReveal(card, index);
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
        link.rel = "noopener noreferrer";
        link.append(createIcon("external"));
      }

      return link;
    }),
  );
};

renderProfile(portfolioData);
renderProjects(portfolioData);
renderTimeline(portfolioData);
renderContacts(portfolioData);
initUI();
