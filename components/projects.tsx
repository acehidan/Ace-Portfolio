"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import pjone from "./../public/project/pjone.png";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      title: "Movie Streaming Website",
      description:
        "A responsive movie streaming website where users can watch films directly in the browser. Built from scratch using only JavaScript, Bootstrap, and CSS—no frameworks or libraries.",
      image: "/project/pjone.png",
      tags: ["JavaScript", "BootStrap", "CSS"],
      category: "Web App",
      liveUrl: "https://gowatchgo.netlify.app/",
      githubUrl: "https://github.com/Go-Watch-Go/Go-Watch-Go-version-1-",
    },
    {
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce website where users can browse and purchase products. Built with React & Tailwind Css",
      image: "/project/pjtwo.png",
      tags: ["React", "Tailwind CSS"],
      category: "Web App",
      liveUrl: "https://ecommerce-demo-mauve.vercel.app/",
      githubUrl: "https://github.com/acehidan/ecommerce-demo",
    },
    {
      title: "Demo Shopping App",
      description:
        "A mobile demo shopping app built with React Native, Expo, and NativeWind. Users can browse products, search, and add items to the cart. Designed for smooth UI/UX without using any backend services.",
      image: "/project/pjthree.png",
      tags: ["React Native", "Expo", "NativeWind"],
      category: "Mobile App",
      liveUrl:
        "https://drive.google.com/uc?export=download&id=1xZIuOnvNc33ZJ0mBbZpbjaALMVwJ4Syn",
      githubUrl: "https://github.com/acehidan/ecommerce-app",
    },
    // {
    //   title: "Dashboard Analytics",
    //   description:
    //     "An interactive dashboard for visualizing business metrics and analytics with customizable widgets and reports.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Vue.js", "D3.js", "Tailwind CSS", "REST API"],
    //   category: "Web App",
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Social Media Platform",
    //   description:
    //     "A feature-rich social media platform with real-time messaging, post sharing, and user profiles.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["React", "Socket.io", "Express", "MongoDB"],
    //   category: "Web App",
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Weather Forecast App",
    //   description:
    //     "A beautiful weather application with 7-day forecasts, location-based weather data, and interactive maps.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["React", "OpenWeather API", "Leaflet", "Chart.js"],
    //   category: "Web App",
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium mb-4"
          >
            My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Explore my recent work and creative solutions
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          style={{ y }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-3">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="flex justify-center mt-12">
          <Button variant="outline" className="rounded-full px-8">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
}
