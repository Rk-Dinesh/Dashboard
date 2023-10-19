import React from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { Link } from "react-router-dom";
import useWidth from "@/hooks/useWidth";

import MainLogo from "@/assets/images.png";
import LogoWhite from "@/assets/logo.png";
import MobileLogo from "@/assets/logo.png";
import MobileLogoWhite from "@/assets/logo.png";
const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link to="/dashboard">
        {<img src="https://hackwittechnologies.com/assets/img/favicon.png" alt="" />
        }
      </Link>
    </div>
  );
};

export default Logo;
