import React from "react";

export const Card: React.FC = ({ children }) => (
  <div className="height-full width-full margin-y-2">
    <div className="bg-white padding-3 shadow-1">{children}</div>
  </div>
);
