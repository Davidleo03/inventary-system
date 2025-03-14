"use client"
import { useState, useEffect } from "react"


const useMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    // Check if we're on a mobile device
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
            // Auto-close menu on mobile when page loads
            if (window.innerWidth < 768) {
                setIsMenuOpen(false)
            } else {
                setIsMenuOpen(true)
            }
        }

        // Initial check
        checkIfMobile()

        // Add event listener for window resize
        window.addEventListener("resize", checkIfMobile)

        // Clean up
        return () => window.removeEventListener("resize", checkIfMobile)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return { toggleMenu, isMenuOpen, isMobile}
}


export default useMenu;