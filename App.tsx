import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserList from "./screens/UsersList";
import UserDetails from "./screens/UserDetailsScreen";
import Landing from "./screens/Landing";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{ title: "Viajes" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Crear un nuevo viaje" }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{ title: "Detalles del viaje" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // textAlign: "center",
    color: "red",
  },
});
