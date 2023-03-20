import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/theme";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

interface ItemProps {
  title: string;
}

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const AlbumsScreen = () => {
  return (
    <View style={styles.main}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
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
  item: {
    width: "100%",
    backgroundColor: COLORS.LIGHT,
    alignItems: "center",
    marginVertical: 5,
    paddingVertical: 100,
    borderRadius: 5,
  },
});

export default AlbumsScreen;
