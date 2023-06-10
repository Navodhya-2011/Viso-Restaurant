import React from "react";

import { Input, Text } from "components";

const LoginColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtPoppinsMedium14"
              >
                {props?.nameTwo}
              </Text>
            </div>
            {!!props?.forgotpassword ? (
              <Text
                className="text-[10px] text-indigo-900"
                size="txtPoppinsMedium10"
              >
                {props?.forgotpassword}
              </Text>
            ) : null}
          </div>
          <Input
            name="frameFiftyThree_One"
            placeholder="Password"
            className="font-medium font-poppins leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-100 sm:h-auto sm:pr-5 text-[10px] text-blue_gray-100 text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid pl-2.5 pr-[35px] py-2 rounded-[10px] w-full"
          ></Input>
        </div>
      </div>
    </>
  );
};

LoginColumn.defaultProps = { nameTwo: "Password" };

export default LoginColumn;
