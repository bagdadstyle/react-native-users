import { Button } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import CreateUserScreen from "../CreateUserScreen";
import TravelList from "../TravelList";
import UserDetails from "../UserDetailsScreen";
import Landing from "../Landing";
import Drivers from "../Drivers";
import Drawer from "./Drawer";
import "react-native-gesture-handler";

const Stack = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator drawerContent={(props: any) => <Drawer {...props} />}>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TravelList"
        component={TravelList}
        options={{ title: "Lista de viajes" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Crear un nuevo conductor" }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{
          title: "Detalles del viaje",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Stack.Screen name="Drivers" component={Drivers} />
    </Stack.Navigator>
  );
}

export default MyStack;
