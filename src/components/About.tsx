import { Lang } from '../copy';
import Portrait from './Portrait';

interface Props {
  L: Lang;
}

export default function About({ L }: Props) {
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
