import react from "react";
import { StyleSheet, View } from "react-native"; 
import { Input, Text, Button } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native-web";

export default function Index( {navigation} ){
    
    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <View style={styles.chats}></View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
});