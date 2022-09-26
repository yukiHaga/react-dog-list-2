import HistoryTemplate from "../components/templates/HistoryTemplate";
import useHistory from "../hooks/useHistory";

type Props = {
  topPage: number;
  lastPage: number;
};

// どのように機能するかに関心を持つ。
// データや振る舞いを他のコンポーネントに渡す。
// DOMマークアップを可能な限り持たない。
const History = ({ topPage, lastPage }: Props) => {
  const { currentPage, moveTop, moveNext, moveBack, moveLast, resetHistory } =
    useHistory({ topPage, lastPage });

  return (
    <HistoryTemplate
      {...{ currentPage, moveTop, moveNext, moveBack, moveLast, resetHistory }}
    />
  );
};

export default History;
