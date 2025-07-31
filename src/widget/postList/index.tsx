import React from "react";
import {Col, Flex, Row} from "antd";
import {Post} from "../../entitis";
import {StatusRequest} from "../../shared";
import {usePostListHook} from "./hook/usePostListHook";
import "./style/index.scss";

export const PostList: React.FC = () => {
  const {sentinelRef, posts, status, screens} = usePostListHook();
  return (
    <Flex gap={"middle"} style={{width: "100%", padding: "20px"}} align={"start"}>
      <Row className={"post__list_container"}>
        {status !== StatusRequest.SUCCESS && (<span className={"loading_style"}>Loading...</span>)}
        {posts.map(item => (
          <Col key={item.id} span={screens.xs ? 24 : 12}><Post {...item}/></Col>
        ))}
        <div ref={sentinelRef} style={{height: 1}}/>
      </Row>
    </Flex>
  );
};