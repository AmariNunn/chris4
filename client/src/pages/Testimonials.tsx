import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";
import testimonialVideo1 from "@assets/IMG_3520_1772391098187.mov";
import testimonialVideo2 from "@assets/IMG_0470_1772391846808.mov";
import testimonialVideo3 from "@assets/IMG_2660_1772495485675.mov";
import testimonialVideo4 from "@assets/IMG_2664_1772495488167.mov";
import testimonialVideo5 from "@assets/IMG_2725_1773524334878.MOV";
import testimonialVideo6 from "@assets/0308(1)_(2)_1773977340608.mp4";
import testimonialVideo7 from "@assets/0308_(2)_(2)_(1)_1773977609212.mp4";

const allTestimonials = [
  {
    id: "v1",
    type: "video" as const,
    src: testimonialVideo1,
    label: "A valued Jordan Wellness Experience client shares their story.",
  },
  {
    id: "v2",
    type: "video" as const,
    src: testimonialVideo2,
    label: "Experience transformation through our dedicated care.",
  },
  {
    id: "v3",
    type: "video" as const,
    src: testimonialVideo3,
    label: "Hear what our clients have to say about the Jordan Wellness Experience.",
  },
  {
    id: "v4",
    type: "video" as const,
    src: testimonialVideo4,
    label: "Real results from real people — see why our clients keep coming back.",
  },
  {
    id: "v5",
    type: "video" as const,
    src: testimonialVideo5,
    label: "Another client's journey with Jordan Wellness Experience.",
  },
  {
    id: "v6",
    type: "video" as const,
    src: testimonialVideo6,
    label: "A Jordan Wellness Experience client shares their transformation journey.",
  },
  {
    id: "v7",
    type: "video" as const,
    src: testimonialVideo7,
    label: "See what our dedicated care has made possible for this client.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="relative py-20 md:py-28 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] -top-40 -left-40" />
            <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -bottom-40 -right-40" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block" data-testid="text-testimonials-subtitle">
                What Our Clients Say
              </span>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6" data-testid="text-testimonials-title">
                Testimonials
              </h1>
              <p className="text-lg text-white/70 max-w-xl mx-auto" data-testid="text-testimonials-intro">
                Real experiences from those who trust us with their wellness journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Video Testimonials */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Featured</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary leading-tight">
                Hear It Directly From Our Clients
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {allTestimonials.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
                  className="flex flex-col"
                >
                  <div className="rounded-md overflow-hidden shadow-xl bg-black aspect-video flex items-center justify-center">
                    <video
                      src={item.src}
                      controls
                      playsInline
                      className="w-full h-full object-contain"
                      data-testid={`video-testimonial-${idx}`}
                    />
                  </div>
                  <p className="text-center text-muted-foreground italic mt-6 text-sm">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Google Review Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mt-16 space-y-4"
            >
              <p className="text-muted-foreground text-lg">
                Enjoyed your experience? We'd love to hear from you.
              </p>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-primary/20 text-primary px-10"
                  data-testid="button-google-review"
                >
                  Leave a Google Review
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
