import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Button,
  RefreshControl,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { IDrivers } from "../Interfaces/IDrivers";
import { getAllDrivers } from "../services/database/drivers/dbDrivers";

const Drivers = (props: any) => {
  const [drivers, setDrivers] = useState<IDrivers[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await getAllDrivers();
    data.forEach(
      (e: IDrivers) =>
        (e.license = new Date(e.license).toLocaleDateString("es-ES"))
    );
    setDrivers(data);
    setLoading(false);

  };
  const refreshScreen = async () => {
    try {
      setRefreshing(true);
      await fetchData();
      setRefreshing(false);
    } catch (e) {
      // Alert.alert("Ups!", "Intenta nuevamente", [
      //   { text: "Ok", onPress: () => props.navigation.navigate("Landing") },
      // ]);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.loader, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => refreshScreen()}
        />
      }
    >
      <View>
        <Button
          onPress={() => props.navigation.navigate("CreateUserScreen")}
          title="CREAR"
        />
      </View>
      {drivers.length ? (
        drivers.map((driver, i) => {
          return (
            <ListItem
              key={i}
              hasTVPreferredFocus={undefined}
              tvParallaxProperties={undefined}
              bottomDivider
            >
              <ListItem.Chevron
                hasTVPreferredFocus={undefined}
                tvParallaxProperties={undefined}
              />
              <Avatar
                source={{
                  uri: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg",
                }}
                rounded
              />
              <ListItem.Content>
                <ListItem.Title>
                  {driver.firstName + " " + driver.lastName}
                </ListItem.Title>

                <ListItem.Subtitle>
                  Licencia: {driver.license}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })
      ) : (
        <Text>
          No se encontró información. Desplaze hacía abajo la pantalla para
          actualizar
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Drivers;