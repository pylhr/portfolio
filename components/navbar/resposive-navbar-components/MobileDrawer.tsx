import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { LogoLink } from './LogoLink';
export function MobileDrawer({ isOpen, onClose }) {
    return (
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute right-7 top-2 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-3xl" icon={faXmark} />
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
          <li onClick={onClose}>
            <LogoLink  />
          </li>
        <li>
                    <Link href="/blog" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" onClick={onClose}
                        >Blog</Link>
                </li>
                <li>
                    <Link href="/projects" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" onClick={onClose}
                        >Projects
                    </Link>
                </li>
                <li>
                    <Link href="/writings" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" onClick={onClose}
                        >Writings
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" onClick={onClose}
                        >Contact</Link>
                </li>
                <li>
                    <Link href="/about" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" onClick={onClose}
                        >About</Link>
                </li>
          {/* Add other navigation links */}
        </ul>
      </div>
    );
  }