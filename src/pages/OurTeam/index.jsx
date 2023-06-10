import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import OurTeamColumnhotfood from "components/OurTeamColumnhotfood";

const OurTeamPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <OurTeamColumnhotfood className="flex flex-col items-center justify-start w-full" />
          <div className="h-[231px] md:px-5 relative w-full">
            <Img
              className="h-[231px] m-auto object-cover w-full"
              src="images/img_rectangle2.png"
              alt="rectangleTwo"
            />
            <div className="absolute bg-black-900_84 flex flex-col gap-1.5 h-max inset-[0] items-center justify-start m-auto md:px-10 sm:px-5 px-[69px] py-[23px] w-auto">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 w-auto"
                size="txtRobotoRomanLight56WhiteA700"
              >
                Our Team
              </Text>
              <Text
                className="text-[15px] text-white-A700 w-auto"
                size="txtSchoolbellRegular15WhiteA700"
              >
                Place your subheader here
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-[59px] w-full">
            <Img
              className="md:flex-1 h-[402px] sm:h-auto object-cover w-1/2 md:w-full"
              src="images/img_rectangle13.png"
              alt="rectangleThirteen"
            />
            <div className="bg-gray-50 flex flex-col gap-[42px] items-center justify-start p-[54px] md:px-5">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtRobotoRomanLight40"
              >
                Name
              </Text>
              <Text
                className="leading-[178.69%] mb-[58px] text-base text-center text-gray-800"
                size="txtRobotoRomanLight16"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  <br />
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  <br />
                  aute irure dolor in reprehenderit in voluptate velit esse
                  culla pariatur.
                  <br />
                  aboris nisi ut aliquip ex ea commodo consequat.
                </>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <div className="bg-gray-50 flex flex-col gap-[42px] items-center justify-start p-[68px] md:px-5">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtRobotoRomanLight40"
              >
                Name
              </Text>
              <Text
                className="leading-[178.69%] mb-[30px] text-base text-center text-gray-800"
                size="txtRobotoRomanLight16"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  <br />
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  <br />
                  aute irure dolor in reprehenderit in voluptate velit esse
                  culla pariatur.
                  <br />
                  aboris nisi ut aliquip ex ea commodo consequat.
                </>
              </Text>
            </div>
            <Img
              className="md:flex-1 h-[402px] sm:h-auto object-cover w-1/2 md:w-full"
              src="images/img_rectangle16.png"
              alt="rectangleSixteen"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <Img
              className="md:flex-1 h-[402px] sm:h-auto object-cover w-1/2 md:w-full"
              src="images/img_rectangle17.png"
              alt="rectangleSeventeen"
            />
            <div className="bg-gray-50 flex flex-col gap-[42px] items-center justify-start p-[83px] md:px-5">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtRobotoRomanLight40"
              >
                Name
              </Text>
              <Text
                className="leading-[178.69%] text-base text-center text-gray-800"
                size="txtRobotoRomanLight16"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  <br />
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  <br />
                  aute irure dolor in reprehenderit in voluptate velit esse
                  culla pariatur.
                  <br />
                  aboris nisi ut aliquip ex ea commodo consequat.
                </>
              </Text>
            </div>
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OurTeamPage;
