import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Index from './components/Index';
import Registro from "./components/Registro";
import fb, { db, auth } from './src/Connection';
import { signOut } from 'firebase/auth';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Index" component={Index} />
    </Stack.Navigator>
  );
}


export default function App() {
  
  const authResign = () => {
    if(auth.currentUser){
      signOut(auth).then(() => {
        console.log("User signed out");
      }).catch(err => {
        console.log("could not sign out user")
      });
    }
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
