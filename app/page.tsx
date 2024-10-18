'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import{FaMoon, FaSun} from 'react-icons/fa'

const techSkills = [
    { name: 'JavaScript', info: 'Expérience en développement front-end/back-end avec Node.js et Angular' },
    { name: 'HTML/CSS', info: 'Création de sites web responsives et esthétiques' },
    { name: 'PHP', info: 'Développement de sites web avec Laravel utilisant une API' },
    { name: 'SQL', info: 'Gestion de bases de données relationnelles : PSQL, SQLite' },
    { name: 'Python', info: 'Scripting, analyse de données et machine learning' },
    { name: 'Java', info: 'Développement d\'applications et utilisation de JavaFX' },
    { name: 'C#', info: 'Développement de jeux avec Unity' },
    { name: 'Git', info: 'Contrôle de version et collaboration sur des projets (GitLab)' }
]

const softSkills = [
    { name: 'Communication', info: 'Capacité à exprimer clairement des idées complexes' },
    { name: 'Travail d\'équipe', info: 'Collaboration efficace dans des environnements multidisciplinaires' },
    { name: 'Résolution de problèmes', info: 'Approche analytique et créative pour surmonter les défis' },
    { name: 'Adaptabilité', info: 'Flexibilité face aux changements rapides de technologie et de méthodologie' },
    { name: 'Gestion du temps', info: 'Priorisation efficace des tâches et respect des délais' },
    { name: 'Apprentissage continu', info: 'Passion pour l\'acquisition de nouvelles compétences et technologies' },
    { name: 'Leadership', info: 'Capacité à guider et motiver une équipe vers un objectif commun' },
    { name: 'Créativité', info: 'Approche innovante dans la conception de solutions' }
]

const projects = [
    { title: 'Collaborative Website', description: 'Dans le contexte du marathon du web, j\'ai pu travailler avec une équipe de 9 membres : 4 Infos et 5 MMI afin de réaliser un site internet en 48h.\n' +
            '\n' +
            'Ce site internet regroupe des histoires interactives où le héros est le lecteur. Il doit faire des choix qui influenceront la suite de l\'histoire. '
    },
    {
        title: 'Unity Game',
        description: 'Ce projet est un jeu incrémental en 3D, développé en C# sur Unity. Le jeu offre une expérience à la troisième personne, où les joueurs peuvent évoluer de manière satisfaisante et addictive. Le but était de tester et d\'approfondir mes compétences en C# et en développement de jeux Unity. C\'était un défi intéressant qui a renforcé ma passion pour le développement de jeux vidéos.'
    },
    { title: 'Python Race Car Game', description: ' Ce projet personnel a été réalisé en Python. Il s\'agit d\'un jeu de courses qui demande à l\'utilisateur de faire les bons choix pour gagner les duels.\n' +
            '\n' +
            'Afin d\'avoir un jeu réaliste et varié, j\'ai récupéré les données du jeu de course Forza Horizon 5 sur le wiki de Fandom. J\'ai ensuite créé un fichier CSV avec les données, afin de récuperé les informations en direct via des fonctions. En effet, 3 voitures sont tirées aléatoirement pour chaque duel, l\'utilisateur doit choisir la voiture qui a le plus de chance de gagner contre son adversaire.'
    },
    {
        title: 'Portfolio Website',
        description: 'Ce site internet, codé en Next.js et tailwind CSS, est particulièrement écoresponsable. Aucune image n\'est utilisée pour minimiser le temps de chargement et l\'utilisation de la bande passante. De plus, le code a été optimisé pour assurer une performance maximale, réduisant ainsi l\'utilisation des ressources et, par conséquent, son empreinte carbone.'
    }
]

export default function Home() {
    const [openTechPopover, setOpenTechPopover] = useState<string | null>(null)
    const [openSoftPopover, setOpenSoftPopover] = useState<string | null>(null)
    const { theme, setTheme } = useTheme()

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            {/* Header */}
            <header className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-sm">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white"
                          onClick={(e) => scrollToSection(e, 'about')}>Ethan COPIN</Link>
                    <ul className="flex space-x-4 items-center">
                        <li><Link href="#skills"
                                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                  onClick={(e) => scrollToSection(e, 'skills')}>Compétences</Link></li>
                        <li><Link href="#projects"
                                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                  onClick={(e) => scrollToSection(e, 'projects')}>Projets</Link></li>
                        <li><Link href="#contact"
                                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                  onClick={(e) => scrollToSection(e, 'contact')}>Contact</Link></li>
                        <li>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="ml-4"
                            >
                                <FaSun
                                    className="h-[1.5rem] w-[1.5rem] text-yellow-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                                <FaMoon
                                    className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <section id="about" className="text-center py-20">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Ethan COPIN</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Développeur informatique | en Alternance chez{" "}
                        <a className="underline" href="https://talan.com/" target="_blank" rel="noopener noreferrer">
                            Talan
                        </a>
                    </p>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Étudiant en 3ème année de BUT Informatique, je suis passionné par la programmation et la
                        technologie moderne, notamment l&apos;intelligence artificielle.
                    </p>
                </section>

                {/* TechSkills Section */}
                <section id="skills" className="py-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Mes compétences
                        informatiques</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {techSkills.map((skill) => (
                            <Popover key={skill.name} open={openTechPopover === skill.name}
                                     onOpenChange={(open) => setOpenTechPopover(open ? skill.name : null)}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center hover:border-gray-200 dark:hover:border-gray-600 transition-colors duration-200"
                                    >
                                        <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-64 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{skill.info}</p>
                                </PopoverContent>
                            </Popover>
                        ))}
                    </div>
                </section>

                {/* Soft Skills Section */}
                <section className="py-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Mes compétences humaines</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {softSkills.map((skill) => (
                            <Popover key={skill.name} open={openSoftPopover === skill.name} onOpenChange={(open) => setOpenSoftPopover(open ? skill.name : null)}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-64 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{skill.info}</p>
                                </PopoverContent>
                            </Popover>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Mes Projets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Me Contacter</h2>
                    <div className="flex justify-center space-x-6">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText('copinethan@gmail.com')
                            alert('Adresse e-mail copiée dans le presse-papier');
                        }} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="size-6">
                                <path
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                            </svg>
                        </a>
                        <a href="https://fr.linkedin.com/in/ethan-copin" target="_blank" rel="noopener noreferrer"
                           className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                    <path
                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 dark:bg-gray-900 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Ethan COPIN. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}