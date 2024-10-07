"use client";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import preview from "../assets/home-swiper/contactus.webp";
import Image from "next/image";
import { FiMail, FiYoutube } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useState } from "react";
export default function ContactUs() {
  const [expandedFaq, setExpandedFaq] = useState(0);
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const faqData = [
    {
      question: "What are your business hours?",
      answer: "We are open Monday to Friday, 9 AM to 5 PM.",
    },
    {
      question: "Do you offer remote consultations?",
      answer: "Yes, we offer both in-person and remote consultations.",
    },
    {
      question: "What is your response time?",
      answer: "We aim to respond to all inquiries within 24 hours.",
    },
  ];

  return (
    <main className="flex flex-col h-auto w-screen">
      <section className="relative">
        <Image
          className=" h-[22rem] md:h-[34rem] w-screen object-cover"
          src={preview}
          alt="T Profile"
        />
        <div className="absolute inset-0 bg-black opacity-55" />
        <h1 className="absolute inset-0 flex items-center justify-center pt-20  md:pt-0 text-[#335c98] text-5xl md:text-[5rem]  poppins-regular">
          Contact Us
        </h1>
      </section>
      <section className="container mx-auto">
        <div className="flex justify-center items-center w-full h-auto mt-8">
          <h2 className="text-5xl poppins-bold text-[#335c98]">Get A Quote</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          {/* Left Column */}
          <div className="p-8 relative h-auto md:h-auto w-[30%]">
            <form className="gap-6 flex flex-col">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full md:w-2/4 h-10 p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full md:w-2/4 h-10 p-3 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full md:w-2/4 h-10 p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="w-full p-3 bg-[#335c98] text-white rounded hover:bg-[#2a4b74] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column */}
          <div className="bg-[#335c98] text-slate-300 p-8 flex flex-col gap-6 lg:flex-row justify-between h-auto w-[30%]">
            <div className="hidden text-slate-300 text-lg md:flex md:flex-col md:justify-start md:gap-8 xl:gap-12">
              {/* Contact Information */}
              <div className="flex align-middle gap-3">
                <BsTelephone className="mt-1 text-xl" />
                <div className="flex flex-col gap-2">
                  <h6 className="poppins-regular">Telephone</h6>
                  <p className="nunito text-sm">+91 80489 64852</p>
                </div>
              </div>
              <div className="flex align-middle gap-3">
                <FiMail className="mt-1 text-xl" />
                <div className="flex flex-col gap-2">
                  <h6 className="poppins-regular">Email</h6>
                  <p className="nunito text-sm">hello@imperiorailing.com</p>
                </div>
              </div>
              <div className="flex align-middle gap-3">
                <TfiLocationPin className="mt-1 text-xl" />
                <div className="flex flex-col gap-2">
                  <h6 className="poppins-regular">Headquarters</h6>
                  <p className="flex flex-wrap nunito text-sm w-[12.4rem]">
                    Rajguru Steel Industries 92/94, <br />
                    Kika Street, Gulalwadi, Girgaon, Mumbai - 400004, <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-col gap-2">
                <p className="poppins-semibold text-xl">Follow Us</p>
                <ul className="flex gap-2">
                  <li className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden">
                    <FaInstagram size={20} className="relative z-10" />
                    <span className="absolute inset-0 bg-pink-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
                  </li>
                  <li className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden">
                    <FaFacebook size={20} className="relative z-10" />
                    <span className="absolute inset-0 bg-blue-700 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
                  </li>
                  <li className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden">
                    <FaTwitter size={20} className="relative z-10" />
                    <span className="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
                  </li>
                  <li className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden">
                    <FiYoutube size={20} className="relative z-10" />
                    <span className="absolute inset-0 bg-red-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="py-16 px-4 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <motion.div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <motion.button
                  className="w-full text-left p-4 focus:outline-none"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? index : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown />
                    </motion.span>
                  </div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? "auto" : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-4 bg-gray-50">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   const [expandedFaq, setExpandedFaq] = useState(null)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log('Form submitted:', formData)
//   }

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   }

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   }

