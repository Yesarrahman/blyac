import { Link } from 'react-router-dom';
import { Heart, Target, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import yogaMeditation from '@/assets/yoga-meditation.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import wellnessLifestyle from '@/assets/wellness-lifestyle.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'We prioritize your holistic well-being, focusing on both physical health and mental peace.'
    },
    {
      icon: Target,
      title: 'Quality Training',
      description: 'Our certified instructors provide professional guidance tailored to your fitness level.'
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'We welcome everyone, creating a supportive environment for all skill levels.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive to be the best yoga and aerobics center in Bangladesh through continuous improvement.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Transforming Lives Through Wellness
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              BetterLife Yoga & Aerobic Center is dedicated to helping individuals achieve their 
              wellness goals through professional yoga and aerobics training in Bashundhara, Dhaka.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl" />
              <img
                src={yogaMeditation}
                alt="Yoga meditation practice at BetterLife Yoga Center Bashundhara Dhaka"
                className="relative rounded-2xl shadow-card w-full"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Our Mission & Vision
              </h2>

              <div className="space-y-8">
                <div className="card-wellness">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide high-quality yoga and aerobics training that helps clients improve 
                    their physical fitness, achieve mental balance, and enhance overall well-being. 
                    We are committed to making wellness accessible to everyone in Bashundhara and 
                    the greater Dhaka area.
                  </p>
                </div>

                <div className="card-wellness">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become one of the best yoga and aerobics centers in Bangladesh, recognized 
                    for our professional service, supportive community, and the positive impact 
                    we create in the lives of our members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-wellness text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-6">
                Serving the Bashundhara Community
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BetterLife Yoga & Aerobic Center was founded with a simple yet powerful vision: 
                  to make quality wellness training accessible to the residents of Bashundhara 
                  Residential Area and beyond.
                </p>
                <p>
                  Located in RAS Plaza on Bashundhara Road, our center provides a serene escape 
                  from the busy city life. Our 7th-floor studio offers a calm and peaceful 
                  environment where you can focus on your practice and connect with your inner self.
                </p>
                <p>
                  We believe that wellness is not just about physical exercise—it's about creating 
                  a balanced lifestyle. That's why our programs are designed to address both 
                  physical fitness and mental well-being.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="font-display text-3xl font-bold text-primary">4.3</div>
                  <div className="text-sm text-muted-foreground mt-1">Google Rating</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="font-display text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Members</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={gallery1}
                alt="BetterLife Yoga Studio interior in Dhaka"
                className="rounded-2xl shadow-soft w-full h-48 object-cover"
              />
              <img
                src={wellnessLifestyle}
                alt="Wellness lifestyle at BetterLife Yoga Center"
                className="rounded-2xl shadow-soft w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why BetterLife</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Professional certified instructors',
                'Small group sizes for personal attention',
                'Modern, clean studio facility',
                'Convenient Bashundhara location',
                'Programs for all fitness levels',
                'Flexible evening class schedules',
                'Focus on holistic wellness',
                'Supportive community atmosphere'
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-wellness-forest text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
            Join BetterLife Yoga & Aerobic Center today and take the first step towards 
            a healthier, more balanced life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-wellness-forest font-semibold hover:bg-primary-foreground/90 transition-all"
            >
              View Our Classes
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/50 font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
