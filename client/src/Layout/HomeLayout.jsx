import Footer from "../components/Footer"
import Header from "../components/Header"

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen">
    <Header />
    
    <div className="absolute bottom-0 w-full">
        <Footer />
    </div>
</div>
  )
}

export default HomeLayout