import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (value) => {
    setText(value);
  };
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="add new todo"
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add new todo"
        color="teal"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginBottom: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  wrapper: {
    padding: 20,
  },
});
