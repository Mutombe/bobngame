import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, ArrowRight, Menu, X, ChevronDown, HardHat, Hammer, Wrench, 
  Users, Award, Clock, Shield, Star, Phone, Mail, MapPin, CheckCircle,
  TrendingUp, Eye, Target, Zap, Calendar, PlayCircle, Quote
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager, City Development",
      content: "Bobngame transformed our vision into reality. Their attention to detail and commitment to quality is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Architect, Urban Design Co.",
      content: "Working with Bobngame has been exceptional. They deliver on time and exceed expectations consistently.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director, Infrastructure Ltd.",
      content: "The level of professionalism and expertise Bobngame brings to every project is truly impressive.",
      rating: 5
    }
  ];

  const projects = [
    {
      title: "Skyline Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "48-story mixed-use development",
      stats: "2.5M sq ft"
    },
    {
      title: "Riverside Residences",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury waterfront apartments",
      stats: "300 Units"
    },
    {
      title: "Innovation Hub",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern tech campus facility",
      stats: "500K sq ft"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/70 to-orange-900/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)' }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center text-white pt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full text-orange-300 font-semibold mb-6">
              <Award className="h-5 w-5 mr-2" />
              Award-Winning Construction Company
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Dreams</span><br />
            With Precision
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premier civil engineering and construction services for a world that's constantly evolving. 
            We transform visions into architectural masterpieces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/projects">
              <motion.button 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <motion.button 
              className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Video
            </motion.button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '215+', label: 'Current Clients', icon: Users },
              { number: '550+', label: 'Projects Complete', icon: Building2 },
              { number: '15+', label: 'Years Experience', icon: Clock },
              { number: '25+', label: 'Awards Won', icon: Award }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <stat.icon className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white/80 text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6 text-white/80" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-semibold mb-4">
              <Wrench className="h-4 w-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Service We Provide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive civil engineering and construction solutions tailored to your specific needs, 
              delivering excellence at every stage of your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <HardHat className="h-12 w-12" />, 
                title: 'Custom Solutions', 
                description: 'Tailored construction services designed to meet your unique project requirements and vision.',
                features: ['Design Planning', 'Material Selection', 'Cost Optimization']
              },
              { 
                icon: <Building2 className="h-12 w-12" />, 
                title: 'House Renovation', 
                description: 'Transform your existing space with our comprehensive renovation and remodeling expertise.',
                features: ['Interior Design', 'Structural Updates', 'Modern Amenities']
              },
              { 
                icon: <Shield className="h-12 w-12" />, 
                title: 'General Contractor', 
                description: 'Full-service contracting with quality assurance and project management excellence.',
                features: ['Project Management', 'Quality Control', 'Timeline Adherence']
              },
              { 
                icon: <Target className="h-12 w-12" />, 
                title: 'City Landmarks', 
                description: 'Creating iconic structures that define skylines and serve communities for generations.',
                features: ['Urban Planning', 'Landmark Design', 'Community Impact']
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services">
                  <motion.button 
                    className="text-orange-600 font-semibold flex items-center group-hover:text-orange-700"
                    whileHover={{ x: 5 }}
                  >
                    Discover More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold mb-4">
              <Eye className="h-4 w-4 mr-2" />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Discover Our Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio showcasing the breadth of our expertise, from iconic skyscrapers to 
              intimate residential developments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-3">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-400 font-semibold">{project.stats}</span>
                      <Link to="/projects">
                        <motion.button 
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/projects">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold mb-4">
              <Quote className="h-4 w-4 mr-2" />
              Client Voices
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Voices of Satisfaction</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Listen to delighted clients who've experienced Bobngame's exceptional craftsmanship and service.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-light text-gray-200 mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg">{testimonials[activeTestimonial].name}</p>
                    <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center space-x-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? 'bg-orange-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have any upcoming project?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-orange-100 leading-relaxed">
              Explore how Bobngame Construction can turn your ideas into reality with our expertise and dedication. 
              Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                className="group bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Contact form would open here!")}
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.div 
                className="flex items-center space-x-4 text-orange-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">+263 4 123 456</span>
                </div>
                <div className="w-px h-6 bg-orange-300"></div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">info@bobngame.co.zw</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

