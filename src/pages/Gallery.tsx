import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import heroYoga from '@/assets/hero-yoga.jpg';
import yogaMeditation from '@/assets/yoga-meditation.jpg';
import aerobicsClass from '@/assets/aerobics-class.jpg';
import yogaFlexibility from '@/assets/yoga-flexibility.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      alt: 'Modern yoga studio interior at BetterLife Yoga Center in Bashundhara Dhaka',
      category: 'Studio'
    },
    {
      src: gallery2,
      alt: 'Group yoga class at BetterLife Yoga & Aerobic Center Dhaka',
      category: 'Yoga'
    },
    {
      src: heroYoga,
      alt: 'Yoga practice session at BetterLife Center Bashundhara',
      category: 'Yoga'
    },
    {
      src: gallery3,
      alt: 'Yoga instructor guiding student at BetterLife Yoga Center Dhaka',
      category: 'Training'
    },
    {
      src: aerobicsClass,
      alt: 'Aerobics training class at BetterLife Aerobic Center Bashundhara Dhaka',
      category: 'Aerobics'
    },
    {
      src: yogaMeditation,
      alt: 'Meditation yoga pose at BetterLife Yoga Studio in Dhaka',
      category: 'Yoga'
    },
    {
      src: gallery4,
      alt: 'Yoga equipment and props at BetterLife Yoga Center Bashundhara',
      category: 'Studio'
    },
    {
      src: gallery5,
      alt: 'Relaxation savasana pose at BetterLife Yoga & Aerobic Center',
      category: 'Yoga'
    },
    {
      src: yogaFlexibility,
      alt: 'Flexibility yoga pose at BetterLife Center Dhaka',
      category: 'Yoga'
    },
    {
      src: gallery6,
      alt: 'Morning meditation at BetterLife Yoga & Aerobic Center Dhaka',
      category: 'Wellness'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Our Studio & Classes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take a visual tour of BetterLife Yoga & Aerobic Center. View photos of our 
              yoga and aerobics sessions, studio facilities, and the wellness journey of 
              our members in Bashundhara, Dhaka.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 || index === 5 ? 'h-full aspect-square' : 'aspect-square'
                  }`}
                />
                <div className="absolute inset-0 bg-wellness-forest/0 group-hover:bg-wellness-forest/60 transition-all duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image - BetterLife Yoga & Aerobic Center Dhaka"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Visit Us CTA */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Experience It In Person
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Photos can only show so much. Visit BetterLife Yoga & Aerobic Center to experience 
            our welcoming atmosphere and professional training firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Schedule a Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary"
            >
              View Our Classes
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
