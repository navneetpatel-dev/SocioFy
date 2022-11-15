import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

// Custom Imports
import AuthForm from "../components/AuthForm";
import { auth } from "./../../firebase";
import LoadingOverlay from "./../components/ui/LoadingOverlay";

const SignIn = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signInHandler({ email, password, name }) {
    try {
      setIsAuthenticating(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      alert("Sign In Error occured");
      console.log(error.message);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in user..." />;
  }

  return (
    <>
      <AuthForm loginScreen={true} onAuthenticate={signInHandler} />
    </>
  );
};

export default SignIn;
