"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-xl font-bold relative inline-block">
              <span className="text-primary">Dev</span>Portfolio
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <p className="text-muted-foreground mt-2">Crafting digital experiences with passion and precision.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} All rights reserved</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="h-3 w-3 mx-1 text-primary" /> by DevPortfolio
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
