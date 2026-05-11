import { useState } from 'react';
import { Lang, BOOK_URL } from '../copy';
import Arrow from './Arrow';

interface Props {
  L: Lang;
}

export default function Services({ L }: Props) {
  const [open, setOpen] = useState(0);

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
            className={`service${open === i ? ' service--open' : ''}`}
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
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="service-cta">
              {L.cta}<Arrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
