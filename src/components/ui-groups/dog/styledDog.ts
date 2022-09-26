import styled from "styled-components";

export const Header = styled.header`
  padding: 24px 0;
  background-color: #333c5e;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Main = styled.main`
  flex: 1 0 auto;
`;

export const FormSection = styled.section`
  margin: 56px 0 48px 0;
  text-align: center;
  min-width: 356px;
`;

export const Title = styled.h2``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const TextInput = styled.input`
  padding: 8px;
  border-radius: 3px 0 0 3px;
  border: 1px solid #c0c0c0;
  width: 300px;
  height: 40px;
`;

export const SubmitButton = styled.button`
  background-color: #536299;
  border-radius: 0 3px 3px 0;
  border: none;
  padding: 8px;
  color: #fff;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ImagesSection = styled.section`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 300px;
  grid-template-rows: auto;
  @media (min-width: ${({ theme }) => theme.mediaQuery.lg}px) {
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px 200px 200px;
  }
`;

export const GridItem = styled.div<{ key: number }>``;

export const DogImage = styled.img`
  padding: 8px;
  width: 300px;
  height: 300px;
  object-fit: cover;
  @media (min-width: ${({ theme }) => theme.mediaQuery.lg}px) {
    width: 200px;
    height: 200px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.red};
  margin: 0;
`;
