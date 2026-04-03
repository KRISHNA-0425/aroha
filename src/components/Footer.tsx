import { Link } from "react-router-dom";
import arohaLogo from "@/assets/aroha-logo.jpeg";

const Footer = () => (
  <footer className="section-padding bg-[#070546] border-t border-[#3D3B63]/40 relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#9E8EB3]/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#3D3B63]/20 blur-3xl translate-x-1/4 translate-y-1/4" />

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={arohaLogo} alt="Aroha" className="h-16 w-auto rounded mb-4" />
          <p className="text-base font-semibold text-[#D9D9D9] leading-relaxed">
            Inner Balance &amp; Life Transitions
          </p>
          <p className="text-base font-medium text-[#9E8EB3] mt-2 leading-relaxed">
            A calm space for reflection, clarity, and emotional grounding.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-lg font-bold text-[#E8E3F7] mb-4 uppercase tracking-wider">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "How I Work", path: "/approach" },
              { label: "Services", path: "/services" },
              { label: "Reflections", path: "/reflections" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-base font-semibold text-[#9E8EB3] hover:text-[#E8E3F7] hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans text-lg font-bold text-[#E8E3F7] mb-4 uppercase tracking-wider">Connect</h4>
          <Link
            to="/contact"
            className="text-base font-semibold text-[#9E8EB3] hover:text-[#E8E3F7] hover:translate-x-1 transition-all duration-300 w-fit"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-[#3D3B63]/40 text-center">
        <p className="text-sm font-bold text-[#9E8EB3]/70">
          © {new Date().getFullYear()} Aroha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
