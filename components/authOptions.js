import { useState, useMemo, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from 'react-hot-toast';
import bs58 from "bs58";

import { SigninMessage } from '../utils/SigninMessage';
import discord from "../public/icons/discord.svg";
import google_icon from "../public/icons/google_icon.svg";
import solana_icon from "../public/img/solana-icon.svg";

const AuthOptions = () => {
  
  // solana sign in
  const { data: session, status } = useSession();
  const wallet = useWallet();
  const walletModal = useWalletModal();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      if (!wallet.connected) {
        walletModal.setVisible(true);
      } 
      const csrf = await getCsrfToken();
      if (!wallet.publicKey || !csrf || !wallet.signMessage) return;
      const message = new SigninMessage({
        domain: window.location.host,
        publicKey: wallet.publicKey?.toBase58(),
        statement: `Sign this message to sign in to the app.`,
        nonce: csrf,
      });
      const data = new TextEncoder().encode(message.prepare());
      const signature = await wallet.signMessage(data);
      const serializedSignature = bs58.encode(signature);

      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature: serializedSignature,
      });
    } catch (error) {
      console.log(error);
    }
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (wallet.connected && status === "unauthenticated") {
      handleSignIn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet.connected, status]);

  useEffect(() => {
    if ((wallet.connected && status === "authenticated") || user) {
      router.push("/profile")
    }
  }, [wallet.connected, user, router, status]);

  // if (user || wallet.autoConnect) {
    // router.push("/profile")
    // return <div>Welcome {user.displayName}</div>
  // }

  // google sign in
  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      toast.success('Success, welcome back!', {
        position: 'top-center',
      });
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        toast.error('You closed the sign-in popup, refresh & try again!', {
          position: 'top-center',
        });
      } else {
        toast.error(error.message, {
          position: 'top-center',
        });
      }
    }
  };

  if (loading) {
    return <div>Loading....</div>
  }

  if (user || wallet.autoConnect) {
    // router.push("/profile")
    // return <div>Welcome {user.displayName}</div>
  }

  return (
    <div className="grid grid-cols-2 gap-1 justify-items-center mb-6">
      <div className="socialSignup">
        <button onClick={signInGoogle}>
          <Image className="relative z-10 cursor-pointer" src={google_icon} alt="Google" layout="intrinsic"
          // onClick={signInGoogle} 
          />
        </button>
      </div>
      <div className="socialSignup">
        <button className="" onClick={handleSignIn}>
          <Image className="relative z-10 cursor-pointer w-5 h-5" src={solana_icon} alt="Solana" layout="intrinsic"
          // onClick={signInFacebook} 
          />
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default AuthOptions;