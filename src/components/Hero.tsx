import { Lang, BOOK_URL, WA_URL, LI_URL } from '../copy';
import Arrow from './Arrow';

interface Props {
  L: Lang;
}

const TICKER_WORDS = ['Strategy', 'Roadmap', 'Architecture', 'Governance', 'Fractional CTO', 'Board advisory', 'Due diligence', 'Innovation'];

export default function Hero({ L }: Props) {
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
            <a className="btn btn--primary btn--lg" href={BOOK_URL} target="_blank" rel="noopener noreferrer">
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
                <li key={i}>
                  <span className="mono dim">{String(i + 1).padStart(2, '0')}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <div className="meta-foot">
              <a href={LI_URL} target="_blank" rel="noopener noreferrer" className="mono">LinkedIn ↗</a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mono">WhatsApp ↗</a>
            </div>
          </div>
        </aside>
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((k) => (
            <span key={k} style={{ display: 'contents' }}>
              {TICKER_WORDS.map((word, i) => (
                <span key={`${k}-${i}`}>
                  {i > 0 && <span className="dia" />}
                  {word}
                </span>
              ))}
              <span className="dia" />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
