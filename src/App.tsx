import React from 'react';
import { Instagram, Youtube, ArrowRight, Stethoscope, Timer, Cpu, HeartPulse, CheckCircle } from 'lucide-react';

function App() {
  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'https://calendly.com/shivanshbajaj053/consultation-call';
  };

  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Transform Your Dental Practice with AI
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Revolutionize patient care and streamline your dental practice with cutting-edge AI automation solutions
        </p>
        <button
          onClick={handleCTAClick}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300"
        >
          Book a Free Consultation <ArrowRight className="w-5 h-5" />
        </button>
      </header>

      {/* Video Section 1 */}
      <section className="container mx-auto px-4 py-16">
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/i4yScWmANkY"
            title="Dental AI Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-gradient p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Smart Diagnostics</h3>
            </div>
            <p className="text-gray-300">AI-powered dental imaging analysis for faster, more accurate diagnoses</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold">Practice Automation</h3>
            </div>
            <p className="text-gray-300">Automate appointment scheduling, follow-ups, and patient communications</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <HeartPulse className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Patient Care</h3>
            </div>
            <p className="text-gray-300">Enhanced patient experience with personalized care recommendations</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          What Dental Professionals Say
        </h2>
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/n0AMuRYvSzs"
            title="Client Testimonials"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </div>
      </section>

      {/* Founder Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="card-gradient p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400">
              <img
                src="https://i.ibb.co/hC4GvVv/474443595-2134101647004489-6571527664473807302-n.jpg"
                alt="Shivansh Bajaj"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Meet Our Founder
              </h2>
              <h3 className="text-xl font-semibold mb-2">Shivansh Bajaj</h3>
              <p className="text-gray-300 mb-4">
                Entrepreneur and AI Expert with a passion for revolutionizing healthcare through artificial intelligence. With extensive experience in AI implementation and automation, Shivansh has helped numerous dental practices transform their operations and patient care through cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Guarantee Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="card-gradient p-8 rounded-2xl max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Our 90-Day Guarantee
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <p className="text-gray-300">Attract high-value patients within 90 days</p>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <p className="text-gray-300">Increase your practice revenue significantly</p>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <p className="text-gray-300">Complete money-back guarantee if we don't deliver results</p>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl border border-blue-400/30">
            <p className="text-xl font-semibold mb-2">Risk-Free Implementation</p>
            <p className="text-gray-300 mb-4">
              We're so confident in our AI solutions that we offer a complete money-back guarantee if you don't see an increase in high-value patients within 90 days of implementation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Ready to Modernize Your Dental Practice?
        </h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Schedule a free consultation to discover how AI can transform your dental practice operations
        </p>
        <button
          onClick={handleCTAClick}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300"
        >
          Transform Your Practice Today <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Footer */}
      <footer className="card-gradient py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/titanflowai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@TitanFlowAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-400 mt-4">
            © {new Date().getFullYear()} TitanFlow AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;