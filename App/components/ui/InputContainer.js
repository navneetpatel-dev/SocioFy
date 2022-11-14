import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InputContainer = ({
  iconName,
  size = 25,
  color = "grey",
  keyboardType = null,
  placeholder = null,
  inputConfig,
}) => {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
      <TextInput
        style={styles.textInput}
        keyboardType={keyboardType}
        placeholder={placeholder}
        {...inputConfig}
      />
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginLeft: 15,
    fontSize: 20,
    padding: 5,
  },
});
