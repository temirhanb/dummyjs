import React from "react";
import {Flex} from "antd";
import {Header, PostList} from "../../widget";

export const MainPage: React.FC = () => {
  return (
    <Flex justify={"start"} vertical style={{width: "100%",height:'100vh', background:'#feffe6'}}>
      <Header/>
      <PostList/>
    </Flex>
  );
};