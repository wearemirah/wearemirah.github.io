// ─────────────────────────────────────────────────────────────────────────────
// MIRAH — Lean & Simpler  ·  full-bleed single-page redesign
// ─────────────────────────────────────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "lang": "pt"
}/*EDITMODE-END*/;

const COPY = {
  pt: {
    nav: { about: "Quem somos", services: "Serviços", approach: "Abordagem", contact: "Contato" },
    cta: "Agendar conversa",
    eyebrow: "Aconselhamento estratégico em tecnologia",
    h1a: "Visão de alto nível.",
    h1b: "Conversa de verdade.",
    heroP: "Tomar as decisões certas em tecnologia separa empresas que crescem rápido daquelas que apenas acompanham o ritmo. Já estivemos dos dois lados da mesa — liderando transformações dentro de grandes empresas e destravando o potencial de muitas outras como parceiros externos.",
    heroMeta: ["20+ anos de tecnologia", "C-level · Board advisor", "Brasil · LATAM · Global"],
    aboutKicker: "Quem somos",
    aboutH: "Sem buzzwords. Sem enrolação.",
    aboutP: "Nosso foco é cortar o ruído: você fala com profissionais experientes, que já ocuparam cargos executivos e C-level, conhecem os desafios do mundo real e falam a sua língua. Como conselheiros estratégicos ou parceiros de reflexão no board, a ideia é simples — trazer experiência real para você avançar com mais agilidade, inteligência e propósito.",
    aboutBullets: [
      "Clareza para suas decisões tecnológicas mais críticas",
      "Construir e priorizar um roadmap alinhado ao negócio",
      "Conectar TI à estratégia, produto, pessoas e cultura",
      "Avaliar fornecedores, investimentos e riscos com objetividade",
      "Decidir com confiança e intencionalidade",
      "Apoiar líderes e times em momentos-chave"
    ],
    foundersKicker: "Sócios-fundadores",
    servicesKicker: "Serviços",
    servicesH: "Três frentes. Um só padrão de senioridade.",
    services: [
      {
        n: "01",
        tag: "Mentoria",
        title: "Mentoria executiva",
        body: "Apoio estratégico para profissionais, empreendedores e empresas que querem aprimorar habilidades, otimizar processos e alcançar resultados de alto impacto.",
        bullets: ["Sessões personalizadas", "Metodologias consagradas", "Ecossistema de inovação e oportunidades"]
      },
      {
        n: "02",
        tag: "CTO sob demanda",
        title: "Liderança técnica sob demanda",
        body: "Expertise técnica e de negócios sob demanda — garantindo que sua empresa conte com a liderança certa para decidir com segurança.",
        bullets: ["Estratégia de tecnologia & roadmap", "Gestão de times e arquitetura", "Inovação, governança e proteção de ativos"]
      },
      {
        n: "03",
        tag: "Projetos customizados",
        title: "Consultoria sob medida",
        body: "Consultoria em tecnologia alinhada aos seus objetivos — entregando inovação, eficiência e resultados concretos.",
        bullets: ["Arquitetura e escalabilidade", "Modernização de sistemas", "Diagnósticos e planos de transição"]
      }
    ],
    approachKicker: "Abordagem",
    approachH: "Lean por princípio. Sênior por padrão.",
    approachP: "Um método curto, direto, e calibrado para quem precisa decidir sem perder o ritmo do negócio.",
    steps: [
      { n: "01", t: "Escuta", d: "Uma conversa de 45 minutos. Sem deck, sem proposta pronta. Entendemos onde dói e onde está a alavanca." },
      { n: "02", t: "Diagnóstico", d: "Mapa rápido do cenário técnico, de produto e de pessoas. Hipóteses sobre riscos, gaps e oportunidades." },
      { n: "03", t: "Direção", d: "Clareza sobre o que priorizar nas próximas 4, 12 e 52 semanas — e o que deliberadamente não fazer." },
      { n: "04", t: "Execução", d: "Atuação como conselheiros, CTO fracionário ou time de projeto. Sempre com cadência leve e checkpoints objetivos." }
    ],
    contactKicker: "Vamos conversar",
    contactH: "Um café de 45 minutos pode mudar o ano da sua empresa.",
    contactP: "Sem compromisso, sem pitch. Você sai com uma leitura honesta — e, se fizer sentido, a gente segue.",
    contactCTA: "Agendar conversa",
    contactAlt: "Falar no WhatsApp",
    footerTagline: "Lean & Simpler.",
    footerRights: "Todos os direitos reservados."
  },
  en: {
    nav: { about: "About", services: "Services", approach: "Approach", contact: "Contact" },
    cta: "Book a conversation",
    eyebrow: "Strategic technology advisory",
    h1a: "Executive perspective.",
    h1b: "A real conversation.",
    heroP: "The right technology decisions separate companies that grow fast from those that just keep pace. We've sat on both sides of the table — leading transformations inside large companies and unlocking the potential of many others as external partners.",
    heroMeta: ["20+ years in tech", "C-level · Board advisor", "Brazil · LATAM · Global"],
    aboutKicker: "About",
    aboutH: "No buzzwords. No filler.",
    aboutP: "We cut the noise. You talk to senior operators who have held C-level seats, know the real-world pressure, and speak your language. As strategic advisors or sparring partners on the board, the idea is simple — bring real experience so you move faster, smarter, and with intent.",
    aboutBullets: [
      "Clarity on your most critical tech decisions",
      "Build and prioritize a roadmap aligned to the business",
      "Connect IT to strategy, product, people, and culture",
      "Evaluate vendors, investments and risks objectively",
      "Decide with confidence and intent",
      "Support leaders and teams at key moments"
    ],
    foundersKicker: "Founding partners",
    servicesKicker: "Services",
    servicesH: "Three engagements. One standard of seniority.",
    services: [
      {
        n: "01",
        tag: "Mentorship",
        title: "Executive mentorship",
        body: "Strategic support for professionals, founders and companies who want to sharpen skills, refine processes, and reach high-impact outcomes.",
        bullets: ["Tailored 1:1 sessions", "Proven methods and best practice", "Innovation ecosystem & opportunities"]
      },
      {
        n: "02",
        tag: "CTO on demand",
        title: "Technical leadership on demand",
        body: "Technical and business expertise on call — so your company has the right leadership to decide with confidence.",
        bullets: ["Tech strategy & roadmap", "Team and architecture management", "Innovation, governance & asset protection"]
      },
      {
        n: "03",
        tag: "Custom projects",
        title: "Bespoke consulting",
        body: "Technology consulting aligned to your goals — delivering innovation, efficiency, and concrete results.",
        bullets: ["Architecture & scalability", "Systems modernization", "Diagnostics & transition planning"]
      }
    ],
    approachKicker: "Approach",
    approachH: "Lean on principle. Senior by default.",
    approachP: "A short, direct method calibrated for leaders who need to decide without losing business momentum.",
    steps: [
      { n: "01", t: "Listen", d: "A 45-minute conversation. No deck, no canned proposal. We find where it hurts and where the leverage sits." },
      { n: "02", t: "Diagnose", d: "Fast read on tech, product, and people. Hypotheses on risks, gaps and opportunities." },
      { n: "03", t: "Direction", d: "Clarity on what to prioritize in the next 4, 12 and 52 weeks — and what to deliberately not do." },
      { n: "04", t: "Execute", d: "We engage as advisors, fractional CTO, or a project team. Always lean cadence, objective checkpoints." }
    ],
    contactKicker: "Let's talk",
    contactH: "A 45-minute coffee can change your company's year.",
    contactP: "No strings, no pitch. You leave with an honest read — and, if it fits, we keep going.",
    contactCTA: "Book a conversation",
    contactAlt: "Chat on WhatsApp",
    footerTagline: "Lean & Simpler.",
    footerRights: "All rights reserved."
  }
};

