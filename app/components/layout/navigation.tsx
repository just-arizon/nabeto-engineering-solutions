"use client"

import { Link } from "react-router"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Building2, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

   const servicesDropdown = [
    { href: "/services#engineering", label: "Engineering Design" },
    { href: "/services#procurement", label: "Procurement Management" },
    { href: "/services#construction", label: "Construction Services" },
    { href: "/services#operations", label: "Operations & Maintenance" },
  ]

  const projectsDropdown = [
    { href: "/projects#industrial", label: "Industrial Projects" },
    { href: "/projects#infrastructure", label: "Infrastructure" },
    { href: "/projects#energy", label: "Energy & Power" },
    { href: "/projects#case-studies", label: "Case Studies" },
  ]

  const policiesDropdown = [
    { href: "/policies#safety", label: "Safety Policies" },
    { href: "/policies#quality", label: "Quality Standards" },
    { href: "/policies#environmental", label: "Environmental" },
    { href: "/policies#compliance", label: "Compliance" },
  ]

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services", dropdown: servicesDropdown },
    { href: "/projects", label: "Projects", dropdown: projectsDropdown },
    { href: "/policies", label: "Policies", dropdown: policiesDropdown },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">Nabeto</span>
          </Link>

      {/* Desktop Navigation */}
<div className="hidden md:block">
  <div className="ml-10 flex items-center space-x-6">
    {navItems.map((item) => (
      <div key={item.href} className="relative group">
        <Link
          to={item.href}
          className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
        >
          {item.label}
          {item.dropdown && <ChevronDown className="h-4 w-4" />}
        </Link>

        {item.dropdown && (
          <div className="absolute left-0 mt-2 w-56 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              {item.dropdown.map((dropdownItem) => (
                <Link
                  key={dropdownItem.href}
                  to={dropdownItem.href}
                  className="block px-4 py-2 text-sm text-card-foreground hover:text-primary hover:bg-accent transition-colors"
                >
                  {dropdownItem.label}
                </Link>
                
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>


          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Us</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}                 
                  className="text-card-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Contact Us</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
