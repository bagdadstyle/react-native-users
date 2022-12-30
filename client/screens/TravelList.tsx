import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../database/firebase";
import { IUser } from "../Interfaces/IUser";
import { getAllTravels } from "../services/database/travels/dbTravels";

const UserList = (props: any) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getAllTravels();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setRefreshing(false);
      Alert.alert("Ups", "Deslize hacía abajo para actualizar");
    }
  };
  const refreshScreen = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    // firebase.db.collection("users").onSnapshot((querySnapshot) => {
    //   const users: IUser[] = [];
    //   querySnapshot.docs.forEach((doc) => {
    //     const { name, email, phone } = doc.data();
    //     users.push({
    //       id: doc.id,
    //       name,
    //       email,
    //       phone,
    //     });
    //   });
    //   setUsers(users);
    //   setLoading(false);
    // });
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
      <View style={styles.views}>
        <Button
          title="Agregar viaje"
          onPress={() => props.navigation.navigate("CreateUserScreen")}
        />
      </View>

      {users.map((e, i) => {
        console.log(e);
        return (
          <ListItem
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}
            key={i}
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
  views: {
    // marginTop: 5,
    marginBottom: 8,
  },
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
