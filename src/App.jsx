import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";

function App() {
    document.title = `MCMS - Home`;
  return (
    <div className="w-full">
        <Navbar/>
        <Outlet/>
        <div className="border-t border-gray-500 py-4 bg-[#1556924f]">
          <p className="text-center text-sm">© 2023 MCMS. All rights reserved. Developed by jabirstain3</p>
        </div>
    </div>
  )
}

export default App
