import { useState } from "react";
import { Card } from "./components/Card";
import styled from "styled-components";

export const App = () => {
  // 管理者フラグ true＝管理者, false=それ以外
  const [isAdmin, setIsAdmin] = useState(false);
  // ［切り替え］ボタン押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      { isAdmin ? <span>管理者です</span> : <span>管理者以外</span> }
      <button onClick={ onClickSwitch }>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};

//export default App;