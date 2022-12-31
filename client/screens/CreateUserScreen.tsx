import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { IUser } from "../Interfaces/IUser";
import firebase from "../database/firebase";

const CreateUser = (props: any) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    departure: "",
    arrival: "",
    createdAt: "",
  });
  const handleChange = (name: string, value: string | number) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async () => {
    if (user.name === "" || user.departure === "" || user.arrival === "")
      alert("Please refill a empty fields");
    else {
      console.log(user);
      try {
        await firebase.db.collection("users").add({
          name: user.name,
          email: user.departure,
          phone: user.arrival,
        });
        alert("Saved");
        props.navigation.navigate("TravelList");
        setUser({ name: "", departure: "", arrival: "", createdAt: "" });
      } catch (e) {
        console.log(e);
        alert("Error");
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
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
        <Button title="Save" onPress={() => handleSubmit()} />
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
});

export default CreateUser;
