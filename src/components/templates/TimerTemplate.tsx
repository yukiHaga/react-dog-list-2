import {
  Card,
  CardContent,
  CardLabel,
  CardValue,
} from "../ui-groups/timer/styledTimer";
import { MemoResetButton } from "../ui-groups/timer/ResetButton";

type Props = {
  time: number;
  isPrime: boolean;
  resetTime: () => void;
};

// これがpresentaioanl component
// どのように見えるかに関心を持つ。
// 内部にDOMマークアップをふんだんに持つ。
// データや振る舞いをpropsとして一方的に受け取る。
// 自身の状態を持たない。
const TimerTemplate = ({ time, isPrime, resetTime }: Props) => {
  return (
    <Card>
      <CardContent>
        <CardLabel>TIME</CardLabel>
        <CardValue isPrime={isPrime}>{time}</CardValue>
      </CardContent>
      <MemoResetButton {...{ resetTime }} />
    </Card>
  );
};

export default TimerTemplate;
