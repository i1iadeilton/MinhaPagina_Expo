import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withOrientation } from 'react-navigation';


export default function Show() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Your name! "/>
      <TextInput style={styles.textInput} placeholder="Your age! "/>
      
      <TouchableOpacity style={styles.btnEnviar}>
          <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>
      
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
