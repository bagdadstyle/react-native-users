import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../database/firebase";
import { IUser } from "../Interfaces/IUser";

const UserList = (props: any) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

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
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={[styles.loader, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
            style={styles.list}
            bottomDivider
            onPress={() =>
              props.navigation.navigate("UserDetails", {
                userId: e.id,
              })
            }
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
              <ListItem.Title>{e.name}</ListItem.Title>
              <ListItem.Subtitle>{e.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    padding: 0,
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

export default UserList;
