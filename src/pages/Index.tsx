import { Bot, Cpu, Zap, ArrowRight, BarChart3, ShieldCheck, Database, Lock, Mail, Phone, Trophy, Award, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Transform Your Business with <br />
            <span className="text-accent">Custom Software Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We help businesses leverage cutting-edge technology and AI to build innovative, custom software that drives growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
              onClick={() => scrollToSection('consultation')}
            >
              Consult with Experts
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('case-studies')}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About SmartexHq</h2>
            <p className="text-lg text-gray-600">
              SmartexHq is a leading software consulting firm dedicated to transforming businesses through innovative technology solutions. With over a decade of experience, we've helped hundreds of companies across various industries modernize their operations and achieve digital excellence.
            </p>
            <p className="text-lg text-gray-600">
              Our team of expert consultants and developers combines deep technical expertise with business acumen to deliver solutions that drive real results. We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering customized solutions that exceed expectations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Check className="text-accent" size={24} />
                <span className="text-gray-700">Industry Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-accent" size={24} />
                <span className="text-gray-700">Custom Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-accent" size={24} />
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="lg:pl-12">
            <div className="bg-accent/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-primary mb-6">Why Choose SmartexHq?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Trophy className="text-accent shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-gray-600">Successfully delivered 150+ projects across various industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="text-accent shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Team</h4>
                    <p className="text-gray-600">Highly skilled professionals with diverse technology expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BarChart3 className="text-accent shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Results-Driven</h4>
                    <p className="text-gray-600">Focus on delivering measurable business outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Project Count */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">150+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center p-6">
              <Check className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Software Consulting Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions and consulting services to drive your business forward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            Icon={Cpu}
            title="Custom Software Development"
            description="End-to-end software development tailored to your specific business requirements and workflows"
          />
          <FeatureCard
            Icon={Database}
            title="Database Management"
            description="Expert database design, optimization, and maintenance services to ensure data reliability and performance"
          />
          <FeatureCard
            Icon={Lock}
            title="IT Security Consulting"
            description="Comprehensive security assessments and solutions to protect your digital assets and infrastructure"
          />
          <FeatureCard
            Icon={Bot}
            title="AI & Automation Solutions"
            description="Implement intelligent automation and AI-driven technologies to enhance productivity"
          />
          <FeatureCard
            Icon={Zap}
            title="Digital Transformation"
            description="Strategic consulting to modernize your technology infrastructure and drive innovation"
          />
          <FeatureCard
            Icon={BarChart3}
            title="Business Analytics"
            description="Data-driven insights and analytics solutions to optimize business performance"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our software solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="CTO"
              company="TechFlow Inc."
              quote="SmartexHq transformed our legacy systems into a modern, efficient platform. The team's expertise and dedication were exceptional."
              rating={5}
            />
            <TestimonialCard
              name="Michael Chen"
              role="Operations Director"
              company="Global Solutions"
              quote="The custom automation solution they built has reduced our processing time by 60%. Outstanding results!"
              rating={5}
            />
            <TestimonialCard
              name="Emma Rodriguez"
              role="IT Manager"
              company="SecureNet"
              quote="Their security consulting services helped us identify and address critical vulnerabilities. Highly recommended!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses transform their operations with custom software solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
              <Database className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">FinTech Platform Migration</h3>
            <p className="text-gray-600 mb-4">Modernized legacy systems for a leading financial institution, improving performance by 200%</p>
            <Button variant="link" className="text-accent hover:text-accent/90 p-0">
              Read Case Study
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
              <Bot className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analytics</h3>
            <p className="text-gray-600 mb-4">Implemented machine learning solutions for retail analytics, increasing sales by 35%</p>
            <Button variant="link" className="text-accent hover:text-accent/90 p-0">
              Read Case Study
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
              <Lock className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Security Infrastructure</h3>
            <p className="text-gray-600 mb-4">Enhanced cybersecurity measures for a healthcare provider, ensuring HIPAA compliance</p>
            <Button variant="link" className="text-accent hover:text-accent/90 p-0">
              Read Case Study
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Why Partner with SmartexHq</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bring expertise, innovation, and a customer-centric approach to every software project
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <BarChart3 className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business-Driven Solutions</h3>
            <p className="text-gray-600">Custom software that aligns perfectly with your business goals and challenges</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <ShieldCheck className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Quality</h3>
            <p className="text-gray-600">Robust, scalable, and secure software solutions built with best-in-class technologies</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Zap className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
            <p className="text-gray-600">Agile methodology ensures faster time-to-market and continuous improvement</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us for a free consultation
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600">contact@smartexhq.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Ready to Innovate Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a free consultation and discover how SmartexHq can transform your business through custom software solutions.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Book Consultation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
