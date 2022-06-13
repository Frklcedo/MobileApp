import react, {useState} from "react";
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native"; 
import { Input, Text, Button, Image } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from "../src/image/Logo.png"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/Connection";

export default function Login( {navigation} ){
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then(cred => {
      navigation.navigate('Chat');
    }).catch(err => {
      // styles.input.borderColor = '#ff0000';
    })
  };
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          source={logo} style={styles.logo}
        />
      </View>

      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={ email => { setEmail(email) }}
        />

        <TextInput style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={ password => { setPassword(password)}} 
        secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => {login()}}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={() => {navigation.navigate('Registro')}}>
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
    justifyContent:'center',
    margin: 20, 
    maxHeight:140,
    margin: 10
  },

  logo: {
    display: 'block',
    height: 84+42,
    width: 192+192/2,
    margin: 0
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