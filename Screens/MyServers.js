import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native'

//storage functions
import { saveData, readData, readActiveData, saveAcitveData } from '../States/ServerState'

//functionality functions
import { sendMessage } from '../Functionality/chatManager'

//style sheet
import styles from './MyServersStyle';


export default function MyServers(props) {

    //the default server
    const testServer = { name: "Test", URL: "https://discordapp.com/api/webhooks/748385870956200057/SGKDX_0m5_YSoqKlyLSl6cuhQK27P9Og-0rB7B0pCDg6aKR3_m5r9dBjQvus3xwoocvb" };

    //local states
    const [serverName, setServerName] = useState('')
    const [serverUrl, setServerUrl] = useState('')
    const [servers, setServers] = useState([])
    const [activeServer, setActiveServer] = useState(testServer.name)
    const [activeServerURL, setActiveServerURL] = useState(testServer.URL)
    
    return (
        < View style={styles.veiw}>
            <View >
                <Text style={styles.title} >My Servers</Text>
            </View>
            <View >
                <TextInput
                    value={serverName}
                    style={styles.input}
                    placeholder="Server Name"
                    onChangeText={(text) => setServerName(text)}
                />
                <TextInput
                    value={serverUrl}
                    removedClippedSubviews={false}
                    selectTextOnFocus={true}
                    style={styles.input}
                    placeholder="Server URL (webHook)"
                    onChangeText={(text) => setServerUrl(text)}
                />
                <Text style={styles.info} >Active Server: {activeServer}</Text>
                <Text style={styles.info} >Servers: {servers.length}</Text>

                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //use JSON to make a shallow clone
                        let newServers = JSON.parse(JSON.stringify(servers));
                        //push the new server with the inactive color
                        newServers.push({ name: serverName, URL: serverUrl, color: '#92949c' });
                        //set then save the new list of servers
                        setServers(newServers);
                        saveData(newServers);
                        //debugging tool
                        //readData().then(result => console.log(result));
                        //clear input feilds
                        setServerName('');
                        setServerUrl('');
                    }
                    }
                ><Text>Add Server</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //set and save server list as empty
                        setServers([]);
                        saveData(servers)
                    }
                    }
                ><Text>clear Servers</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //set active server to the default
                        setActiveServer(testServer.name);
                        saveAcitveData(testServer);
                        //debugging tool
                        //sendMessage("joined server", activeServerURL, "Bot Manager", "");
                    }
                    }
                ><Text>Reset to default server</Text>
                </TouchableOpacity>

                <FlatList
                    keyExtractor={(item) => item.name}
                    data={servers}
                    extraData={activeServer}
                    renderItem={({ item }) => (
                        //sets background color of item to that of its active color
                        <Text style={[styles.item, { backgroundColor: item.color }]} onLongPress={() => {
                            //on long press make a shallow clone of your servers using JSON, serach for the item in the list, remove it, then set and save the new list
                            let newServers = JSON.parse(JSON.stringify(servers));
                            for (let i = 0; i < newServers.length; i++) {
                                if (newServers[i].name == item.name) {
                                    newServers.splice(i, 1);
                                }
                            }
                            setServers(newServers);
                            saveData(newServers);
                            //debugging tool
                            //readData().then(result => console.log(result));
                        }} onPress={() => {
                            //on press set the server t be active and stre the new active server in storage
                            setActiveServer(item.name);
                            setActiveServerURL(item.URL);
                            saveAcitveData(item);
                            let newServers = JSON.parse(JSON.stringify(servers));
                            for (let i = 0; i < newServers.length; i++) {
                                //sets server active color to active
                                newServers[i].color = (newServers[i].name == item.name) ? '#788eec' : '#92949c';                                
                            }
                            setServers(newServers);
                            saveData(newServers);
                        }}>{item.name}</Text>
                    )}
                />

        </View>
        </View >
    )

    //on load set yur servers and active server frim local storage
    useEffect(() => {
        readData().then(result => setServers(result));
        readActiveData().then(result => setActiveServer(result));
    }, [])
}

