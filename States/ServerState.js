import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_servers'
const ACTIVESTORAGE_KEY = '@save_active'

//locally store your list of servers
export const saveData = async (servers) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(servers))
    } catch (e) {
        alert('Failed to save the data to the storage' + e)
    }
}

//read your list of servers from local storage
export async function readData() {
    try {
        const servers = await AsyncStorage.getItem(STORAGE_KEY)

        if (servers !== null) {
            return (JSON.parse(servers));
        }
    } catch (e) {
        alert('Failed to fetch the data from storage' + e)
    }
    return
}

//this clears all storage, not being used currently, but kept it in for future possible use
export const clearStorage = async () => {
    try {
        await AsyncStorage.clear()
        alert('All Servers Cleared!')
    } catch (e) {
        alert('Failed to clear the async storage.')
    }
}

//store your active server in local storage
export const saveAcitveData = async (activeServer) => {
    try {
        await AsyncStorage.setItem(ACTIVESTORAGE_KEY, JSON.stringify(activeServer))
    } catch (e) {
        alert('Failed to save the data to the storage' + e)
    }
}

//read your active server from local storage
export async function readActiveData() {
    try {
        const activeServer = await AsyncStorage.getItem(ACTIVESTORAGE_KEY)

        if (activeServer !== null) {
            return (JSON.parse(activeServer));
        }
    } catch (e) {
        alert('Failed to fetch the data from storage' + e)
    }
    return
}