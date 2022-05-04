import { useState } from 'react';
import axios from 'axios';
import './App.css';

import { useFetchUser } from './hooks/useFetchUser';

const App = () => {
  // カスタムフック
  const { userList, isLoading, isError, onclickFetchUser } = useFetchUser();

  return (
    <>
      <button onClick={onclickFetchUser}>ユーザ取得</button>
      {isError && <p style={{ color: "red" }}>エラーが発生しました。</p>}
      {isLoading ? ( <p>データ取得中です。</p> ) : (
          userList.map((user => (
            <p key={user.id}>{user.id}:{user.name} ({user.age})</p>
          )))
          )}
    </>
  );
}

export default App;
