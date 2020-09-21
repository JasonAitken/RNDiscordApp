import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {  MyCommands, MyServers, MyImages, SendMessage,  SendVoiceMessage} from './Screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firebase } from './firebase/config'
import { decode, encode } from 'base-64'
import AsyncStorage from '@react-native-community/async-storage'
import { saveData, clearStorage, readData } from './States/LoginState'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

    const [user, setUser] = useState(null)

    return (
        <NavigationContainer>

            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#788eec',
                inactiveTintColor: 'gray',
                inactiveBackgroundColor: '#42464E',
                activeBackgroundColor: '#42464E',
            }}>


                <Tab.Screen name="Commands" component={MyCommands} />
                <Tab.Screen name="Servers" component={MyServers} />
                <Tab.Screen name="Images" component={MyImages} />
                <Tab.Screen name="Send Message" component={SendMessage} />
                <Tab.Screen name="Voice" component={SendVoiceMessage} />


            </Tab.Navigator>
        </NavigationContainer>

    );


    function needName() {
        return (user == null) ? StartScreen : MyCommands;
    }
    useEffect(() => {
        readData().then(result => setUser(result));
    }, []);
}