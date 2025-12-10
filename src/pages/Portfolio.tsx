import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Living Spaces images
import foyerImage from "@/assets/portfolio/foyer.jpg";
import livingDining1 from "@/assets/portfolio/living-dining-1.jpg";
import traditionalLiving from "@/assets/portfolio/traditional-living.jpg";
import modernLiving from "@/assets/portfolio/modern-living.jpg";
import livingDining2 from "@/assets/portfolio/living-dining-2.jpg";
import partitionDesign from "@/assets/portfolio/partition-design.jpg";
import livingPartition from "@/assets/portfolio/living-partition.jpg";
import displayUnit from "@/assets/portfolio/display-unit.jpg";
import openLiving from "@/assets/portfolio/open-living.jpg";
import spaciousLiving from "@/assets/portfolio/spacious-living.jpg";

// Partition Designs images
import partitionMirror from "@/assets/portfolio/partition-mirror.jpg";
import partitionPlanter from "@/assets/portfolio/partition-planter.jpg";
import partitionGoldPlanter from "@/assets/portfolio/partition-gold-planter.jpg";
import partitionFluted from "@/assets/portfolio/partition-fluted.jpg";
import partitionArtistic from "@/assets/portfolio/partition-artistic.jpg";
import partitionGoldBars from "@/assets/portfolio/partition-gold-bars.jpg";
import partitionMarble from "@/assets/portfolio/partition-marble.jpg";
import partitionBlackFrame from "@/assets/portfolio/partition-black-frame.jpg";
import partitionWoodGlass from "@/assets/portfolio/partition-wood-glass.jpg";
import partitionStaircase from "@/assets/portfolio/partition-staircase.jpg";

// Staircase Railing images
import stairWoodMetal from "@/assets/portfolio/stair-wood-metal.jpg";
import stairGoldArtistic from "@/assets/portfolio/stair-gold-artistic.jpg";
import stairGoldFrame from "@/assets/portfolio/stair-gold-frame.jpg";
import stairClassicGold from "@/assets/portfolio/stair-classic-gold.jpg";
import stairLuxuryGold from "@/assets/portfolio/stair-luxury-gold.jpg";
import stairModernBlack from "@/assets/portfolio/stair-modern-black.jpg";
import stairCurvedGlass from "@/assets/portfolio/stair-curved-glass.jpg";

// Kitchen images
import kitchenEggWhiteMint from "@/assets/portfolio/kitchen-egg-white-mint.jpg";
import kitchenBlueModern from "@/assets/portfolio/kitchen-blue-modern.jpg";
import kitchenGreyAppliances from "@/assets/portfolio/kitchen-grey-appliances.jpg";
import kitchenWhiteMinimal from "@/assets/portfolio/kitchen-white-minimal.jpg";
import kitchenSageGreen from "@/assets/portfolio/kitchen-sage-green.jpg";
import kitchenDarkGrey from "@/assets/portfolio/kitchen-dark-grey.jpg";
import kitchenOliveGreen from "@/assets/portfolio/kitchen-olive-green.jpg";

// Bedroom images
import bedroomMinimalist from "@/assets/portfolio/bedroom-minimalist.jpg";
import bedroomTropical from "@/assets/portfolio/bedroom-tropical.jpg";
import bedroomKids from "@/assets/portfolio/bedroom-kids.jpg";
import bedroomTraditional from "@/assets/portfolio/bedroom-traditional.jpg";
import bedroomJungle from "@/assets/portfolio/bedroom-jungle.jpg";
import bedroomFloral from "@/assets/portfolio/bedroom-floral.jpg";
import bedroomFlamingo from "@/assets/portfolio/bedroom-flamingo.jpg";
import bedroomBotanical from "@/assets/portfolio/bedroom-botanical.jpg";
import bedroomModern from "@/assets/portfolio/bedroom-modern.jpg";

