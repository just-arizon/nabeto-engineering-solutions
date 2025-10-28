"use client";

import { Link } from "react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const servicesDropdown = [
  { href: "/services/engineering-design",      label: "Engineering Design" },
  { href: "/services/procurement",  label: "Procurement Management" },
  { href: "/services/construction-services",   label: "Construction Services" },
  { href: "/services/operations-&-maintainance",  label: "Operations & Maintenance" },
];

  const policiesDropdown = [
    { href: "/policies#safety", label: "Safety Policies" },
    { href: "/policies#quality", label: "Quality Standards" },
    { href: "/policies#environmental", label: "Environmental" },
    { href: "/policies#compliance", label: "Compliance" },
  ];

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services", dropdown: servicesDropdown },
    { href: "/projects", label: "Projects" },
    { href: "/policies", label: "Policies", dropdown: policiesDropdown },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <span className="h-14 pt-4">
              <img src="/logos/nabeto-logo.svg" alt="Nabeto Logo" className="h-10 w-auto" />
            </span>
            <span className="grid gap-0 uppercase  text-sm ">
              <span className="font-extrabold text-foreground">Nabeto</span>
              <sub className="font-normal">Engineering Limited</sub>
            </span>
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

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link to={"/contact"}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-card rounded-lg border border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.href}>
                  {/* Case 1: Normal Link (no dropdown) */}
                  {!item.dropdown ? (
                    <Link
                      to={item.href}
                      className="block w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)} // close menu after navigation
                    >
                      {item.label}
                    </Link>
                  ) : (
                    /* Case 2: Dropdown button */
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.href ? null : item.href)
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === item.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === item.href && (
                        <div className="ml-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              to={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-card-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                              onClick={() => setIsMenuOpen(false)} // close after click
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <Link to={"/contact"}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                Contact Us
              </Button>
            </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
