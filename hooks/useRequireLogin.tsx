import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useSession} from "next-auth/react";

export function useRequireLogin() {
  const {data: session, status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == "loading") return; // まだ確認中
    if (!session) router.push("/"); // 未ログインだったのでリダイレクト
  }, [status, session])
}
