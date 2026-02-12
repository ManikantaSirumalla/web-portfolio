import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';
import locationIcon from '../assets/location.png';

// Contact Section Component
const Contact = ({ id }) => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4z8ixl9', // Replace with your EmailJS service ID
        'template_zvmgk7g', // Replace with your EmailJS template ID
        form.current,
        'gz7Td505NsnUtZ0YJ' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus('Failed to send the message. Please try again.');
          console.error('EmailJS Error:', error.text);
        }
      );
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center relative bg-white/1 backdrop-blur-[2px]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="p-8 rounded-3xl shadow-lg bg-white/80">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-blue-500 mr-4">
                    <img src={phoneIcon} alt="Phone Icon" className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-600">+1 410-900-4265</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-blue-500 mr-4">
                    <img src={emailIcon} alt="Email Icon" className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">contact@manikantasirumalla.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-blue-500 mr-4">
                    <img src={locationIcon} alt="Location Icon" className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600">Baltimore, MD</p>
                  </div>
                </div>
              </div>
            </div>          </div>
          <div className="md:w-1/2">
            <div className="p-8 rounded-3xl shadow-lg bg-white/80">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
              {status && <p className="mt-4 text-center text-green-500">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;