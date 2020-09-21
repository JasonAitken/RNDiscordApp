import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
//storage functions
import { readData } from '../States/ServerState'
import { sendMessage } from '../Functionality/chatManager'

//style sheet
import styles from './SendVoiceMessageStyle';

export default function SendVoiceMessage(props) {

    //local states
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [channelId, setChannelId] = useState('')
    const [server, setServer] = useState('')
    const [servers, setServers] = useState([])

    return (
        < View style={styles.veiw}>
            <Text style={styles.title} >Send Message</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="YouTube link"
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Image"
                    value={image}
                    onChangeText={(text) => setImage(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Voice Channel ID"
                    value={channelId}
                    onChangeText={(text) => setChannelId(text)}
                />
                <DropDownPicker
                    //on open read the list of servers frm storage and set sever list to a labled version
                    onOpen={() => { readData().then(result => setServers(labelServers(result))); }}
                    items={servers}
                    defaultValue={server}
                    containerStyle={{ height: 40, marginBottom: 0 }}
                    style={styles.drop}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={styles.dropDown}
                    onChangeItem={item => setServer(item.value)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //send the message using the set states
                        sendMessage("voice_play " + message + " " + channelId, server, name, image)
                    }
                    }
                ><Text>Send Message</Text>
                </TouchableOpacity>

            </View>
        </View >


    )

    //make the list of servers usable by the drop down by changing feild names to lable and value
    function labelServers(serversPre) {
        for (let i = 0; i < serversPre.length; i++) {
            serversPre[i] = { label: serversPre[i].name, value: serversPre[i].URL };
        }
        return serversPre;
    }

    //on load set the servers to that of local storage
    useEffect(() => {
        readData().then(result => setServers(result));
    }, [])
}