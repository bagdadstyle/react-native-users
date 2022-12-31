import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import { IUser } from "../Interfaces/IUser";
import { getTravelById } from "../services/database/travels/dbTravels";
import moment from "moment";
import es from "moment/locale/es";
import { IDrivers } from "../Interfaces/IDrivers";

const initialState: IUser = {
  _id: "",
  name: "",
  departure: "",
  arrival: "",
  drivers: [],
  createdAt: "",
};
const TravelDetails = (props: any) => {
  const [travel, setTravel] = useState<IUser>(initialState);
  const [loading, setLoading] = useState<Boolean>(true);

  const fetchData = async (id: string) => {
    let data = await getTravelById(id);

    setTravel(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData(props.route.params.id);
    return () => setTravel(initialState);
  }, [props]);

  if (loading) {
    return (
      <View style={[styles.loader, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../images/icon.png")} />

      <ListItem
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}
        bottomDivider
        style={styles.list}
      >
        <ListItem.Content style={styles.name}>
          <ListItem.Title style={styles.text}>{travel.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}
        bottomDivider
        style={styles.list}
      >
        <ListItem.Content style={styles.rows}>
          <ListItem.Title style={styles.text}>Salida: </ListItem.Title>
          <ListItem.Title style={styles.text}>
            {travel.departure}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}
        bottomDivider
        style={styles.list}
      >
        <ListItem.Content style={styles.rows}>
          <ListItem.Title style={styles.text}>Llegada: </ListItem.Title>
          <ListItem.Title style={styles.text}>{travel.arrival}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}
        bottomDivider
        style={styles.list}
      >
        <ListItem.Content style={styles.rows}>
          <ListItem.Title style={styles.text}>Conductores</ListItem.Title>
          <ListItem.Title style={styles.text}>Licencia</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      {travel.drivers?.map((driver, i) => {
        return (
          <ListItem
            key={i}
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}
            bottomDivider
            style={styles.list}
          >
            <ListItem.Content style={styles.rows}>
              <ListItem.Title style={styles.text}>
                {driver.firstName + " " + driver.lastName}
              </ListItem.Title>
              <ListItem.Title style={styles.text}>
                {driver.license}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    // marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: "cover",
  },
  list: {
    width: "100%",
    padding: 0,
    marginTop: 10,
  },
  name: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
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

export default TravelDetails;
