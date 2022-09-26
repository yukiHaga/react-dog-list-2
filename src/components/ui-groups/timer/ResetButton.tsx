import { memo } from "react";

import { ResetButtonWrapper, ResetButton, ResetIcon } from "./styledTimer";

type Props = {
  resetTime: () => void;
};

export const MemoResetButton = memo(({ resetTime }: Props) => {
  return (
    <ResetButtonWrapper>
      <ResetButton onClick={resetTime}>
        <ResetIcon size="16px" />
        Reset
      </ResetButton>
    </ResetButtonWrapper>
  );
});
