import Footer from "@/components/Footer";
import Form from "@/components/Form/Form";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Rino Bago for inquiries, support, or feedback. I'm here to help and look forward to hearing from you.",
};

const page = () => {
    return (
        <>
            <Navbar></Navbar>
            <Form></Form>
            <Footer></Footer>
        </>
    );
};

export default page;
