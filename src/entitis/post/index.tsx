import {Flex} from "antd";
import React from "react";
import {type IPosts} from "../../store/slices/postsSlice";
import "./style/index.scss";
import {DislikeOutlined, LikeOutlined} from "@ant-design/icons";

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
    <Flex vertical className={"post__container"} key={id}>
      <Flex align={'start'} justify={'start'}  className={"title__container"}>
        <span className={"title"}>Название: </span>
        <p className={"title__label"}>{title}</p>
      </Flex>
      <Flex vertical>
        <span className={"title"}>Пост: </span>
        <p className={"body__description"}>{body}</p>
      </Flex>

      <Flex className={"views__container"} justify={"space-between"}>
        <span>Просмотров: {views}</span>
        <div>
          <Flex justify={"end"}>
            <span className={"reaction__like"}>
              <LikeOutlined style={{color: "green"}}/> {reactions.likes}</span>
            <span>
              <DislikeOutlined style={{color: "red"}}/> {reactions.dislikes}
            </span>
          </Flex>
        </div>
      </Flex>
      <Flex justify={"end"} align={"end"}>
        <p className={"tags__label"}> {tags.map(item => (<span>#{item} </span>))}</p>
      </Flex>
    </Flex>
  );
};