import React from "react";
import BottomButton from "../button/BottomButton";
import Text from "../text/Title";
import InfoForm from "../forms/InfoForm";

const InfoPageComponent = () => {
  return (
    <div className="w-full h-full">
      <div className="px-10">
        <Text title="Personal Information Confirmation" />
      </div>
      <InfoForm />
      <BottomButton prevButton="Go back to Login page" nextButton="Next" />
    </div>
  );
};

export default InfoPageComponent;
