import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AlbumsScreen from "./screens/Albums";
import MusicScreen from "./screens/Music";
import NotificationScreen from "./screens/Notifications";
import RecentsScreen from "./screens/Recents";
import { COLORS } from "./styles/theme";

const App: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const routes = [
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ];

  const renderScene = BottomNavigation.SceneMap({
    music: MusicScreen,
    albums: AlbumsScreen,
    recents: RecentsScreen,
    notifications: NotificationScreen,
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarBranding}>Branding</Text>
        </View>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          theme={{
            colors: {
              background: COLORS.DARK,
              secondaryContainer: COLORS.DARK,
            },
          }}
          barStyle={{ backgroundColor: COLORS.LIGHT }}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.DARK,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? 24 : "auto",
  },
  navbar: {
    top: 0,
    width: "100%",
    backgroundColor: COLORS.LIGHT,
    padding: 20,
  },
  navbarBranding: {
    color: COLORS.DARK,
    fontSize: 20,
  },
  content: {
    padding: 20,
  },
  initialText: {},
});
