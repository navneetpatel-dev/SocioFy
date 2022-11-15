import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useContext } from "react";
import { StyleSheet, LogBox } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { onAuthStateChanged } from "firebase/auth";

// Custom Imports
import { auth } from "./firebase";
import AuthenticatedStack from "./App/components/Navigators/AuthenticatedStack";
import AuthStack from "./App/components/Navigators/AuthStack";
import AuthContextProvider from "./store/auth-context";

// Global
LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);
SplashScreen.preventAutoHideAsync();

function Navigation({ showHomeScreen }) {
  return (
    <NavigationContainer>
      {showHomeScreen ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [showHomeScreen, setshowHomeScreen] = useState(false);

  let Component = "";

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setshowHomeScreen(true);
      } else {
        setshowHomeScreen(false);
      }
    });
  }, []);

  if (showHomeScreen) {
    Component = <Navigation showHomeScreen />;
    SplashScreen.hideAsync()
      .then(() => {})
      .catch(() => {});
  } else {
    Component = <Navigation />;
    SplashScreen.hideAsync()
      .then(() => {})
      .catch(() => {});
  }

  return Component;
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
