import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[19px] mt-[41px] mx-[83px] w-[89%]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="h-[52px] relative w-[16%]">
              <Img
                className="h-[52px] m-auto object-cover w-full"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <Text
                className="absolute bottom-[12%] left-[13%] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtRobotoRomanLight28"
              >
                Hot Food
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center mt-[30px] w-[33%] md:w-full">
              <Input
                name="frameFour"
                placeholder="Enter your email"
                className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-700 text-blue_gray-700 text-left text-sm w-full"
                wrapClassName="border border-gray-300 border-solid pb-3.5 pl-4 pr-3 pt-[17px] w-[67%] sm:w-full"
              ></Input>
              <Button className="bg-blue-A200 cursor-pointer font-inter leading-[normal] min-w-[133px] ml-1 sm:ml-[0] py-4 text-center text-sm text-white-A700">
                Subscribe Now
              </Button>
            </div>
            <ul className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center mt-[35px] w-[46%] md:w-full common-column-list">
              <li>
                <Text
                  className="text-black-900 text-sm"
                  size="txtRobotoRomanLight14"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="sm:ml-[0] ml-[49px] text-black-900 text-sm"
                  size="txtRobotoRomanLight14"
                >
                  About
                </Text>
              </li>
              <li>
                <Text
                  className="sm:ml-[0] ml-[49px] text-black-900 text-sm"
                  size="txtRobotoRomanLight14"
                >
                  Our Team
                </Text>
              </li>
              <li>
                <Text
                  className="sm:ml-[0] ml-[57px] text-black-900 text-sm"
                  size="txtRobotoRomanLight14"
                >
                  Menu
                </Text>
              </li>
              <li>
                <Text
                  className="sm:ml-[0] ml-[49px] text-black-900 text-sm"
                  size="txtRobotoRomanLight14"
                >
                  Order Online
                </Text>
              </li>
              <li>
                <Text
                  className="sm:ml-[0] ml-[63px] text-black-900 text-sm"
                  size="txtRobotoRomanLight14"
                >
                  Reservation
                </Text>
              </li>
            </ul>
            <div className="flex flex-col gap-[21px] items-center justify-start mt-[35px] w-full">
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-row gap-6 items-center justify-center w-auto">
                  <Button className="bg-blue-A200 cursor-pointer font-inter leading-[normal] min-w-[80px] py-2 text-center text-sm text-white-A700">
                    English
                  </Button>
                  <Text
                    className="text-blue_gray-700 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Arabic
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    French
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[367px] md:mt-0 mt-1 w-[9%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icbaselinefacebook.svg"
                    alt="icbaselinefaceb"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_phinstagramlogofill.svg"
                    alt="phinstagramlogo"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_entyposociall.svg"
                    alt="entyposociall"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[285px] md:mt-0 mt-0.5 text-blue_gray-700 text-right text-sm"
                  size="txtInterRegular14"
                >
                  Non Copyrighted © 2022 Upload by hot food
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
