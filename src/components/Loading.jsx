import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ClipLoader
        color="orange"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="text-3xl"
      />
    </div>
  );
};

export default Loading;
