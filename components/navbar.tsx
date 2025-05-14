"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-md bg-background/80 border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold relative"
        >
          <span className="text-primary">Acehidan </span>Portfolio
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}

          {mounted && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
