import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editingId, setEditingId] = useState();
  const [editingText, setEditingText] = useState();

  const startEditing = (id, name) => {
    setEditingId(id);
    setEditingText(name);
  };

  const saveEdit = (id) => {
    setList(list.map((g) => (g.id === id ? { ...g, name: editingText } : g)));
    setEditingId(null);
    setEditingText("");
  };

  const addTask = () => {
    if (task.trim().length === 0) return;
    setList([...list, { id: Date.now().toString(), name: task }]);
    setTask("");
  };

  const removeTask = (id) => {
    setList(list.filter((g) => g.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.taskInput}>
        <TextInput
          style={styles.input}
          placeholder="Add task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add task" onPress={addTask} />
      </View>
      <FlatList
        data={list}
        keyExtractor={(g) => g.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.task}>
              {editingId === item.id ? (
                <TextInput
                  style={styles.TextInput}
                  value={editingText}
                  onChangeText={setEditingText}
                  onSubmitEditing={() => saveEdit(item.id)}
                  autoFocus
                />
              ) : (
                <Text style={styles.taskText}>{item.name}</Text>
              )}
              <View style={{ flexDirection: "row" }}>
                {editingId === item.id ? (
                  <Pressable onPress={() => saveEdit(item.id)}>
                    <MaterialIcons name="save" size={24} style={styles.save} />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => startEditing(item.id)}>
                    <MaterialIcons
                      name="edit-square"
                      size={20}
                      style={styles.edit}
                    />
                  </Pressable>
                )}
                <Pressable onPress={() => removeTask(item.id)}>
                  <MaterialIcons
                    name="delete"
                    size={24}
                    style={styles.deleteButton}
                  />
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6db7e9ff",
    padding: 20,
    paddingTop: 35,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
  },

  taskInput: {
    flexDirection: "row",
    marginBottom: 15,
    height: 45,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },

  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },

  taskItem: {
    fontSize: 20,
  },

  deleteButton: {
    fontSize: 25,
    color: "#a4bdd0ff",
  },

  edit: {
    marginRight: 20,
    fontSize: 25,
    color: "#2ea8f3ff",
  },

  save: {
    marginRight: 20,
    fontSize: 25,
    color: "green",
  },
});
