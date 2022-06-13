import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import react, { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity} from "react-native"; 
import { Input, Text, Button } from "react-native-elements";
import { auth, db } from "../src/Connection";

export default function Index( {navigation} ){
    
    const colRef = collection(db, 'chats');
    const [chatRoom, setChatRoom] = useState('');
    const [messages, setMessages] = useState();
    const [snap, setSnap] = useState()

    useEffect(() => {
        const q = query(colRef, orderBy('createdAt'));
        setMessages() 
    }, [chatRoom, messages]);

    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <View style={styles.user}>
                    <Text>{auth.currentUser.displayName}</Text>
                </View>
                <View style={styles.chats}>
                    <TouchableOpacity style={styles.chatBtn} onPress={() => setChatRoom('geral')}>
                        <Text style={styles.chatBtnText}>Geral</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatBtn} onPress={() => setChatRoom('jogos')}>
                        <Text style={styles.chatBtnText}>Jogos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatBtn} onPress={() => setChatRoom('musica')}>
                        <Text style={styles.chatBtnText}>Música</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatBtn} onPress={() => setChatRoom('estudos')}>
                        <Text style={styles.chatBtnText}>Estudos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatBtn} onPress={() => setChatRoom('streams')}>
                        <Text style={styles.chatBtnText}>Streams</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#fff'
    },
    user: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 10
    },
    chats: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        gap: 5,
        maxHeight: 200,
        margin: 10
    },
    chatBtn: {
        backgroundColor:'#35AAFF',
        height: 40,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    chatBtnText: {
        color: '#fff',
    }
});