//   const pulseAnimation = {
//     scale: [1, 1.05, 1],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       repeatType: "reverse"
//     }
//   }

//   const faqData = [
//     { question: "What are your business hours?", answer: "We are open Monday to Friday, 9 AM to 5 PM." },
//     { question: "Do you offer remote consultations?", answer: "Yes, we offer both in-person and remote consultations." },
//     { question: "What is your response time?", answer: "We aim to respond to all inquiries within 24 hours." },
//     { question: "Do you have a refund policy?", answer: "Yes, we offer a 30-day money-back guarantee on all our services." }
//   ]

//   const testimonials = [
//     { name: "John Doe", company: "Tech Co", content: "Working with this team has been an absolute pleasure. Their expertise and dedication are unmatched." },
//     { name: "Jane Smith", company: "Design Studio", content: "The level of creativity and attention to detail they bring to each project is truly impressive." },
//     { name: "Mike Johnson", company: "StartUp Inc", content: "Their innovative solutions have helped us streamline our processes and boost productivity." }
//   ]

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={fadeInUp}
//         transition={{ duration: 0.5 }}
//         className="bg-blue-600 text-white py-20 text-center"
//       >
//         <motion.h1
//           className="text-4xl font-bold mb-4"
//           animate={pulseAnimation}
//         >
//           Contact Us
//         </motion.h1>
//         <p className="text-xl">We'd love to hear from you!</p>
//       </motion.section>

//       {/* Contact Information Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerChildren}
//         className="py-16 px-4 max-w-4xl mx-auto"
//       >
//         <h2 className="text-3xl font-semibold mb-8 text-center">Get in Touch</h2>
//         <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { title: "Address", content: "123 Main St, City, Country" },
//             { title: "Phone", content: "+1 (123) 456-7890" },
//             { title: "Email", content: "contact@example.com" }
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="text-center"
//               variants={fadeInUp}
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="font-bold mb-2">{item.title}</h3>
//               <p>{item.content}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.section>

//       {/* Contact Form Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={fadeInUp}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="py-16 px-4 max-w-2xl mx-auto"
//       >
//         <h2 className="text-3xl font-semibold mb-8 text-center">Send Us a Message</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {[
//             { name: "name", label: "Name", type: "text" },
//             { name: "email", label: "Email", type: "email" },
//             { name: "message", label: "Message", type: "textarea" }
//           ].map((field) => (
//             <motion.div key={field.name} variants={fadeInUp}>
//               <label htmlFor={field.name} className="block mb-2 font-medium">{field.label}</label>
//               {field.type === "textarea" ? (
//                 <textarea
//                   id={field.name}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   required
//                   rows="4"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 ></textarea>
//               ) : (
//                 <input
//                   type={field.type}
//                   id={field.name}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 />
//               )}
//             </motion.div>
//           ))}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </motion.section>

//       {/* Testimonials Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerChildren}
//         className="py-16 px-4 bg-white"
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-8 text-center">What Our Clients Say</h2>
//           <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gray-50 p-6 rounded-lg shadow-md"
//               >
//                 <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
//                 <div className="font-semibold">{testimonial.name}</div>
//                 <div className="text-sm text-gray-500">{testimonial.company}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* FAQ Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerChildren}
//         className="py-16 px-4 bg-gray-50"
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
//           <motion.div className="space-y-4">
//             {faqData.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <motion.button
//                   className="w-full text-left p-4 focus:outline-none"
//                   onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium">{faq.question}</span>
//                     <motion.span
//                       animate={{ rotate: expandedFaq === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       ▼
//                     </motion.span>
//                   </div>
//                 </motion.button>
//                 <motion.div
//                   initial={false}
//                   animate={{ height: expandedFaq === index ? "auto" : 0, opacity: expandedFaq === index ? 1 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <p className="p-4 bg-gray-50">{faq.answer}</p>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Map Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={fadeInUp}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="py-16 px-4"
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-8 text-center">Find Us</h2>
//           <motion.div
//             className="aspect-w-16 aspect-h-9"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//           >
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1619614825032!5m2!1sen!2sus"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   )
// }
