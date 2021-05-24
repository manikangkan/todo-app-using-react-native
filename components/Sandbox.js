import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.one}>one</Text>
      <Text style={styles.two}>two</Text>
      <Text style={styles.three}>three</Text>
      <Text style={styles.four}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    // alignContent: "center",
    paddingTop: 50,
    backgroundColor: "teal",
  },
  one: {
    flex: 0.5,
    backgroundColor: "white",
    padding: 20,
    marginBottom: 5,
  },
  two: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 5,
  },
  three: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 5,
  },
  four: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 5,
  },
});
