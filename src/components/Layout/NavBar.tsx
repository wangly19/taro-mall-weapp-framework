import React from "react";
import { View } from "@tarojs/components";
import { HomeOutlined, ArrowLeft } from "@taroify/icons";
import router from "@/router";

export interface NavBarProps {
  title: string;
  menu: string[];
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const handleNavBarAction = (action: "BACK" | "HOME") => () => {
    if (action === "BACK") {
      router.goBack(1);
    }
    if (action === "HOME") {
      router.reHome();
    }
  };

  return (
    <View className='weapp-layout__header__navbar'>
      <View className='weapp-layout__header__navbar__icon'>
        {props.menu.includes("BACK") && (
          <ArrowLeft
            className='weapp-layout__header__navbar__icon--primary'
            onClick={handleNavBarAction("BACK")}
          />
        )}
        {props.menu.includes("HOME") && (
          <HomeOutlined
            className='weapp-layout__header__navbar__icon--primary'
            onClick={handleNavBarAction("HOME")}
          />
        )}
      </View>
      <View className='weapp-layout__header__navbar__title'>{props.title}</View>
    </View>
  );
};

export default NavBar;
