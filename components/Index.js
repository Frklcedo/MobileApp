import react, { useEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity} from "react-native"; 
import { Input, Text, Button } from "react-native-elements";
import {  } from "react-native-web";

export default function Index( {navigation} ){

    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <View style={styles.chats}>
                    <TouchableOpacity style={styles.chatBtn}onPress><Text style={styles.chatBtnText}>Geral</Text></TouchableOpacity>
                </View>
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
    chats: {
        flex: 1,
        maxHeight: 200
    },
    chatBtn: {
        backgroundColor:'#35AAFF',
        height: 40,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    chatBtnText: {
        color: '#fff',
    }
});