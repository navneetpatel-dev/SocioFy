import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

// Custom Imports

const Stack = createNativeStackNavigator();

function Test({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Testing Stuffs...</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Test;
