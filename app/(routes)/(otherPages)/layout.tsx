'use client'
import React from "react";
import { Footer, Header } from "@/app/components";
import toast, { Toaster } from 'react-hot-toast';
const layout = ({ children }: { children: React.ReactNode }) => {
  // const notify = () => toast('Here is your toast.');
  return (
    <div>
      <Header />
      <div className="min-h-screen">
      {/* <button onClick={notify}>Make me a toast</button> */}
      {children}
      </div>
      <Toaster/>
      <Footer />
    </div>
  );
};

export default layout;
