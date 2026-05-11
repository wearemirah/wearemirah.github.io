interface Props {
  size?: number;
  color?: string;
}

export default function Mark({ size = 22, color = 'currentColor' }: Props) {
  return (
    <svg width={size} height={size * 0.78} viewBox="0 0 100 78" fill="none" aria-hidden="true">
      <path d="M40 4 L4 39 L40 74 L40 60 L18 39 L40 18 Z" fill={color} />
      <path d="M60 4 L96 39 L60 74 L60 60 L82 39 L60 18 Z" fill={color} />
    </svg>
  );
}
