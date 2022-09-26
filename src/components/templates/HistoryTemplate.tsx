import Container from "../ui-groups/layout/Container";

type Props = {
  currentPage: number;
  moveTop: () => void;
  moveNext: () => void;
  moveBack: () => void;
  moveLast: () => void;
  resetHistory: () => void;
};

const HistoryTemplate = ({
  currentPage,
  moveTop,
  moveNext,
  moveBack,
  moveLast,
  resetHistory,
}: Props) => {
  return (
    <Container>
      <div>
        <div>現在のページ: {currentPage}</div>
        <button onClick={moveTop}>トップ</button>
        <button onClick={moveNext}>次へ</button>
        <button onClick={moveBack}>戻る</button>
        <button onClick={moveLast}>ラスト</button>
        <button onClick={resetHistory}>履歴を消去</button>
      </div>
    </Container>
  );
};

export default HistoryTemplate;
