"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const isMobile = useMobile()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" ref={targetRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-10" />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium"
              >
                Frontend Developer
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Crafting Digital <span className="text-primary">Experiences</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl text-muted-foreground mt-6 max-w-xl"
              >
                Specialized in building modern, responsive, and user-friendly web applications with React, Next.js, Vue,
                and React Native.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-full px-8" onClick={scrollToAbout}>
                Explore My Work
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border border-primary/20 rounded-xl rotate-12" />
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border border-primary/20 rounded-xl -rotate-12" />

              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 mix-blend-overlay" />
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tech stack floating elements */}
              {!isMobile && (
                <>
                  <motion.div
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                    className="absolute -top-5 -right-5 bg-card p-2 rounded-lg shadow-lg border border-border"
                  >
                    <img src="/placeholder.svg?height=40&width=40" alt="React" className="w-10 h-10" />
                  </motion.div>
                  <motion.div
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-8 bg-card p-2 rounded-lg shadow-lg border border-border"
                  >
                    <img src="/placeholder.svg?height=40&width=40" alt="Next.js" className="w-10 h-10" />
                  </motion.div>
                  <motion.div
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut" }}
                    className="absolute bottom-1/4 -right-8 bg-card p-2 rounded-lg shadow-lg border border-border"
                  >
                    <img src="/placeholder.svg?height=40&width=40" alt="Vue" className="w-10 h-10" />
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </motion.div>
    </section>
  )
}
