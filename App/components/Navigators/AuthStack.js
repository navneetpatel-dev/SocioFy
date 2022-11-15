import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom Imports
import SignIn from "../../Screens/SignIn";
import SignUp from "../../Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={SignIn} />
    </Stack.Navigator>
  );
}
