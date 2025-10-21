import About from "@/components/About";
import AdditionalServices from "@/components/AdditionalServices";
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
        </>
    );
};

export default Page;
