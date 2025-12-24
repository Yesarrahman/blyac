import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, ArrowRight, CheckCircle, Users, Heart, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-yoga.jpg';
import yogaMeditation from '@/assets/yoga-meditation.jpg';
import aerobicsClass from '@/assets/aerobics-class.jpg';
import yogaFlexibility from '@/assets/yoga-flexibility.jpg';
import wellnessLifestyle from '@/assets/wellness-lifestyle.jpg';
import Layout from '@/components/layout/Layout';

const Index = () => {
  const classes = [
    {
      title: 'Yoga Classes',
      description: 'Traditional and modern yoga practices for mind-body balance',
      image: yogaMeditation,
      alt: 'Yoga meditation class in Bashundhara Dhaka at BetterLife Yoga Center'
    },
    {
      title: 'Aerobics Training',
      description: 'High-energy cardio workouts for fitness and weight management',
      image: aerobicsClass,
      alt: 'Aerobics training session at BetterLife Yoga & Aerobic Center Dhaka'
    },
    {
      title: 'Flexibility Programs',
      description: 'Specialized sessions to improve flexibility and posture',
      image: yogaFlexibility,
      alt: 'Flexibility training yoga class at BetterLife Center Bashundhara'
    },
    {
      title: 'Wellness & Lifestyle',
      description: 'Holistic programs for mental peace and healthy living',
      image: wellnessLifestyle,
      alt: 'Wellness and lifestyle improvement program at BetterLife Yoga Dhaka'
    }
  ];

  const benefits = [
    { icon: Heart, title: 'Physical Fitness', description: 'Build strength, flexibility and endurance' },
    { icon: Sparkles, title: 'Mental Balance', description: 'Reduce stress and find inner peace' },
    { icon: Users, title: 'Community', description: 'Join a supportive wellness community' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Yoga studio in Bashundhara Dhaka - BetterLife Yoga Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wellness-forest/90 via-wellness-forest/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl text-primary-foreground">
            <div className="flex items-center gap-2 mb-6 animate-fade-up">
              <div className="flex items-center gap-1 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm font-medium">4.3 Rating</span>
                <span className="text-sm opacity-70">(6 Reviews)</span>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up delay-100">
              Transform Your Life Through
              <span className="block text-wellness-mint">Yoga & Aerobics</span>
            </h1>

            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed animate-fade-up delay-200">
              BetterLife Yoga & Aerobic Center is Bashundhara's premier destination for 
              professional yoga and fitness training. Discover physical strength, mental 
              clarity, and overall well-being.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-wellness-forest font-semibold hover:bg-primary-foreground/90 transition-all hover:translate-y-[-2px] hover:shadow-glow"
              >
                Join a Class
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+8801315666257"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/50 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Location Badge */}
            <div className="mt-10 flex items-center gap-3 animate-fade-up delay-400">
              <MapPin className="w-5 h-5 opacity-70" />
              <span className="opacity-80">RAS Plaza, Bashundhara Road, Dhaka 1229</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Welcome to BetterLife</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Your Journey to Wellness Starts Here
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Located in the heart of Bashundhara Residential Area, BetterLife Yoga & Aerobic Center 
              offers professional yoga and aerobics training designed to help you achieve physical 
              fitness, mental balance, and overall well-being.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-wellness text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Classes Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Programs</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3">
                Classes We Offer
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Classes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((item, index) => (
              <Link
                key={item.title}
                to="/services"
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] card-wellness p-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wellness-forest via-wellness-forest/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80 line-clamp-2">{item.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-6">
                Professional Training in Bashundhara, Dhaka
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                At BetterLife Yoga & Aerobic Center, we are committed to providing high-quality 
                wellness services that cater to your individual needs. Our experienced instructors 
                guide you through every step of your fitness journey.
              </p>

              <div className="space-y-4">
                {[
                  'Experienced and certified instructors',
                  'Clean and modern studio facility',
                  'Personalized attention in small groups',
                  'Convenient location in Bashundhara',
                  'Flexible class schedules',
                  'Programs for all fitness levels'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-wellness-mint/30 rounded-full blur-2xl" />
              <img
                src={yogaMeditation}
                alt="Professional yoga training at BetterLife Yoga Center Dhaka"
                className="relative rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-wellness-forest" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary-foreground/30" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-primary-foreground/20" />
        </div>
        
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
            Join BetterLife Yoga & Aerobic Center and experience the transformation. 
            Our doors are open for you in Bashundhara, Dhaka.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-wellness-forest font-semibold hover:bg-primary-foreground/90 transition-all hover:translate-y-[-2px]"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8801315666257"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/50 font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              +880 1315-666257
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>RAS Plaza, Bashundhara Road</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Opens at 3:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.345234567890!2d90.4125!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBashundhara%20Road%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BetterLife Yoga & Aerobic Center Location - Bashundhara, Dhaka"
        />
      </section>
    </Layout>
  );
};

export default Index;
