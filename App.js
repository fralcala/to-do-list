import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { FlatList } from "react-native/types_generated/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.taskInput}>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          // value={task}
          // onChangeText={setItem}
        />
        <Button
          title="Add Task"
          //  onPress={addTask}
        />
      </View>
      <FlatList data={list} keyExtractor={(g) => g.id} renderTask={({item}) => {
        return (
          <View style={styles.}></View>
        )
      }} />
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
