import Navbar from "@/components/navbar";
import React from "react";
interface LandingPageLayoutProps {
  children: React.ReactNode;
}
const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default LandingPageLayout;
