import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AlbumsScreen from "./screens/Albums";
import MusicScreen from "./screens/Music";
import { default as NotificationsScreen } from "./screens/Notifications";
import { COLORS } from "./styles/theme";

const Tab = createBottomTabNavigator();

const App: FC = () => {
  const routes = [
    {
      name: "Music",
      screen: MusicScreen,
      icon: "music",
    },
    {
      name: "Albums",
      screen: AlbumsScreen,
      icon: "album",
    },
    {
      name: "Notifications",
      screen: NotificationsScreen,
      icon: "bell",
    },
  ];

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Tab.Navigator
            initialRouteName="Music"
            screenOptions={{
              tabBarActiveTintColor: COLORS.DARK,
              tabBarInactiveTintColor: COLORS.MID,
              tabBarActiveBackgroundColor: COLORS.LIGHT,
              tabBarInactiveBackgroundColor: COLORS.LIGHT,
              headerStyle: {
                backgroundColor: COLORS.LIGHT,
              },
              headerTintColor: COLORS.DARK,
            }}
            sceneContainerStyle={{ backgroundColor: COLORS.DARK }}
          >
            {routes.map(({ name, screen, icon }) => (
              <Tab.Screen
                key={name}
                name={name}
                component={screen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name={icon}
                      size={size}
                      color={color}
                    />
                  ),
                  tabBarLabelStyle: {
                    fontSize: 14,
                  },
                }}
              />
            ))}
          </Tab.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.DARK,
    flexDirection: "column",
    justifyContent: "flex-start",
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
