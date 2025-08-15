
import AnimatedSection from "./AnimatedSection";

export default function Pricing() {
  return (
    <section id="pricing" className="section py-12 md:py-20">
      <div className="text-center mb-10 md:mb-14">
        <span className="badge">Pricing</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">Simple, transparent plans</h2>
        <p className="mt-2 text-gray-600">Start free. Upgrade as you grow.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {["Free", "Pro", "Business"].map((tier, i) => (
          <AnimatedSection key={tier} delay={i * 0.05}>
            <div className="card p-6 md:p-8 h-full flex flex-col">
              <h3 className="text-xl font-semibold">{tier}</h3>
              <p className="text-4xl font-extrabold mt-2">{i==0?"₹0":"₹" + (i==1?"299":"999")}<span className="text-base font-normal text-gray-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• Unlimited browsing of melas</li>
                <li>• Online registration</li>
                <li>• Basic support</li>
              </ul>
              <div className="mt-6">
                <a href="#cta" className="btn-primary w-full">Choose {tier}</a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
