import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, User, MessageSquare, Package, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/email';

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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: emailConfig.toEmail,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        plan: formData.plan,
        message: formData.message,
        // Add timestamp
        submitted_at: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      console.log('Email sent successfully:', result);
      
      setLoading(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: '',
        message: '',
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setLoading(false);
      setError('Failed to send message. Please try again or contact us directly.');
    }
  };

  const plans = [
    // Workspace Plans
    { id: 'day-pass', name: 'Day Pass', category: 'Workspace' },
    { id: 'half-day-pass', name: 'Half Day Pass', category: 'Workspace' },
    { id: 'meeting-rooms', name: 'Meeting Rooms', category: 'Workspace' },
    { id: 'monthly-pass', name: 'Monthly Pass', category: 'Workspace' },
    { id: 'flexi-pass', name: 'Flexi Pass', category: 'Workspace' },
    { id: 'open-desk-pass', name: 'Open Desk Pass', category: 'Workspace' },
    { id: 'private-cabins', name: 'Private Cabins', category: 'Workspace' },
    // Virtual Office Plans
    { id: 'koco-virtual', name: 'KOCO Virtual', category: 'Virtual Office' },
  ];

  const workspacePlans = plans.filter(plan => plan.category === 'Workspace');
  const virtualPlans = plans.filter(plan => plan.category === 'Virtual Office');

  return (
    <section id="contact" className="py-20 bg-focus-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-founders-fire rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-blank-slate font-darker">
              Let's Start Your
              <span className="block text-founders-fire">Workspace Journey</span>
            </h2>
          </div>

          {submitted ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-blank-slate rounded-3xl shadow-2xl p-12 text-center">
                <div className="w-20 h-20 bg-legacy-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-focus-black mb-4 font-darker">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Thank you for reaching out to us. Our team will review your inquiry and get back to you within 24 hours with a personalized workspace solution.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-founders-fire hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-founders-fire p-8 text-center">
                <h3 className="text-2xl font-bold text-white font-darker">Get Started Today</h3>
                <p className="text-white text-lg font-semibold mt-2">Fill out the form below and we'll be in touch</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium">Error sending message</p>
                      <p className="text-red-600 text-sm mt-1">{error}</p>
                    </div>
                  </div>
                )}

                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-founders-fire focus:ring-2 focus:ring-founders-fire/20 transition-all duration-300 text-lg"
                    placeholder="Your Full Name"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-founders-fire focus:ring-2 focus:ring-founders-fire/20 transition-all duration-300 text-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-founders-fire focus:ring-2 focus:ring-founders-fire/20 transition-all duration-300 text-lg"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>

                {/* Plan Selection */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Package className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-founders-fire focus:ring-2 focus:ring-founders-fire/20 transition-all duration-300 text-lg appearance-none bg-white"
                  >
                    <option value="">Select Your Preferred Plan</option>
                    <optgroup label="Workspace Plans">
                      {workspacePlans.map(plan => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Virtual Office Plans">
                      {virtualPlans.map(plan => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-founders-fire focus:ring-2 focus:ring-founders-fire/20 transition-all duration-300 text-lg resize-none"
                    placeholder="Tell us about your specific requirements, team size, preferred location, or any special needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-3 bg-founders-fire text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg ${
                    loading ? 'opacity-75 cursor-not-allowed scale-100' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6" />
                      Send Message & Get Quote
                    </>
                  )}
                </button>

                {/* Additional Info */}
                <p className="text-center text-gray-500 text-sm">
                  By submitting this form, you agree to be contacted by our team regarding your workspace requirements.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;