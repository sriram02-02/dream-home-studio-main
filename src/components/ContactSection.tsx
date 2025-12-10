import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: [
      "6-3-596/47/A/4, Khairatabad (West), Hyderabad, 500004, TG",
      "4-13-15/1, Pedda Waltair, Visakhapatnam, AP"
    ],
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 83413 74829",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "sairakeshinteriors@gmail.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 10AM - 7PM",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Inquiry from Website*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Mobile:* ${formData.mobile || "Not provided"}
*Project Type:* ${formData.projectType || "Not specified"}

*Message:*
${formData.message}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (remove spaces and special characters)
    const whatsappNumber = "918341374829";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to send via WhatsApp.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
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
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Start Your Project
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? We'd love to hear about your vision.
            Reach out to schedule a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon
                      size={20}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    {Array.isArray(info.value) ? (
                      <div className="space-y-2">
                        {info.value.map((addr, i) => (
                          <p key={i} className="text-foreground text-sm leading-relaxed">
                            {addr}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">Consultation Only</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none text-foreground"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <Button type="submit" variant="elegant" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
