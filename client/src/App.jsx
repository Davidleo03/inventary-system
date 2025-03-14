import VerticalMenu from "./components/VerticalMenu"


import "./styles/App.css"

export default function App() {
  return (
    <div className="app-container">
      <VerticalMenu/>
      <main className="main-content">
        <h1>Main Content</h1>
        <p>
          This is the main content area. The vertical menu on the left will stay fixed as you scroll down this page.
        </p>
        
      </main>
    </div>
  )
}


