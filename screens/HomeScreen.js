import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={{
          borderRadius: 10,
          width: "60%",
          backgroundColor: "red",
          padding: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
