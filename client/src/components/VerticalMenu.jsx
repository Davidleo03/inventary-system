import "../styles/VerticalMenu.css"
import { Menu, X } from "lucide-react"
import useMenu from "../hooks/useMenu"
import menuItems from "../utils/MenuItems"

const VerticalMenu = () => {
  const { toggleMenu, isMenuOpen, isMobile} = useMenu()
  

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        className="menu-toggle-btn"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* The menu itself */}
      <div className={`vertical-menu ${isMenuOpen ? "open" : "closed"}`}>
        <div className="menu-header">
          <h3>Menu</h3>
          {isMobile && (
            <button className="menu-close-btn" onClick={toggleMenu} aria-label="Close menu">
              <X size={20} />
            </button>
          )}
        </div>
        <nav className="menu-nav">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a href={item.url} className="menu-link">
                  {item.icon && <span className="menu-icon">{item.icon}</span>}
                  <span className="menu-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile to close menu when clicking outside */}
      {isMobile && isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  )
}

export default VerticalMenu



