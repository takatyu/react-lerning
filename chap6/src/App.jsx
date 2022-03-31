import { useState, memo, useCallback } from 'react';
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

const App = memo(() => {
  console.log("Appレンダリング");
  const [num, setNume] = useState(0);

  // リセットボタン処理
  const onClickReset = useCallback(() => {
    setNume(0);
  }, []);

  // カウントアップボタン処理
  const onClickButton = () => {
    setNume(num + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
export default App;
