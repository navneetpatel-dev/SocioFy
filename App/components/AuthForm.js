import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// Custom Imports
import InputContainer from "./ui/InputContainer";
import ButtonContainer from "./ui/ButtonContainer";
import PressableText from "./ui/PressableText";

const AuthForm = ({ loginScreen = false, onAuthenticate }) => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    mobile: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setFormData((prevState) => ({
      ...prevState,
      [inputIdentifier]: enteredValue,
    }));
  }

  function buttonPressHandler() {
    onAuthenticate({
      email: formData.email,
      password: formData.mobile,
      name: formData.fullName,
    });
  }

  const replace = loginScreen ? "SignUp" : "LogIn";
  function TopImage() {
    if (loginScreen) {
      return (
        <Image
          source={require("../../assets/images/SignInImage.webp")}
          style={styles.image}
        />
      );
    } else {
      return (
        <Image
          source={require("../../assets/images/SignUpImage.webp")}
          style={styles.image}
        />
      );
    }
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeAndScrollView}>
        <ScrollView style={[styles.safeAndScrollView]}>
          <View style={styles.scrollViewContainer}>
            <View style={styles.imageContainer}>
              <TopImage />
            </View>
            <View style={styles.formWithTextContainer}>
              <Text style={styles.signUpText}>
                {loginScreen ? "Sign In" : "Sign Up"}
              </Text>
              <View>
                <InputContainer
                  iconName="email-outline"
                  keyboardType="email-address"
                  placeholder="Your Email"
                  inputConfig={{
                    onChangeText: inputChangeHandler.bind(this, "email"),
                    value: formData.email,
                  }}
                />
                {!loginScreen && (
                  <InputContainer
                    iconName="face-man-outline"
                    placeholder="Full Name"
                    inputConfig={{
                      onChangeText: inputChangeHandler.bind(this, "fullName"),
                      value: formData.fullName,
                    }}
                  />
                )}
                <InputContainer
                  iconName="phone-outline"
                  keyboardType="number-pad"
                  placeholder="Mobile"
                  inputConfig={{
                    onChangeText: inputChangeHandler.bind(this, "mobile"),
                    value: formData.mobile,
                  }}
                />
              </View>
            </View>
            <View>
              <ButtonContainer onPress={buttonPressHandler}>
                {loginScreen ? "Login" : "Continue"}
              </ButtonContainer>
            </View>
            <View style={styles.joined}>
              <Text>{loginScreen ? "Join Here " : "Joined us before? "}</Text>
              <PressableText
                onPress={() => {
                  navigation.replace(replace);
                }}
              >
                {loginScreen ? "Sign Up" : "Sign In"}
              </PressableText>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  safeAndScrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContainer: {},
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  formWithTextContainer: {
    marginHorizontal: 30,
    marginTop: 20,
  },

  signUpText: {
    fontSize: 26,
    color: "darkblue",
    fontWeight: "bold",
    letterSpacing: 1.2,
    marginTop: 10,
  },
  joined: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
