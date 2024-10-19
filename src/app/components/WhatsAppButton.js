// components/WhatsAppButton.js
"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import WhatsAppLogo from "../assets/logo/whatsappLogo.webp";
export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+91 8356080112"
      accountName="Rajguru Steel"
      chatMessage="Hello! How can we assist you today?"
      placeholder="Type a message..."
      statusMessage="Typically replies within minutes"
      avatar={WhatsAppLogo.src}
    />
  );
}
