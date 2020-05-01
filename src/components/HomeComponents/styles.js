import styled from 'styled-components';

//// Card Styles ////
const CardLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 16.5rem;
    height: 30rem;
    box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.15);
    cursor: pointer;
    color: black;
    /* border-radius: 0.7rem; */
    transition: transform 0.25s ease-out;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 24.4rem;
    border-radius: 3px;
    margin-bottom: 0.75rem;
`

const Text = styled.p`
    font-size: 1rem;
    padding-left: 7px;
    padding-bottom: 5px;
    margin: 0;
    line-height: 1.6rem;
    color: rgb(51, 51, 58);
`

const PriceTag = styled.p`
    font-size: 0.9rem;
    padding-left: 7px;
    padding-bottom: 5px;
    margin: 0;
    line-height: 1.6rem;
    color: rgb(51, 51, 58);
`

const Badge = styled.p`
    text-align: center;
    width: 4.5rem;
    height: 1.25rem;
    background: rgb(255, 96, 8);
    left: 0.6rem;
    position: absolute;
    font-size: 0.8rem;
    border-radius: 3px;
    color: white;
`

//// CardContainer Styles ////
const CardContainerLayout = styled.div`
    margin-right: 9.3rem;
    margin-left: 1.5rem ;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(15rem, 1fr));
    grid-gap: 2rem;
`

//// Filter Styles ////
const FilterLayout = styled.div`
    display: flex;
    justify-content: flex-end;
`

const FilterInput = styled.input`
    height: 2.5rem;
    width: 13rem;
    -webkit-box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.08);
    -moz-box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.08);
    box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.08);
    border: 0px solid gray;
    border-radius: 2px;
    padding: 0.6rem;
    letter-spacing: 1px;
    font-size: 1rem;
    background: white;

    ::placeholder {
    color: rgb(51, 51, 58);
    font-size: 0.75rem;
    line-height: 2.5rem;
    letter-spacing: 1px;
}
`

//// Sorter Styles ////
const Select = styled.select`
  width: 7rem;
  height: 2rem;
  background: white;
  color: gray;
  padding-left: 0.3rem;
  font-size: 0.9rem;
  border: 1;
  margin-top: 0.2rem;
  margin-right: 14rem;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 1.2rem;
    padding: 0px 2px 1px;
  }

  option:nth-of-type(1){
    display: none;
  }
`;

//// Main Styles ////
const MainLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 7.5rem;
    margin-top: 3rem;
    background: white;
`

export {
    CardLayout,
    Image,
    Text,
    PriceTag,
    Badge,
    CardContainerLayout,
    FilterLayout,
    FilterInput,
    Select,
    MainLayout
}