// Services Page Component
const ServicesPage = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction and engineering solutions tailored to your vision
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: <HardHat className="h-16 w-16" />, 
                title: 'Custom Solutions', 
                description: 'Tailored construction services designed to meet your unique project requirements and vision.',
                features: ['Architectural Design', 'Engineering Planning', 'Cost Analysis', 'Timeline Management']
              },
              { 
                icon: <Building2 className="h-16 w-16" />, 
                title: 'House Renovation', 
                description: 'Transform your existing space with our comprehensive renovation and remodeling expertise.',
                features: ['Interior Renovation', 'Structural Modifications', 'Modern Upgrades', 'Energy Efficiency']
              },
              { 
                icon: <Shield className="h-16 w-16" />, 
                title: 'General Contractor', 
                description: 'Full-service contracting with quality assurance and project management excellence.',
                features: ['Project Oversight', 'Quality Assurance', 'Safety Management', 'Vendor Coordination']
              },
              { 
                icon: <Target className="h-16 w-16" />, 
                title: 'City Landmarks', 
                description: 'Creating iconic structures that define skylines and serve communities for generations.',
                features: ['Urban Development', 'Landmark Architecture', 'Community Planning', 'Sustainability Focus']
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-orange-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const projects = [
    {
      title: "Skyline Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "48-story mixed-use development featuring retail, office, and residential spaces",
      stats: "2.5M sq ft",
      year: "2023",
      location: "Harare CBD"
    },
    {
      title: "Riverside Residences",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury waterfront apartments with panoramic river views",
      stats: "300 Units",
      year: "2022",
      location: "Borrowdale"
    },
    {
      title: "Innovation Hub",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art technology campus with flexible workspace solutions",
      stats: "500K sq ft",
      year: "2023",
      location: "Msasa"
    },
    {
      title: "Heritage Mall",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern shopping center blending contemporary design with local culture",
      stats: "800K sq ft",
      year: "2021",
      location: "Avondale"
    },
    {
      title: "Green Valley Hospital",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Advanced medical facility with sustainable design principles",
      stats: "200 Beds",
      year: "2022",
      location: "Mount Pleasant"
    },
    {
      title: "University Science Complex",
      category: "Education",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern research and teaching facility for advanced sciences",
      stats: "1.2M sq ft",
      year: "2023",
      location: "Mount Hampden"
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of exceptional construction projects that showcase our expertise and commitment to excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <span className="text-orange-600 font-bold">{project.stats}</span>
                  </div>
                  <motion.button 
                    className="w-full bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-800 font-semibold py-3 rounded-full transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">About Bobngame</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building tomorrow's landmarks with expert precision and unwavering commitment to excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bobngame is a trailblazing architecture agency renowned for its innovative approach to design, 
                where creativity meets functionality. From futuristic skyscrapers to sustainable residential 
                complexes, we specialize in crafting spaces that are both aesthetically striking and environmentally conscious.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Blaze pushes boundaries, transforming bold concepts into architectural masterpieces that define 
                the future of construction and design.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-orange-600">215+</p>
                  <p className="text-gray-600 text-sm">Current Clients</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-orange-600">550+</p>
                  <p className="text-gray-600 text-sm">Projects Complete</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Construction team"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-2xl font-bold">15+ Years</p>
                <p className="text-orange-100">of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// FAQ Page Component
const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqs = [
    {
      question: "What types of construction projects does Bobngame handle?",
      answer: "We handle a wide range of projects including residential buildings, commercial complexes, industrial facilities, healthcare centers, educational institutions, and infrastructure development. Our expertise spans from small renovations to large-scale construction projects."
    },
    {
      question: "How do you ensure project quality and safety?",
      answer: "Quality and safety are our top priorities. We implement strict quality control measures at every stage, use certified materials, employ experienced professionals, and follow all safety regulations and building codes. Regular inspections and quality audits ensure the highest standards."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity. Small renovations may take 4-8 weeks, while large commercial projects can take 12-24 months. We provide detailed timelines during the planning phase and keep clients updated throughout the process."
    },
    {
      question: "Do you provide design services?",
      answer: "Yes, we offer comprehensive design services including architectural design, structural engineering, and interior design. Our team works closely with clients to create designs that meet their vision, budget, and functional requirements."
    },
    {
      question: "What is included in your project management?",
      answer: "Our project management includes planning, scheduling, budget management, quality control, safety oversight, vendor coordination, progress reporting, and client communication. We handle all aspects to ensure smooth project delivery."
    },
    {
      question: "How do you handle cost estimates and budgeting?",
      answer: "We provide detailed cost estimates based on project specifications, current material costs, and labor requirements. We work within your budget and provide regular updates on expenses to avoid surprises."
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our construction services and processes
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;