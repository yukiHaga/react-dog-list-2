import { useState } from "react";

type Props = {
  topPage: number;
  lastPage: number;
};

type ReturnType = {
  currentPage: number;
  moveTop: () => void;
  moveNext: () => void;
  moveBack: () => void;
  moveLast: () => void;
  resetHistory: () => void;
};

const useHistory = ({ topPage, lastPage }: Props): ReturnType => {
  const initHistory: number[] = [topPage];
  const [history, setHistory] = useState<number[]>(initHistory);

  const currentPage = history[history.length - 1];

  const moveTop = () => {
    // 現在トップページの場合は移動しない
    if (currentPage === topPage) {
      return;
    }
    const nextHistory = [...history, topPage];
    setHistory(nextHistory);
  };

  const moveNext = () => {
    const nextPage = currentPage + 1;
    // ラストページより先には進めない
    if (lastPage < nextPage) {
      return;
    }
    const nextHistory = [...history, nextPage];
    setHistory(nextHistory);
  };

  const moveBack = () => {
    // トップページより前には戻れない
    if (history.length <= 1) {
      return;
    }
    const nextHistory = [...history.slice(0, history.length - 1)];
    setHistory(nextHistory);
  };

  const moveLast = () => {
    // 現在ラストページの場合は移動しない
    if (currentPage === lastPage) {
      return;
    }
    const nextHistory = [...history, lastPage];
    setHistory(nextHistory);
  };

  const resetHistory = () => {
    setHistory(initHistory);
  };

  return {
    currentPage,
    moveTop,
    moveNext,
    moveBack,
    moveLast,
    resetHistory,
  };
};

export default useHistory;
