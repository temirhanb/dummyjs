import React, {useEffect} from "react";
import {Col, Flex, Grid, Row} from "antd";
import {Post} from "../../entitis";
import {PostListContainer} from "./style";
import {type RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsThunk} from "../../store/thunks/fetchPostsThunk";
import {StatusRequest} from "../../shared";

const {useBreakpoint} = Grid;

export const PostList: React.FC = () => {
  const {posts, status} = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  const screens = useBreakpoint();

  useEffect(() => {
    dispatch(fetchPostsThunk(0));
  }, []);
  console.log(posts);
  return (
    <Flex gap={"middle"} style={{width: "100%", padding: "20px"}} align={"start"}>
      {status !== StatusRequest.SUCCESS && (<div>Loading...</div>)}
      <Row style={PostListContainer}>
        {posts.map(item => (
          <Col span={screens.xs ? 24 : 12}><Post {...item}/></Col>
        ))}
      </Row>
    </Flex>
  );
};