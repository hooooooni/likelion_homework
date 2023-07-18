import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
`;

const PostInformation = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;

const PostWriter = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  padding-right: 20px;
`;

const PostDate = styled.div`
  display: flex;
  flex-direction: row;
`;

const PostImage = styled.div`
  display: flex;
  flex-direction: row;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export function DetailTitle({ Posttitle, Postwriter, Postdate, titleImg, Postcontent }) {
  return (
    <>
      <PostTitle>{Posttitle}</PostTitle>
      <PostInformation>
        <PostWriter>{Postwriter}</PostWriter>
        <PostDate>{Postdate}</PostDate>
      </PostInformation>
      <PostImage>
        <img src={titleImg} alt="titleImg" />
      </PostImage>
      <PostContent>{Postcontent}</PostContent>
    </>
  );
}

export default DetailTitle;
