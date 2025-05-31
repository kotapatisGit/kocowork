import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const plans = [
    { id: 'hot-desk', name: 'Hot Desk' },
    { id: 'dedicated-desk', name: 'Dedicated Desk' },
    { id: 'private-office-1-2', name: 'Private Office (1-2 People)' },
    { id: 'private-office-3-4', name: 'Private Office (3-4 People)' },
    { id: 'private-office-5-8', name: 'Private Office (5-8 People)' },
    { id: 'private-office-9-15', name: 'Private Office (9-15 People)' },
    { id: 'custom-enterprise', name: 'Custom Enterprise Solution' },
    { id: 'virtual-office-basic', name: 'Virtual Office Basic' },
    { id: 'virtual-office-pro', name: 'Virtual Office Pro' },
  ];

  return (
    <section id="contact" className="py-20 bg-focus-black text-blank-slate">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-darker">Get In Touch</h2>
            <p className="text-blank-slate text-xl">
              Interested in our workspace solutions? Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <div className="bg-blank-slate rounded-xl shadow-xl overflow-hidden">
            {submitted ? (
              <div className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-legacy-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-focus-black mb-2 font-darker">Thank You!</h3>
                <p className="text-focus-black text-lg mb-6">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-founders-fire hover:bg-opacity-90 text-blank-slate font-medium py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 text-focus-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-focus-black mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-founders-fire focus:border-founders-fire transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-focus-black mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-founders-fire focus:border-founders-fire transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-focus-black mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-founders-fire focus:border-founders-fire transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-focus-black mb-1">
                      Interested Plan *
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-founders-fire focus:border-founders-fire transition-colors"
                    >
                      <option value="">Select a plan</option>
                      <optgroup label="Workspace Plans">
                        {plans.slice(0, 7).map(plan => (
                          <option key={plan.id} value={plan.id}>
                            {plan.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Virtual Office Plans">
                        {plans.slice(7).map(plan => (
                          <option key={plan.id} value={plan.id}>
                            {plan.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-focus-black mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-founders-fire focus:border-founders-fire transition-colors"
                    placeholder="Tell us about your specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 bg-founders-fire hover:bg-opacity-90 text-blank-slate font-medium py-3 px-6 rounded-md transition-all duration-300 ${
                    loading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-blank-slate\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;