import {useState} from "react"
import { StyleSheet, Text, View, TextInput, Button, FlatList, Pressable } from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editingId, setEditingId] = useState()
  const [editingText, setEditingText] = useState()

  const startEditing = (id, name) => {
    setEditingId(id);
    setEditingText(name)
  };

  const saveEdit = (id) => {
    setList(list.map((g) => (g.id ? {...g, name: editingText} : g)));
    setEditingId(null);
    setEditingText("");
  }

  const addTask = () => {
    if (task.trim().length === 0) return;
    setList([...list, { id: Date.now().toString(), name: item}]);
    setTask("");
  }

  const removeTask = (id) => {
    setList(list)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.taskInput}>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          value={task}
          onChangeText={setTask}
        />
        <Button
          title="Add Task" onPress={addTask}
        />
      </View>
      <FlatList data={list} keyExtractor={(g) => g.id} renderTask={({item}) => {
        return (
          <View style={styles.task}>
            {editingId === task.id ? (
              <TextInput
                style={styles.TextInput}
                value={editingText}
                onChangeText={setEditingText}
                onSubmitEditing={() => saveEditing(task.id)}
                autoFocus
              />
            ):(
            )}
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
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 35,
    // alignItems: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  taskInput: {
    flexDirection: "row",
    marginBottom: 15,
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
});
