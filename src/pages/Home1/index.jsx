import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import HomeColumnhotfood from "components/HomeColumnhotfood";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <HomeColumnhotfood className="flex flex-col font-roboto items-center justify-start w-full" />
          <div className="font-roboto h-[414px] md:px-5 relative w-full">
            <Img
              className="h-[414px] m-auto object-cover w-full"
              src="images/img_rectangle2.png"
              alt="rectangleTwo"
            />
            <div className="absolute bottom-[4%] flex flex-row items-start justify-center right-[3%] w-[17%]">
              <Line className="bg-blue-A200 h-[41px] mb-1.5 w-1" />
              <div className="bg-black-900_b2 h-[47px] sm:pr-5 pr-[39px] relative w-[99%]">
                <button><Text
                  className="absolute h-max inset-[0] justify-center m-auto text-white-A700 text-xl tracking-[1.70px] w-max"
                  size="txtRobotoRomanSemiBold20"
                >
                  RESERVATION
                </Text></button>
                <Img
                  className="absolute h-[47px] inset-y-[0] left-[0] my-auto"
                  src="images/img_computer.svg"
                  alt="computer"
                />
              </div>
            </div>
          </div>
          <Text
            className="mt-[82px] md:text-5xl sm:text-[42px] text-[56px] text-black-900"
            size="txtRobotoRomanLight56"
          >
            Hot Food
          </Text>
          <Text
            className="mt-2 text-[15px] text-black-900"
            size="txtSchoolbellRegular15"
          >
            Place your subheader here
          </Text>
          <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-evenly mt-[113px] w-full">
            <div className="bg-gray-50 flex md:flex-1 flex-col gap-[43px] items-center justify-start p-[89px] md:px-5 w-1/2 md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtRobotoRomanLight40"
              >
                About
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
              <a href="/login"><Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] mb-[60px] min-w-[140px] py-[5px] text-black-900 text-center text-xl">
                Login
              </Button></a>
            </div>
            <Img
              className="md:flex-1 h-[552px] sm:h-auto object-cover w-1/2 md:w-full"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
          </div>
          <Text
            className="mt-20 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
            size="txtRobotoRomanLight48"
          >
            Featured Dishes
          </Text>
          <Text
            className="mt-[18px] text-[15px] text-black-900"
            size="txtSchoolbellRegular15"
          >
            Place your subheader here
          </Text>
          <div className="bg-gray-50 flex flex-col font-roboto items-center justify-start mt-[139px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[34%] md:w-full">
                <Img
                  className="h-[307px] sm:h-auto object-cover w-full"
                  src="images/img_rectangle6.png"
                  alt="rectangleSix"
                />
                <Text
                  className="mt-[58px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoRomanLight24"
                >
                  Fish and Chips
                </Text>
                <Text
                  className="leading-[178.69%] mt-[29px] text-base text-center text-gray-800 w-[76%] sm:w-full"
                  size="txtRobotoRomanLight16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dmagna ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderivolu ess aboris nisi ut
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[39px] md:px-5 w-[34%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoRomanLight24"
                >
                  Chicken Tikka Masala
                </Text>
                <Text
                  className="leading-[178.69%] mt-[31px] text-base text-center text-gray-800 w-4/5 sm:w-full"
                  size="txtRobotoRomanLight16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dmagna ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderivolu ess aboris nisi ut
                </Text>
                <Img
                  className="h-[307px] sm:h-auto mt-[62px] object-cover w-full"
                  src="images/img_rectangle8.png"
                  alt="rectangleEight"
                />
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[34%] md:w-full">
                <Img
                  className="h-[307px] sm:h-auto object-cover w-full"
                  src="images/img_rectangle7.png"
                  alt="rectangleSeven"
                />
                <Text
                  className="mt-14 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoRomanLight24"
                >
                  Roast Beef
                </Text>
                <Text
                  className="leading-[178.69%] mt-[31px] text-base text-center text-gray-800 w-[77%] sm:w-full"
                  size="txtRobotoRomanLight16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dmagna ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderivolu ess aboris nisi ut
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[81px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
            size="txtRobotoRomanLight48"
          >
            Contact
          </Text>
          <Text
            className="mt-[43px] text-black-900 text-center text-xl"
            size="txtRobotoRomanLight20"
          >
            500 Terry Francois Street, 6th Floor. San Francisco, CA 94158
          </Text>
          <Text
            className="mt-[58px] text-base text-black-900 text-center"
            size="txtRobotoRomanLight16Black900"
          >
            info@gmail.com
          </Text>
          <Text
            className="mt-[17px] text-base text-black-900 text-center"
            size="txtRobotoRomanLight16Black900"
          >
            778-3037-479055
          </Text>
          <Img
            className="h-[414px] sm:h-auto mt-[125px] object-cover w-full"
            src="images/img_rectangle10.png"
            alt="rectangleTen"
          />
          <Footer className="bg-white-A700 flex font-roboto items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
