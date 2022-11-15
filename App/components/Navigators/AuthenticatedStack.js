import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

// Custom Imports
import Home from "../../Screens/Home";
import { auth } from "../../../firebase";
import { AuthContext } from "../../../store/auth-context";
import Test from "./Test";

const Stack = createNativeStackNavigator();

export default function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  async function logOutHandler() {
    await auth.signOut();
    authCtx.setHomeScreen(false);
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: ({ tintColor }) => (
            <Ionicons
              name="exit"
              color={tintColor}
              size={24}
              onPress={logOutHandler}
            />
          ),
        }}
      />
      <Stack.Screen name="Testing" component={Test} />
    </Stack.Navigator>
  );
}
