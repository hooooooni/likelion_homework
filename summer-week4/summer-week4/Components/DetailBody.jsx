import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import titleImg from "../image/velogTitleImg.png";
import DetailTitle from "./DetailTitle";

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 100vw;
`;

const SectionLeft = styled.div`
    display: flex;
    flex-direction: row;
`;

const SectionCenter = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    justify-content: baseline;
    padding: 50px;

    img {
        padding-top: 20px;
        padding-bottom: 20px;
        width: 600px;
        height: 300px;
        align-items: center;
    }
`;

const SectionRight = styled.div`
    display: flex;
    flex-direction: row;
`;

const Category = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostContent = styled.div`
  white-space: pre-line;
`;

export function DetailBody() {
    return (
        <>
            <Title>
                <SectionLeft>
                    <FontAwesomeIcon icon={faHeart} />
                </SectionLeft>
                <SectionCenter>
                    <DetailTitle
                        Posttitle = "노마드코더 내용 정리"
                        Postwriter = "ho___ni"
                        Postdate = "2023년 7월 18일"
                        titleImg ={titleImg}
                        Postcontent ="# Introduction to Hooks
                        Npm 만들고 다운받는거 좋아
                        useTitle : react document title을 몇 개의 hooks와 함께 바꾸는 것
                        useInput : input 역할
                        usePageLeave : 유저가 page를 벗어나는 시점을 발견하고 함수를 실행
                        useClick : 누군가 element를 클릭하는 시점을 발견
                        useFadeIn : 어떤 element든 상관없이 애니메이션을 element 안으로 서서히 사라지게 만듦
                        
                        useFullscreen : 어떤 element든 풀스크린으로 만들거나 일반 화면으로 돌아가게 할 수 있음
                        
                        useHover : 어떤 것에 마우스를 올렸을 때 감지하고 
                        
                        useNetwork : useNetwork는 online 또는 offline 상태를 감지
                        
                        useNotification : notification API를 사용할 때 유저에게 알림을 보내줌
                        
                        useScroll : 스크롤을 사용할 때를 감지해 알려줌
                        
                        useTabs : 웹사이트에 메뉴 또는 무엇이든간에 tab을 사용하기 매우 쉽게 만들어주는 것
                        
                        usePreventLeave : 유저가 변경사항이나 무엇이든간에 저장하지 않고 페이지를 벗어나길 원할 때 확인을 하는 것
                        
                        useConfirm : 비슷한데 어떤 기능이 존재하고, 
                        
                        useAxios : HTTP requests client axios을 위한 wrapper 같은 것
                        
                        이 모든 것들을 npm에 올려서 많은 사람들이 쓸 수 있도록 올릴 것임
                        
                        # Requirements
                        
                        set state / props
                        
                        (스타일링은 하지 않을 것임)
                        
                        react와 node.js 설치되어 있어야 함
                        
                        # Workflow
                        
                        hooks를 자동으로 테스트 하는 것을 보고 싶으면 vscode로 안 함
                        
                        code sandbox로 할거임
                        
                        Introduction to useState
리액트 훅 ⇒ 리액트의 신박한 기능
functional component에서 state를 가질 수 있게 해줌
앱을 리액트 훅으로 만든다면 class 컴포넌트, 디드 마운트, 렌더 이런 것들을 안 해도 된다는 뜻
모든 것은 하나의 function이 된다는 것
이제 함수형 프로그래밍 스타일이 된다는 것
코드를 더 좋게 만들어 줄 것임
recompose에서 시작됨
이 라이브러리가 리액트 팀에 의하여 인수됨
count, setCount = useState(0)
⇒ useState(0) ⇒ count
useState는 항상 2개의 value를 return
첫 번째 value를 item이라 이름을 주고 두 번째 value는 값 변경
useState(초기값)
class Component는 this도 써야 함
useState 사용하는 방법을 설명함

useInput
기본적으로 input을 update

input을 업데이트함

react class로도 만들것임

useInput은 initialValue를 받음

initialValue가 처음 상태

Mr. 을 기본값으로 함께 return하고 싶어서 value 넣음

name.value 대신에 …name 사용

{...name}을 사용하면 name.value, name.onChange 적지 않아도 한 번에 불러옴

NPM에 등록해서 사람들이 쓸 수 있도록

유효성을 검증하는 기능을 포함

특정문자를 쓸 수 없게 하고 싶어

hooks랑 관련 없지만 function을 예쁘게 만든거

검증 기능을 주었기 때문에

useTabs
버튼을 누르면 버튼 숫자에 맞는 content가 바뀌는 페이지를 만들었음

useEffect는 2개의 인자를 받는데 첫 번째는 function으로써의 effect

deps

리스트에 있는 값만 deps

useEffect(sayHello, []);

useEffect(sayHello, [number]); ⇒ number만 sayHello 실행

useEffect는 ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate임

dependancay 매우 중요

useTitle, useClick, useConfirm & usePreventLeave는 모두 실습 위주여서 코드를 통한 이해가 중요할 듯
!!!!!!아무리 봐도 도대체 어떻게 이걸 한 번에 예쁘게 정리까지 하면서 할 수 있는지 모르겠어요!!!!!!
                        "

                        
                    />
                </SectionCenter>
                <SectionRight>
                    <Category>
                        태그
                        <span></span>
                        React
                        <span></span>
                        HTML
                        <span></span>
                        HTML,CSS
                        <span></span>
                        Django
                    </Category>
                </SectionRight>

            </Title>
        </>
    );
}

export default DetailBody