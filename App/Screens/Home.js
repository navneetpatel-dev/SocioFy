import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

//Custom Imports
import { auth } from "../../firebase";

const Home = ({ navigation }) => {
  // console.log("FROM HOME ", auth?.currentUser);
  console.log("home invoked");
  return (
    <View style={styles.container}>
      <Text>{`Home - User Logged In`}</Text>
      <Button
        title="Go to Test"
        onPress={() => {
          navigation.navigate("Testing");
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
