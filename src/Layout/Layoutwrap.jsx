import React from "react";

const Layoutwrap = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#040D12] mx-auto py-20 overflow-x-hidden">
      <div className="relative mt-12 max-w-[1240px] lg:mx-auto mx-6">
        <div className="absolute -top-16 -right-16 w-96 h-96 bg-[#5C8374] rounded-full blur-3xl opacity-20"></div>
        {children}
      </div>
    </div>
  );
};

export default Layoutwrap;
