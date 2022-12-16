import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../database/firebase";
import { IUser } from "../Interfaces/IUser";

const UserList = (props: any) => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users: IUser[] = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    });
  }, []);
  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => props.navigation.navigate("CreateUserScreen")}
      />

      {users.map((e) => {
        console.log(e);
        return (
          <ListItem
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}
            key={e.id}
          >
            <ListItem.Chevron
              hasTVPreferredFocus={undefined}
              tvParallaxProperties={undefined}
            >
              <ListItem.Content>
                <ListItem.Title>{e.name}</ListItem.Title>
              </ListItem.Content>
            </ListItem.Chevron>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
