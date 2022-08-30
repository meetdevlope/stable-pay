import React from "react";

import Typical from "react-typical";

const TypeComponent = () => {
  return (
    <div className="text-white">
      <Typical
        steps={[
          "Forex",
          1500,
          "Transaction",
          1500,
          "Service",
          1500,
          "Convenience",
          1500,
        ]}
        loop={Infinity}
        wrapper="b"
      />
    </div>
  );
};

export default TypeComponent;
