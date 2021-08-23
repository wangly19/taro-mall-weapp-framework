import React, { useState } from "react";
import { ScrollView, View } from "@tarojs/components";
import Layout from "@/components/Layout";
import { Sidebar } from "@taroify/core";
import { getNavBarInfo } from "@/utils";
import ProductCell from "@/components/ProductCell";
import pageViewConfig from "./index.config";
import "./index.scss";

const body = getNavBarInfo().screen.body;

const Category = () => {
  const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];

  const [activeKey, setActiveKey] = useState<Sidebar.TabKey>(0);

  return (
    <Layout title={pageViewConfig.navigationBarTitleText}>
      <View className='category-view'>
        <Sidebar
          className='category-view__slide'
          activeKey={activeKey}
          onChange={({ key }) => setActiveKey(key)}
        >
          <Sidebar.Tab>标签名</Sidebar.Tab>
          <Sidebar.Tab>标签名</Sidebar.Tab>
          <Sidebar.Tab>标签名</Sidebar.Tab>
        </Sidebar>
        <ScrollView
          className='category-view__body'
          scrollY
          style={{
            height: body,
          }}
        >
          {customIndexList.map(i => {
            return <ProductCell key={i} />
          })
          }
          <ProductCell />
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Category;
