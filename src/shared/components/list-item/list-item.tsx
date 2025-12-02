import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ListItem(
  { icon, text, activeColor = '#e8006f', route }:
    { icon: string, text: string, activeColor?: string, route?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!route) {
      setIsActive(false);
      return;
    }

    if (route === '/') {
      if (pathname === '/' || /^\/\d+$/.test(pathname)) {
        setIsActive(true);
        return;
      }
      setIsActive(false);
      return;
    }

    if (route !== '/') {
      const routeBase = route.replace(/s$/, ''); // /days -> /day
      
      if (pathname.startsWith(route) || pathname.startsWith(routeBase)) {
        setIsActive(true);
        return;
      }
    }

    setIsActive(false);
  }, [pathname, route]);

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