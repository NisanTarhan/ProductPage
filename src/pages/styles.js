import styled from 'styled-components';

//// Home Page Styles ////
const HomeLayout = styled.div`
  display: grid;
  grid-template-rows: 3.75rem auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: white;

`
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background: white;
  /* box-shadow: rgba(0, 0, 0, 0.05) */
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
`

const SortTag = styled.p`
  padding-left: 3rem;
  padding-right: 1rem;
  font-size: 1.5rem;
`;

const GenderTag = styled.p`
  padding-left: 9.5rem; 
  flex: 1;
`;

//// Detail Page Styles
const DetailLayout = styled.div`
  display: grid;
  grid-template-rows: 2.5rem 5rem 5rem auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: white;
`


export {
    HomeLayout,
    Header,
    SortTag,
    GenderTag,
    DetailLayout
}