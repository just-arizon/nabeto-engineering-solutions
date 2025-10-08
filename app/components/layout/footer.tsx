import { Building2, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Nabeto Engineering</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading engineering, procurement, construction, operation and maintenance services worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/policies" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">
                <a href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Engineering Design
                </a>
              </li>
              <li className="text-slate-300">
                <a href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Procurement Management
                </a>
              </li>
              <li className="text-slate-300">
                <a href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Construction Services
                </a>
              </li>
              <li className="text-slate-300">
                <a href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Operations & Maintenance
                </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">+234 (080) 335-46896</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">info@nabetoengineering.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">25, Eric Moore Close,
Surulere, Lagos.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 EPCM Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/policies" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/policies" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
