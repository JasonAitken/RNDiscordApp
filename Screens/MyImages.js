import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'

//storage functions
import { saveData, readData, readActiveImageData, saveAcitveImageData } from '../States/ImageState'

//style sheet
import styles from './MyImagesStyle';


export default function MyImages(props) {

    //local states
    const [imageUrl, setImageUrl] = useState('')
    const [images, setImages] = useState([])
    const [activeImage, setActiveImage] = useState('')

    return (
        < View style={styles.veiw}>
            <View >
                <Text style={styles.title} >My Images</Text>
            </View>
            <View >

                <TextInput
                    value={imageUrl}
                    removedClippedSubviews={false}
                    selectTextOnFocus={true}
                    style={styles.input}
                    placeholder="Image URL (webHook)"
                    onChangeText={(text) => setImageUrl(text)}
                />

                <Text style={styles.info}>Images: {images.length}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //uses JSON to make a shallow clone of your images
                        let newImages = JSON.parse(JSON.stringify(images));
                        //adds new image to list
                        newImages.push({ URL: imageUrl });
                        //saves new image list and stores it locally
                        setImages(newImages);
                        saveData(newImages);
                        //debuging tool
                        //readData().then(result => console.log(result));
                        //clears input feild
                        setImageUrl('');
                    }
                    }
                ><Text>AddImage</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //clears image list, then saves empty list locally
                        setImages([]);
                        saveData(images);
                    }
                    }
                ><Text>Clear Images</Text>
                </TouchableOpacity>
                

                <FlatList
                    style={{ marginTop: 30 }}
                    numColumns={2}
                    keyExtractor={(item) => item.URL}
                    data={images}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                //when you press an image, it will be set as the active image
                                setActiveImage(item);
                                saveAcitveImageData(item);
                            }}
                            style={{ backgroundColor: isActiveColor(item.URL), marginLeft: 25 }}
                            onLongPress={() => {
                                //when a ng press is made, make a shallow clone using JSON, search for the item to remove, then remove it and save the new list
                                let newImages = JSON.parse(JSON.stringify(images));
                                for (let i = 0; i < newImages.length; i++) {
                                    if (newImages[i].URL == item.URL) {
                                        newImages.splice(i, 1);
                                    }
                                }
                                setImages(newImages);
                                saveData(newImages);
                                //debuging tool
                                //readData().then(result => console.log(result));
                            }}>
                            <Image 
                                style={styles.item}
                                source={{
                                    uri: item.URL,
                                }}
                               
                                />
                        </TouchableOpacity>
                    )}
                />

            </View>
        </View>
    )

    //when called will see if image is active, and set color respectivly
    function isActiveColor(URL) {
        return (URL == activeImage.URL) ? 'green' : 'white'
    };

    //on load set images list and active image form local storage
    useEffect(() => {
        readData().then(result => setImages(result));
        readActiveImageData().then(result => setActiveImage(result));
    }, [])
}