const livingSpacesImages = [
  { id: 1, title: "Modern Living & Dining", category: "Living Room", image: livingDining1, gridClass: "col-span-2 row-span-2" },
  { id: 2, title: "Contemporary Foyer", category: "Foyer", image: foyerImage, gridClass: "col-span-2 row-span-1" },
  { id: 3, title: "Traditional Living Room", category: "Living Room", image: traditionalLiving, gridClass: "col-span-2 row-span-1" },
  { id: 4, title: "Elegant Partition Design", category: "Partition", image: partitionDesign, gridClass: "col-span-1 row-span-2" },
  { id: 5, title: "Open Concept Living", category: "Living Room", image: livingDining2, gridClass: "col-span-2 row-span-1" },
  { id: 6, title: "Custom Display Unit", category: "Storage", image: displayUnit, gridClass: "col-span-1 row-span-2" },
  { id: 7, title: "Modern Living Space", category: "Living Room", image: modernLiving, gridClass: "col-span-2 row-span-1" },
  { id: 8, title: "Living with Glass Partition", category: "Living Room", image: livingPartition, gridClass: "col-span-2 row-span-1" },
  { id: 9, title: "Spacious Living Room", category: "Living Room", image: spaciousLiving, gridClass: "col-span-2 row-span-2" },
  { id: 10, title: "Contemporary Open Living", category: "Living Room", image: openLiving, gridClass: "col-span-2 row-span-1" },
];

const partitionDesignsImages = [
  { id: 1, title: "Mirror Glass Partition", category: "Glass", image: partitionMirror, gridClass: "col-span-1 row-span-2" },
  { id: 2, title: "Planter Partition", category: "Metal & Glass", image: partitionPlanter, gridClass: "col-span-1 row-span-2" },
  { id: 3, title: "Gold Planter Divider", category: "Metal", image: partitionGoldPlanter, gridClass: "col-span-2 row-span-1" },
  { id: 4, title: "Fluted Glass Partition", category: "Glass", image: partitionFluted, gridClass: "col-span-2 row-span-1" },
  { id: 5, title: "Artistic Panel Divider", category: "Artistic", image: partitionArtistic, gridClass: "col-span-2 row-span-2" },
  { id: 6, title: "Gold Bar Partition", category: "Metal", image: partitionGoldBars, gridClass: "col-span-1 row-span-2" },
  { id: 7, title: "Marble & Gold Divider", category: "Luxury", image: partitionMarble, gridClass: "col-span-1 row-span-2" },
  { id: 8, title: "Black Frame Partition", category: "Metal", image: partitionBlackFrame, gridClass: "col-span-2 row-span-1" },
  { id: 9, title: "Wood & Glass Divider", category: "Wood", image: partitionWoodGlass, gridClass: "col-span-2 row-span-2" },
  { id: 10, title: "Glass Panel Railing", category: "Luxury", image: partitionStaircase, gridClass: "col-span-2 row-span-1" },
];

const staircaseRailingImages = [
  { id: 1, title: "Wood & Metal Railing", category: "Wood", image: stairWoodMetal, gridClass: "col-span-1 row-span-2" },
  { id: 2, title: "Artistic Gold Railing", category: "Gold", image: stairGoldArtistic, gridClass: "col-span-1 row-span-2" },
  { id: 3, title: "Gold Frame Balusters", category: "Gold", image: stairGoldFrame, gridClass: "col-span-2 row-span-1" },
  { id: 4, title: "Classic Gold Design", category: "Gold", image: stairClassicGold, gridClass: "col-span-2 row-span-2" },
  { id: 5, title: "Luxury Gold Railing", category: "Luxury", image: stairLuxuryGold, gridClass: "col-span-2 row-span-1" },
  { id: 6, title: "Modern Black Railing", category: "Metal", image: stairModernBlack, gridClass: "col-span-1 row-span-2" },
  { id: 7, title: "Curved Glass Railing", category: "Glass", image: stairCurvedGlass, gridClass: "col-span-1 row-span-2" },
];

const bedroomImages = [
  { id: 1, title: "Minimalist Bedroom", category: "Modern", image: bedroomMinimalist, gridClass: "col-span-2 row-span-1" },
  { id: 2, title: "Tropical Theme Bedroom", category: "Themed", image: bedroomTropical, gridClass: "col-span-2 row-span-2" },
  { id: 3, title: "Kids Bedroom", category: "Kids", image: bedroomKids, gridClass: "col-span-2 row-span-1" },
  { id: 4, title: "Traditional Bedroom", category: "Classic", image: bedroomTraditional, gridClass: "col-span-2 row-span-1" },
  { id: 5, title: "Jungle Theme Bedroom", category: "Themed", image: bedroomJungle, gridClass: "col-span-1 row-span-2" },
  { id: 6, title: "Floral Accent Bedroom", category: "Modern", image: bedroomFloral, gridClass: "col-span-1 row-span-2" },
  { id: 7, title: "Flamingo Kids Room", category: "Kids", image: bedroomFlamingo, gridClass: "col-span-2 row-span-1" },
  { id: 8, title: "Botanical Bedroom", category: "Themed", image: bedroomBotanical, gridClass: "col-span-2 row-span-2" },
  { id: 9, title: "Modern Master Bedroom", category: "Modern", image: bedroomModern, gridClass: "col-span-2 row-span-1" },
];

