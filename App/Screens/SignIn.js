import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

// Custom Imports
import AuthForm from "../components/AuthForm";
import { AuthContext } from "./../../store/auth-context";
import { auth } from "./../../firebase";
import LoadingOverlay from "./../components/ui/LoadingOverlay";

const SignIn = () => {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signInHandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      authCtx.authenticate(idToken);
      console.log(idToken);
      setIsAuthenticating(false);
    } catch (error) {
      alert("Sign In Error occured");
      console.log(error.message);
      setIsAuthenticating(false);
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
