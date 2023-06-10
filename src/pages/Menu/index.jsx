import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import OurTeamColumnhotfood from "components/OurTeamColumnhotfood";

const MenuPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <OurTeamColumnhotfood className="flex flex-col items-center justify-start w-full" />
        <div className="h-[231px] md:px-5 relative w-full">
          <Img
            className="h-[231px] m-auto object-cover w-full"
            src="images/img_rectangle2_231x1440.png"
            alt="rectangleTwo"
          />
          <div className="absolute bg-black-900_84 flex flex-col gap-1.5 h-max inset-[0] items-center justify-end m-auto md:px-10 sm:px-5 px-[108px] py-[23px] w-auto">
            <Text
              className="md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 w-auto"
              size="txtRobotoRomanLight56WhiteA700"
            >
              Menu
            </Text>
            <Text
              className="text-[15px] text-white-A700 w-auto"
              size="txtSchoolbellRegular15WhiteA700"
            >
              Place your subheader here
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1164px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-7 items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center"
              size="txtRobotoRomanLight16Black900"
            >
              Categories
            </Text>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <Img
                  className="flex-1 h-[394px] md:h-auto object-cover w-full"
                  src="images/img_rectangle19.png"
                  alt="rectangleNineteen"
                />
                <Img
                  className="flex-1 h-[394px] md:h-auto object-cover w-full"
                  src="images/img_rectangle20.png"
                  alt="rectangleTwenty"
                />
                <Img
                  className="flex-1 h-[394px] md:h-auto object-cover w-full"
                  src="images/img_rectangle21.png"
                  alt="rectangleTwentyOne"
                />
                <Img
                  className="flex-1 h-[394px] md:h-auto object-cover w-full"
                  src="images/img_rectangle22.png"
                  alt="rectangleTwentyTwo"
                />
              </div>
              <div className="md:gap-10 gap-[216px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-[84%] md:w-full">
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRomanLight16Black900"
                >
                  Name Here
                </Text>
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRomanLight16Black900"
                >
                  Name Here
                </Text>
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRomanLight16Black900"
                >
                  Name Here
                </Text>
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRomanLight16Black900"
                >
                  Name Here
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1164px] mt-[31px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[18px] items-start justify-start w-full">
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
              <Img
                className="flex-1 h-[394px] md:h-auto object-cover w-full"
                src="images/img_rectangle19.png"
                alt="rectangleNineteen_One"
              />
              <Img
                className="flex-1 h-[394px] md:h-auto object-cover w-full"
                src="images/img_rectangle20.png"
                alt="rectangleTwenty_One"
              />
              <Img
                className="flex-1 h-[394px] md:h-auto object-cover w-full"
                src="images/img_rectangle21.png"
                alt="rectangleTwentyOne_One"
              />
              <Img
                className="flex-1 h-[394px] md:h-auto object-cover w-full"
                src="images/img_rectangle22.png"
                alt="rectangleTwentyTwo_One"
              />
            </div>
            <div className="md:gap-10 gap-[216px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-[84%] md:w-full">
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRomanLight16Black900"
              >
                Name Here
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRomanLight16Black900"
              >
                Name Here
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRomanLight16Black900"
              >
                Name Here
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRomanLight16Black900"
              >
                Name Here
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1164px] mt-[85px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-7 items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center"
              size="txtRobotoRomanLight16Black900"
            >
              Categories
            </Text>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <Img
                  className="flex-1 h-[394px] md:h-auto object-cover w-full"
                  src="images/img_rectangle19.png"
                  alt="rectangleNineteen_Two"
                />
                <Img
                  className="flex-1 h-[394px] md:h-auto object-cover w-full"
                  src="images/img_rectangle20.png"
                  alt="rectangleTwenty_Two"
                />
                <Img
                  className="flex-1 h-[394px] md:h-auto object-cover w-full"
                  src="images/img_rectangle21.png"
                  alt="rectangleTwentyOne_Two"
                />
                <Img
                  className="flex-1 h-[394px] md:h-auto object-cover w-full"
                  src="images/img_rectangle22.png"
                  alt="rectangleTwentyTwo_Two"
                />
              </div>
              <div className="md:gap-10 gap-[216px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-[84%] md:w-full">
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRomanLight16Black900"
                >
                  Name Here
                </Text>
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRomanLight16Black900"
                >
                  Name Here
                </Text>
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRomanLight16Black900"
                >
                  Name Here
                </Text>
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRomanLight16Black900"
                >
                  Name Here
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1164px] mt-[31px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[18px] items-start justify-start w-full">
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
              <Img
                className="flex-1 h-[394px] md:h-auto object-cover w-full"
                src="images/img_rectangle19.png"
                alt="rectangleNineteen_Three"
              />
              <Img
                className="flex-1 h-[394px] md:h-auto object-cover w-full"
                src="images/img_rectangle20.png"
                alt="rectangleTwenty_Three"
              />
              <Img
                className="flex-1 h-[394px] md:h-auto object-cover w-full"
                src="images/img_rectangle21.png"
                alt="rectangleTwentyOne_Three"
              />
              <Img
                className="flex-1 h-[394px] md:h-auto object-cover w-full"
                src="images/img_rectangle22.png"
                alt="rectangleTwentyTwo_Three"
              />
            </div>
            <div className="md:gap-10 gap-[216px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-[84%] md:w-full">
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRomanLight16Black900"
              >
                Name Here
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRomanLight16Black900"
              >
                Name Here
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRomanLight16Black900"
              >
                Name Here
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRomanLight16Black900"
              >
                Name Here
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-[115px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default MenuPage;
