import type { Tech } from '@/lib/techStack';

// Card styling lives in globals.css (.cxc-tech); the parent grid decides the column widths.
export default function TechLogo({ name, Icon, color }: Tech) {
  return (
    <div className="cxc-tech">
      <Icon size={22} color={color} aria-hidden style={{ flexShrink: 0 }} />
      <span>{name}</span>
    </div>
  );
}
