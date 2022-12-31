import firebase from "../database/firebase";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import { IUser } from "../Interfaces/IUser";
import { getTravelById } from "../services/database/travels/dbTravels";

const UserDetails = (props: any) => {
  const initialState = {
    id: "",
    name: "",
    departure: "",
    arrival: "",
    createdAt: ""
  };
  const [user, setUser] = useState<IUser>(initialState);
  const [loading, setLoading] = useState<Boolean>(true);

  const fetchData = async (id: string) => {
    const data = await getTravelById(id);
    setUser(data[0]);
    setLoading(false);
  };
  const handleChange = (name: string, value: string | number) => {
    setUser({ ...user, [name]: value });
  };
  const updateUser = async () => {
    // const dbRef = firebase.db.collection("users").doc(user.id);
    // await dbRef.set({
    //   name: user.name,
    //   email: user.email,
    //   phone: user.phone,
    // });
    setUser(initialState);
    props.navigation.navigate("TravelList");
  };
  const deleteUser = async () => {
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("TravelList");
  };
  const confirmationAlert = () => {
    Alert.alert(
      "Eliminar Viaje",
      "¿Estas seguro que quieres eliminar este viaje?",
      [
        { text: "Si", onPress: () => deleteUser() },
        { text: "No", onPress: () => console.log(false) },
      ]
    );
  };

  useEffect(() => {
    fetchData(props.route.params.id);
  }, []);

  if (loading) {
    return (
      <View style={[styles.loader, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          value={user.name}
          onChangeText={(value) => handleChange("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Salida"
          value={user.departure}
          onChangeText={(value) => handleChange("departure", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Llegada"
          value={user.arrival}
          onChangeText={(value) => handleChange("arrival", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Update User" onPress={() => updateUser()} />
      </View>
      <View>
        <Button
          color="#ca2f2f"
          title="Eliminar Viaje"
          onPress={() => confirmationAlert()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
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

export default UserDetails;
