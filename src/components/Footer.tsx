import { Lang } from '../copy';
import Mark from './Mark';

interface Props {
  L: Lang;
}

export default function Footer({ L }: Props) {
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
