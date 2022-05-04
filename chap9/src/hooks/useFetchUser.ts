import { useState } from "react";
import axios from "axios";
import { User } from '../types/user';

export const useFetchUser = () => {
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

	return {userList, isLoading, isError, onclickFetchUser};
}