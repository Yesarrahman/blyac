import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wellness-forest text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-display text-xl font-bold">BL</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">BetterLife</h3>
                <p className="text-sm opacity-80">Yoga & Aerobics Center</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              BetterLife Yoga & Aerobics Center aims to become one of the best yoga and aerobics 
              centers in Bangladesh by providing high-quality wellness services.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐ 4.3</span>
              <span className="text-sm opacity-70">(6 Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Classes & Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a
                href="tel:+8801315666257"
                className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+880 1315-666257</span>
              </a>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Ka-11/2, RAS Plaza (7th Floor),<br />
                  Bashundhara Road, Dhaka 1229,<br />
                  Bangladesh
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Mon - Sat: 3:30 PM - 9:00 PM<br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/betterlifeyoga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Follow on Facebook</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Send us a Message</span>
              </Link>
              <a
                href="https://maps.google.com/?q=RAS+Plaza+Bashundhara+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>© 2024 BetterLife Yoga & Aerobic Center. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> in Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
