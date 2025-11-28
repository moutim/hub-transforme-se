import { usePathname, useRouter } from 'next/navigation';

export default function ListItem(
  { icon, text, activeColor = '#e8006f', route }:
  { icon: string, text: string, activeColor?: string, route?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  
  const isActive = route === '/' ? pathname === '/' : pathname === route || pathname.startsWith(route + '/');
  const handleRedirect = (route: string) => router.push(route);

  return (
    <li onClick={() => handleRedirect(route ?? '')} className="mb-3">
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