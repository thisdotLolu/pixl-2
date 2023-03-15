import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthWrapper = ({ children }) => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const wallet = useWallet();
  
  useEffect(() => {
    if (!user && !wallet.autoConnect) {
      router.push("/account/login");
    }
  }, [user, wallet.connected, router]);

  // if (loading) return null;

  if (!user && !wallet.connected) {
    return null;
  }

  return <>{children}</>;
};

export default AuthWrapper;
