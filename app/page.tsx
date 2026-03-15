import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import CTA from "@/components/page1/CTA";
import Hero from "@/components/page1/Hero";
import Stats from "@/components/page1/Stats";
import Testimonials from "@/components/page1/Testimonials";


export default function Home(){

  return(

    <>
      <Hero/>
      <Stats/>
      <FeaturedWork/>
      <Testimonials/>
      <CTA/>
    </>

  )

}