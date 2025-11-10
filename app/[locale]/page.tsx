import About from "@/components/About/About";
import AdditionalServices from "@/components/AdditionalServices/AdditionalServices";
import CtaSection from "@/components/CtaSection/CtaSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/ProjectsSection/Projects";
import ReachOut from "@/components/ReachOut/ReachOut";
import Ready from "@/components/Ready/Ready";
import Services from "@/components/ServicesSection/Services";

const Page = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Ready></Ready>
            <Services></Services>
            <ReachOut></ReachOut>
            <AdditionalServices></AdditionalServices>
            <CtaSection></CtaSection>
            <Footer></Footer>
        </>
    );
};

export default Page;
