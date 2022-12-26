import { View, ImageBackground, StyleSheet, Text, Button } from "react-native";
import image from "../images/landing.png";

// const image = { uri: "../images/landing.png" };

const Landing = (props: any) => {
  const handleButton = () => {
    props.navigation.navigate("UserList");
  };
  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View style={{ padding: 15 }}>
        <Button onPress={() => handleButton()} title="Ingresar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
export default Landing;
