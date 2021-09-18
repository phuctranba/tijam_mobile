import React, { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./src/containers/App";
import { DrawerAnimationProvider } from "./src/contexts/DrawerAnimationContext";
import { StatusBar } from "react-native";

const app: FC<any> = () => {
  return (
    <DrawerAnimationProvider>
      <SafeAreaProvider>
        <StatusBar translucent backgroundColor="transparent" barStyle={"dark-content"} />
        <App />
      </SafeAreaProvider>
    </DrawerAnimationProvider>
  );
};

export default app;
