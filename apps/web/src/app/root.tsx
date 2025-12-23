import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router';
import {
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import './global.css';
import { Toaster } from 'sonner';

export const links = () => [];

function LoaderWrapper({ loader }: { loader: () => React.ReactNode }) {
  return <>{loader()}</>;
}

type ClientOnlyProps = {
  loader: () => React.ReactNode;
};

export const ClientOnly: React.FC<ClientOnlyProps> = ({ loader }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <LoaderWrapper loader={loader} />;
};

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const pathname = location?.pathname;

  useEffect(() => {
    if (pathname) {
      console.log('[Navigation]', pathname);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="icon" href="/FastMic_user_demo/favicon.png" />
      </head>
      <body>
        <ClientOnly loader={() => children} />
        <Toaster position="bottom-right" />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
