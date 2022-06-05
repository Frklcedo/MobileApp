import react from "react";
import { StyleSheet, View } from "react-native"; 
import { Input, Text, Button } from "react-native-elements";

export default function Index( {navigation} ){
    
    return (
        <View style={styles.container}>
            <Text>
                algo
            </Text>
        </View>
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