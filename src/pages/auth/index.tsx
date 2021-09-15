import React, { FC } from "react";
import { login as miniAppLogin, getUserProfile, setStorageSync } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import Layout from "@/components/Layout";
import { HomeOutlined, Replay } from "@taroify/icons";
import { Grid, Radio } from "@taroify/core";
import router, { useRouter } from "@/router";
import { useDispatch } from "react-redux";
import { Dispatch } from "@/models";
import "./index.scss";

const Auth: FC = () => {
  const routerInstance = useRouter();

  const dispatch: Dispatch = useDispatch();

  const onAuthorizedLoginMiniApp = () => {

    dispatch.common.setAuthToken("access_token");
    const lastUrl = routerInstance.params.last_url
    setStorageSync('access_token', `wangly19: ${lastUrl || ''}`)
    if (lastUrl) {
      router.replace({
        url: lastUrl
      })
    } else {
      router.reHome()
    }
  };

  return (
    <Layout title="授权登录" customNavBar={<View></View>}>
      <View className="auth-page">
        <View className="auth-page__logo">
          <Image src="/icons/logo/app.png"></Image>
        </View>
        {/* 登录与逛一下 */}
        <View className="auth-page__grid">
          <Grid columns={2} clickable bordered={false}>
            <Grid.Item
              icon={<HomeOutlined />}
              text="逛一逛"
              onClick={() => router.reHome()}
            />
            <Grid.Item
              icon={<Replay />}
              text="登录"
              onClick={onAuthorizedLoginMiniApp}
            />
          </Grid>
        </View>
        {/* 授权政策与协议 */}
        <View className="auth-page__agreement">
          <Radio color="" />
          <Text>我已经同意</Text>
          <Text>服务策略</Text>
          <Text>与</Text>
          <Text>隐私协议</Text>
        </View>
      </View>
    </Layout>
  );
};

export default Auth;
