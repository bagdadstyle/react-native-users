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

const UserDetails = (props: any) => {
  const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState<IUser | any>(initialState);
  const [loading, setLoading] = useState<Boolean>(true);

  const getUserById = async (id: string) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({
      ...user,
      id: doc.id,
    });
    setLoading(false);
  };
  const handleChange = (name: string, value: string | number) => {
    setUser({ ...user, [name]: value });
  };
  const updateUser = async () => {
    const dbRef = firebase.db.collection("users").doc(user.id);
    await dbRef.set({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
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
    getUserById(props.route.params.userId);
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
          placeholder="Email"
          value={user.email}
          onChangeText={(value) => handleChange("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone"
          value={user.phone}
          onChangeText={(value) => handleChange("phone", value)}
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
