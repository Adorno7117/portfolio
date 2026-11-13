const portfolioData = {
  profile: {
    name: "Gabriel Adorno Simoso",
    role: "Desenvolvedor Front-end e Back-end",
    location: "Mogi Mirim - Campinas, SP, Brasil",
    photo: "assets/img/image-perfil.webp",
    headline: "Olá, mundo! Bem-vindo(a)!",
    summary: "Venha conhecer um pouco da minha trajetória profissional.",
    about:
      "Sou estudante de Engenharia de Software na PUC Campinas, com formação técnica em Desenvolvimento de Sistemas e Informática para Internet. Tenho experiência no desenvolvimento de aplicações web, dashboards, sistemas de autenticação, automações e projetos voltados à experiência do usuário. Gosto de trabalhar na resolução de problemas que envolvam organização de dados, automação de processos e melhoria da experiência do usuário. Busco sempre desenvolver soluções funcionais, intuitivas e com boa estrutura técnica, valorizando tanto a parte visual quanto a performance e a usabilidade do sistema.",

    stats: [],
    technologies: [
      "Python",
      "Excel Avançado",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "Git",
      "IA",
      "Dashboard",
      "MySQL",
      "Firebase",
      "Oracle",
      "MongoDB",
    ],
    strengths: [
      "Código organizado, componentizado e fácil de manter.",
      "Boa comunicação, proatividade e aprendizagem rápida.",
      "Atenção a detalhes, responsividade e experiência do usuário.",
    ],
  },
  projects: [
    {
      slug: "dashboard-desigualdade-educacional",
      title: "Dashboard Desigualdade Educacional",
      type: "Projeto Acadêmico",
      description:
        "Painel para visualizar dados entre 2009 e 2019 sobre o ingresso de PP em relação a pessoas brancas.",
      longDescription:
        "Desigualdade Educacional no Brasil é um dashboard interativo desenvolvido em Python com Dash e Plotly, que analisa a evolução do acesso ao ensino superior por cor/raça entre 2009 e 2019. O projeto integra dados do Censo da Educação Superior (INEP), da PNADC (IBGE) e de relatórios do MEC sobre a Lei de Cotas, passando por um pipeline completo de limpeza, merge e transformação antes de alimentar 4 dashboards: visão geral executiva com KPIs, exploração interativa com filtros de região, cor/raça e tipo de escola, mapa geográfico do Brasil e análise específica do impacto da Lei de Cotas (2012) no perfil racial das universidades federais.",
      stack: ["Python", "pandas", "Dash"],
      images: [
        "assets/img/project-1/projeto-1-3.webp",
        "assets/img/project-1/projeto-1-1.webp",
        "assets/img/project-1/projeto-1-2.webp",
      ],
      links: [
        { label: "Ver repositório", url: "https://github.com/Adorno7117/DashBoard_Desigualdade_Educacional" },
      ],
    },
    {
      slug: "aplicativo-para-personais",
      title: "FitLink - Aplicativo para personais",
      type: "Projeto Acadêmico",
      description:
        "Aplicativo Android com o objetivo de facilitar ao aluno encontrar seu personal ideal e melhorar a experiência de ambos.",
      longDescription:
        "FitLink é um aplicativo mobile de gestão entre alunos e personal trainers, desenvolvido com arquitetura distribuída em três camadas: app mobile, servidor Java responsável pela validação de dados e uma API .NET integrada ao MongoDB. O sistema permite cadastro e vinculação entre alunos e personais e gerenciamento completo de treinos e exercícios, seguindo metodologia ágil com Scrum e sprints semanais organizadas via GitHub Projects.",
      stack: ["Kotlin", "Java", "MongoDB"],
      images: [
        "assets/img/project-2/projeto-2-1.webp",
        "assets/img/project-2/projeto-2-2.webp",
        "assets/img/project-2/projeto-2-3.webp",
      ],
      links: [
        { label: "Ver projeto", url: "https://github.com/vitormanzano/FitLink-PI4-Turma2-18" },
      ],
    },
    {
      slug: "super-id",
      title: "Super ID - Gerenciador de Senhas",
      type: "Projeto Acadêmico",
      description:
        "Aplicativo Android gerenciador de senhas, com uma API de login automático utilizando QR code.",
      longDescription:
        "SuperID é um aplicativo mobile de autenticação desenvolvido em Kotlin para Android. Possui uma API que gera um token de acesso para que o usuário consiga realizar login automático em sites parceiros, além de opções para guardar senhas de forma organizada e segura.",
      stack: ["Kotlin", "Firebase", "API"],
      images: [
        "assets/img/project-3/projeto-3-1.webp",
        "assets/img/project-3/projeto-3-2.webp",
        "assets/img/project-3/projeto-3-3.webp",
      ],
      links: [
        { label: "Ver repositório", url: "https://github.com/Sohra01/PI_III_Grupo2Turma4" },
      ],
    },
    {
      slug: "watchlist-acoes",
      title: "Watchlist de ações em tempo real",
      type: "Projeto Autoral",
      description:
        "Aplicação web para visualização de ações com preço atual, variação, baixa e alta.",
      longDescription:
        "Aplicação React para acompanhar uma watchlist de ativos em tempo real, usando uma camada de integração isolada para provedores de dados de mercado. Possui uma visão geral do dia, na qual é possível adicionar as ações de interesse, visualizar seu histórico de até 3 anos e ter uma visualização de tendência de acordo com o período selecionado.",
      stack: ["React", "TypeScript", "Finnhub REST"],
      images: [
        "assets/img/project-4/projeto-4-1.webp",
        "assets/img/project-4/projeto-4-2.webp",
        "assets/img/project-4/projeto-4-3.webp",
      ],
      links: [
        { label: "Ver repositório", url: "https://github.com/Adorno7117/watchlist-de-acoes" },
      ],
    },
  ],
  timeline: [
    {
      period: "2025 - Atualmente",
      title: "Jovem Aprendiz - Grupo Petrópolis",
      description:
        "Desenvolvimento de relatórios e atuação direta com o time comercial.",
    },
  ],
  contacts: [
    { label: "Email", url: "mailto:seuemail@exemplo.com" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gabriel-adorno-simoso-4a08482ba/",
    },
    { label: "GitHub", url: "https://github.com/Adorno7117" },
  ],
};
