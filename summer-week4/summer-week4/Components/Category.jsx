import styled from "styled-components";
import { faArrowTrendUp, faClock, faEllipsisVertical, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sections = styled.div`
        display: flex;
        justify-content: space-between;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
`;
const Trending = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 10px 0px 20px;
`;

const Recent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 10px 0px 20px;
`;

const DateFilter = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    margin: 20px 0px 0px 20px;
    border: 5px solid white;
`;

const SectionRight = styled.div`
    margin: 20px 20px 0px 20px;
`;

function Category() {
    return (
        <>
            <Sections>
                <Section>
                    <Trending>
                        <FontAwesomeIcon icon={faArrowTrendUp} />
                        트렌딩
                    </Trending>
                    <Recent>
                        <FontAwesomeIcon icon={faClock} />
                        최신
                    </Recent>
                    <DateFilter>
                        이번 주
                        <FontAwesomeIcon icon={faCaretDown} />
                    </DateFilter>
                </Section>
                <SectionRight>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </SectionRight>
            </Sections>
        </>
    )
}

export default Category