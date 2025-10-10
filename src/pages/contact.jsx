import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("⚠️ Please fill in all fields!");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("❌ Please enter a valid email address!");
      return;
    }

    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <div className="bg-white text-gray-900">
      <section className="bg-gradient-to-r from-white via-blue-300 to-white text-black text-center py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]"></div>
        <h2 className="text-6xl font-bold relative z-10">
          Contact <span className="text-blue-600">Us</span>
        </h2>
        <p className="text-xl mt-3 relative z-10">
          Have questions or feedback? We’d love to hear from you. Reach out to our team anytime.
        </p>
      </section>

      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Information</h3>
          <p className="text-lg text-black mb-8">
            Feel free to reach out to us through any of these channels. Our team is always ready to assist you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-500 text-lg mt-1" />
              <div>
                <h4 className="font-semibold  text-black">Address</h4>
                <p className="text-sm text-black">Rwanda, Kigali-Kibagabaga, Kimironko</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaPhoneAlt className="text-blue-500 text-lg mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-sm text-black">(+250) 790 566 829</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-blue-500 text-lg mt-1" />
              <div>
                <h4 className="font-semibold text-black">Email</h4>
                <p className="text-sm text-black">inzovu@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-black mb-2">Business Hours</h4>
            <p className="text-sm text-black">Monday - Friday: 9:00 AM – 6:00 PM</p>
            <p className="text-sm text-black">Saturday: 10:00 AM – 5:00 PM</p>
            <p className="text-sm text-black">Sunday: Closed</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-white p-8 rounded-2xl shadow-md">
          <h3 className="text-lg font-bold text-black mb-6">Send Us a Message</h3>

          {status && (
            <div
              className={`text-center p-2 mb-4 rounded-lg font-medium transition-all duration-300 ${
                status.startsWith("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-black">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Gretha M"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="text-sm text-black">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="gretham@example.com"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gblack">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="text-sm text-black">Your Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-3 bg-gradient-to-r from-blue-500 to-white text-black rounded-lg font-semibold hover:bg-gray-500 transition"
            >
              Send Message ✈️
            </button>
          </form>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63606.62224623191!2d30.455!3d-1.472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7523b43d6cf%3A0x64b0e2c7ebee7b1b!2sNyagatare%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1700000000000"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
