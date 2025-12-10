import { motion } from "framer-motion";
import aboutInterior from "@/assets/about-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent tracking-[0.2em] uppercase text-xs mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Crafting Spaces That
              <br />
              <span className="italic">Tell Your Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Sai Rakesh Interiors, we believe that every home has a unique story waiting
                to be told. Our approach combines timeless design principles with
                a deep understanding of how people actually live in their spaces.
              </p>
              <p>
                Founded with a passion for creating beautiful, functional
                interiors, we've spent over a decade transforming houses into
                homes that inspire and comfort. Our team of experienced designers
                brings creativity, expertise, and meticulous attention to detail
                to every project.
              </p>
              <p>
                We don't just design spaces—we create environments where memories
                are made, families grow, and life unfolds beautifully.
              </p>
            </div>

            {/* Founders */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-accent tracking-[0.2em] uppercase text-xs mb-6">
                Meet Our Founders
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif text-lg text-foreground">Palavasa Rakesh</h4>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground">Jammu Saikumar</h4>
                  <p className="text-sm text-muted-foreground">Creative Director & Interior Designer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={aboutInterior}
                alt="Beautiful modern interior design by Sai Rakesh Interiors"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
