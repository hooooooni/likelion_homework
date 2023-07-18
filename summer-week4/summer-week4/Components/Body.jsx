import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "./Card";
import CardImg1 from "../image/velogTitleImg.png";
import ProfileImg1 from "../image/velogTitleImg.png";
import CardImg3 from "../image/hooks.png";
import ProfileImg3 from "../image/hooks.png";

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DarkCard = styled(Card)`
  background-color: ${props => (props.isDarkMode ? "black" : "white")};
  color: ${props => (props.isDarkMode ? "black" : "white")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

function Body({ isDarkMode }) {
    return (
        <Cards>
            <DarkCard
                isDarkMode={isDarkMode}
                previewTitleImg={CardImg1}
                title="Styled-Component 내용 정리"
                content="이번 과제 너무너무 어렵습니다."
                date="2023년 7월 18일"
                commentCount={2}
                profileImg={ProfileImg1}
                writer="ho___ni"
                likeCount={200}
            />
            <DarkCard
                isDarkMode={isDarkMode}
                previewTitleImg={CardImg1}
                title="React-Router-Dom 내용 정리"
                content="이번 과제 너무너무 어렵습니다."
                date="2023년 7월 18일"
                commentCount={2}
                profileImg={ProfileImg1}
                writer="ho___ni"
                likeCount={200}
            />
            <Link to="/detail">
                <DarkCard
                    isDarkMode={isDarkMode}
                    previewTitleImg={CardImg3}
                    title="노마드코더 내용 정리"
                    content="강의 보고 정리했는데 안 예쁩니다"
                    date="2023년 7월 18일"
                    commentCount={2}
                    profileImg={ProfileImg3}
                    writer="ho___ni"
                    likeCount={200}
                />
            </Link>
        </Cards>
    );
}

export default Body;
