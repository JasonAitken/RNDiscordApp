import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { saveData, clearStorage, readData } from '../States/LoginState'
import { readActiveData } from '../States/ServerState'
import { readActiveImageData } from '../States/ImageState'
import { sendMessage } from '../Functionality/chatManager'
import styles from './MyCommandsStyle';


export default function StartScreen({ navigation }) {

    const [name, setName] = useState('')

    // ...
    return (
        < View style={styles.veiw}>
            <View >
                <Text style={styles.title} >My Commands</Text>
            </View>
            <TextInput
                value={name}
                placeholder="Name"
                onChangeText={(text) => setName(text)}
            />
            <Button
                title="press me"
                onPress={() => {
                    saveData(name);
                    navigation.navigate('Commands');
                    
                }}
            />
        </View>
    )




    useEffect(() => {
        readData().then(result => setUser(result));
    }, [])
}
