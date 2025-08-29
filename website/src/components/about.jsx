
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ChevronDown, 
  Users, 
  Award, 
  Calendar, 
  Target, 
  Shield, 
  Zap, 
  Building2, 
  Hammer, 
  Wrench, 
  HardHat,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  TrendingUp,
  Clock,
  DollarSign,
  Settings
} from 'lucide-react';

// Enhanced About Page Component
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { icon: Users, number: '215+', label: 'Current Clients', color: 'text-orange-500' },
    { icon: Building2, number: '550+', label: 'Projects Complete', color: 'text-blue-500' },
    { icon: Calendar, number: '15+', label: 'Years Experience', color: 'text-green-500' },
    { icon: Award, number: '98%', label: 'Client Satisfaction', color: 'text-purple-500' }
  ];

  const services = [
    { icon: Building2, title: 'Commercial Construction', desc: 'Large-scale commercial projects' },
    { icon: HardHat, title: 'Residential Building', desc: 'Custom homes & developments' },
    { icon: Hammer, title: 'Renovation Services', desc: 'Complete property makeovers' },
    { icon: Settings, title: 'Project Management', desc: 'End-to-end project oversight' }
  ];

  const values = [
    { icon: Shield, title: 'Safety First', desc: 'Uncompromising commitment to workplace safety' },
    { icon: Target, title: 'Precision', desc: 'Meticulous attention to every detail' },
    { icon: Zap, title: 'Innovation', desc: 'Cutting-edge construction techniques' },
    { icon: CheckCircle, title: 'Quality', desc: 'Excellence in every project delivery' }
  ];

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="pt-16 md:pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-50 via-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5">
            
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase">
                Building Excellence Since 2009
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-6 leading-tight">
              About Bobngame
              <span className="block text-orange-500 text-3xl md:text-5xl mt-2">
                Construction Leaders
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Building tomorrow's landmarks with expert precision and unwavering commitment to excellence. 
              Where vision meets reality through innovative construction solutions.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300">
                <Phone className="h-5 w-5" /> Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 mb-4 ${stat.color}`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <motion.p 
                      className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.p>
                    <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-16 gap-4">
            {[
              { id: 'story', label: 'Our Story', icon: Building2 },
              { id: 'services', label: 'Services', icon: Hammer },
              { id: 'values', label: 'Our Values', icon: Star }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-orange-500 border-2 border-gray-200 hover:border-orange-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'story' && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                    Crafting Excellence in 
                    <span className="text-orange-500 block">Every Project</span>
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Bobngame stands as a trailblazing construction company renowned for its innovative approach to building, 
                      where creativity meets functionality. From cutting-edge commercial complexes to sustainable residential 
                      developments, we specialize in crafting structures that are both architecturally striking and environmentally conscious.
                    </p>
                    
                    <p>
                      Our team pushes boundaries, transforming bold concepts into construction masterpieces that define 
                      the future of modern building and design. Every project represents our commitment to excellence, 
                      safety, and sustainable construction practices.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Licensed & Insured</p>
                          <p className="text-sm text-gray-600">Fully certified professionals</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Award Winning</p>
                          <p className="text-sm text-gray-600">Industry recognized excellence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Construction excellence"
                      className="w-full h-96 md:h-[500px] object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Video Play Button */}
                    <button
                      onClick={toggleVideo}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <Play className="h-8 w-8 text-orange-500 ml-1" />
                      </div>
                    </button>
                  </div>
                  
                  {/* Floating Achievement Card */}
                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <p className="text-2xl md:text-3xl font-bold">15+ Years</p>
                    <p className="text-orange-100">Building Excellence</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-orange-500" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                      
                      <button className="mt-6 text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'values' && (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Let's transform your ideas into remarkable structures
            </p>
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Enhanced FAQ Page Component
const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: Building2 },
    { id: 'services', name: 'Services', icon: Hammer },
    { id: 'process', name: 'Process', icon: Settings },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'timeline', name: 'Timeline', icon: Clock }
  ];

  const faqs = [
    {
      category: 'services',
      question: "What types of construction projects does Bobngame handle?",
      answer: "We handle a comprehensive range of projects including residential buildings, commercial complexes, industrial facilities, healthcare centers, educational institutions, and infrastructure development. Our expertise spans from small renovations and home additions to large-scale construction projects, mixed-use developments, and sustainable building solutions.",
      icon: Building2
    },
    {
      category: 'process',
      question: "How do you ensure project quality and safety?",
      answer: "Quality and safety are our top priorities. We implement strict quality control measures at every stage, use only certified materials from trusted suppliers, employ experienced and licensed professionals, and follow all safety regulations and building codes. Our projects undergo regular inspections, quality audits, and we maintain comprehensive insurance coverage for complete peace of mind.",
      icon: Shield
    },
    {
      category: 'timeline',
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity. Small renovations typically take 4-8 weeks, medium residential projects 3-6 months, while large commercial projects can take 12-24 months. We provide detailed timelines during the planning phase, including milestone markers, and keep clients updated with regular progress reports throughout the entire process.",
      icon: Calendar
    },
    {
      category: 'services',
      question: "Do you provide design and architectural services?",
      answer: "Absolutely! We offer comprehensive design services including architectural design, structural engineering, interior design, and 3D visualization. Our in-house design team works closely with clients to create designs that perfectly balance aesthetics, functionality, budget considerations, and regulatory requirements. We can handle everything from initial concept to final construction drawings.",
      icon: Target
    },
    {
      category: 'process',
      question: "What is included in your project management services?",
      answer: "Our comprehensive project management includes detailed planning and scheduling, budget management and cost control, quality assurance and control, safety oversight and compliance, vendor and subcontractor coordination, permit acquisition and regulatory compliance, progress reporting and client communication, and final inspection and handover processes.",
      icon: CheckCircle
    },
    {
      category: 'pricing',
      question: "How do you handle cost estimates and budgeting?",
      answer: "We provide transparent, detailed cost estimates based on current project specifications, real-time material costs, and accurate labor requirements. Our estimates include contingencies for unforeseen circumstances. We work within your budget constraints and provide regular financial updates and change order approvals to avoid any surprises. All costs are clearly itemized and explained.",
      icon: DollarSign
    },
    {
      category: 'process',
      question: "What permits and approvals do you handle?",
      answer: "We manage all necessary permits and approvals including building permits, zoning approvals, environmental clearances, utility connections, and inspection scheduling. Our team has extensive experience navigating local regulations and building codes, ensuring your project meets all requirements and passes all inspections smoothly.",
      icon: Award
    },
    {
      category: 'services',
      question: "Do you offer sustainable and green building options?",
      answer: "Yes, we're committed to sustainable construction practices. We offer LEED certification services, energy-efficient building systems, sustainable material selection, solar panel integration, water conservation systems, and green roofing solutions. Our team stays current with the latest environmental building standards and green technologies.",
      icon: Zap
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 md:pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase">
                Get Your Questions Answered
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              Frequently Asked
              <span className="block text-orange-500">Questions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about our construction services, processes, and what makes us your ideal building partner
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="text"
                placeholder="Search for specific questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-8 py-5 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-lg shadow-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.462-.596-6.304-1.709" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No questions found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter</p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full p-8 text-left flex items-start justify-between hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-start gap-6 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <faq.icon className="h-6 w-6 text-orange-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">{faq.question}</h3>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              faq.category === 'services' ? 'bg-blue-100 text-blue-600' :
                              faq.category === 'process' ? 'bg-green-100 text-green-600' :
                              faq.category === 'pricing' ? 'bg-purple-100 text-purple-600' :
                              faq.category === 'timeline' ? 'bg-orange-100 text-orange-600' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {categories.find(cat => cat.id === faq.category)?.name || 'General'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <ChevronDown 
                        className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 flex-shrink-0 ml-4 ${
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
                          <div className="px-8 pb-8 ml-18">
                            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-500">
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {faq.answer}
                              </p>
                            </div>
                            
                            {/* Quick Actions */}
                            <div className="flex flex-wrap gap-3 mt-6">
                              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300">
                                <Phone className="h-4 w-4" />
                                Discuss This
                              </button>
                              <button className="bg-white border-2 border-gray-200 hover:border-orange-300 text-gray-700 hover:text-orange-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300">
                                <Mail className="h-4 w-4" />
                                Get Quote
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Our expert team is here to provide personalized answers and guidance for your specific construction needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Phone, title: 'Call Us', desc: '+1 (555) 123-4567', action: 'Call Now' },
                { icon: Mail, title: 'Email Us', desc: 'info@bobngame.com', action: 'Send Email' },
                { icon: MapPin, title: 'Visit Us', desc: '123 Construction Ave', action: 'Get Directions' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-blue-100 mb-4">{contact.desc}</p>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300">
                    {contact.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Explore Our Knowledge Base
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deeper into construction topics with our comprehensive guides and resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Construction Process Guide',
                desc: 'Step-by-step breakdown of our construction methodology',
                icon: Settings,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Material Selection',
                desc: 'Understanding different materials and their applications',
                icon: Hammer,
                color: 'from-green-500 to-teal-500'
              },
              {
                title: 'Safety Standards',
                desc: 'Our commitment to maintaining the highest safety protocols',
                icon: Shield,
                color: 'from-red-500 to-pink-500'
              },
              {
                title: 'Budget Planning',
                desc: 'How to plan and manage your construction budget effectively',
                icon: DollarSign,
                color: 'from-purple-500 to-indigo-500'
              },
              {
                title: 'Timeline Management',
                desc: 'Understanding project phases and realistic timelines',
                icon: Clock,
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Sustainability Practices',
                desc: 'Green building techniques and environmental considerations',
                icon: Zap,
                color: 'from-emerald-500 to-green-500'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{resource.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{resource.desc}</p>
                  
                  <button className="text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Export both components
export { AboutPage, FAQPage };