import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_login'

//locally store login data                             (currently unused)
export const saveLoginData = async (login) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(login))
    } catch (e) {
        alert('Failed to save the data to the storage' + e)
    }
}

//get login data from local storage                    (currently unused)
export async function readLoginData() {
    try {
        const login = await AsyncStorage.getItem(STORAGE_KEY)

        if (servers !== null) {
            return (JSON.parse(login));
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

