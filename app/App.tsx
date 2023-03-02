import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarBranding}>Branding</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.initialText}></Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const COLORS = {
  DARK: "#593131",
  MID: "#c5785a",
  LIGHT: "#fbbf7C",
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.LIGHT,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? 24 : "auto",
  },
  navbar: {
    top: 0,
    width: "100%",
    backgroundColor: COLORS.DARK,
    padding: 20,
  },
  navbarBranding: {
    color: COLORS.LIGHT,
    fontSize: 20,
  },
  content: {
    padding: 20,
  },
  initialText: {},
});
