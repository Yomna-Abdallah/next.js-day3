import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
    </div>
  );
};

export default loading;
