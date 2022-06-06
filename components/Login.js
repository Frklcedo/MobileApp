import react, {useState} from "react";
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native"; 
import { Input, Text, Button, Image } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login( {navigation} ){
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../src/image/Logo.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

      <TextInput style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },

  containerLogo:{
    flex:1,
    justifyContent:'center'
  },

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 100
  },

  input:{
    backgroundColor: 'lightgray',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize:17,
    borderRadius:7,
    borderStyle: 'solid',
    borderColor: '#191919',
    padding: 8
  },

  btnSubmit:{
    backgroundColor:'#35AAFF',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  submitText:{
    color:'#FFF',
    fontSize: 18
  },

  btnRegister:{
    marginTop: 15
  },

  registerText:{
    color: '#191919'
  }

});