const portfolioData = {
  profile: {
    name: "Gabriel Adorno Simoso",
    role: "Desenvolvedor Front-end e Back-end",
    location: "Mogi Mirim - Campinas, SP, Brasil",
    photo: "assets/img/image-perfil.png",
    headline: "Olá mundo! Bem vindo(a)!",
    summary: "Venha conhecer um pouco da minha trajetória profissional.",
    about:
      "Sou estudante de Engenharia de Software na PUC Campinas, com formação técnica em Desenvolvimento de Sistemas e Informática para Internet. Tenho experiência no desenvolvimento de aplicações web, dashboards, sistemas de autenticação, automações e projetos voltados à experiência do usuário. Gosto de trabalhar na resolução de problemas que envolvam organização de dados, automação de processos e melhoria da experiência do usuário. Busco sempre desenvolver soluções funcionais, intuitivas e com boa estrutura técnica, valorizando tanto a parte visual quanto a performance e a usabilidade do sistema.",

    stats: [
      { label: "Projetos", value: "8+" },
      { label: "Stacks", value: "6" },
      { label: "Foco", value: "Dados" },
    ],
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
      title: "Dashboar Desigualdade Educacional",
      type: "Projeto Acadêmico",
      description:
        "Painel para visualizar dados entre 2009 e 2019 sobre o ingresso de PP em relação a pessoas brancas.",
      longDescription:
        "Desigualdade Educacional no Brasil é um dashboard interativo desenvolvido em Python com Dash e Plotly, que analisa a evolução do acesso ao ensino superior por cor/raça entre 2009 e 2019. O projeto integra dados do Censo da Educação Superior (INEP), PNADC (IBGE) e relatórios do MEC sobre a Lei de Cotas, passando por um pipeline completo de limpeza, merge e transformação antes de alimentar 4 dashboards: visão geral executiva com KPIs, exploração interativa com filtros de região, cor/raça e tipo de escola, mapa geográfico do Brasil e análise específica do impacto da Lei de Cotas (2012) no perfil racial das universidades federais.",
      stack: ["Python", "pandas", "dash"],
      images: [
        "assets/img/project-1/projeto-1-3.png",
        "assets/img/project-1/projeto-1-1.png",
        "assets/img/project-1/projeto-1-2.png",
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
        "Aplicativo android com o objetivo de facilitar ao aluno a encontrar seu personal ideal e melhorar a expericiência de ambos.",
      longDescription:
        "FitLink é um aplicativo mobile de gestão entre alunos e personal trainers, desenvolvido com arquitetura distribuída em três camadas: app mobile, servidor Java responsável pela validação de dados e uma API .NET integrada ao MongoDB. O sistema permite cadastro e vinculação entre alunos e personais, gerenciamento completo de treinos e exercícios, seguindo metodologia ágil com Scrum e sprints semanais organizados via GitHub Projects.",
      stack: ["Kotlin", "Java", "MongoDB"],
      images: [
        "assets/img/project-2/projeto-2-1.png",
        "assets/img/project-2/projeto-2-2.png",
        "assets/img/project-2/projeto-2-3.png",
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
        "Aplicativo android gerenciador de senhas, com uma API de login automático ultilizando QR code.",
      longDescription:
        "SuperID é um aplicativo mobile de autenticação desenvolvido em Kotlin para Android, possui uma API que gera um token de acesso para sites parceiros para o usuário conseguir realizar um login autamático em sites parceiros. Além de possuir opções para guardar senhas de forma organizada e segura.",
      stack: ["Kotlin", "firebase", "API"],
      images: [
        "assets/img/project-3/projeto-3-1.png",
        "assets/img/project-3/projeto-3-2.png",
        "assets/img/project-3/projeto-3-3.png",
      ],
      links: [
        { label: "Ver repositório", url: "https://github.com/Sohra01/PI_III_Grupo2Turma4" },
      ],
    },
  ],
  freelances: [
    {
      title: "Site para Jessica Bordignon",
      description:
        "Criação de uma landing page profissional e divulgação de parcerias.",
      detail: "Ideal para presença digital",
      url: "https://jbesteticaavancada.com.br",
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
