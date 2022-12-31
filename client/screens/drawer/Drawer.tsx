import { Text, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import MenuItemButton from "./MenuItemButton";

function Drawer(props: any) {
  return (
    <DrawerContentScrollView style={styles.menu}>
      <Text style={styles.title}>Menú</Text>
      <MenuItemButton
        text="Viajes"
        onPress={() => props.navigation.navigate("TravelList")}
      />
      <MenuItemButton
        text="Agregar nuevo viaje"
        onPress={() => props.navigation.navigate("CreateUserScreen")}
      />
      <MenuItemButton
        text="Conductores"
        onPress={() => props.navigation.navigate("Drivers")}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  menu: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default Drawer;
