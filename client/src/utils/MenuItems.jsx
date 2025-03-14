import { Home, PackageSearch, User, Settings, HelpCircle, FileText } from "lucide-react"

// Sample menu items with icons
const menuItems = [
    { text: "Home", url: "#home", icon: <Home size={18} /> },
    { text: "Productos", url : "#productos", icon : <PackageSearch size={18} />},
    { text: "Profile", url: "#profile", icon: <User size={18} /> },
    { text: "Documents", url: "#documents", icon: <FileText size={18} /> },
    { text: "Settings", url: "#settings", icon: <Settings size={18} /> },
    { text: "Help", url: "#help", icon: <HelpCircle size={18} /> },
]


export default menuItems