import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/theme";

const MusicScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Music</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
  text: {
    color: COLORS.LIGHT as string,
  },
});

export default MusicScreen;
