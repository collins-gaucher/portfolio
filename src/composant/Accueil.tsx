import { NavLink, useOutletContext } from "react-router";
import Typewriter from "typewriter-effect";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Traduire from "./Traduires";
import { Carte } from "../UI/Carte";
import { Cadre } from "../UI/Cadre";
import { A } from "../UI/A";
import { Lien } from "../UI/Lien";

import Photo_code from "../assets/Photo-code.png";
import Site_voyage from "../assets/Site-voyage.png";
import Site_debut from "../assets/Site-debut.png";

interface ContexteType {
  langue: "fr" | "en";
}

const competences = [
  "Développeur Web Full Stack",
  "Full Stack Web Developer",
  "Apprenant Data Analyste",
  "Data Analyst Learner",
  "Apprenant en Intelligence Artificielle",
  "Artificial Intelligence Learner",
];

const apparition = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Accueil = () => {
  const { langue } = useOutletContext<ContexteType>();

  const [refStats, statsVisibles] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [refProjets, projetsVisibles] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refContact, contactVisible] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <>
      {/* ==================== ACCUEIL ==================== */}
      <section
        className="
          relative flex min-h-[calc(100svh-5rem)] w-full
          flex-col items-center justify-center gap-12
          overflow-hidden bg-radial
          from-blue-300 to-white
          px-4 py-12
          sm:px-6 sm:py-16
          lg:px-30
          xl:flex-row
          dark:from-blue-900/50 dark:to-gray-950/90
        "
      >
        {/* Présentation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={apparition}
          transition={{ duration: 0.6 }}
          className="
            flex w-full max-w-3xl flex-col
            items-center gap-5 text-center
            xl:items-start xl:text-left
          "
        >
          <Cadre variant="dispo">
            <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-green-500" />
            <p>
              <Traduire lang={langue}>OUVERT AU TRAVAIL</Traduire>
            </p>
          </Cadre>

          <motion.p
            variants={apparition}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 sm:text-2xl lg:text-3xl dark:text-gray-300"
          >
            <Traduire lang={langue}>Bonjour, je suis</Traduire>
          </motion.p>

          <motion.h1
            variants={apparition}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
              bg-linear-to-r from-blue-600 via-blue-900 to-indigo-700
              bg-clip-text text-4xl font-bold tracking-wide
              text-transparent
              sm:text-5xl md:text-6xl xl:text-7xl
              dark:via-white dark:to-blue-700
            "
          >
            Collins.
          </motion.h1>

          <motion.div
            variants={apparition}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="
              w-full max-w-full text-lg text-blue-600
              sm:text-xl md:text-2xl xl:text-3xl
              [&_.Typewriter__wrapper]:wrap-break-word
            "
          >
            <Typewriter
              options={{
                strings: competences,
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 70,
              }}
            />
          </motion.div>

          <motion.p
            variants={apparition}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="
              max-w-xl text-base font-normal leading-relaxed
              text-gray-600 sm:text-lg
              dark:text-gray-400
            "
          >
            <Traduire lang={langue}>
              Je transforme les idées en solutions digitales modernes,
              utiles et performantes.
            </Traduire>
          </motion.p>

          {/* Boutons */}
          <motion.div
            variants={apparition}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="
              mt-2 flex flex-col items-stretch gap-3
              sm:w-auto sm:flex-row sm:items-center
            "
          >
            <A taille="lg" to="/projet">
              <Traduire lang={langue}>Voir mes projets</Traduire>
              <ArrowRight size={18} />
            </A>

            <A variant="secondaire" taille="lg" to="/contact" >
              <Traduire lang={langue}>Me contacter</Traduire>
            </A>
          </motion.div>

          {/* Statistiques du profil */}
          <motion.div
            variants={apparition}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="
              mt-4 grid w-full max-w-md
              grid-cols-3 gap-3 sm:gap-6
              xl:max-w-xl
            "
          >
            <div className="text-center xl:text-center">
              <p className="text-2xl font-bold text-blue-800 sm:text-3xl dark:text-gray-200">
                10+
              </p>
              <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                <Traduire lang={langue}>Projets</Traduire>
              </p>
            </div>

            <div className="border-x border-gray-300 px-2 text-center dark:border-gray-700">
              <p className="text-2xl font-bold text-blue-800 sm:text-3xl dark:text-gray-200">
                3+
              </p>
              <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                <Traduire lang={langue}>Années</Traduire>
              </p>
            </div>

            <div className="text-center xl:text-left">
              <p className="text-2xl font-bold text-blue-800 sm:text-3xl dark:text-gray-200">
                100%
              </p>
              <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                <Traduire lang={langue}>Satisfaction</Traduire>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Illustration : affichée sur les grands écrans */}
        <div className="relative hidden w-full max-w-md shrink-0 px-4 py-8 xl:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="
              flex flex-col items-center justify-center
              rounded-2xl border border-white bg-gray-100
              p-5 shadow-2xl
              dark:border-gray-800 dark:bg-gray-900/70
            "
          >
            <img
              src={Photo_code}
              alt="Extrait de code illustrant mes compétences"
              loading="lazy"
              className="h-auto w-full rounded-xl object-cover"
            />

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Cadre>React</Cadre>
              <Cadre>TypeScript</Cadre>
              <Cadre>Tailwind</Cadre>
            </div>
          </motion.div>

          {/* Badge projet */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="
              absolute -left-2 top-0 flex items-center gap-2
              rounded-xl border border-white bg-gray-100
              px-3 py-3 shadow-xl
              dark:border-gray-800 dark:bg-blue-950/90
            "
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500">
              <Check size={19} className="text-gray-950" />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-950 dark:text-gray-100">
                <Traduire lang={langue}>Projets livrés</Traduire>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <Traduire lang={langue}>Dans les délais</Traduire>
              </p>
            </div>
          </motion.div>

          {/* Badge satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="
              absolute -right-2 bottom-0 flex items-center gap-2
              rounded-xl border border-white bg-gray-100
              px-3 py-3 shadow-xl
              dark:border-gray-800 dark:bg-blue-950/90
            "
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500">
              <Check size={19} className="text-white" />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-950 dark:text-gray-100">
                <Traduire lang={langue}>Client satisfait</Traduire>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <Traduire lang={langue}>Qualité et écoute</Traduire>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== STATISTIQUES ==================== */}
      <section
        ref={refStats}
        className="
          grid w-full grid-cols-1 items-center justify-items-center
          gap-8 border-y border-gray-200 bg-gray-100
          px-4 py-12
          sm:grid-cols-2 sm:px-6
          xl:grid-cols-4 xl:gap-6
          dark:border-gray-700 dark:bg-gray-950/90
        "
      >
        {[
          {
            valeur: "10+",
            texte: "PROJETS RÉALISÉS",
          },
          {
            valeur: "3+",
            texte: "ANS D'EXPÉRIENCE",
          },
          {
            valeur: "Douala",
            texte: "CAMEROUN",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.texte}
            initial={{ opacity: 0, y: 20 }}
            animate={
              statsVisibles
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl font-bold text-blue-800 sm:text-4xl dark:text-gray-200">
              {stat.valeur}
            </p>
            <p className="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400">
              <Traduire lang={langue}>{stat.texte}</Traduire>
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            statsVisibles
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-600" />
            <p className="text-xl font-bold text-green-600 sm:text-2xl dark:text-green-500">
              <Traduire lang={langue}>Ouvert au travail</Traduire>
            </p>
          </div>

          <span className="flex items-center gap-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
            <Traduire lang={langue}>DISPONIBLE</Traduire>
            <Check
              size={17}
              className="rounded-sm bg-green-600 text-white dark:bg-green-500"
            />
          </span>
        </motion.div>
      </section>

      {/* ==================== PROJETS EN VEDETTE ==================== */}
      <section
        ref={refProjets}
        className="
          w-full overflow-hidden bg-radial
          from-white to-gray-50
          px-4 py-14
          sm:px-6 sm:py-16
          lg:px-10
          xl:px-16
          dark:from-blue-900/30 dark:to-gray-950
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            projetsVisibles
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.7 }}
          className="
            mx-auto mb-8 flex w-full max-w-7xl
            flex-col items-start justify-between gap-4
            sm:flex-row sm:items-center
          "
        >
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl lg:text-4xl dark:text-gray-100">
            <Traduire lang={langue}>Projets en vedette</Traduire>
          </h2>

          <NavLink
            to="/projet"
            className="
              inline-flex items-center gap-2 text-base
              font-semibold text-blue-600 transition-colors
              hover:text-blue-800 sm:text-lg
              dark:hover:text-blue-400
            "
          >
            <Traduire lang={langue}>Voir tous les projets</Traduire>
            <ArrowRight size={18} />
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            projetsVisibles
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            mx-auto grid max-w-7xl
            grid-cols-1 justify-items-center gap-6
            lg:gap-8 xl:grid-cols-2
            px-4
          "
        >
          {/* Projet Make My Lemonade */}
          <Carte className="relative flex h-full min-w-0 flex-col overflow-hidden">
            <img
              src={Site_debut}
              alt="Aperçu du site Make My Lemonade"
              loading="lazy"
              className="h-48 w-full object-cover object-top sm:h-56 lg:h-64"
            />

            <div className="absolute left-0 right-0 top-0 flex items-center justify-between gap-2 px-3 py-3">
              <Cadre variant="Secondaire">
                <Traduire lang={langue}>Web</Traduire>
              </Cadre>

              <Cadre variant="dernier">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <Traduire lang={langue}>En cours</Traduire>
              </Cadre>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-gray-100">
                  Make My Lemonade
                </h3>
                <p className="mt-1 text-xs font-medium tracking-widest text-gray-500 sm:text-sm dark:text-gray-400">
                  <Traduire lang={langue}>SITE E-COMMERCE</Traduire>
                </p>
              </div>
            

              <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                <Traduire lang={langue}>
                  Site e-commerce permettant de présenter les produits et
                  de faciliter les achats en ligne.
                </Traduire>
              </p>

              <div className="flex flex-wrap gap-2">
                <Cadre>HTML</Cadre>
                <Cadre>CSS</Cadre>
                <Cadre>JavaScript</Cadre>
                <Cadre>Laravel</Cadre>
              </div>

              <div className="mt-auto pt-2">
                <Lien
                  href="https://collins-gaucher.github.io/Nouveau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ternaire"
                  taille="lg"
                >
                  <Traduire lang={langue}>Voir le projet</Traduire>
                  <ArrowRight size={18} />
                </Lien>
              </div>
            </div>
          </Carte>

          {/* Projet Voyage Elite */}
          <Carte className="relative flex h-full min-w-0 flex-col overflow-hidden">
            <img
              src={Site_voyage}
              alt="Aperçu du site Voyage Elite"
              loading="lazy"
              className="h-48 w-full object-cover object-top sm:h-56 lg:h-64"
            />

            <div className="absolute left-0 right-0 top-0 flex items-center justify-between gap-2 px-3 py-3">
              <Cadre variant="Secondaire">
                <Traduire lang={langue}>Web</Traduire>
              </Cadre>

              <Cadre variant="dernier">
                <Traduire lang={langue}>Terminé</Traduire>
              </Cadre>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-gray-100">
                  Voyage Elite
                </h3>
                <p className="mt-1 text-xs font-medium tracking-widest text-gray-500 sm:text-sm dark:text-gray-400">
                  <Traduire lang={langue}>SITE VITRINE</Traduire>
                </p>
              </div>

              <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                <Traduire lang={langue}>
                  Site vitrine permettant de présenter l'entreprise et de
                  faciliter la prise de contact par e-mail.
                </Traduire>
              </p>

              <div className="flex flex-wrap gap-2">
                <Cadre>TypeScript</Cadre>
                <Cadre>Tailwind CSS</Cadre>
              </div>

              <div className="mt-auto pt-2">
                <Lien
                  href="https://collins-gaucher.github.io/Voyage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ternaire"
                  taille="lg"
                >
                  <Traduire lang={langue}>Voir le projet</Traduire>
                  <ArrowRight size={18} />
                </Lien>
              </div>
            </div>
          </Carte>
        </motion.div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <motion.section
        ref={refContact}
        initial={{ opacity: 0, y: 20 }}
        animate={
          contactVisible
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.7 }}
        className="
          flex w-full flex-col items-center justify-center
          gap-6 border-y border-gray-300 px-4 py-16
          sm:gap-8 sm:px-6 sm:py-20
          dark:border-gray-700
        "
      >
        <Cadre variant="dispo">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <p className="text-sm sm:text-base">
            <Traduire lang={langue}>
              Disponible pour de nouveaux projets
            </Traduire>
          </p>
        </Cadre>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
          <span>Collins</span>
          <span className="h-1 w-1 rounded-full bg-gray-500" />
          <Traduire lang={langue}>Douala, Cameroun</Traduire>
        </div>

        <div className="text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
          <p>
            <Traduire lang={langue}>Vous avez un projet ?</Traduire>
          </p>
          <p>
            <Traduire lang={langue}>Parlons-en.</Traduire>
          </p>
        </div>

        <p className="w-full max-w-3xl text-center text-base font-medium leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
          <Traduire lang={langue}>
            Créatif et logique, j'aime bâtir des systèmes robustes et
            accessibles. Peu importe le projet web, je suis partant.
          </Traduire>
        </p>

        <div className="flex max-w-md flex-col items-stretch justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
          <A taille="lg" to="/contact" className="mx-auto">
            <Traduire lang={langue}>Me contacter</Traduire>
            <ArrowRight size={18} />
          </A>

          <Lien
            href="mailto:collinsgaucher@gmail.com"
            variant="secondaire"
            taille="lg"
          >
            <Mail size={18} />
            <span className="break-all">collinsgaucher@gmail.com</span>
          </Lien>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600 sm:text-base dark:text-gray-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            <Traduire lang={langue}>Disponible en freelance</Traduire>
          </div>

          <div className="flex items-center gap-2">
            <Zap size={18} className="shrink-0 text-yellow-500" />
            <Traduire lang={langue}>Répond sous 24 h</Traduire>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} className="shrink-0 text-red-600" />
            <Traduire lang={langue}>À distance</Traduire>
            <span className="text-gray-500">·</span>
            <span>Douala</span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Accueil;