import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import bedroomImage from "@/assets/portfolio-bedroom.jpg";
import kitchenImage from "@/assets/portfolio-kitchen.jpg";
import livingroomImage from "@/assets/portfolio-livingroom.jpg";

const projects = [
  {
    title: "Serene Bedroom Retreat",
    category: "Residential",
    image: bedroomImage,
    description: "A calming sanctuary with soft neutrals and natural textures",
  },
  {
    title: "Modern Kitchen Design",
    category: "Kitchen",
    image: kitchenImage,
    description: "Contemporary elegance meets functional living",
  },
  {
    title: "Elegant Living Room",
    category: "Living Room",
    image: livingroomImage,
    description: "Sophisticated space with modern accents and warm tones",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.2em] uppercase text-xs mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Featured Designs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated selection of our recent interior design projects, 
            showcasing our commitment to timeless elegance and thoughtful design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="image-reveal rounded-lg overflow-hidden aspect-square mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-accent tracking-wider uppercase mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-foreground font-medium tracking-wide hover:text-accent transition-colors duration-300 group"
          >
            View All Designs
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