const BOOK_URL = "https://calendar.app.google/RCGVv4dGDy5QMXtX8";
const WA_URL = "https://wa.me/5551993262403";
const LI_URL = "https://www.linkedin.com/company/wearemirah/";

// ── Tiny inline icon set (geometric, no slop) ────────────────────────────────
const Mark = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size * 0.78} viewBox="0 0 100 78" fill="none" aria-hidden="true">
    <path d="M40 4 L4 39 L40 74 L40 60 L18 39 L40 18 Z" fill={color} />
    <path d="M60 4 L96 39 L60 74 L60 60 L82 39 L60 18 Z" fill={color} />
  </svg>
);

const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square" />
  </svg>
);

// ── Reusable: portrait placeholder ──────────────────────────────────────────
const Portrait = ({ name, role, accent }) => (
  <figure className="portrait">
    <div className="portrait-frame" data-accent={accent ? "1" : "0"}>
      <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" aria-hidden="true">
        <defs>
          <pattern id={`stripe-${name.replace(/\s/g,'')}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="200" height="240" fill={`url(#stripe-${name.replace(/\s/g,'')})`} />
        <circle cx="100" cy="92" r="36" fill="currentColor" fillOpacity="0.14" />
        <rect x="44" y="142" width="112" height="120" rx="56" fill="currentColor" fillOpacity="0.14" />
      </svg>
      <span className="portrait-tag">portrait · drop here</span>
    </div>
    <figcaption>
      <span className="portrait-name">{name}</span>
      <span className="portrait-role">{role}</span>
    </figcaption>
  </figure>
);

// ── Sections ────────────────────────────────────────────────────────────────
function Nav({ L, lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <a href="#top" className="nav-brand" aria-label="MIRAH">
        <span className="nav-mark"><Mark color="var(--brand)" /></span>
        <span className="nav-wordmark">MIRAH</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">{L.nav.about}</a></li>
        <li><a href="#services">{L.nav.services}</a></li>
        <li><a href="#approach">{L.nav.approach}</a></li>
        <li><a href="#contact">{L.nav.contact}</a></li>
      </ul>
      <div className="nav-right">
        <div className="lang-toggle" role="group" aria-label="Language">
          <button className={lang === "pt" ? "is-on" : ""} onClick={() => setLang("pt")}>PT</button>
          <button className={lang === "en" ? "is-on" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
        <a className="btn btn--primary" href={BOOK_URL} target="_blank" rel="noopener">
          {L.cta}<Arrow />
        </a>
      </div>
    </nav>
  );
}

function Hero({ L }) {
  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-main">
          <div className="kicker"><span className="dot" />{L.eyebrow}</div>
          <h1 className="display">
            <span>{L.h1a}</span>
            <span className="display-accent">{L.h1b}</span>
          </h1>
          <p className="lead">{L.heroP}</p>
          <div className="hero-actions">
            <a className="btn btn--primary btn--lg" href={BOOK_URL} target="_blank" rel="noopener">
              {L.cta}<Arrow />
            </a>
            <a className="btn btn--ghost btn--lg" href="#services">
              {L.nav.services}<Arrow />
            </a>
          </div>
        </div>
        <aside className="hero-side">
          <div className="meta-card">
            <div className="meta-card-h">
              <span className="mono">mirah / advisory</span>
              <span className="meta-pulse"><span /></span>
            </div>
            <ul className="meta-list">
              {L.heroMeta.map((m, i) => (
                <li key={i}><span className="mono dim">{String(i + 1).padStart(2, '0')}</span><span>{m}</span></li>
              ))}
            </ul>
            <div className="meta-foot">
              <a href={LI_URL} target="_blank" rel="noopener" className="mono">LinkedIn ↗</a>
              <a href={WA_URL} target="_blank" rel="noopener" className="mono">WhatsApp ↗</a>
            </div>
          </div>
        </aside>
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <React.Fragment key={k}>
              <span>Strategy</span><span className="dia" />
              <span>Roadmap</span><span className="dia" />
              <span>Architecture</span><span className="dia" />
              <span>Governance</span><span className="dia" />
              <span>Fractional CTO</span><span className="dia" />
              <span>Board advisory</span><span className="dia" />
              <span>Due diligence</span><span className="dia" />
              <span>Innovation</span><span className="dia" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}

function About({ L }) {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <span className="kicker"><span className="dot" />{L.aboutKicker}</span>
        <h2 className="h2">{L.aboutH}</h2>
      </div>
      <div className="about-grid">
        <p className="about-lead">{L.aboutP}</p>
        <ul className="bullets">
          {L.aboutBullets.map((b, i) => (
            <li key={i}>
              <span className="mono dim">{String(i + 1).padStart(2, '0')}</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="founders">
        <div className="founders-h">
          <span className="mono dim">— {L.foundersKicker}</span>
        </div>
        <div className="founders-grid">
          <Portrait name="Founder One" role="Co-founder · Partner" />
          <Portrait name="Founder Two" role="Co-founder · Partner" accent />
          <Portrait name="Founder Three" role="Partner · Advisor" />
        </div>
      </div>
    </section>
  );
}

function Services({ L }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="services" className="section section--alt">
      <div className="section-head">
        <span className="kicker"><span className="dot" />{L.servicesKicker}</span>
        <h2 className="h2">{L.servicesH}</h2>
      </div>
      <div className="services">
        {L.services.map((s, i) => (
          <article
            key={i}
            className={"service" + (open === i ? " service--open" : "")}
            onMouseEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
            tabIndex={0}
          >
            <div className="service-h">
              <span className="mono dim">{s.n}</span>
              <span className="service-tag mono">{s.tag}</span>
            </div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-body">{s.body}</p>
            <ul className="service-list">
              {s.bullets.map((b, j) => (
                <li key={j}><span className="tick" aria-hidden="true">→</span>{b}</li>
              ))}
            </ul>
            <a href={BOOK_URL} target="_blank" rel="noopener" className="service-cta">
              {L.cta}<Arrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Approach({ L }) {
  return (
    <section id="approach" className="section">
      <div className="section-head">
        <span className="kicker"><span className="dot" />{L.approachKicker}</span>
        <h2 className="h2">{L.approachH}</h2>
        <p className="section-lead">{L.approachP}</p>
      </div>
      <ol className="steps">
        {L.steps.map((s, i) => (
          <li key={i} className="step">
            <div className="step-n mono">{s.n}</div>
            <div className="step-body">
              <h3 className="step-t">{s.t}</h3>
              <p className="step-d">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact({ L }) {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <span className="kicker kicker--on-brand"><span className="dot" />{L.contactKicker}</span>
        <h2 className="contact-h">{L.contactH}</h2>
        <p className="contact-p">{L.contactP}</p>
        <div className="contact-actions">
          <a href={BOOK_URL} target="_blank" rel="noopener" className="btn btn--inverse btn--lg">
            {L.contactCTA}<Arrow />
          </a>
          <a href={WA_URL} target="_blank" rel="noopener" className="btn btn--ghost-on-brand btn--lg">
            {L.contactAlt}<Arrow />
          </a>
        </div>
        <div className="contact-foot mono">
          <span>mirah.me</span>
          <span className="sep" />
          <a href={LI_URL} target="_blank" rel="noopener">linkedin/wearemirah ↗</a>
          <span className="sep" />
          <a href={WA_URL} target="_blank" rel="noopener">+55 51 99326-2403 ↗</a>
        </div>
      </div>
    </section>
  );
}

function Footer({ L }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-l">
        <span className="nav-mark"><Mark color="var(--brand)" size={20} /></span>
        <span className="nav-wordmark">MIRAH</span>
        <span className="mono dim"> — {L.footerTagline}</span>
      </div>
      <div className="footer-r mono dim">
        © {year} Mirah. {L.footerRights}
      </div>
    </footer>
  );
}

// ── App ─────────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const L = COPY[t.lang] || COPY.pt;

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme);
    document.documentElement.lang = t.lang === 'pt' ? 'pt-BR' : 'en';
  }, [t.theme, t.lang]);

  return (
    <>
      <Nav L={L} lang={t.lang} setLang={(v) => setTweak('lang', v)} />
      <main>
        <Hero L={L} />
        <About L={L} />
        <Services L={L} />
        <Approach L={L} />
        <Contact L={L} />
      </main>
      <Footer L={L} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Appearance">
          <TweakRadio
            label="Theme"
            value={t.theme}
            options={['light', 'dark']}
            onChange={(v) => setTweak('theme', v)}
          />
          <TweakRadio
            label="Language"
            value={t.lang}
            options={['pt', 'en']}
            onChange={(v) => setTweak('lang', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
