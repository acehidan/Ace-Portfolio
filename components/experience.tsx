"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Award } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, 100])

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      location: "San Francisco, CA (Remote)",
      description:
        "Leading the frontend development team in building a SaaS platform using Next.js and Tailwind CSS. Implementing complex UI components and optimizing performance.",
      achievements: [
        "Reduced page load time by 40% through code optimization",
        "Led the migration from Pages Router to App Router",
        "Mentored junior developers and established coding standards",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      location: "New York, NY",
      description:
        "Developed responsive web applications using React and Vue.js. Collaborated with designers and backend developers to implement new features and improve user experience.",
      achievements: [
        "Built 5+ major features for the company's flagship product",
        "Implemented CI/CD pipeline for frontend projects",
        "Improved accessibility across all web applications",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      period: "2019 - 2021",
      location: "Boston, MA",
      description:
        "Built and maintained client websites using HTML, CSS, and JavaScript. Assisted in transitioning legacy projects to modern frameworks like React.",
      achievements: [
        "Developed 10+ client websites from design to deployment",
        "Reduced bounce rate by 25% through UX improvements",
        "Implemented responsive designs for mobile-first experiences",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium mb-4"
          >
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My professional journey in frontend development
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            style={{ x }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="absolute w-5 h-5 bg-primary rounded-full -left-[2.85rem] top-1.5 border-4 border-background" />
                <div className="absolute w-10 h-10 bg-primary/10 rounded-full -left-[3.35rem] top-0 animate-ping-slow opacity-50" />

                <div className="bg-card p-8 rounded-2xl border border-border shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-3xl transform translate-x-12 -translate-y-12" />

                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <h4 className="text-xl text-primary font-medium mt-1">{exp.company}</h4>

                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="mt-4">{exp.description}</p>

                    <div className="mt-6">
                      <h5 className="font-medium flex items-center mb-3">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
