"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} style={{ y }} className="relative">
            <div className="relative z-10">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-xl" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-xl" />

                {/* <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Passionate Frontend Developer
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a frontend developer with 5+ years of experience crafting
                digital experiences that users love. My journey in web
                development began with a passion for creating intuitive and
                visually appealing interfaces.
              </p>
              <p>
                Specializing in React, Next.js, Vue, and React Native, I build
                responsive applications that work flawlessly across all devices.
                My approach combines technical expertise with creative
                problem-solving to deliver solutions that exceed expectations.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or mentoring aspiring
                developers. I believe in continuous learning and staying ahead
                of industry innovations.
              </p>
            </div>

            {/* <div className="pt-4">
              <Button size="lg" variant="outline" className="rounded-full px-6">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
