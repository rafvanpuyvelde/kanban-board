import styled from "styled-components";

const DroppableGrid = styled.div.attrs(() => ({
  guttersize: 1,
}))`
  width: 100%;
  margin: 0 0 3rem 0;

  @media only screen and (min-width: 1000px) {
    margin-right: ${(props) => props.guttersize}rem;
    width: calc(50% - ${(props) => props.guttersize / 2}rem);

    &:nth-child(even) {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: calc(calc(100% - ${(props) => props.guttersize * 3}rem) / 4);

    &:nth-child(even) {
      margin-right: ${(props) => props.guttersize}rem;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default DroppableGrid;
