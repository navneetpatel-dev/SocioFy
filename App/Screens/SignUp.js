import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Custom Imports
import AuthForm from "../components/AuthForm";
import LoadingOverlay from "./../components/ui/LoadingOverlay";
import { AuthContext } from "./../../store/auth-context";
import { auth } from "./../../firebase";

const SignUp = () => {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      authCtx.authenticate(idToken);
      console.log(idToken);
      setIsAuthenticating(false);
    } catch (error) {
      alert("Sign Up Error occured");
      console.log(error.message);
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return (
    <>
      <AuthForm onAuthenticate={signUpHandler} />
    </>
  );
};

export default SignUp;
