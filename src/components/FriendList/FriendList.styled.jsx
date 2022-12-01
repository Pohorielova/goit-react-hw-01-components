import styled from "styled-components";

export const StatsEl =styled.li`
background-color: #ffffff;
border-radius: 6px;
box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: relative;

display:flex;
justify-content: flex-start;
align-items: center;
/* flex-direction: column; */
width:200px;
padding: 10px;
`;

export const Avatar =styled.img`
  display: block;
  width: 48px;
  border-radius: 6px;
  background-color: #edebeb;
  margin-right:10px;

`;

export const Name= styled.p`

font-weight: 700;
font-size: 20px;
`;

export const Status = styled.span`
  margin-right:10px;

  padding: 6px;
  border-radius: 50%;

  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'yellowgreen';

      default:
        return 'grey';
    }
  }};

`;
