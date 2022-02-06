import Home from './components/home/home'
import './App.css'
import Footer from './components/footer/footer'
// import NavbarComponent from './components/head_sec/NavbarComponent'
import Header from './components/head_sec/Header'
import Cse from './components/departments/cse'

function App() {

  return (
    <div className="App">
         {/* <Header /> */}
         {/* <Home /> */}
         <Cse />
         <Footer />
    </div>
  )
}

export default App
