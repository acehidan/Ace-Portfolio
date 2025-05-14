import dynamic from "next/dynamic";

// Use dynamic imports for components with animations to improve initial load time
const Hero = dynamic(() => import("@/components/hero"), { ssr: true });
const About = dynamic(() => import("@/components/about"), { ssr: true });
const Skills = dynamic(() => import("@/components/skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/projects"), { ssr: true });
const Experience = dynamic(() => import("@/components/experience"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/footer"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-background/90 dark:from-background dark:via-background dark:to-background/90"></div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
