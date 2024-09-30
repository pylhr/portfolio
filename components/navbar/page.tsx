'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import { LogoLink } from './resposive-navbar-components/LogoLink'
import { MobileMenuButton } from './resposive-navbar-components/MobileMenuButton'
import { MobileDrawer } from './resposive-navbar-components/MobileDrawer'
const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };
  return (
    <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
    <div className="relative pt-6 pb-16 sm:pb-24">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/"><span className="sr-only">PYLHR</span>
                        <img className="w-auto h-8 sm:h-10" src="https://svgshare.com/i/16fj.svg" loading="lazy" width="202" height="40" />
                    </Link>
                    
                </div>
            </div>
            <div className="hidden md:flex md:space-x-10 list-none">
            <li>
                    <Link href="/scholarium" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        >Scholarium
                    </Link>
                </li>
                <li>
                    <Link href="/equinox-ai" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        >Equinox AI
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        >Blog</Link>
                </li>
                <li>
                    <Link href="/notebooks" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        >My Notebooks
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        >Projects
                    </Link>
                </li>
                <li>
                    <Link href="/writings" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        >Writings
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        >Contact</Link>
                </li>
                <li>
                    <Link href="/about" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        >About</Link>
                </li>
            </div>
            { /*<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <div className="inline-flex rounded-full shadow">
                    <Link href="/guestbook"
                        className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 ">
                        Guestbook
  </Link> 
                </div>
  </div> */}
            <div className="sm:hidden relative flex flex-row my-4">
            
            <MobileMenuButton onClick={handleDrawerToggle} />
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
          </div>
        </nav>
    </div>
</div>
    </header>
  )
}

export default Navbar