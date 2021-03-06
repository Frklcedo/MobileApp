import react, {useState} from "react";
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native"; 
import { Input, Text, Button, Image } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from "../src/image/Logo.png"
import { createUserWithEmailAndPassword, deleteUser, updateProfile } from "firebase/auth";
import { auth } from "../src/Connection";

export default function Registro( {navigation} ){
  
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [erromessage, setErromessage] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const criarConta = () => {
    const passwordregex = /^([a-zA-Z0-9]{6,12})$/;
    console.log(password.search(passwordregex));
    if(password.search(passwordregex) >= 0){
      if(password === confirmpassword){
        createUserWithEmailAndPassword(auth, email, password).then(cred => {
          updateProfile(auth.currentUser, {
            displayName: nome
          }).then(() => {
            console.log('Usuário criado: ', auth.currentUser);
            setMessage("Usuário criado")
            setErromessage("")
            //navigation.navigate('Index');
          }).catch(err => {
            console.log('não foi possível atribuir um nome ', err.message)
            deleteUser(auth.currentUser)
          })
        })
      } else {
        setErromessage("ERRO!\n Reveja os dados")
        setMessage("")
      }
    }else {
      setErromessage("ERRO!\n Reveja os dados")
      setMessage("")
    }
  }
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          source={logo} style={styles.logo}
        />
      </View>

      <div>
        <h4>Criar Conta</h4>
      </div>

      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
        onChangeText={(nome)=> { setNome(nome.trim())}}
        />

        <TextInput style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={(email)=> { setEmail(email.trim())}}
        />

        <TextInput style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={( senha )=> { setPassword(senha.trim())}}
        />

        <TextInput style={styles.input}
        placeholder="Confirmar Senha"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={( confirmacao )=> { setConfirmPassword(confirmacao.trim())}}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => criarConta()} >
          <Text style={styles.submitText}>Criar</Text>
        </TouchableOpacity>

        <Text style={styles.Texterr}>
          {erromessage}
        </Text>
        <Text style={styles.Usercreated}>
          {message}
        </Text>
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
    backgroundColor:'#4BCC37',
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
  },

  Texterr:{
    color: '#DC143C',
    fontSize: 20,
    fontWeight: 'bold' ,
    textAlign: 'center' 
  },
  Usercreated:{
    color: '#66CDAA',
    fontSize: 20,
    fontWeight: 'bold'
  }

});