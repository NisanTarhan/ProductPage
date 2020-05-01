import styled from 'styled-components';

//// DetailHeader Styles ////
const NavBar = styled.div`
   display: flex;
   align-items: center;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
   box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1); 
`;

const NavBarTitle = styled.p`
    padding-left: 9.4rem;
    padding-bottom: 0.8rem;
    padding-right: 0.8rem;
    font-size: 3rem;
`;

const EmptyLayout = styled.div`
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
   box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05); 
`

const Text = styled.p`
    padding-bottom: 0.8rem;
    font-size: 0.75rem;
    line-height: 2.5rem;
    padding: 1rem;
    font-weight: bold;
`;

const DescriptionText = styled.p`
    color: white;
    margin-top: 0.75rem;
    font-size: 0.75rem;
`;

const DescriptionTextLayout = styled.div`
    background: black;
    text-align: center;
`;


//// DetailContainer Styles ////
const DetailContainerLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    margin-top: 3rem;
    height: inherit;
`;

const ImageContainer = styled.div`
    grid-column: 2 / 3;
    margin-bottom: 26.25rem;
`;

const Image = styled.img`
    width: 100%;
    height: 43rem;
`


//// DescriptionContainerLayout ////
const DescriptionContainerLayout = styled.div`
    margin-left: 1.5rem;
    margin-right: 9.5rem;
`

const Title = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.9rem;
    color: rgb(3, 3, 3);
    margin-bottom: 9px;
`

const Price = styled.div`
    font-size: 1.5rem;
    line-height: 1.9rem;
    color: rgb(255, 96, 8);
    margin-bottom: 1.19rem;
`;

const DescriptionTitle = styled.p`
    font-size: 1.12rem;
    line-height: 1.9rem;
    padding-left: 0.6rem;
`;

const DescriptionArea = styled.div`
    font-size: 1rem;
    line-height: 1.25rem;
    padding-left: 0.6rem;
    padding-bottom: 1.25rem;
`;

export {
    NavBar,
    NavBarTitle,
    EmptyLayout,
    Text,
    DescriptionText,
    DescriptionTextLayout,
    DetailContainerLayout,
    ImageContainer,
    Image,
    DescriptionContainerLayout,
    Title,
    Price,
    DescriptionTitle,
    DescriptionArea
}