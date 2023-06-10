import React from "react";

const sizeClasses = {
  txtRobotoRomanLight48: "font-light font-roboto",
  txtPoppinsMedium9: "font-medium font-poppins",
  txtRobotoRomanLight16: "font-light font-roboto",
  txtRobotoRomanLight24: "font-light font-roboto",
  txtRobotoRomanLight14: "font-light font-roboto",
  txtSchoolbellRegular15: "font-normal font-schoolbell",
  txtRobotoRomanLight28: "font-light font-roboto",
  txtRobotoRomanLight56WhiteA700: "font-light font-roboto",
  txtPoppinsBold13: "font-bold font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtSchoolbellRegular15WhiteA700: "font-normal font-schoolbell",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtRobotoRomanLight40: "font-light font-roboto",
  txtInterRegular14: "font-inter font-normal",
  txtRobotoRomanLight56: "font-light font-roboto",
  txtRobotoRomanSemiBold20: "font-roboto font-semibold",
  txtRobotoRomanLight20: "font-light font-roboto",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtRobotoRomanLight16Black900: "font-light font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
