import React, {useState} from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import LoginColumn from "components/LoginColumn";
import LoginColumnhotfood from "components/LoginColumnhotfood";

const LoginPage = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checkbox value:', isChecked);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins mx-auto relative w-full">
        <div className="h-[1024px] mx-auto md:px-5 w-full">
          
          {/* <div className="absolute h-[1024px] inset-[0] justify-center m-auto w-full"> */}
            <Img
              className="h-[1024px] m-auto object-cover w-full"
              src="images/img_rectangle28.png"
              alt="rectangleTwentyNine"
            />
            <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-center justify-start my-auto right-[14%] w-auto">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col h-[53px] md:h-auto items-start justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                    size="txtPoppinsMedium32"
                  >
                    Get Started Now
                  </Text>
                </div>
                <Text
                  className="mt-0.5 text-base text-black-900"
                  size="txtPoppinsMedium16"
                >
                  
                </Text>
                <LoginColumn
                  className="flex flex-col h-[58px] md:h-auto items-start justify-start mt-[59px] w-[404px] sm:w-full"
                  nameTwo="Name"
                />
                <LoginColumn
                  className="flex flex-col h-[58px] md:h-auto items-start justify-start mt-[59px] w-[404px] sm:w-full"
                  nameTwo="Email address"
                />
                <LoginColumn className="flex flex-col h-[58px] md:h-auto items-start justify-start mt-5 w-[404px] sm:w-full" />
                <div className="flex flex-row gap-1.5 items-start justify-start mt-[21px] w-[30%] md:w-full">
                  <div className=""></div>
                  <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox mr-2"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          
        </label>
                  <Text
                    className="text-[9px] text-black-900"
                    size=""
                  >
                    Remember for 30 days
                  </Text>
                </div>
                <div className="h-[35px] md:h-[52px] mt-5 pb-[3px] relative w-full">
                  <Img
                    className="h-8 mx-auto w-[404px]"
                    src="images/img_frame55.svg"
                    alt="frameFiftyFive"
                  />
                  <a
                    href="javascript:"
                    className="absolute h-max inset-[0] justify-center m-auto text-[13px] text-white-A700 w-max"
                  >
                    <button><Text size="txtPoppinsBold13">Signup</Text></button>
                  </a>
                </div>
                <div className="flex sm:flex-col flex-row gap-[23px] items-center justify-start mt-[137px] w-auto sm:w-full">
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[190px] px-[19px] py-1 rounded-[10px]"
                    leftIcon={
                      <Img
                        className="h-6"
                        src="images/img_icons8google_1.svg"
                        alt="icons8-google 1"
                      />
                    }
                  >
                    <div className="font-medium leading-[normal] text-black-900 text-left text-xs">
                      Sign in with Google
                    </div>
                  </Button>
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[190px] px-[23px] py-1 rounded-[10px]"
                    leftIcon={
                      <Img
                        className="h-6"
                        src="images/img_icons8applelogo_1.svg"
                        alt="icons8-apple-logo 1"
                      />
                    }
                  >
                    <div className="font-medium leading-[normal] sm:px-5 text-black-900 text-left text-xs">
                      Sign in with Apple
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[93px] mt-[23px]">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtPoppinsMedium14"
                  >
                    <span className="text-black-900 font-poppins text-left font-medium">
                      Don’t h
                    </span>
                    <span className="text-black-900 font-poppins text-left font-medium">
                      ave an account?{" "}
                    </span>
                    <a href="/signup"><span className="text-indigo-A700 font-poppins text-left font-medium">
                      Sign Up
                    </span></a>
                  </Text>
                </div>
              </div>
            </div>
            <LoginColumnhotfood className="absolute flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto top-[0] w-full" />
          {/* </div> */}
        </div>
        <Footer className="bg-white-A700 flex font-roboto items-center justify-center mt-[-158px] mx-auto md:px-5 w-full z-[1]" />
      </div>
    </>
  );
};

export default LoginPage;

