import TimerTemplate from "../components/templates/TimerTemplate";
import useTimer from "../hooks/useTimer";

type Props = {
  leftTime: number;
};

// コンポーネントからフックスのロジックを切り出したものをCustom Hookと呼ぶ。
// Custom Hookを使うことで、コンポーネント内のロジックとビューの分離と、ロジックの再利用ができる。
// これがcontainer component
// どのように機能するかにだけ関心を持つ。
// DOMマークアップを可能な限り持たない。データや振る舞いを他のコンポーネントに受け渡す。
// container componentのpropsは呼び出す側(App)から受け取る。Appで全てのinitialStateを管理できる。
const Timer = ({ leftTime }: Props) => {
  const [time, isPrime, resetTime] = useTimer(leftTime);

  return <TimerTemplate {...{ time, isPrime, resetTime }} />;
};

export default Timer;
