import React from 'react'
import { motion } from 'framer-motion'
// import Photo from '../assets/Photo-Profil.png'
import Logo_blanc from '../assets/Logo-blanc.png'
import Logo_noir from '../assets/favicon-dark.ico'
import { NavLink, Outlet, ScrollRestoration } from 'react-router'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import Traduire from './Traduires'
import { Bouton } from '../UI/BoutonNavbar'
import { Boutons } from '../UI/Bouton'
import { useClickAilleurs } from '../hooks/useClickAilleurs'
import Footer from './Footer'
import { FaWhatsapp } from 'react-icons/fa'
import Scroll from './Scroll'

const Navbar = () => {
    // Etat du scroll pour changer le style du navbar
    const [scrolled, setScrolled] = React.useState(false)

    // Etat pour gerer l'ouverture et la fermeture du menu mobile 
    const [ouvert, SetOuvert] = React.useState(false)

    // Activer le background du navbar lorsque l'utilisateur scroll vers le bas
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Gerer le changement de theme nuit/jour 
    const [isDark, setIsDark] = React.useState(() => {
        // Verifie si le theme nuit est deja presente au moment de l'initialisation 
        if(typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
            return true
        }
        // Recupere le theme choisit par l'utilisateur 
        const sauvegardeTheme = localStorage.getItem("theme")
        if (sauvegardeTheme) {
            return sauvegardeTheme === "dark"
        }
        // sinon on lit lit la preference du systeme ou navigateur 
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    // Mettre a jour la classe dark du site et sauvegarder la preference 
    React.useEffect(() => {
        if(isDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
        return 
    }, [isDark])

    // Ecouter les changements en direct du systeme 
    React.useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => {
            // Uniquement si l'utilisateur n'a pas choisir manuellement le theme 
            if(!localStorage.getItem("theme")) {
                setIsDark(e.matches)
            }
        }
        media.addEventListener("change", handleChange)
        return () => media.removeEventListener("change", handleChange)
    }, [])

    // Lague courante fr par defaut 
    const [langue, setLangue] = React.useState<"fr" | "en">(() => {
        return (localStorage.getItem("app_langue") as "fr" | "en") || "fr"
    })

    const changementLangue = () => {
        const prochaineLangue = langue === "fr" ? "en" : "fr"
        setLangue(prochaineLangue)
        localStorage.setItem("app_langue", prochaineLangue)
    }

    // Reference pour le contenu du menu 
    const menuRef = React.useRef<HTMLElement | null>(null)

    // Fonction pour fermer le menu 
    const fermetureMenu = () =>SetOuvert(false)

    // Fermeture auto lors d'un click en dehors du menuRef 
    useClickAilleurs(menuRef, fermetureMenu, ouvert)

    // Constate pour dire qu'on est present sur le menu choisir 
    const ActifMenu = ({isActive}: {isActive: boolean}) => (
        `h-full flex items-center hover:text-black dark:hover:text-white transition-colors duration-300 ${
        isActive ? 'border-b-3 border-blue-600 text-black dark:text-white' : ''}`
    )

    // Configurer le bouton pour telecharger mon cv
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/CV LONFOUO NAHA COLLINS.pdf' 
        link.download = 'CV LONFOUO NAHA COLLINS.pdf' 
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    // Configurer le lien whatsap 
   const Whatsap = `https://wa.me/237658599369?text=${encodeURIComponent("Bonjour Monsieur Collins, je souhaite échanger sur un projet.")}`
    
  return (
    <>
        <ScrollRestoration/>
        
        <header ref={menuRef} className={`h-25 w-full fixed top-0 left-0 z-50 transition-all duration-300 flex items-center justify-between px-8 border-y dark:border-gray-800 border-gray-200 ${scrolled ? 'bg-gray-100/90 dark:bg-gray-950/90': ''}`}
        >

            {/* Mise en place du logo avec animation d'apparition et de translation */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <NavLink to="/" end className='flex items-center gap-2'> 
                    {
                        isDark ? <img src={Logo_noir} alt="Logo du portfolio de Collins" className='w-15 h-15 rounded-lg' loading='lazy'/> :
                        <img src={Logo_blanc} alt="Logo du portfolio de Collins" className='w-15 h-15 rounded-lg' loading='lazy'/>
                    }
                    <span className='flex items-center font-bold text-2xl tracking-wider dark:text-white text-black' aria-label=''><p className='text-blue-600'>C</p>ollins<p className='text-blue-600'>.</p></span>
                </NavLink>
            </motion.div>

            {/* Mise en place du menu nav pour mobile */}
            <div className='flex items-center gap-2 xl:hidden'>
                {/* Bouton mode jour/nuit  */}
                <Bouton onClick={() => setIsDark(!isDark)}>
                    { isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Bouton>
                {/* Bouton langue fr/en  */}
                <Bouton onClick={changementLangue}>
                    <span className='font-bold text-sm'>{langue === "fr" ? "EN" : "FR"}</span>
                </Bouton>
                {/* Bouton de menu pour ecran mobile  */}
                <Bouton onClick={() => SetOuvert((prev) => !prev)} className='btn-toggle-menu'>
                    {ouvert? <X size={30}/> : <Menu size={30}/> }
                </Bouton>
                {ouvert && (
                    <nav className='z-50 absolute flex flex-col justify-center items-center left-0 text-2xl gap-8 py-6 w-full top-24 border-y dark:border-gray-800 border-gray-200 text-gray-600 dark:text-gray-400 bg-gray-100/90 dark:bg-gray-950/90 font-semibold '>
                        <NavLink 
                            to="/" end 
                            className={`hover:text-black dark:hover:text-white transition-colors duration-300`}
                            onClick={fermetureMenu}
                        >
                            <Traduire lang={langue}>Accueil</Traduire>
                        </NavLink>
                        <NavLink 
                            to="/propos" 
                            onClick={fermetureMenu}
                            className={`hover:text-black dark:hover:text-white transition-colors duration-300`}
                        >
                            <Traduire lang={langue}>A propos</Traduire>
                        </NavLink>
                        <NavLink 
                            to="/projet" 
                            onClick={fermetureMenu}
                            className={`hover:text-black dark:hover:text-white transition-colors duration-300`}
                        >
                            <Traduire lang={langue}>Projet</Traduire>
                        </NavLink>
                        <NavLink 
                            to="/competences" 
                            onClick={fermetureMenu}
                            className={`hover:text-black dark:hover:text-white transition-colors duration-300`}
                        >
                            <Traduire lang={langue}>Compétences</Traduire>
                        </NavLink>
                        <NavLink 
                            to="/contact"
                            onClick={fermetureMenu} 
                            className={`hover:text-black dark:hover:text-white transition-colors duration-300`}
                        >
                            <Traduire lang={langue}>Contact</Traduire>
                        </NavLink>
                        <Boutons onClick={handleDownload}>
                            <Traduire lang={langue}>Télécharger CV</Traduire> <Download />
                        </Boutons>
                </nav>
                )}
            </div>

            {/* Mise en place du menu nav pour gand ecran */}
                {/* Menu de navigation */}
                <nav className='h-full hidden justify-center items-center text-xl gap-12 text-gray-500 dark:text-gray-400 font-semibold xl:flex'>
                    <NavLink 
                        to="/" end 
                        className={ActifMenu}
                    >
                        <Traduire lang={langue}>Accueil</Traduire>
                    </NavLink>
                    <NavLink 
                        to="/propos" 
                        className={ActifMenu}
                    >
                        <Traduire lang={langue}>A propos</Traduire>
                    </NavLink>
                    <NavLink 
                        to="/projet" 
                        className={ActifMenu}
                    >
                        <Traduire lang={langue}>Projet</Traduire>
                    </NavLink>
                    <NavLink 
                        to="/competences" 
                        className={ActifMenu}
                    >
                        <Traduire lang={langue}>Compétences</Traduire>
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={ActifMenu}
                    >
                        <Traduire lang={langue}>Contact</Traduire>
                    </NavLink>
                    
                </nav>
                <div className='hidden items-center gap-4 xl:flex'>
                    {/* Bouton mode jour/nuit  */}
                <Bouton onClick={() => setIsDark(!isDark)}>
                    { isDark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
                </Bouton>
                {/* Bouton langue fr/en  */}
                <Bouton onClick={changementLangue}>
                    <span className='font-bold text-sm'>{langue === "fr" ? "EN" : "FR"}</span>
                </Bouton>
                {/* Bouton pour telecharger mon cv  */}
                <Boutons onClick={handleDownload}>
                    <Traduire lang={langue}>Télécharger CV</Traduire> <Download />
                </Boutons>
                </div>
            {/* </div> */}


        </header>

        <main className='pt-25'>

            {/* Lien pourla messagerie whatsap  */}
            <a 
              href={Whatsap}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              className='z-60 h-15 w-15 rounded-full bg-green-400 flex items-center justify-center text-white cursor-pointer fixed bottom-30 right-10 hover:scale-110 transition-all duration-400'
            >
                <FaWhatsapp size={40}/>
            </a>

            <Scroll/>

            <Outlet context={{langue}}/>

        </main>
        <Footer langue={langue}/>
    </>
  )
}

export default Navbar
