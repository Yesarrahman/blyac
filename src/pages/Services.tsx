import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, CheckCircle, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import yogaMeditation from '@/assets/yoga-meditation.jpg';
import aerobicsClass from '@/assets/aerobics-class.jpg';
import yogaFlexibility from '@/assets/yoga-flexibility.jpg';
import wellnessLifestyle from '@/assets/wellness-lifestyle.jpg';

const Services = () => {
  const services = [
    {
      id: 'yoga',
      title: 'Yoga Classes',
      subtitle: 'Mind-Body Balance',
      description: 'Our yoga classes combine traditional practices with modern techniques to help you achieve physical strength, flexibility, and mental clarity. Suitable for beginners and experienced practitioners alike.',
      image: yogaMeditation,
      alt: 'Yoga meditation class at BetterLife Yoga Center Bashundhara Dhaka',
      benefits: [
        'Improved flexibility and posture',
        'Stress relief and mental clarity',
        'Enhanced strength and balance',
        'Better breathing techniques',
        'Increased mindfulness'
      ],
      schedule: 'Mon, Wed, Fri - 3:30 PM & 5:00 PM'
    },
    {
      id: 'aerobics',
      title: 'Aerobics Training',
      subtitle: 'High-Energy Cardio',
      description: 'Get your heart pumping with our dynamic aerobics sessions. These high-energy workouts are designed to improve cardiovascular health, burn calories, and boost your energy levels.',
      image: aerobicsClass,
      alt: 'Aerobics training session at BetterLife Yoga & Aerobic Center Dhaka',
      benefits: [
        'Weight management and fat burning',
        'Improved cardiovascular health',
        'Increased stamina and endurance',
        'Full-body toning',
        'Mood enhancement'
      ],
      schedule: 'Tue, Thu, Sat - 4:00 PM & 6:00 PM'
    },
    {
      id: 'flexibility',
      title: 'Flexibility & Fitness Programs',
      subtitle: 'Stretch & Strengthen',
      description: 'Specialized programs focusing on improving flexibility, core strength, and overall fitness. Perfect for those looking to enhance their physical capabilities and prevent injuries.',
      image: yogaFlexibility,
      alt: 'Flexibility training at BetterLife Yoga Center in Bashundhara',
      benefits: [
        'Deep muscle stretching',
        'Core strengthening exercises',
        'Injury prevention',
        'Improved range of motion',
        'Better athletic performance'
      ],
      schedule: 'Daily sessions available'
    },
    {
      id: 'wellness',
      title: 'Wellness & Lifestyle Improvement',
      subtitle: 'Holistic Well-being',
      description: 'Our wellness programs go beyond physical exercise to address your overall lifestyle. Learn techniques for stress management, healthy living, and maintaining work-life balance.',
      image: wellnessLifestyle,
      alt: 'Wellness and lifestyle program at BetterLife Yoga & Aerobic Center',
      benefits: [
        'Stress management techniques',
        'Lifestyle counseling',
        'Meditation and mindfulness',
        'Work-life balance guidance',
        'Holistic health approach'
      ],
      schedule: 'Weekend workshops available'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Classes & Programs
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our range of yoga and aerobics classes designed to help you achieve 
              your wellness goals. From traditional yoga to high-energy aerobics, we have 
              something for everyone in Bashundhara, Dhaka.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <div className={`absolute -top-4 ${index % 2 === 1 ? '-right-4' : '-left-4'} w-full h-full bg-primary/10 rounded-2xl`} />
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="relative rounded-2xl shadow-card w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {service.subtitle}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-6">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl mb-6">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Schedule:</strong> {service.schedule}
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Join This Class
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Class Schedule Overview */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Schedule</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-6">
              Class Timings
            </h2>
            <p className="text-muted-foreground">
              We offer flexible evening classes to fit your schedule. Contact us for the most 
              up-to-date class timings and availability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-wellness overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-4 font-display font-semibold text-foreground">Day</th>
                    <th className="text-left p-4 font-display font-semibold text-foreground">Classes</th>
                    <th className="text-left p-4 font-display font-semibold text-foreground">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: 'Monday', classes: 'Yoga', time: '3:30 PM - 9:00 PM' },
                    { day: 'Tuesday', classes: 'Aerobics', time: '3:30 PM - 9:00 PM' },
                    { day: 'Wednesday', classes: 'Yoga', time: '3:30 PM - 9:00 PM' },
                    { day: 'Thursday', classes: 'Aerobics', time: '3:30 PM - 9:00 PM' },
                    { day: 'Friday', classes: 'Yoga', time: '3:30 PM - 9:00 PM' },
                    { day: 'Saturday', classes: 'All Classes', time: '3:30 PM - 9:00 PM' },
                    { day: 'Sunday', classes: 'Closed', time: '-' },
                  ].map((row) => (
                    <tr key={row.day} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">{row.day}</td>
                      <td className="p-4 text-muted-foreground">{row.classes}</td>
                      <td className="p-4 text-muted-foreground">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Group Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-wellness text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Small Groups
              </h3>
              <p className="text-muted-foreground">
                We maintain small class sizes to ensure personalized attention and effective training for each member.
              </p>
            </div>

            <div className="card-wellness text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Flexible Timing
              </h3>
              <p className="text-muted-foreground">
                Evening classes designed to fit around your work schedule. Opens at 3:30 PM daily.
              </p>
            </div>

            <div className="card-wellness text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                All Levels Welcome
              </h3>
              <p className="text-muted-foreground">
                Whether you're a beginner or experienced, our classes are designed to accommodate all fitness levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-wellness-forest text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
            Contact us today to learn more about our classes and schedule your first session 
            at BetterLife Yoga & Aerobic Center in Bashundhara, Dhaka.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-wellness-forest font-semibold hover:bg-primary-foreground/90 transition-all"
            >
              Contact Us
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
        </div>
      </section>
    </Layout>
  );
};

export default Services;
