import { useEffect, useState } from "react";
import { ChevronDown, Zap, Globe, Shield, Users, TrendingUp, ArrowRight } from "lucide-react";

const MainContent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results instantly with zero lag",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Reach customers worldwide with our distributed infrastructure",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.99% uptime guarantee",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      title: "Easy Collaboration",
      description: "Seamless teamwork with real-time collaboration features",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Analytics Driven",
      description: "Deep insights with powerful analytics and reporting tools",
      color: "from-red-400 to-rose-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVision",
      content: "This platform transformed how we operate. Incredible results in just weeks.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Founder, Innovation Labs",
      content: "The best investment we made this year. Support team is outstanding.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Emma Davis",
      role: "Director, Growth Co.",
      content: "Scalability and reliability exceed our expectations. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-2xl" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            YourBrand
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#testimonials" className="hover:text-purple-400 transition">Testimonials</a>
            <a href="#pricing" className="hover:text-purple-400 transition">Pricing</a>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold text-purple-300 border border-purple-500/30">
                  ✨ Welcome to the Future
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                  Transform Your Business Today
                </h1>
              </div>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Experience the power of next-generation technology. Streamline operations, boost productivity, and unlock unprecedented growth with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2">
                  Start Free Trial <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 rounded-xl font-semibold border-2 border-purple-400 hover:bg-purple-500/20 transition">
                  Watch Demo
                </button>
              </div>
              <div className="flex gap-8 pt-4 text-sm">
                <div>
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">50K+</p>
                  <p className="text-gray-400">Active Users</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">99.9%</p>
                  <p className="text-gray-400">Uptime</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">24/7</p>
                  <p className="text-gray-400">Support</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop"
                alt="Dashboard Preview"
                className="relative rounded-2xl shadow-2xl border border-purple-500/20 w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl shadow-xl">
                <p className="text-sm font-semibold">Trusted by industry leaders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-purple-400" size={24} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to succeed, all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className={`relative z-10 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  
                  <div className="mt-6 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn more</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Simple & Intuitive
            </h2>
            <p className="text-gray-400 text-lg">Get started in minutes, not weeks</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Create your account in seconds" },
              { step: "2", title: "Configure", desc: "Set up your preferences" },
              { step: "3", title: "Connect", desc: "Integrate with your tools" },
              { step: "4", title: "Succeed", desc: "Watch your business grow" }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="pt-12 text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Loved by Customers
            </h2>
            <p className="text-gray-400 text-lg">See what our users have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-purple-400"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of successful businesses already using our platform. Get started free today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-10 py-4 rounded-xl font-semibold border-2 border-purple-400 hover:bg-purple-500/20 transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-purple-950/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 YourBrand. All rights reserved.</p>
            <p>Made with ❤️ for modern businesses</p>
          </div>
        </div>
      </footer>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MainContent;
