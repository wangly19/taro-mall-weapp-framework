import { CoverView, CoverImage } from "@tarojs/components";
import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import routerConfig from "@/config/routes";
import router from "@/router";
import cs from 'classnames';
import type { RootState, Dispatch } from "@/models";
import "./index.scss";

const TAB_BAR_ROUTES = routerConfig.getTabBarRoutes();

const CustomTabbar = () => {

  const selectedPath: string = useSelector((state: RootState) => state.common.selectTabBarPath, shallowEqual)
  const dispatch: Dispatch = useDispatch()

  useEffect(() => {
    wx.onAppRoute(function (res) {
      if (res.path && selectedPath !== res.path)
      dispatch.common.setTabBarSelectPath(res.path)
    })
  }, [])

  const switchTab = (url: string) => () => {
    router
      .push({
        url: url,
      })
  };

  return (
    <CoverView className='tab-bar'>
      {TAB_BAR_ROUTES.map((item, index) => {
        const isSelected: boolean = selectedPath === item.pagePath
        return (
          <CoverView 
            key={item.pagePath} 
            data-path={item.pagePath}
            className={cs('tab-bar__item', {
              'tab-bar__item--active': isSelected
            })}
            onClick={switchTab(item.pagePath)}
          >
            {
              item.iconPath && item.selectedIconPath ? <CoverImage className='tab-bar__item__icon' src={isSelected ? item.selectedIconPath : item.iconPath} /> : null
            }
            <CoverView className='tab-bar__item__text' onClick={switchTab(item.pagePath)}>{item.text}</CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};

export default CustomTabbar;
