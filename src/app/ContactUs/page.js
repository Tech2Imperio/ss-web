import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import preview from "../assets/home-swiper/contactus.webp";
import Image from "next/image";
export default function ContactUs() {
  return (
    <section className="flex flex-col h-auto">
      <div className="relative">
        <Image
          className=" h-[22rem] md:h-[30rem] w-full object-cover"
          src={preview}
          alt="T Profile"
        />
        <div className="absolute inset-0 bg-black opacity-55" />
        <h1 className="absolute inset-0 flex items-center justify-center pt-20  md:pt-0 text-[#335c98] text-5xl md:text-[5rem]  poppins-regular">
          Contact Us
        </h1>
      </div>
      <div className="flex justify-center items-center w-screen h-auto mx-auto mt-8">
        <h2 className=" text-5xl poppins-bold text-[#335c98]">GET A QUOTE</h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row h-auto md:my-10 md:mx-[20rem] shadow-xl">
        {/* Left Column */}
        <div className="bg-[#335c98] text-slate-300 p-8 md:w-1/3 flex flex-col justify-between h-auto">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-6">Write Us a Message</h1>
            <p className="mb-6">
              We’d love to hear from you! Whether you have questions, feedback,
              or just want to say hello, feel free to reach out. Your thoughts
              are important to us, and we’re here to help with anything you
              need. Let’s keep the conversation going!
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-white rounded-full text-[#335c98] hover:bg-gray-200"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full text-[#335c98] hover:bg-gray-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full text-[#335c98] hover:bg-gray-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full text-[#335c98] hover:bg-gray-200"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8 md:w-2/3 bg-[#fdfdfd] relative h-auto md:h-auto">
          <form className="space-y-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-3/4 h-10 p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-3/4 h-10 p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-3/4 h-10 p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-3/4 h-10 p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-3/4 h-10 p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-3/4 h-10 p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-4">
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-[#335c98] text-white rounded hover:bg-[#335c98] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
