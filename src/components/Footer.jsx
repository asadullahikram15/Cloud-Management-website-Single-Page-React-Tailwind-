import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

import FooterCard from "./common/FooterCard";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
          <FooterCard
            title="Solution"
            li1="Marketing"
            li2="Analytics"
            li3="Commerce"
            li4="Commerce"
            li5="Cloud"
          />
          <FooterCard
            title="Support"
            li1="Pricing"
            li2="Documentation"
            li3="Guides"
            li4="API Status"
          />
          <FooterCard
            title="Company"
            li1="About"
            li2="Blog"
            li3="Jobs"
            li4="Press"
            li5="Partners"
          />
          <FooterCard
            title="Legal"
            li1="Claims"
            li2="Privacy"
            li3="Terms"
            li4="Policies"
            li5="Conditions"
          />

          {/* new letter */}
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-4">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input type="email" className="w-full p-2 mr-4 oundded-md mb-4 outline-0" placeholder="Enter Your Email"/>
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
          {/* new letter */}
        </div>

        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4">© Copyright 2022 A2LOGICS All Rights Reserved.</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
