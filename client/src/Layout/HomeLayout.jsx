import Footer from "../components/Footer"
import Header from "../components/Header"
import Signup from "../components/Signup"

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen">
    <Header />
    <Signup />
    
    <div className=" mt-[300px] bottom-0 w-full ">
        <Footer />
    </div>
</div>
  )
}

export default HomeLayout