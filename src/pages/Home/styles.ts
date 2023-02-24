import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 60px;
  margin-bottom: 120px;
  gap: 200px;
  
  @media (max-width: 755px) {
    margin: auto 12px;
    gap: 67px;
    margin-bottom: 120px;
  }
`;
