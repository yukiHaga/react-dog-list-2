import styled from "styled-components";
import { Button } from "../../ui-parts/Button";
import { Reset } from "@styled-icons/boxicons-regular/Reset";

export const Card = styled.div`
  width: 200px;
  border: 1px solid #88bbbb;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContent = styled.div`
  padding: 16px 16px 0 16px;
  border-bottom: 1px solid #88bbbb;
  width: 100%;
  text-align: center;
`;

export const CardLabel = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const CardValue = styled.div<{ isPrime: boolean }>`
  font-size: 56px;
  color: ${({ isPrime }) => isPrime && "#f5b2b2"};
`;

export const ResetButtonWrapper = styled.div`
  width: 100%;
  padding: 8px 8px 8px 8px;
  display: flex;
  justify-content: center;
`;

export const ResetButton = styled(Button)`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResetIcon = styled(Reset)`
  margin-right: 4px;
`;
