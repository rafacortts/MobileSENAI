import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import firebase from "./src/firebaseConnection"
import { useState } from 'react';
import App from '../../App';

export default function Home({emailUsuario}){


const [usuario , setUsuario] = useState(emailUsuario)

async function deslogar(){
    await firebase.auth().signOut()
    setUsuario('')
}

if(!usuario){
    return <App/>
}

return(
    <View style={styles.container}>
        <Text style={{fontSize:25 , marginTop:20 , textAlign:'center'}}>
            Seja bem-vindo(a) , {emailUsuario}!
        </Text>
<Button
title = 'Sair'
onPress = {deslogar}
/>

    </View>
)
}

const styles = StyleSheet.create({

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:20
        
    
})

