"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, className, children, onClick }) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link 
            href={href} 
            onClick={onClick}
            className={`${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-all py-1 ${className}`}
        >
            {children}
        </Link>
    )
}

export default NavLink;