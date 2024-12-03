import About from "./components/About";
import Creator from "./components/Creator";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="max-h-full min-h-[100vh] bg-[#e6e7ee]" id="home">
      <Navbar />
      <main className="px-[10rem] relative">
        <div className="h-[8rem] w-[8rem] ball-gradient rounded-full absolute left-16 top-10"></div>
        <div className="h-[5rem] w-[5rem] ball-gradient rounded-full absolute left-[12rem] top-[15rem]"></div>
        <div className="h-[5rem] w-[5rem] ball-gradient rounded-full absolute left-[20rem] bottom-[2rem]"></div>
        <div className="h-[7rem] w-[7rem] ball-gradient rounded-full absolute right-0 bottom-[2rem]"></div>
        <div className="h-[6rem] w-[6rem] ball-gradient rounded-full absolute right-[5rem] top-[2rem]"></div>
        <section className="flex tracking-wider py-[5rem]">
          <div className="mt-[4.5rem] relative p-5 shadow-outer ">
            <img
              src="HomePageImg.png"
              className="rounded-l-full relative -right-[5rem] rounded-tr-[950rem] rounded-br-[150rem]"
              alt=""
              width={650}
            />
          </div>
          <div className="flex flex-col items-end relative text-8xl font-semibold gap-8 -ml-[6rem] font-poppins">
            <h1 className="">Create Your</h1>
            <h1 className="text-gradient">Content</h1>
            <h1 className=" ">Here</h1>
            <button className=" ml-[10rem] gradient text-white text-lg w-max px-10 py-5 rounded-full">Get Started</button>
          </div>
        </section>
      </main>
      <About/>
      <Creator/>
      <Footer/>
    </div>
  );
}
