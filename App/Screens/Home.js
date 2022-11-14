import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>{`Home - User Logged In`}</Text>
      <Button title="LogOut" />
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
