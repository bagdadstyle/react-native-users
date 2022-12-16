import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { IUser } from "../Interfaces/IUser";

const CreateUser = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (name: string, value: string | number) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = () =>{
    console.log(user)
    setUser({name: "", email: "", phone: "" })
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
