import react, {useState} from "react";
import { StyleSheet, View } from "react-native"; 
import { Input, Text, Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login( {navigation} ){
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Input style={styles.input} placeholder="Login" onChangeText={value=>setLogin(value)} />
                <Input style={styles.input} placeholder="Senha" onChangeText={value=>setPassword(value)} secureTextEntry={true} />
                <Button style={{margin: 20}} title="Login" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    innercontainer:{
        backgroundColor: '#fff',
        padding: 50,
        maxWidth: 600,
    },
    input:{
        borderBottom: 'solid 1px #46d',
        padding: 10,
        margin: 5,

    }
})