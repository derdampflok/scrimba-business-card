import Header from "./components/Header"
import Info from "./components/Info"
import Socials from "./components/Socials"
import "./App.css"


function App() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Info  />
        <Socials />
      </div>
    </div>
  )
}

export default App
