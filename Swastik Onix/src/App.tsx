import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Smartphone, Gamepad2, Database, Megaphone, Calendar, Linkedin, Instagram, Github, Mail, MessageCircle } from 'lucide-react';
import { UnixBot } from './components/UnixBot';

export default function App() {
  const [isBotOpen, setIsBotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F2FF]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7000FF]/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero onOpenBot={() => setIsBotOpen(true)} />
        <Services />
        <Footer />
      </div>

      {/* Unix Bot */}
      <UnixBot isOpen={isBotOpen} setIsOpen={setIsBotOpen} />
    </div>
  );
}

function Navbar() {
  const handleContactClick = () => {
    const message = 'Hello Swastik Onix. I would like to discuss a project with you.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/916301854729?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0B]/60 border-b border-white/5"
      style={{
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            {/* Logo placeholder - space reserved for custom logo */}
            <div className="w-10 h-10"></div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#00F2FF] to-[#7000FF] bg-clip-text text-transparent">
              Swastik Onix
            </span>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00F2FF] to-[#7000FF] text-white font-medium hover:shadow-lg hover:shadow-[#00F2FF]/50 transition-shadow"
          >
            Contact
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero({ onOpenBot }: { onOpenBot: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <span className="block mb-2">Architecting</span>
            <span className="bg-gradient-to-r from-[#00F2FF] via-[#7000FF] to-[#00F2FF] bg-clip-text text-transparent animate-gradient">
              Digital Ecosystems
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-xl text-gray-300 mb-2">
            Transforming visions into reality through cutting-edge technology
          </p>
          <p className="text-lg sm:text-xl bg-gradient-to-r from-[#00F2FF] to-[#7000FF] bg-clip-text text-transparent mb-4">
            Grow with Swastik
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
            {['Web Development', 'App Development', 'Unity Game Dev', 'Marketing', 'Event Management'].map((service, index) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:border-[#00F2FF]/50 transition-colors"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 242, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBot}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00F2FF] to-[#7000FF] text-white font-medium text-lg"
          >
            Talk to Unix
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Stunning, responsive websites built with cutting-edge technologies',
      gradient: 'from-[#00F2FF] to-[#0088FF]',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that scale',
      gradient: 'from-[#7000FF] to-[#A000FF]',
    },
    {
      icon: Gamepad2,
      title: 'Unity Game Dev',
      description: 'Immersive gaming experiences powered by Unity Engine',
      gradient: 'from-[#00F2FF] to-[#7000FF]',
    },
    {
      icon: Database,
      title: 'Backend & Database',
      description: 'Robust server infrastructure and scalable database solutions',
      gradient: 'from-[#7000FF] to-[#00F2FF]',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that amplify your brand presence',
      gradient: 'from-[#A000FF] to-[#00F2FF]',
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Memorable experiences from concept to execution',
      gradient: 'from-[#00F2FF] to-[#7000FF]',
    },
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-[#00F2FF] to-[#7000FF] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive solutions for your digital needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative group h-full"
      >
        {/* Glassmorphism card */}
        <div
          className="relative h-full p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden"
          style={{
            boxShadow: isHovered
              ? '0 20px 60px rgba(0, 242, 255, 0.3), 0 0 40px rgba(112, 0, 255, 0.2)'
              : '0 4px 20px rgba(0, 0, 0, 0.3)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Gradient overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
          />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
            >
              <service.icon className="w-7 h-7 text-white" />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">{service.description}</p>

            {/* Glow effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl`}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Footer() {
  const handleWhatsAppClick = () => {
    const message = 'Hello Swastik Onix. I would like to get in touch with you.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916301854729?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="relative border-t border-white/10 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/95 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00F2FF] to-[#7000FF] bg-clip-text text-transparent">
              Swastik Onix
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Architecting digital ecosystems with cutting-edge technology. Transforming visions into reality.
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@swastikonix.com"
                  className="text-gray-400 hover:text-[#00F2FF] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-gray-400 hover:text-[#00F2FF] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com/company/swastikonix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#00F2FF] hover:to-[#7000FF] border border-white/10 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://instagram.com/swastikonix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#00F2FF] hover:to-[#7000FF] border border-white/10 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/swastikonix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#00F2FF] hover:to-[#7000FF] border border-white/10 flex items-center justify-center transition-all"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Developer Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Developer Contact</h3>
            <p className="text-sm mb-3">
              <span className="bg-gradient-to-r from-[#00F2FF] to-[#7000FF] bg-clip-text text-transparent font-medium">
                Mir Sajjad Ali Razvi
              </span>
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:mir@swastikonix.com"
                  className="text-gray-400 hover:text-[#00F2FF] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mirsajjadalirazvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00F2FF] transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mirsajjadalirazvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00F2FF] transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00F2FF] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#00F2FF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-[#00F2FF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-[#00F2FF] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>© 2026 Swastik Onix. All rights reserved.</p>
          <p className="text-gray-500">
            Developed by <span className="text-[#00F2FF]">Mir Sajjad Ali Razvi</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}