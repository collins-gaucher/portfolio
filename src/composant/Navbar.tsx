import React from "react";
import { motion } from "framer-motion";
import { NavLink, Outlet, ScrollRestoration } from "react-router";
import {
  Download,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Logo_blanc from "../assets/Logo-blanc.png";
import Logo_noir from "../assets/favicon-dark.ico";

import Traduire from "./Traduires";
import Footer from "./Footer";
import Scroll from "./Scroll";

import { Bouton } from "../UI/BoutonNavbar";
import { Boutons } from "../UI/Bouton";
import { useClickAilleurs } from "../hooks/useClickAilleurs";

const Navbar = () => {
  // ----------------------------------------
  // ÉTATS
  // ----------------------------------------

  const [scrolled, setScrolled] = React.useState(false);
  const [ouvert, setOuvert] = React.useState(false);

  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === "undefined") return false;

    const themeSauvegarde = localStorage.getItem("theme");

    if (themeSauvegarde) {
      return themeSauvegarde === "dark";
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });

  const [langue, setLangue] = React.useState<"fr" | "en">(() => {
    if (typeof window === "undefined") return "fr";

    const langueSauvegardee = localStorage.getItem("app_langue");

    return langueSauvegardee === "en" ? "en" : "fr";
  });

  const themeManuel = React.useRef(
    typeof window !== "undefined" &&
      localStorage.getItem("theme") !== null
  );

  const menuRef = React.useRef<HTMLElement | null>(null);

  // ----------------------------------------
  // SCROLL DE LA NAVBAR
  // ----------------------------------------

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ----------------------------------------
  // THÈME SOMBRE / CLAIR
  // ----------------------------------------

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  React.useEffect(() => {
    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = (event: MediaQueryListEvent) => {
      if (!themeManuel.current) {
        setIsDark(event.matches);
      }
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  const changementTheme = () => {
    themeManuel.current = true;
    setIsDark((precedent) => !precedent);
  };

  // ----------------------------------------
  // LANGUE
  // ----------------------------------------

  const changementLangue = () => {
    const nouvelleLangue = langue === "fr" ? "en" : "fr";

    setLangue(nouvelleLangue);
    localStorage.setItem("app_langue", nouvelleLangue);
  };

  // ----------------------------------------
  // MENU MOBILE
  // ----------------------------------------

  const fermetureMenu = () => {
    setOuvert(false);
  };

  useClickAilleurs(menuRef, fermetureMenu, ouvert);

  // ----------------------------------------
  // NAVIGATION
  // ----------------------------------------

  const classeLien = ({ isActive }: { isActive: boolean }) =>
    [
      "flex h-full items-center whitespace-nowrap",
      "border-b-2 transition-colors duration-200",
      "hover:text-blue-600 dark:hover:text-blue-400",
      isActive
        ? "border-blue-600 text-blue-600 dark:text-blue-400"
        : "border-transparent",
    ].join(" ");

  // ----------------------------------------
  // TÉLÉCHARGEMENT DU CV
  // ----------------------------------------

  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/CV%20LONFOUO%20NAHA%20COLLINS.pdf";
    link.download = "CV LONFOUO NAHA COLLINS.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // ----------------------------------------
  // WHATSAPP
  // ----------------------------------------

  const Whatsap = `https://wa.me/237658599369?text=${encodeURIComponent(
    "Bonjour Monsieur Collins, je souhaite échanger sur un projet."
  )}`;

  // ----------------------------------------
  // BOUTONS THÈME ET LANGUE
  // ----------------------------------------

  const commandes = (
    <>
      <Bouton onClick={changementTheme}>
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Bouton>

      <Bouton onClick={changementLangue}>
        <span className="text-sm font-bold">
          {langue === "fr" ? "EN" : "FR"}
        </span>
      </Bouton>
    </>
  );

  // ----------------------------------------
  // LIENS DE NAVIGATION
  // ----------------------------------------

  const liens = [
    { to: "/", label: "Accueil", end: true },
    { to: "/propos", label: "A propos" },
    { to: "/projet", label: "Projet" },
    { to: "/competences", label: "Compétences" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <ScrollRestoration />

      {/* NAVBAR */}
      <header
        ref={menuRef}
        className={[
          "fixed inset-x-0 top-0 z-50",
          "flex h-20 items-center justify-between",
          "gap-3 border-b px-4 sm:px-6 lg:px-8",
          "border-gray-200 dark:border-gray-800",
          "transition-colors duration-300",
          scrolled
            ? "bg-white/90 shadow-sm backdrop-blur-md dark:bg-gray-950/90"
            : "bg-white dark:bg-gray-950",
        ].join(" ")}
      >
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <NavLink
            to="/"
            end
            onClick={fermetureMenu}
            className="flex items-center gap-2"
            aria-label="Accueil du portfolio de Collins"
          >
            <img
              src={isDark ? Logo_noir : Logo_blanc}
              alt=""
              className="h-10 w-10 rounded-lg object-contain sm:h-12 sm:w-12"
            />

            <span className="flex items-center text-xl font-bold tracking-wide text-black dark:text-white sm:text-2xl">
              <span className="text-blue-600">C</span>
              ollins
              <span className="text-blue-600">.</span>
            </span>
          </NavLink>
        </motion.div>

        {/* MENU DESKTOP */}
        <nav
          aria-label="Navigation principale"
          className="hidden h-full items-center gap-5 text-sm font-semibold text-gray-500 dark:text-gray-400 2xl:gap-8 xl:flex xl:gap-4 xl:text-sm 2xl:text-base"
        >
          {liens.map((lien) => (
            <NavLink
              key={lien.to}
              to={lien.to}
              end={lien.end}
              className={classeLien}
            >
              <Traduire lang={langue}>{lien.label}</Traduire>
            </NavLink>
          ))}
        </nav>

        {/* COMMANDES DESKTOP */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          {commandes}

          <Boutons onClick={handleDownload}>
            <span className="whitespace-nowrap text-sm">
              <Traduire lang={langue}>Télécharger CV</Traduire>
            </span>
            <Download className="h-4 w-4 shrink-0" />
          </Boutons>
        </div>

        {/* COMMANDES MOBILE ET TABLETTE */}
        <div className="flex shrink-0 items-center gap-1.5 xl:hidden sm:gap-2">
          {commandes}

          <Bouton
            onClick={() => setOuvert((precedent) => !precedent)}
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={ouvert}
          >
            {ouvert ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Bouton>
        </div>

        {/* MENU MOBILE */}
        {ouvert && (
          <nav
            aria-label="Navigation mobile"
            className={[
              "absolute left-0 top-full w-full",
              "flex max-h-[calc(100dvh-5rem)] flex-col",
              "items-center gap-5 overflow-y-auto",
              "border-b border-gray-200 px-4 py-6",
              "bg-white/95 text-base font-semibold text-gray-600",
              "shadow-lg backdrop-blur-md",
              "dark:border-gray-800 dark:bg-gray-950/95",
              "dark:text-gray-300 sm:gap-6 sm:py-8 sm:text-lg",
            ].join(" ")}
          >
            {liens.map((lien) => (
              <NavLink
                key={lien.to}
                to={lien.to}
                end={lien.end}
                onClick={fermetureMenu}
                className={({ isActive }) =>
                  [
                    "py-1 transition-colors duration-200",
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "",
                  ].join(" ")
                }
              >
                <Traduire lang={langue}>{lien.label}</Traduire>
              </NavLink>
            ))}

            <Boutons onClick={() => {
              fermetureMenu();
              handleDownload();
            }}>
              <Traduire lang={langue}>Télécharger CV</Traduire>
              <Download className="h-4 w-4" />
            </Boutons>
          </nav>
        )}
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="min-h-screen pt-20">
        {/* BOUTON WHATSAPP */}
        <a
          href={Whatsap}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter Collins sur WhatsApp"
          className={[
            "fixed bottom-20 right-4 z-40",
            "flex h-12 w-12 items-center justify-center",
            "rounded-full bg-green-500 text-white shadow-lg",
            "transition-transform duration-200 hover:scale-110",
            "sm:bottom-25 sm:right-6 sm:h-14 sm:w-14",
            "md:bottom-30 md:right-8",
          ].join(" ")}
        >
          <FaWhatsapp className="h-7 w-7 sm:h-8 sm:w-8" />
        </a>

        <Scroll />

        <Outlet context={{ langue }} />
      </main>

      {/* FOOTER */}
      <Footer langue={langue} />
    </>
  );
};

export default Navbar;