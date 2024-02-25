import React from "react";
import { Footer, Header } from "@/app/components";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="pt-24">

      {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
