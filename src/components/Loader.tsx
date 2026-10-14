import { useEffect, useState } from "react";
import logo from "../assets/telth-logo.png";

/** Full-screen splash built on the Telth "T" mark. Shows until the page has loaded (min 0.9s, max 4s). */
export default function Loader() {
  const [phase, setPhase] = useState<"show" | "hide" | "gone">("show");

  useEffect(() => {
    const MIN = 900;
    const MAX = 4000;
    const start = performance.now();
    let hideTimer = 0;
    let goneTimer = 0;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN - (performance.now() - start));
      hideTimer = window.setTimeout(() => {
        setPhase("hide");
        goneTimer = window.setTimeout(() => setPhase("gone"), 600);
      }, wait);
    };

    const failSafe = window.setTimeout(finish, MAX);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(failSafe);
      window.clearTimeout(hideTimer);
      window.clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`telth-loader ${phase === "hide" ? "is-hidden" : ""}`} role="status" aria-live="polite" aria-label="Loading Telth">
      <div className="telth-loader__mark">
        <span className="telth-loader__halo" />
        <span className="telth-loader__ring" />
        <img src={logo} alt="" width={58} height={58} className="telth-loader__logo" />
      </div>
      <div className="telth-loader__bar" />
    </div>
  );
}
