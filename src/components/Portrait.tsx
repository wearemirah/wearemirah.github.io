interface Props {
  name: string;
  role: string;
  accent?: boolean;
}

export default function Portrait({ name, role, accent = false }: Props) {
  const id = `stripe-${name.replace(/\s/g, '')}`;
  return (
    <figure className="portrait">
      <div className="portrait-frame" data-accent={accent ? '1' : '0'}>
        <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id={id} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="200" height="240" fill={`url(#${id})`} />
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
}
