import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native'

//import storage functions
import { saveData, readData } from '../States/CommandState'
import { readActiveData } from '../States/ServerState'
import { readActiveImageData } from '../States/ImageState'

//import functionality functions
import { sendMessage } from '../Functionality/chatManager'

//import style sheet
import styles from './MyCommandsStyle';


export default function MyCommands(props) {

    //local states
    const [prefix, setPrefix] = useState('')
    const [response, setResponse] = useState('')
    const [commands, setCommands] = useState([])

    return (
        < View style={styles.veiw}>
            <View >
                <Text style={styles.title} >My Commands</Text>
            </View>
            <View >
                <TextInput
                    value={prefix}
                    style={styles.input}
                    placeholder="Commands Prefix"
                    onChangeText={(text) => setPrefix(text)}
                />
                <TextInput
                    value={response}
                    style={styles.input}
                    placeholder="Response"
                    onChangeText={(text) => setResponse(text)}
                />

                <Text style={styles.info} >Commands: {commands.length}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //uses JSON to shallow clone your list of commands
                        let newCommands = JSON.parse(JSON.stringify(commands));
                        //pushes your new command onto the list
                        newCommands.push({ prefix: prefix, response: response });
                        //re-sets your commands then saves to local storage
                        setCommands(newCommands);
                        saveData(newCommands);
                        //debuging tool
                        //readData().then(result => console.log(result));
                        //send message to server fr bot to process
                        readActiveImageData().then(imageResult => readActiveData().then(result => sendMessage("created command " + prefix + " : " + response, result.URL, "Chat Manager", imageResult.URL)));
                        //clears input feilds
                        setPrefix('');
                        setResponse('');
                    }
                    }
                ><Text>Add Command</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //clears your list of commands then saves the empty list
                        setCommands([]);
                        saveData(commands);
                        //sends clearing message to server for bot to process
                        readActiveImageData().then(imageResult => readActiveData().then(result => sendMessage("clear_ALL", result.URL, "Chat Manager", imageResult.URL)));

                    }
                    }
                ><Text>clear Commands</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    keyExtractor={(item) => item.prefix}
                    data={commands}
                    renderItem={({ item }) => (
                        //when a long press in made on an item it will remove it
                        <Text style={styles.item} onLongPress={() => {
                            //uses JSON to shallow clone your commands
                            let newCommands = JSON.parse(JSON.stringify(commands));
                            //looks through your commands and if it matches the prefix of this item, it will remove it and send a removel message to the server
                            for (let i = 0; i < newCommands.length; i++) {
                                if (newCommands[i].prefix == item.prefix) {
                                    newCommands.splice(i, 1);
                                    readActiveImageData().then(imageResult => readActiveData().then(result => sendMessage("deleted " + (i + 5), result.URL, "Chat Manager", imageResult.URL)));
                                }
                            }
                            //save the new commands list
                            setCommands(newCommands);
                            saveData(newCommands);
                            //debuging tool
                            //readData().then(result => console.log(result));
                        }}>{item.prefix} : {item.response}</Text>
                    )}
                />
            </View>

        </View>
    )




    useEffect(() => {
        //on load, set the list of commands to that from local storage
        readData().then(result => setCommands(result));
        
    }, [])
}
