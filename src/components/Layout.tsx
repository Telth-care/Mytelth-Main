import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a
        href="#/"
        onClick={(e) => {
          e.preventDefault(); // HashRouter owns the URL hash, so focus <main> instead of using an anchor
          document.getElementById("content")?.focus();
        }}
        className="sr-only z-[60] rounded-lg bg-brand px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content" tabIndex={-1} key={pathname} className="page-in outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
