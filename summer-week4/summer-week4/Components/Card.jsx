import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 380px;
  background-color: white; /* Set the default background color for the Card */
  color: black; /* Set the default text color for the Card */
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 16px 0px;
  overflow: hidden;
`;

const ItemTop = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 350px;
    height: 200px;
  }
`;

const ItemTitle = styled.div`
  display: flex;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
`;

const ItemContent = styled.div`
  display: flex;
  font-size: 10px;
  padding: 10px;
`;

const ItemCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 0px 20px 20px;
  font-size: 5px;
`;

const ItemDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemComment = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px 20px 20px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 50px;
  }
`;

const ItemProfile = styled.div`
  display: flex;
`;

const ItemProfileImg = styled.div`
  display: flex;
  padding-right: 5px;
`;

const ItemProfileID = styled.div`
  display: flex;
`;

const ItemHearts = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemHeart = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 15px;
`;

export function Card({
  previewTitleImg,
  title,
  content,
  date,
  commentCount,
  profileImg,
  writer,
  likeCount,
  isDarkMode,
}) {
  const CardItem = styled(Item)`
    background-color: ${props => (props.isDarkMode ? "black" : "white")};
    color: ${props => (props.isDarkMode ? "white" : "black")};
  `;

  return (
    <>
      <CardWrapper>
        <CardItem isDarkMode={isDarkMode}>
          <ItemTop>
            <img src={previewTitleImg} alt="previewTitleImg" />
            <ItemTitle>{title}</ItemTitle>
            <ItemContent>{content}</ItemContent>
          </ItemTop>

          <ItemCenter>
            <ItemDate>{date}</ItemDate>
            <ItemComment>· {commentCount}개의 댓글</ItemComment>
          </ItemCenter>

          <ItemBottom>
            <ItemProfile>
              <ItemProfileImg>
                <img src={profileImg} alt="profileImg" />
              </ItemProfileImg>
              <ItemProfileID>by {writer}</ItemProfileID>
            </ItemProfile>
            <ItemHearts>
              <FontAwesomeIcon icon={faHeart} />
              <ItemHeart>{likeCount}</ItemHeart>
            </ItemHearts>
          </ItemBottom>
        </CardItem>
      </CardWrapper>
    </>
  );
}

export default Card;
