
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

const completeTask=(index) =>{
  let itemCopy= [...taskItems];
  itemCopy.splice(index,1);
  setTaskItems(itemCopy);
}

  return (
    <View style={styles.container}>


      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today Task </Text>
        <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Task text={item} />
              </TouchableOpacity>
            )
            
            
          })
        }
        {/* <Task text=" text 1"/>
        <Task text=" text 2" /> */}
      </View>
      </View>
      {/* keyboard */}
      <KeyboardAvoidingView style={styles.writeTaskWrapper} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TextInput style={styles.input} placeholder={'Write a Task'} onChangeText={text => setTask(text)} value={task} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight:'bold'
    
  },
  items: {
    marginTop: 30,
    fontSize:20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0'
  },
  addText: {


  },
});
