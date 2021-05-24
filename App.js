import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  const submitHandler = (text) => {
    if (text.length > 5) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: text, key: Math.random().toString() },
      ]);
    } else {
      Alert.alert("Hi", "Todos must be over 5 characters long", [
        {
          text: "understood",
          onPress: () => console.log("Alert Press"),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <Text style={styles.desc}>Copyright 2k21 | Manikangkan Das</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  desc: {
    color: "#ddd",
    textAlign: "center",
    marginBottom: 10,
  },

  list: {
    flex: 1,
  },
});
