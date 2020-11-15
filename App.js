import "react-native-gesture-handler";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { AppearanceProvider } from "react-native-appearance";
import store from "./src/redux/store/store";
import AppNavigation from "./src/navigation/AppNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
// App loading (for Font)
import * as Font from "expo-font";
import { AppLoading } from "expo";



const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-semiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
    "montserrat-bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);

        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppearanceProvider>
          <AppNavigation />
        </AppearanceProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

