import { Lang, BOOK_URL, WA_URL, LI_URL } from '../copy';
import Arrow from './Arrow';

interface Props {
  L: Lang;
}

export default function Contact({ L }: Props) {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <span className="kicker kicker--on-brand"><span className="dot" />{L.contactKicker}</span>
        <h2 className="contact-h">{L.contactH}</h2>
        <p className="contact-p">{L.contactP}</p>
        <div className="contact-actions">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn--inverse btn--lg">
            {L.contactCTA}<Arrow />
          </a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-on-brand btn--lg">
            {L.contactAlt}<Arrow />
          </a>
        </div>
        <div className="contact-foot mono">
          <span>mirah.me</span>
          <span className="sep" />
          <a href={LI_URL} target="_blank" rel="noopener noreferrer">linkedin/wearemirah ↗</a>
          <span className="sep" />
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">+55 51 99326-2403 ↗</a>
        </div>
      </div>
    </section>
  );
}
