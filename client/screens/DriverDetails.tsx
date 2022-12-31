import { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { ListItem } from "react-native-elements";
import { IDrivers } from "../Interfaces/IDrivers";
import { getDriverById } from "../services/database/drivers/dbDrivers";
import moment from "moment";

const initialState: IDrivers = {
  _id: "",
  firstName: "",
  lastName: "",
  license: "",
  createdAt: "",
};

const DriverDetails = (props: any) => {
  const [driver, setDriver] = useState<IDrivers>();
  const [loading, setLoading] = useState<Boolean>(true);

  const fetchData = async (id: string) => {
    const data = await getDriverById(id);
    data.license = moment(data.license).locale("es").format("MMM D YYYY,");
    setDriver(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(props.route.params.id);
    return () => {
      setDriver(initialState);
      setLoading(true);
    };
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
      <Image style={styles.image} source={require("../images/driver.jpg")} />
      <ListItem
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}
        bottomDivider
        style={styles.list}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.text}>
            {driver?.firstName + " " + driver?.lastName}
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
          <ListItem.Title style={styles.text}>
            Licencia válida hasta:
          </ListItem.Title>
          <ListItem.Title style={styles.text}>{driver?.license}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    width: "50%",
    height: "30%",
    borderRadius: 100,
    resizeMode: "cover",
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    width: "100%",
    padding: 0,
    marginTop: 10,
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
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

export default DriverDetails;
