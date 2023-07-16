import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-900 h-10 w-10"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
