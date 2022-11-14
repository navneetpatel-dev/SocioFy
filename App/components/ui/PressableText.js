import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PressableText = ({ children, text = null, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.opacity : null)}
    >
      <View>
        <Text style={[styles.text, text]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PressableText;

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.7,
  },
  text: {
    color: "#1b54c7",
    fontWeight: "bold",
  },
});
