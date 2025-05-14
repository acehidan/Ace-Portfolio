"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Smartphone,
  Layout,
  Layers,
  Palette,
  GitBranch,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const skills = [
    {
      name: "React",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Building interactive UIs with React and its ecosystem",
      level: 90,
    },
    {
      name: "React Native",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      description:
        "Developing cross-platform mobile apps with React Native Expo",
      level: 85,
    },
    {
      name: "Next.js",
      icon: <Layout className="h-8 w-8 text-primary" />,
      description: "Creating server-rendered React applications with Next.js",
      level: 88,
    },
    {
      name: "Vue",
      icon: <Layers className="h-8 w-8 text-primary" />,
      description: "Developing progressive web applications with Vue.js",
      level: 80,
    },
    {
      name: "Tailwind & Material UI",
      icon: <Palette className="h-8 w-8 text-primary" />,
      description:
        "Styling applications with utility-first CSS and component libraries",
      level: 92,
    },
    {
      name: "Git",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      description: "Version control and collaboration using Git",
      level: 85,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium mb-4"
          >
            My Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Here are the technologies and tools I specialize in
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          style={{ x }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card hover:bg-card/80 p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-3xl transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300" />

              <div className="relative z-10">
                <div className="p-4 bg-primary/10 rounded-xl mb-6 inline-block">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                <p className="text-muted-foreground mb-6">
                  {skill.description}
                </p>

                {/* <div className="w-full bg-muted rounded-full h-2 mb-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div> */}
                {/* <div className="flex justify-between text-sm">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
