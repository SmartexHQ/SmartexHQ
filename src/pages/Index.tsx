import { Bot, Cpu, Zap, ArrowRight, BarChart3, ShieldCheck, Database, Lock, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
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
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Consult with Experts
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
