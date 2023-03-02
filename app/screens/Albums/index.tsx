import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/theme";

const AlbumsScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Albums</Text>
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

export default AlbumsScreen;
