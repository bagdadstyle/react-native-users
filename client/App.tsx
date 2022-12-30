import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyStack from "./screens/drawer/MyStack";
// import axios from "axios";
import "react-native-gesture-handler";
// import "dotenv/config";

// axios.defaults.baseURL = process.env.REACT_APP_API;

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
