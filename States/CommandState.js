import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_commands'

//locally save your list of commands
export const saveData = async (commands) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(commands))
    } catch (e) {
        alert('Failed to save the data to the storage' + e)
    }
}

//read the list of commands frm local storage 
export async function readData() {
    try {
        const commands = await AsyncStorage.getItem(STORAGE_KEY)

        if (commands !== null) {
            return (JSON.parse(commands));
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
        alert('All Commands Cleared!')
    } catch (e) {
        alert('Failed to clear the async storage.')
    }
}