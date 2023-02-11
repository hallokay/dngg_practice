import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from "./Footer"
import '../App.css'
const Layout = () => {
  return (
    <>
        <Header />
        <main className="App">
            <Outlet/>
        </main>
        <Footer />
    </>
  )
}

export default Layout