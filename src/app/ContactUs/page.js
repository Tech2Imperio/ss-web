import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import preview from "../assets/home-swiper/contactus.webp";
import Image from "next/image";
import { FiMail, FiYoutube } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
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
      <div className="flex flex-col-reverse md:flex-row h-auto md:my-10 md:mx-[16rem] shadow-xl">
        {/* Left Column */}
        <div className="p-8 md:w-2/3 bg-[#fdfdfd] relative h-auto md:h-auto">
          <form className="space-y-6 flex flex-col ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-2/4 h-10 p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-2/4 h-10 p-3 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-2/4 h-10 p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
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

        {/* Right Column */}
        <div className="bg-[#335c98] text-slate-300 p-8 md:w-2/3 flex flex-col gap-6 lg:flex-row justify-between h-auto">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-4xl mb-6 poppins-bold">Write Us a Message</h1>
              <p className="mb-6 nunito">
                We’d love to hear from you! Whether you have questions about our
                stainless steel products, need a quotation, or just want to say
                hello, feel free to reach out. Your thoughts are important to
                us, and we’re here to help with anything you need. Let’s keep
                the conversation going!
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden"
              >
                <FaInstagram size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-pink-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
              </a>
              <a
                href="#"
                className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden"
              >
                <FaFacebook size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-blue-700 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
              </a>
              <a
                href="#"
                className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden"
              >
                <FaTwitter size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
              </a>
              <a
                href="#"
                className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden"
              >
                <FiYoutube size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-red-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
              </a>
            </div>
          </div>
          <div className="inline-block h-[2px] xl:h-[450px] w-[350px] xl:w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
          <div className="text-slate-300 text-lg flex flex-col justify-start gap-8 xl:gap-12">
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
          </div>
        </div>
      </div>
    </section>
  );
}
