import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import firebase from "../database/firebase"

const UserList = () => {

  const [user, setUsers] = useState([])
  useEffect(() =>{
      firebase.db.collection("users").onSnapshot(querySnapshot =>{
        querySnapshot.docs.forEach(doc =>{
          console.log(doc.data())
        })
      })
  },[])
  return (
    <View>
      <Text>UserList</Text>
    </View>
  );
};

export default UserList;
