import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const ButtonContainer = ({ children, button = null, text = null, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.opacity : null)}
    >
      <View style={[styles.button, button]}>
        <Text style={[styles.text, text]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonContainer;

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    backgroundColor: "#1b54c7",
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 21,
    textAlign: "center",
  },
  opacity: {
    opacity: 0.7,
  },
});
