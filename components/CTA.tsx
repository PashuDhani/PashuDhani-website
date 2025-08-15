
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section id="cta" className="section py-16 md:py-24">
      <AnimatedSection>
        <div className="card p-8 md:p-12 text-center bg-gradient-to-br from-brand-50 to-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">Get started with PashuDhani</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">Sign up today to simplify your livestock management.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="btn-primary px-6 py-3">Sign Up Free</a>
            <a href="#contact" className="btn-ghost px-6 py-3">Contact Sales</a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
