import React from "react";

import { Button, Text } from "components";

const LoginColumnhotfood = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-row md:gap-10 gap-[471px] items-center justify-center p-[15px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtRobotoRomanLight28"
          >
            {props?.hotfood}
          </Text>
          <a href="/login">
          <Button className="border border-black-900 border-solid cursor-pointer font-light font-roboto leading-[normal] min-w-[140px] mr-[53px] my-[5px] py-[5px] text-black-900 text-center text-xl">
            {props?.loginOne}
          </Button></a>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-center p-2 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center mr-[60px] mt-2 w-[63%] md:w-full">
            <a href="/">
            <Text
              className="mb-[9px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.hometext}
            </Text></a>
            <a href="#">
            <Text
              className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.abouttext}
            </Text></a>
            <a href="/ourteam">
            <Text
              className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.ourteamtext}
            </Text></a>
            <a href="/menu">
            <Text
              className="mb-[9px] md:ml-[0] ml-[57px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.menutext}
            </Text></a>
            <a href="#">
            <Text
              className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.orderonlinetext}
            </Text></a>
            <a href="#">
            <Text
              className="md:ml-[0] ml-[294px] md:mt-0 mt-[9px] text-black-900 text-sm underline"
              size="txtRobotoRomanLight14"
            >
              {props?.joinloyaltytext}
            </Text></a>
          </div>
        </div>
      </div>
    </>
  );
};

LoginColumnhotfood.defaultProps = {
  hotfood: "Hot Food",
  loginOne: "Login",
  hometext: "Home",
  abouttext: "About",
  ourteamtext: "Our Team",
  menutext: "Menu",
  orderonlinetext: "Order Online",
  joinloyaltytext: "Join our loyalty program",
};

export default LoginColumnhotfood;
