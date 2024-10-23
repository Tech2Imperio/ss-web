import React from "react";
import Contact from "./Contact";
// SEO metadata
export const metadata = {
  title: "Rajguru steel | Contact Us",

  description:
    "At Rajguru Steel Industry, we value your inquiries and feedback. Our dedicated team is here to assist you with all your stainless steel needs, from customized profiles to innovative wall design solutions. Reach out to us today for expert guidance and exceptional service tailored to your requirements.",
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  property: "og:type",
  content: "website",
  property: "og:url",
  content: "https://rajgurusteel.vercel.app/ContactUs",
  keywords: [
    "contact rajguru steel",
    "steel industry inquiries",
    "customer support steel",
    "rajguru steel services",
    "stainless steel contact",
    "custom steel profiles",
    "steel industry feedback",
    "rajguru steel assistance",
    "steel solutions contact",
    "inquire about steel",
  ],
};
export default function page() {
  return <Contact />;
}
