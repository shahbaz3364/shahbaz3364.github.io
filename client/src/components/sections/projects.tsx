import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import endura from "@/assets/projects/endura.jpeg";
import bloom from "@/assets/projects/bloom.jpeg";
import fusion from "@/assets/projects/fusion.jpeg";
import baskon from "@/assets/projects/baskon.jpeg";
import tactics from "@/assets/projects/tactics.jpeg";
import writer from "@/assets/projects/writer.jpeg";



export default function Projects() {
  const projects = [
  {
    title: "Endura Physio",
    description: "Physiotherapy clinic with online booking and comprehensive wellness services",
    url: "https://enduraphysio.com",
    image: endura,
    tech: ["WordPress", "Online Booking", "SEO"]
  },
  {
    title: "CCS Blooms Flowers",
    description: "Local flower farm with e-commerce, CSA program, and event services",
    url: "https://ccsbloomsflowers.com",
    image: bloom,
    tech: ["E-commerce", "Event Booking", "Local SEO"]
  },
  {
    title: "Fusion Tech FW",
    description: "Metal fabrication company specializing in commercial and residential services",
    url: "https://fusiontechfw.com",
    image: fusion,
    tech: ["Lead Generation", "Local SEO", "Service Pages"]
  },
  {
    title: "Baskon Main",
    description: "Restaurant website with menu showcase and reservation system",
    url: "https://baskonmain.net",
    image: baskon,
    tech: ["Restaurant SEO", "Online Menu", "Reservations"]
  },
  {
    title: "Tactics2Toys",
    description: "E-commerce toy store with category filtering and wishlist features",
    url: "https://tactics2toys.com",
    image: tactics,
    tech: ["E-commerce", "Product Filtering", "WooCommerce"]
  },
  {
    title: "Resilient Writers",
    description: "Writing community platform with blog and member features",
    url: "https://resilientwriters.com",
    image: writer,
    tech: ["Community Platform", "Membership", "Content Management"]
  }
];


  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Recent client websites focusing on performance, SEO optimization, and user experience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="overflow-hidden h-full group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} website preview`} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                  >
                    Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}