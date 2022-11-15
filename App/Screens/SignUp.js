import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Custom Imports
import AuthForm from "../components/AuthForm";
import LoadingOverlay from "./../components/ui/LoadingOverlay";
import { auth } from "./../../firebase";
import { AuthContext } from "../../store/auth-context";

const SignUp = ({ navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signUpHandler({ email, password, name }) {
    try {
      setIsAuthenticating(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      authCtx.setHomeScreen(true);
      setIsAuthenticating(false);
    } catch (error) {
      setIsAuthenticating(false);
      alert("Sign Up Error occured");
      console.log(error.message);
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
