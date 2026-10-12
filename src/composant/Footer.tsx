// import React from 'react'
import Logo_blanc from '../assets/Logo-blanc.png'
import Logo_noir from '../assets/favicon-dark.ico'
import { NavLink } from 'react-router'
import { Lien } from '../UI/Lien'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MapPin, Phone } from 'lucide-react'
import { Cadre } from '../UI/Cadre'
import Traduire from './Traduires'

// Definition du type de contexte transmis par Outlet 
interface ContexteType {
  langue: "fr" | "en"
}

function Footer({langue}: ContexteType) {
  
  return (
    <footer className='bg-gray-200/40 dark:bg-blue-950/10 p-8 py-30 sm:p-30 flex flex-col gap-16'>

        <div className='flex justify-between items-start flex-col xl:flex-row gap-16'>
            <div className='flex flex-col items-start gap-4'>
            <div className='flex items-flex gap-2'>
                <img src={Logo_noir} alt="Logo du portfolio de Collins" className='w-15 h-15 rounded-lg hidden dark:block' loading='lazy'/>
                <img src={Logo_blanc} alt="Logo du portfolio de Collins" className='w-15 h-15 rounded-lg block dark:hidden' loading='lazy'/>
                <span className='flex items-center font-bold text-2xl tracking-wider dark:text-white text-black' aria-label=''><p className='text-blue-600'>C</p>ollins<p className='text-blue-600'>.</p></span>
            </div>

            <span className='text-gray-600 dark:text-gray-400 text-xl font-semibold'><Traduire lang={langue}>Dévellopeur Web Full Stack</Traduire></span>
            <div className='w-fit flex items-center gap-2'>
                <Lien variant={'reseau'} taille={'sm1'} href='https://www.linkedin.com/in/collins-lonfouo-naha-656610337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'><FaLinkedinIn size={20}></FaLinkedinIn></Lien>
                <Lien variant={'reseau'} taille={'sm1'} href='https://github.com/collins-gaucher'><FaGithub size={20}></FaGithub></Lien>
            </div>
        </div>

        <div className='flex flex-col items-start gap-4'>
            <h3 className='text-2xl text-gray-900 dark:text-gray-100 font-semibold'><Traduire lang={langue}>LIENS RAPIDES</Traduire></h3>
            <nav className='flex flex-col text-xl gap-4 text-gray-600 dark:text-gray-400 font-semibold '>
                <NavLink 
                    to="/" end 
                    className={`hover:text-black dark:hover:text-white transition-colors duration-800`}
                >
                    <Traduire lang={langue}>Accueil</Traduire>
                </NavLink>
                <NavLink 
                    to="/propos" 
                    className={`hover:text-black dark:hover:text-white transition-colors duration-800`}
                >
                    <Traduire lang={langue}>A propos</Traduire>
                </NavLink>
                <NavLink 
                    to="/projet" 
                    className={`hover:text-black dark:hover:text-white transition-colors duration-800`}
                >
                    <Traduire lang={langue}>Projet</Traduire>
                </NavLink>
                <NavLink 
                    to="/competences" 
                    className={`hover:text-black dark:hover:text-white transition-colors duration-800`}
                >
                    <Traduire lang={langue}>Compétences</Traduire>
                </NavLink>
                <NavLink 
                    to="/contact"
                    className={`hover:text-black dark:hover:text-white transition-colors duration-800`}
                >
                    <Traduire lang={langue}>Contact</Traduire>
                </NavLink>
                </nav>
        </div>

        <div className='flex flex-col items-start gap-4'>
            <h3 className='text-2xl text-gray-900 dark:text-gray-100 font-semibold'>CONTACT</h3>
            <span className='flex items-center text-gray-600 dark:text-gray-400 text-lg font-semibold gap-2'><Phone/>+237 658 599 369</span>
            <span className='flex items-center text-gray-600 dark:text-gray-400 text-lg font-semibold gap-2'><MapPin/><Traduire lang={langue}>Douala, Cameroun</Traduire></span>
            <Cadre variant={'dispo'}>
                <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse'></span>
                <p><Traduire lang={langue}>Ouvert au travail</Traduire></p>
            </Cadre>
        </div>

        </div>

        <div className='h-0.5 w-full bg-gray-300 dark:bg-blue-900'></div>

        <div className='flex flex-col items-center justify-between font-semibold text-xl md:flex-row gap-8'>
            <span className='text-gray-600 dark:text-gray-400'>LNC © 2026</span>
            <span className='text-gray-600 dark:text-gray-400'>Designed & Built by Collins</span>
        </div>

    </footer>
  )
}

export default Footer
