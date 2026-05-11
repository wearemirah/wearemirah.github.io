import { Lang } from '../copy';

interface Props {
  L: Lang;
}

export default function Approach({ L }: Props) {
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
