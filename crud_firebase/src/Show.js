import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Fire'


export default function Show() {
  //[nome da constante, função] 
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  //Função que pega os valores setados e passa para o firebase
  function pushFire(){
    try {
      firebase.database.ref('/crud').push({
        name: name,
        age: age
      })
    } catch (error) {
      alert(error);
    }
    finally{
      setName('');
      setAge('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} onChangeText={name => setName(name)} value={name}
      placeholder="your name!" />
          
      <TextInput style={styles.textInput} onChangeText={age => setAge(age)} value={age}
       placeholder="Your age!" />
      
      <TouchableOpacity style={styles.btnEnviar} onPress={pushFire}>
          <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>
      <Text style={{color: 'white'}}>{name}</Text>
      <Text style={{color: 'white'}}>{age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white'
  },
  textInput:{
      backgroundColor: 'white',
      borderRadius: 10,
      width:300,
      height: 50, 
      marginTop: 5,
      textAlign: 'center'  
  },
  btnEnviar:{
      borderColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      margin: 10,
      width: 150,
      height: 50,
      textAlign: 'center', 
      justifyContent: 'center' 
  }
});
