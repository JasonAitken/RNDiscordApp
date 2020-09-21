import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_images'
const ACTIVESTORAGE_KEY = '@save_active_image'

//locally store your list of images
export const saveData = async (images) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(images))
    } catch (e) {
        alert('Failed to save the data to the storage' + e)
    }
}

//read your images from local storage
export async function readData() {
    try {
        const images = await AsyncStorage.getItem(STORAGE_KEY)

        if (images !== null) {
            return (JSON.parse(images));
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
        alert('All Images Cleared!')
    } catch (e) {
        alert('Failed to clear the async storage.')
    }
}

//save the image you have active locally
export const saveAcitveImageData = async (activeImage) => {
    try {
        await AsyncStorage.setItem(ACTIVESTORAGE_KEY, JSON.stringify(activeImage))
    } catch (e) {
        alert('Failed to save the data to the storage' + e)
    }
}

//read your active image from local storage
export async function readActiveImageData() {
    try {
        const activeImage = await AsyncStorage.getItem(ACTIVESTORAGE_KEY)

        if (activeImage !== null) {
            return (JSON.parse(activeImage));
        }
    } catch (e) {
        alert('Failed to fetch the data from storage' + e)
    }
    return
}