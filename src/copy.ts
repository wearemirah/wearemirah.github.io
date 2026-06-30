export interface Service {
  n: string;
  tag: string;
  title: string;
  body: string;
  bullets: string[];
}

export interface Step {
  n: string;
  t: string;
  d: string;
}

export interface Lang {
  nav: { about: string; services: string; approach: string; contact: string };
  cta: string;
  eyebrow: string;
  h1a: string;
  h1b: string;
  heroP: string;
  heroMeta: string[];
  aboutKicker: string;
  aboutH: string;
  aboutP: string;
  aboutBullets: string[];
  foundersKicker: string;
  servicesKicker: string;
  servicesH: string;
  services: Service[];
  approachKicker: string;
  approachH: string;
  approachP: string;
  steps: Step[];
  contactKicker: string;
  contactH: string;
  contactP: string;
  contactCTA: string;
  contactAlt: string;
  footerTagline: string;
  footerRights: string;
}

export type LangKey = 'pt' | 'en';

export const COPY: Record<LangKey, Lang> = {
  pt: {
    nav: { about: 'Quem somos', services: 'Serviços', approach: 'Abordagem', contact: 'Contato' },
    cta: 'Agendar conversa',
    eyebrow: 'Aconselhamento estratégico em tecnologia',
    h1a: 'Visão de alto nível.',
    h1b: 'Conversa de verdade.',
    heroP: 'Tomar as decisões certas em tecnologia separa empresas que crescem rápido daquelas que apenas acompanham o ritmo. Já estivemos dos dois lados da mesa — liderando transformações dentro de grandes empresas e destravando o potencial de muitas outras como parceiros externos.',
    heroMeta: ['20+ anos de tecnologia', 'C-level · Board advisor', 'Brasil · LATAM · Global'],
    aboutKicker: 'Quem somos',
    aboutH: 'Sem buzzwords. Sem enrolação.',
    aboutP: 'Nosso foco é cortar o ruído: você fala com profissionais experientes, que já ocuparam cargos executivos e C-level, conhecem os desafios do mundo real e falam a sua língua. Como conselheiros estratégicos ou parceiros de reflexão no board, a ideia é simples — trazer experiência real para você avançar com mais agilidade, inteligência e propósito.',
    aboutBullets: [
      'Clareza para suas decisões tecnológicas mais críticas',
      'Construir e priorizar um roadmap alinhado ao negócio',
      'Conectar TI à estratégia, produto, pessoas e cultura',
      'Avaliar fornecedores, investimentos e riscos com objetividade',
      'Decidir com confiança e intencionalidade',
      'Apoiar líderes e times em momentos-chave',
    ],
    foundersKicker: 'Sócios-fundadores',
    servicesKicker: 'Serviços',
    servicesH: 'Três frentes. Um só padrão de senioridade.',
    services: [
      {
        n: '01',
        tag: 'Mentoria',
        title: 'Mentoria executiva',
        body: 'Apoio estratégico para profissionais, empreendedores e empresas que querem aprimorar habilidades, otimizar processos e alcançar resultados de alto impacto.',
        bullets: ['Sessões personalizadas', 'Metodologias consagradas', 'Ecossistema de inovação e oportunidades'],
      },
      {
        n: '02',
        tag: 'CTO sob demanda',
        title: 'Liderança técnica sob demanda',
        body: 'Expertise técnica e de negócios sob demanda — garantindo que sua empresa conte com a liderança certa para decidir com segurança.',
        bullets: ['Estratégia de tecnologia & roadmap', 'Gestão de times e arquitetura', 'Inovação, governança e proteção de ativos'],
      },
      {
        n: '03',
        tag: 'Projetos customizados',
        title: 'Consultoria sob medida',
        body: 'Consultoria em tecnologia alinhada aos seus objetivos — entregando inovação, eficiência e resultados concretos.',
        bullets: ['Arquitetura e escalabilidade', 'Modernização de sistemas', 'Diagnósticos e planos de transição'],
      },
    ],
    approachKicker: 'Abordagem',
    approachH: 'Lean por princípio. Sênior por padrão.',
    approachP: 'Um método curto, direto, e calibrado para quem precisa decidir sem perder o ritmo do negócio.',
    steps: [
      { n: '01', t: 'Escuta', d: 'Uma conversa de 45 minutos. Sem deck, sem proposta pronta. Entendemos onde dói e onde está a alavanca.' },
      { n: '02', t: 'Diagnóstico', d: 'Mapa rápido do cenário técnico, de produto e de pessoas. Hipóteses sobre riscos, gaps e oportunidades.' },
      { n: '03', t: 'Direção', d: 'Clareza sobre o que priorizar nas próximas 4, 12 e 52 semanas — e o que deliberadamente não fazer.' },
      { n: '04', t: 'Execução', d: 'Atuação como conselheiros, CTO fracionário ou time de projeto. Sempre com cadência leve e checkpoints objetivos.' },
    ],
    contactKicker: 'Vamos conversar',
    contactH: 'Um café de 45 minutos pode mudar o ano da sua empresa.',
    contactP: 'Sem compromisso, sem pitch. Você sai com uma leitura honesta — e, se fizer sentido, a gente segue.',
    contactCTA: 'Agendar conversa',
    contactAlt: 'Falar no WhatsApp',
    footerTagline: 'Lean & Simpler.',
    footerRights: 'Todos os direitos reservados.',
  },
  en: {
    nav: { about: 'About', services: 'Services', approach: 'Approach', contact: 'Contact' },
    cta: 'Book a conversation',
    eyebrow: 'Strategic technology advisory',
    h1a: 'Executive perspective.',
    h1b: 'A real conversation.',
    heroP: "The right technology decisions separate companies that grow fast from those that just keep pace. We’ve sat on both sides of the table — leading transformations inside large companies and unlocking the potential of many others as external partners.",
    heroMeta: ['20+ years in tech', 'C-level · Board advisor', 'Brazil · LATAM · Global'],
    aboutKicker: 'About',
    aboutH: 'No buzzwords. No filler.',
    aboutP: 'We cut the noise. You talk to senior operators who have held C-level seats, know the real-world pressure, and speak your language. As strategic advisors or sparring partners on the board, the idea is simple — bring real experience so you move faster, smarter, and with intent.',
    aboutBullets: [
      'Clarity on your most critical tech decisions',
      'Build and prioritize a roadmap aligned to the business',
      'Connect IT to strategy, product, people, and culture',
      'Evaluate vendors, investments and risks objectively',
      'Decide with confidence and intent',
      'Support leaders and teams at key moments',
    ],
    foundersKicker: 'Founding partners',
    servicesKicker: 'Services',
    servicesH: 'Three engagements. One standard of seniority.',
    services: [
      {
        n: '01',
        tag: 'Mentorship',
        title: 'Executive mentorship',
        body: 'Strategic support for professionals, founders and companies who want to sharpen skills, refine processes, and reach high-impact outcomes.',
        bullets: ['Tailored 1:1 sessions', 'Proven methods and best practice', 'Innovation ecosystem & opportunities'],
      },
      {
        n: '02',
        tag: 'CTO on demand',
        title: 'Technical leadership on demand',
        body: 'Technical and business expertise on call — so your company has the right leadership to decide with confidence.',
        bullets: ['Tech strategy & roadmap', 'Team and architecture management', 'Innovation, governance & asset protection'],
      },
      {
        n: '03',
        tag: 'Custom projects',
        title: 'Bespoke consulting',
        body: 'Technology consulting aligned to your goals — delivering innovation, efficiency, and concrete results.',
        bullets: ['Architecture & scalability', 'Systems modernization', 'Diagnostics & transition planning'],
      },
    ],
    approachKicker: 'Approach',
    approachH: 'Lean on principle. Senior by default.',
    approachP: 'A short, direct method calibrated for leaders who need to decide without losing business momentum.',
    steps: [
      { n: '01', t: 'Listen', d: 'A 45-minute conversation. No deck, no canned proposal. We find where it hurts and where the leverage sits.' },
      { n: '02', t: 'Diagnose', d: 'Fast read on tech, product, and people. Hypotheses on risks, gaps and opportunities.' },
      { n: '03', t: 'Direction', d: 'Clarity on what to prioritize in the next 4, 12 and 52 weeks — and what to deliberately not do.' },
      { n: '04', t: 'Execute', d: 'We engage as advisors, fractional CTO, or a project team. Always lean cadence, objective checkpoints.' },
    ],
    contactKicker: "Let's talk",
    contactH: "A 45-minute coffee can change your company's year.",
    contactP: 'No strings, no pitch. You leave with an honest read — and, if it fits, we keep going.',
    contactCTA: 'Book a conversation',
    contactAlt: 'Chat on WhatsApp',
    footerTagline: 'Lean & Simpler.',
    footerRights: 'All rights reserved.',
  },
};

export const BOOK_URL = 'https://calendar.app.google/RCGVv4dGDy5QMXtX8';
export const WA_URL = 'https://wa.me/PHONENUMBER?text=Ol%C3%A1%20MIRAH%21%20Topa%20bater%20um%20papo%3F';
export const LI_URL = 'https://www.linkedin.com/company/wearemirah/';
