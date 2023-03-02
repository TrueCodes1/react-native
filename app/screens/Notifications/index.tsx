import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/theme";

const NotificationsScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
  text: {
    color: COLORS.LIGHT,
  },
});

export default NotificationsScreen;
