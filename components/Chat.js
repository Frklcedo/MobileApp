import { addDoc, collection, onSnapshot, orderBy, query, where, serverTimestamp } from "firebase/firestore";
import react, { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity} from "react-native"; 
import { Input, Text, Button } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { auth, db } from "../src/Connection";

export default function Chat( {navigation} ){
    
    const colRef = collection(db, 'chats');
    const [chatRoom, setChatRoom] = useState('geral');
    const [messages, setMessages] = useState();
    const [currentMessage, setCurrentMessage] = useState();

    useEffect(() => {
        if (messages != null){
            setMessages();
        }
        const q = query(colRef, where('sala', '==', chatRoom), orderBy('createdAt'));
        onSnapshot(q, snapshot => {
            let mensagens = [];
            snapshot.docs.forEach(doc => {
                console.log(doc.data())
                mensagens.push(doc.data())
            })
            setMessages(mensagens);
        })
    }, [chatRoom]);

    const showMessages = () => {
        if(messages != null){
            return messages.map(corpoMensagem => {
                if (corpoMensagem.username == auth.currentUser.displayName){
                    return (
                        <View>
                            <Text style={styles.messagebodyme} key={corpoMensagem}>{corpoMensagem.mensagem}</Text>
                            <Text style={styles.messageuserme}> {corpoMensagem.username}</Text>
                            <Text style={styles.messageuserme}> {corpoMensagem.createdAt}</Text>
                        </View>                        
                );
                }
                return (
                    <View>
                        <Text style={styles.messagebody} key={corpoMensagem}>{corpoMensagem.mensagem}</Text>
                        <Text style={styles.messageuser}> {corpoMensagem.username}</Text>
                        <Text style={styles.messageuser}> {corpoMensagem.createdAt}</Text>
                    </View>
                );
            })
        }
        else{
            return (
                <View></View>
            );
        }
        
    }
    const enviarMensagem = () => {
        if(chatRoom != null && chatRoom != '' && currentMessage != null && currentMessage != ''){
            addDoc(colRef, {
                mensagem: currentMessage,
                sala: chatRoom,
                username: auth.currentUser.displayName,
                createdAt: serverTimestamp()
            });
        }
    }

    return (
        <KeyboardAvoidingView style={styles.containerFluid}>
            <View style={styles.container}>
                <View>
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
                    <Text style={{textAlign:'center', margin: 20}}>{chatRoom}</Text>
                </View>
                <View style={styles.messageBoard}>
                    {showMessages()}
                </View>
                <View style={styles.sendMessage}>
                    <TextInput placeholder="Digite aqui sua mensagem..." onChangeText={(text) => setCurrentMessage(text)} style={styles.currentMessage}></TextInput>
                    <TouchableOpacity style={styles.enviarBtn} onPress={() => {enviarMensagem()}}>
                        <Text style={styles.enviarTexto}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    containerFluid:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff'
    },
    container:{
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        height: '100%',
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
        margin: 10,
        width: '100%'
    },
    messageBoard: {
        width: '100%',
        height: '80%',
        padding: 15,
        flex: 1,
        gap: 5,
        flexDirection: 'column'
    },
    chatBtn: {
        backgroundColor:'#35AAFF',
        height: 40,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    chatBtnText: {
        color: '#fff',
    },
    sendMessage: {
        alignSelf: 'flex-end',
        flex: 1,
        flexDirection: "row",
        gap: 5,
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        width: '100%',
        padding: 10
    },
    currentMessage: {
        flexGrow: 7,
        borderRadius: 7,
        backgroundColor: "#ddd",
        textAlign: 'center',
        padding: 5,
        height: 40
    },
    enviarBtn: {
        flexGrow: 3,
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
    enviarTexto: {
        color: "#fff"
    },
    messagebodyme:{
        textAlign: 'right',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#4BCC37',
        color: '#fff',
        borderRadius: 7
    },
    messagebody:{
        textAlign: 'left',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'lightgrey',
        color: '#fff',
        borderRadius: 7
    },
    messageuserme: {
        textAlign: 'right'
    },
    messageuser: {
        textAlign: 'left'
    }
});