const kitchenImages = [
  { id: 1, title: "Egg White & Mint Green Kitchen", category: "Modern", image: kitchenEggWhiteMint, gridClass: "col-span-2 row-span-2" },
  { id: 2, title: "Blue Modern Kitchen", category: "Modern", image: kitchenBlueModern, gridClass: "col-span-2 row-span-1" },
  { id: 3, title: "Grey Appliance Kitchen", category: "Minimal", image: kitchenGreyAppliances, gridClass: "col-span-2 row-span-1" },
  { id: 4, title: "White Minimal Kitchen", category: "Minimal", image: kitchenWhiteMinimal, gridClass: "col-span-2 row-span-1" },
  { id: 5, title: "Sage Green Kitchen", category: "Modern", image: kitchenSageGreen, gridClass: "col-span-2 row-span-2" },
  { id: 6, title: "Dark Grey Kitchen", category: "Luxury", image: kitchenDarkGrey, gridClass: "col-span-2 row-span-1" },
  { id: 7, title: "Olive Green Kitchen", category: "Modern", image: kitchenOliveGreen, gridClass: "col-span-2 row-span-1" },
];

interface ImageGridProps {
  images: typeof livingSpacesImages;
  initialCount?: number;
  showViewMore?: boolean;
}

const ImageGrid = ({ images, initialCount = 6, showViewMore = false }: ImageGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showViewMore && !showAll ? images.slice(0, initialCount) : images;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
        <AnimatePresence>
          {displayedImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.gridClass}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-accent tracking-wider uppercase mb-1">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {showViewMore && images.length > initialCount && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="gap-2"
          >
            {showAll ? (
              <>
                View Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                View More ({images.length - initialCount} more) <ChevronDown size={18} />
              </>
            )}
          </Button>
        </motion.div>
      )}
    </>
  );
};

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Sai Rakesh Interiors</title>
        <meta
          name="description"
          content="Explore our portfolio of stunning interior design projects. From bedrooms to kitchens, see how Sai Rakesh Interiors transforms spaces."
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container-narrow mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
              <p className="text-accent tracking-[0.2em] uppercase text-xs mb-4">
                Our Portfolio
              </p>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
                Featured Designs
              </h1>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                A curated collection of our finest interior design work,
                showcasing our commitment to creating beautiful, functional spaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Living Spaces Section */}
        <section className="section-padding">
          <div className="container-narrow mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-accent tracking-[0.2em] uppercase text-xs mb-2">
                Category
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Living Spaces
              </h2>
            </motion.div>
            <ImageGrid images={livingSpacesImages} initialCount={6} showViewMore />
          </div>
        </section>

        {/* Bedroom Section */}
        <section className="section-padding bg-secondary/20">
          <div className="container-narrow mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-accent tracking-[0.2em] uppercase text-xs mb-2">
                Category
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Bedroom
              </h2>
            </motion.div>
            <ImageGrid images={bedroomImages} initialCount={6} showViewMore />
          </div>
        </section>

        {/* Kitchen Section */}
        <section className="section-padding">
          <div className="container-narrow mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-accent tracking-[0.2em] uppercase text-xs mb-2">
                Category
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Kitchen
              </h2>
            </motion.div>
            <ImageGrid images={kitchenImages} initialCount={6} showViewMore />
          </div>
        </section>

        {/* Partition Designs Section */}
        <section className="section-padding bg-secondary/20">
          <div className="container-narrow mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-accent tracking-[0.2em] uppercase text-xs mb-2">
                Category
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Partition Designs
              </h2>
            </motion.div>
            <ImageGrid images={partitionDesignsImages} initialCount={6} showViewMore />
          </div>
        </section>

        {/* Staircase Railing Section */}
        <section className="section-padding">
          <div className="container-narrow mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-accent tracking-[0.2em] uppercase text-xs mb-2">
                Category
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Staircase Railing
              </h2>
            </motion.div>
            <ImageGrid images={staircaseRailingImages} initialCount={6} showViewMore />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
