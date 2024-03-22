import About from "@/components/About"
import BottomNav from "@/components/BottomNav"
import Compnay from "@/components/Compnay"
import Furniture from "@/components/Furniture"
import Navbar from "@/components/Navbar"
function page() {
  return (
    <div className="container">
      <Navbar />
      <BottomNav />
      <Compnay />
      <About />
      <Furniture />
    </div>
  )
}

export default page