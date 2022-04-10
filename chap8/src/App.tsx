import { useEffect, useState } from "react";
import {ListItem} from "./components/Listitems";
import axios from "axios";

function App() {
  // 取得したユーザ
  const [users, setUsers] = useState([]);

  // 画面表示時にユーザ情報取得
  useEffect(() => {
    axios.get("http://localhost:9000/").then((res) => {
      setUsers(res.data);
    })
  }, []);

  // 返却
  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
