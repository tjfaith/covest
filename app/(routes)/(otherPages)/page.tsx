"use client";
import { useEffect } from "react";
import { About, Banner, ContactUs } from "@/app/components";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pt-24">
      <Banner />
      <About />
      <ContactUs />
    </div>
  );
}
