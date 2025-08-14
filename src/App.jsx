import Navbar from './component/Navbar'
import Manager from './component/Manager'
import Footer from './component/Footer'
import './App.css'

function App() {

  return (
    <>
      {/* BG.IBELICK Background */}
      <div className="inset-0 -z-10 h-full w-full bg-green [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)]">
        <Navbar />
        <Manager />
        <Footer />
      </div>
    </>
  )
}

export default App
