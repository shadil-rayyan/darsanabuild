"use client";

import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import icons

interface ContactInfoCardProps {
  icon: React.ReactElement; // Update to accept a React element
  title: string;
  description: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center justify-center p-4  rounded-lg">
    <div className="text-3xl">{icon}</div> {/* Display the icon */}
    <h3 className="mt-2 text-lg font-bold">{title}</h3>
    <p className="mt-1 text-sm">{description}</p>
  </div>
);

export default ContactInfoCard;
