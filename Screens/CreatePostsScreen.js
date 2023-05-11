import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
import { Camera } from 'expo-camera'
import { useFonts } from 'expo-font'
import { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Location from "expo-location"

const initialState = {
    name: '',
    place: '',
}

export default function CreatePostsScreen({ navigation }) {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('');
    const [state, setState] = useState(initialState);


    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        const location = await Location.getCurrentPositionAsync();
        console.log('latitude', location.coords.latitude);
        console.log('longitude', location.coords.longitude);
        setPhoto(photo.uri);
    }

    const sendPhoto = () => {
        navigation.navigate('Default', { photo, location, state });
        setState(initialState);
        setPhoto('');
    }

    const [fontsLoaded] = useFonts({
    RobotoBold: require('../assets/fonts/RobotoBold.ttf'),
    RobotoMedium: require('../assets/fonts/RobotoMedium.ttf'),
    RobotoRegular: require('../assets/fonts/RobotoRegular.ttf'),
    })

    if (!fontsLoaded) {
        return null
    }

    return (
       <View style={styles.container}>  
            <View style={styles.avatar}>     
                <View style={styles.avatarBox}>
                    <Camera style={styles.camera} ref={setCamera}> 
                      {photo && (
                        <View style={styles.avatarImage} >
                            <Image source={{ uri: photo }} style={styles.avatarCamera} />
                        </View>
                      )}
                        <TouchableOpacity style={styles.snapCamera} onPress={takePhoto}>
                            <Feather name="camera" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    </Camera>
                    <Text style={styles.textPhoto}>Upload photo</Text>
                </View>
                <View style={styles.avatarForm}>  
                    <TextInput
                        style={styles.input}
                        placeholder='title'
                        value={state.name}
                        onChangeText={(value) =>
                            setState((prevState) => ({ ...prevState, name: value }))
                        }
                    />
                    <View style={styles.location}>
                        <View style={styles.locationIcon}>
                            <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='place'
                            value={state.place}
                            onChangeText={(value) =>
                                setState((prevState) => ({ ...prevState, place: value }))
                            }
                        />  
                    </View>                                      
                </View>
                <TouchableOpacity style={styles.button} onPress={sendPhoto}>  
                        <Text style={styles.publish}>Publish</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 343,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        marginHorizontal: 16,
    },
    camera: {
        height: 300,
        marginHorizontal: 12,
        alignItems: 'center',
    },
    avatarBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center',
    },
    avatarImage: {
        width: 343,
        height: 240,
        backgroundColor: '#F6F6F6',
        border: '1 solid #E8E8E8',
    },
    avatarCamera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'transparent',
        width: 60,
        height: 120,
        top: 90,
        left: 142
    },
    snapCamera: {
        width: 60,
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPhoto: {
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    avatarForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },   
    input: {
        paddingHorizontal: 16,
        width: 343,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
    },
    publish: {
        color: '#BDBDBD',
        fontSize: 16,
        lineHeight: 19,
    },
    button: {
        width: 340,
        height: 50,
        backgroundColor: '#F6F6F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})