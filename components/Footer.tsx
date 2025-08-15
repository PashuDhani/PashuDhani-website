
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="section py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold">Product</div>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#">Docs</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Resources</div>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#">About</a></li>
            <li><a href="#contact">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div className="section py-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <div>© {new Date().getFullYear()} PashuDhani</div>
        <div>Built with Next.js + Tailwind + Framer Motion</div>
      </div>
    </footer>
  );
}
