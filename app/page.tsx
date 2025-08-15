
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <section id="contact" className="section py-16">
        <div className="card p-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-gray-600">Email: hello@pashudhani.example</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
