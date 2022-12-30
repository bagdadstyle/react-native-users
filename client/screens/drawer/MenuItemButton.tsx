import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuItemButton = ({ text, onPress }: any) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default MenuItemButton;
