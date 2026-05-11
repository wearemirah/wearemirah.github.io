import { useEffect, useState } from 'react';
import { Lang, LangKey, BOOK_URL } from '../copy';
import Mark from './Mark';
import Arrow from './Arrow';

interface Props {
  L: Lang;
  lang: LangKey;
  setLang: (l: LangKey) => void;
}

export default function Nav({ L, lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
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
          <button className={lang === 'pt' ? 'is-on' : ''} onClick={() => setLang('pt')}>PT</button>
          <button className={lang === 'en' ? 'is-on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <a className="btn btn--primary" href={BOOK_URL} target="_blank" rel="noopener noreferrer">
          {L.cta}<Arrow />
        </a>
      </div>
    </nav>
  );
}
