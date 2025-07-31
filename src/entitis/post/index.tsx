import {Flex} from "antd";
import React from "react";
import {type IPosts} from "../../store/slices/postsSlice";
import {PostContainer, Title, TitleLabel} from "./style";

export const Post: React.FC<IPosts> = (
  {
    id,
    body,
    tags,
    title,
    reactions,
    views,
  }) => {

  return (
    <Flex vertical style={PostContainer} key={id}>
      <Flex align={'center'} style={{marginBottom:"10px"}}>
        <span style={Title}>Название: </span>
        <p style={TitleLabel}>{title}</p>
      </Flex>
      <span>Пост: {body}</span>
      <span>Тэги: {tags.map(item => (<span>#{item} </span>))}</span>
      <span>Likes:{reactions.likes}</span>
      <span>Dislikes:{reactions.dislikes}</span>
      <span>Просмотров: {views}</span>
    </Flex>
  );
};