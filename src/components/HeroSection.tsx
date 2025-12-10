import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-living-room.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious modern living room interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/80 tracking-[0.2em] uppercase text-xs sm:text-xs md:text-sm mb-4 sm:mb-6"
          >
            Your Vision, Our Craft, Perfectly Aligned
          </motion.p>
          
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-medium leading-tight mb-4 sm:mb-6">
            Sai Rakesh Interiors
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed"
          >
            Transforming Spaces Into Stories
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col gap-3 sm:gap-4 justify-center w-full sm:w-auto"
          >
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto md:h-11 md:px-8 md:text-sm md:tracking-wide"
              asChild
            >
              <a href="#portfolio">Explore Our Work</a>
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              asChild
              className="w-full sm:w-auto md:h-11 md:px-8 md:text-sm md:tracking-wide"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-10 hidden sm:flex"
        >
          <motion.a
            href="#services"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
