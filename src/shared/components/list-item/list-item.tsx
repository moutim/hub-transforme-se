import { usePathname } from 'next/navigation';

export default function ListItem({ icon, text, activeColor = '#e8006f', route }: { icon: string, text: string, activeColor?: string, route?: string }) {
  const pathname = usePathname();
  const isActive = route && pathname === route;

  return (
    <li className="mb-3">
      <a>
        <i
          className={`fas ${icon} mr-4`}
          style={isActive ? { color: activeColor } : {}}
        ></i>
        <span className={isActive ? 'has-text-weight-bold' : ''}>{text}</span>
      </a>
    </li>
  );
}