import { useState } from 'react';
import axios from 'axios';
import './App.css';

export type User = {
  id: number;
  name: string;
  lastname: string;
  firstname: string;
  age: number;
};

function App() {

  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ボタン押下イベント
  const onclickFetchUser = () => {
    // ボタン押下ローディングフラグON, エラーフラグOFF
    setIsLoading(true);
    setIsError(false);

    // API取得
    axios.get<User[]>('http://localhost:9000/')
      .then(result => {
        const users = result.data.map(user => ({
          id: user.id,
          lastname: user.lastname,
          firstname: user.firstname,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age,
        }));
        setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

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
