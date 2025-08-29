import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  HardHat, 
  Building2, 
  Shield, 
  Target, 
  CheckCircle, 
  MapPin, 
  Calendar,
  Users,
  Award,
  TrendingUp,
  Phone,
  Mail,
  Clock,
  Star,
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List
} from 'lucide-react';

// Enhanced Services Page Component
const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  const serviceCategories = [
    { name: "Residential", icon: <Building2 className="h-5 w-5" /> },
    { name: "Commercial", icon: <Target className="h-5 w-5" /> },
    { name: "Industrial", icon: <HardHat className="h-5 w-5" /> },
    { name: "Renovation", icon: <Shield className="h-5 w-5" /> }
  ];

  const services = [
    { 
      icon: <HardHat className="h-16 w-16" />, 
      title: 'Custom Home Construction', 
      category: 'Residential',
      description: 'Build your dream home with our expert team, from foundation to finishing touches with premium materials.',
      features: ['Architectural Design', 'Engineering Planning', 'Cost Analysis', 'Timeline Management'],
      price: 'From $250/sq ft',
      duration: '6-12 months',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Building2 className="h-16 w-16" />, 
      title: 'House Renovation & Remodeling', 
      category: 'Renovation',
      description: 'Transform your existing space with comprehensive renovation services that enhance both form and function.',
      features: ['Interior Renovation', 'Structural Modifications', 'Modern Upgrades', 'Energy Efficiency'],
      price: 'From $150/sq ft',
      duration: '3-8 months',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Shield className="h-16 w-16" />, 
      title: 'General Contracting Services', 
      category: 'Commercial',
      description: 'Full-service contracting with quality assurance, safety protocols, and project management excellence.',
      features: ['Project Oversight', 'Quality Assurance', 'Safety Management', 'Vendor Coordination'],
      price: 'Competitive Rates',
      duration: 'Project Dependent',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Target className="h-16 w-16" />, 
      title: 'Commercial & City Landmarks', 
      category: 'Commercial',
      description: 'Creating iconic structures that define skylines and serve communities for generations to come.',
      features: ['Urban Development', 'Landmark Architecture', 'Community Planning', 'Sustainability Focus'],
      price: 'Custom Quote',
      duration: '1-3 years',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Award className="h-8 w-8" /> },
    { number: '15+', label: 'Years Experience', icon: <Clock className="h-8 w-8" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="h-8 w-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Phone className="h-8 w-8" /> }
  ];

  const filteredServices = activeTab === 0 ? services : services.filter(service => service.category === serviceCategories[activeTab].name);

  return (
    <div className="pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/construction.jpeg')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <HardHat className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">Professional Construction Services</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-300">Expert</span> Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Comprehensive construction and engineering solutions tailored to bring your vision to life
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-yellow-300 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-24 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 0 ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab(0)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid className="h-4 w-4 mr-2" />
              All Services
            </motion.button>
            {serviceCategories.map((category, index) => (
              <motion.button
                key={index + 1}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index + 1 ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveTab(index + 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            layout
          >
            {filteredServices.map((service, index) => (
              <motion.div 
                key={service.title}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                layout
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-orange-400 mb-2">{service.icon}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Service Details */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Starting From</div>
                      <div className="font-bold text-orange-600">{service.price}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Duration</div>
                      <div className="font-bold text-gray-800">{service.duration}</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button 
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                    <motion.button 
                      className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed quote for your construction project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (263) 123-4567
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Projects Page Component
const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const categories = ['All', 'Commercial', 'Residential', 'Technology', 'Retail', 'Healthcare', 'Education'];

  const projects = [
    {
      title: "Skyline Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "48-story mixed-use development featuring retail, office, and residential spaces with panoramic city views",
      stats: "2.5M sq ft",
      year: "2023",
      location: "Harare CBD",
      budget: "$85M",
      client: "Urban Development Corp",
      duration: "36 months",
      status: "Completed",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      features: ["LEED Gold Certified", "Smart Building Technology", "Mixed-Use Design", "Parking for 1000+ vehicles"]
    },
    {
      title: "Riverside Residences",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury waterfront apartments with panoramic river views and premium amenities",
      stats: "300 Units",
      year: "2022",
      location: "Borrowdale",
      budget: "$45M",
      client: "Riverside Properties",
      duration: "28 months",
      status: "Completed",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Waterfront Location", "Premium Amenities", "24/7 Security", "Eco-Friendly Design"]
    },
    {
      title: "Innovation Hub",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art technology campus with flexible workspace solutions and innovation labs",
      stats: "500K sq ft",
      year: "2023",
      location: "Msasa",
      budget: "$30M",
      client: "Tech Innovators Ltd",
      duration: "24 months",
      status: "In Progress",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Innovation Labs", "Flexible Workspaces", "High-Speed Connectivity", "Sustainable Design"]
    },
    {
      title: "Heritage Mall",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern shopping center blending contemporary design with local cultural elements",
      stats: "800K sq ft",
      year: "2021",
      location: "Avondale",
      budget: "$60M",
      client: "Heritage Retail Group",
      duration: "30 months",
      status: "Completed",
      gallery: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Cultural Design Elements", "200+ Retail Spaces", "Food Court", "Entertainment Zone"]
    },
    {
      title: "Green Valley Hospital",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Advanced medical facility with sustainable design principles and cutting-edge technology",
      stats: "200 Beds",
      year: "2022",
      location: "Mount Pleasant",
      budget: "$40M",
      client: "Healthcare Solutions",
      duration: "32 months",
      status: "Completed",
      gallery: [
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Advanced Medical Equipment", "Energy Efficient", "Patient-Centered Design", "Emergency Services"]
    },
    {
      title: "University Science Complex",
      category: "Education",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern research and teaching facility for advanced sciences with state-of-the-art laboratories",
      stats: "1.2M sq ft",
      year: "2023",
      location: "Mount Hampden",
      budget: "$70M",
      client: "University of Zimbabwe",
      duration: "42 months",
      status: "In Progress",
      gallery: [
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Research Laboratories", "Lecture Halls", "Student Facilities", "Green Technology"]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying && filteredProjects.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.min(3, filteredProjects.length));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, filteredProjects.length]);

  const featuredProjects = filteredProjects.slice(0, 3);

  return (
    <div className="pt-24 bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mr-4">
                    {featuredProjects[currentSlide]?.category}
                  </span>
                  <span className="text-sm opacity-75">
                    {featuredProjects[currentSlide]?.status}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {featuredProjects[currentSlide]?.title}
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                  {featuredProjects[currentSlide]?.description}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{featuredProjects[currentSlide]?.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{featuredProjects[currentSlide]?.year}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span>{featuredProjects[currentSlide]?.stats}</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  <motion.button
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Gallery
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors ml-4"
          >
            {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of exceptional construction projects
            </p>
          </motion.div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex flex-wrap gap-3 mb-4 lg:mb-0">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-orange-500 text-white shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category}
                  {category === 'All' && <span className="ml-2 text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full">{projects.length}</span>}
                </motion.button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">View:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-orange-500' : 'text-gray-400'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-orange-500' : 'text-gray-400'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid/List */}
          <motion.div 
            className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-8'
            }`}
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-64'
                }`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category and Year */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
                
                <div className={`p-8 ${viewMode === 'list' ? 'lg:w-1/2 flex flex-col justify-between' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-2xl text-center">
                        <div className="text-sm text-gray-500 mb-1">Size</div>
                        <div className="font-bold text-orange-600">{project.stats}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-2xl text-center">
                        <div className="text-sm text-gray-500 mb-1">Budget</div>
                        <div className="font-bold text-gray-800">{project.budget}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-2xl text-center">
                        <div className="text-sm text-gray-500 mb-1">Duration</div>
                        <div className="font-bold text-gray-800">{project.duration}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-2xl text-center">
                        <div className="text-sm text-gray-500 mb-1">Client</div>
                        <div className="font-bold text-gray-800 text-xs">{project.client}</div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button 
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                    <motion.button 
                      className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-full transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Users className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Load More Button */}
          {filteredProjects.length > 6 && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-800 font-bold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Project Success Metrics
            </motion.h2>
            <motion.p 
              className="text-xl opacity-90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our track record speaks for excellence in every project we deliver
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: '500+', 
                label: 'Projects Completed', 
                icon: <Award className="h-12 w-12" />,
                description: 'Successfully delivered projects across various sectors'
              },
              { 
                number: '98%', 
                label: 'On-Time Delivery', 
                icon: <Clock className="h-12 w-12" />,
                description: 'Consistent delivery within scheduled timelines'
              },
              { 
                number: '$2.5B', 
                label: 'Total Project Value', 
                icon: <TrendingUp className="h-12 w-12" />,
                description: 'Combined value of all completed projects'
              },
              { 
                number: '15+', 
                label: 'Years Experience', 
                icon: <Shield className="h-12 w-12" />,
                description: 'Decades of expertise in construction industry'
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-yellow-300 mb-4 flex justify-center">{metric.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{metric.number}</div>
                <div className="text-xl font-semibold mb-3">{metric.label}</div>
                <div className="text-sm opacity-80 leading-relaxed">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Your Vision?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our growing list of satisfied clients and let us bring your construction project to life with our expertise and commitment to excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Start Your Project
                </motion.button>
                <motion.button
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Quote
                </motion.button>
              </div>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
                <div className="flex flex-col items-center">
                  <Phone className="h-8 w-8 text-orange-500 mb-3" />
                  <div className="font-semibold mb-1">Call Us</div>
                  <div>(263) 123-4567</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="h-8 w-8 text-orange-500 mb-3" />
                  <div className="font-semibold mb-1">Email Us</div>
                  <div>info@construction.co.zw</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="h-8 w-8 text-orange-500 mb-3" />
                  <div className="font-semibold mb-1">Visit Us</div>
                  <div>Harare, Zimbabwe</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Footer Component
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const footerLinks = {
    services: [
      'Custom Home Construction',
      'House Renovation',
      'General Contracting',
      'Commercial Buildings',
      'Project Management',
      'Emergency Repairs'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Awards & Recognition',
      'Safety Standards',
      'Sustainability'
    ],
    resources: [
      'Project Gallery',
      'Client Testimonials',
      'Construction Blog',
      'Free Estimates',
      'Warranty Information',
      'Payment Options'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Licensing',
      'Insurance Coverage',
      'Dispute Resolution'
    ]
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: '📘', 
      url: '#',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: '#',
      color: 'hover:bg-blue-400'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: '#',
      color: 'hover:bg-blue-700'
    },
    { 
      name: 'Instagram', 
      icon: '📸', 
      url: '#',
      color: 'hover:bg-pink-600'
    },
    { 
      name: 'YouTube', 
      icon: '📺', 
      url: '#',
      color: 'hover:bg-red-600'
    }
  ];

  const certifications = [
    'LEED Certified',
    'OSHA Compliant',
    'ISO 9001',
    'Green Building',
    'Safety Excellence',
    'Quality Assurance'
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/const.webp')] opacity-20"></div>
      
      {/* Newsletter Section */}
      <div className="relative z-10 bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Our Latest Projects
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Get construction tips, project updates, and exclusive offers delivered to your inbox
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                </motion.button>
              </form>
              
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block"
                >
                  🎉 Thank you for subscribing! Check your email for confirmation.
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info Column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <HardHat className="h-10 w-10 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold">BuildCorp</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Zimbabwe's premier construction company, delivering excellence in every project since 2008. 
                Building dreams, creating landmarks, and shaping the future of our communities.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">123 Construction Ave, Harare, Zimbabwe</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">+263 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">info@buildcorp.co.zw</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links Columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Services Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-bold mb-6 text-orange-500 flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  Our Services
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-bold mb-6 text-orange-500 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-bold mb-6 text-orange-500 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Resources
                </h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <motion.div
            className="border-t border-gray-800 pt-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-6 text-center">
              <Award className="h-6 w-6 text-orange-500 inline-block mr-2" />
              Certifications & Standards
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30 hover:border-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 mb-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Phone className="h-6 w-6 mr-2" />
              24/7 Emergency Service
            </h4>
            <p className="text-lg mb-4 opacity-90">
              Construction emergencies don't wait for business hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+263123456789"
                className="bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Emergency: +263 123 456 789
              </motion.a>
              <motion.a
                href="mailto:emergency@buildcorp.co.zw"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                emergency@buildcorp.co.zw
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-black/50 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <motion.div
              className="text-sm text-gray-400 mb-4 lg:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © 2024 BuildCorp Zimbabwe. All rights reserved. | Reg: 12345/ZW
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          </div>
          
          {/* Back to Top Button */}
          <motion.button
            className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl z-50 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="h-6 w-6 transform -rotate-90" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

// Export components for use in App.js
export { ServicesPage, ProjectsPage, Footer };
          
    