import About from "@/components/About"
import BottomNav from "@/components/BottomNav"
import Compnay from "@/components/Compnay"
import Navbar from "@/components/Navbar"
function page() {
  return (
    <div className="container">
      <Navbar />
      <BottomNav />
      <Compnay />
      <About />
    </div>
  )
}

export default page