import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";

const App = () => {
  // 取得したユーザ
  const [users, setUsers] = useState<User[]>([]);

  // 画面表示時にユーザ情報取得
  useEffect(() => {
    axios.get<User[]>("http://localhost:9000/").then((res) => {
      setUsers(res.data);
    })
  }, []);

  // 返却
  return (
    <div>
      {users.map((user, index) => (
        <ListItem key={index} id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} />
      ))}
    </div>
  );
}
export default App;
