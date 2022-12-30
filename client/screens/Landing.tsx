import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import image from "../images/landing.png";

// const image = { uri: "../images/landing.png" };

const Landing = (props: any) => {
  const handleButton = () => {
    props.navigation.navigate("TravelList");
  };
  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View>
        {/* <Button onPress={() => handleButton()} title="Ingresar" /> */}
        <TouchableOpacity onPress={() => handleButton()} style={styles.button}>
          <Text style={styles.text}>Ingresar</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    color: "white",
  },
});
export default Landing;
