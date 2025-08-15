
import AnimatedSection from "./AnimatedSection";
import { MapPinned, Tag, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: MapPinned,
    title: "Cattle melas nearby.",
    desc: "Easily discover local cattle fair schedules and locations in one place."
  },
  {
    icon: Tag,
    title: "Buy & register cattle.",
    desc: "List, buy, and officially register cattle purchases entirely online."
  },
  {
    icon: ShieldCheck,
    title: "Tag, insure & care.",
    desc: "Access cattle tagging, insurance, and local vet services for peace of mind."
  }
];

export default function Features() {
  return (
    <section id="features" className="section py-12 md:py-20">
      <div className="text-center mb-10 md:mb-14">
        <span className="badge">Features</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <div className="card p-6 md:p-8 h-full">
              <f.icon className="w-8 h-8 mb-4" aria-hidden />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
