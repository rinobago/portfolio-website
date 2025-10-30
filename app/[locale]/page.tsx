import About from "@/components/About";
import AdditionalServices from "@/components/AdditionalServices";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ReachOut from "@/components/ReachOut";
import Ready from "@/components/Ready";
import Services from "@/components/Services";

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
