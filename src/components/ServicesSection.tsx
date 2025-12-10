import { motion } from "framer-motion";
import { Palette, Ruler, Lightbulb, Home } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Complete design solutions from concept to completion, creating cohesive spaces that reflect your personal style.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description:
      "Strategic layouts that optimize flow and functionality while maximizing the potential of every square foot.",
  },
  {
    icon: Lightbulb,
    title: "Design Consultation",
    description:
      "Expert guidance on colors, materials, and furnishings to help you make confident design decisions.",
  },
  {
    icon: Home,
    title: "Full Home Renovation",
    description:
      "End-to-end project management for complete home transformations, from demolition to final styling.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
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
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From initial concept to final reveal, we offer comprehensive design
            services tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background p-8 md:p-10 rounded-lg hover-lift cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                  <service.icon
                    size={28}
                    className="text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
