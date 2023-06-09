import { Feather, Ionicons } from '@expo/vector-icons'
import { Camera } from 'expo-camera'
import { useEffect, useState, useRef } from 'react'
import { Animated, Image, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Location from "expo-location"
import * as MediaLibrary from 'expo-media-library'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebase/config';
import { selectName, selectUserId } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';


const initialState = {
    name: '',
    location: '',
    photo: null,
    coordinate: null,
};


export default function CreatePostsScreen() {
    const [camera, setCamera] = useState(null);
    const [state, setState] = useState(initialState);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [errorMsg, setErrorMsg] = useState(null);
    const userId = useSelector(selectUserId);
    const userName = useSelector(selectName);


    useEffect(() => {
        ;(async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            await MediaLibrary.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }
        })()
    }, [])

    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        const location = await Location.getCurrentPositionAsync({});
        const coords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        }
        setState((prevState) => ({
            ...prevState,
            photo: photo.uri,
            coordinate: coords,
        }))
        await MediaLibrary.createAssetAsync(photo.uri);
    }

    const uploadPostToServer = async () => {
        try {
            const photoUrl = await uploadPhotoToServer()
            const uploadedInfo = {
                displayName: userName,
                photo: photoUrl,
                name: state.name,
                location: state.location,
                coordinate: state.coordinate,
                userId,
                likes: [],
                comments: 0,
            }
            await addDoc(collection(db, 'posts'), uploadedInfo)
            Keyboard.dismiss()
            setState(initialState)
            setIsKeyboardShown(false)
            navigation.navigate('Posts')
        } catch (error) {
            console.log(error)
        }
    }

    const uploadPhotoToServer = async () => {
        try {
            const response = await fetch(state.photo)
            const file = await response.blob()
            const uniquePostId = Date.now().toString()
            const linkToFile = ref(storage, `imgPost/${uniquePostId}`)
            await uploadBytes(linkToFile, file)
            const photoUrl = await getDownloadURL(
                ref(storage, `imgPost/${uniquePostId}`),
            )
            return photoUrl
        } catch (error) {
            console.log(error)
        }
    }

    const openCamera = async () => {
        setState((prevState) => ({ ...prevState, photo: null }))
        setCamera(camera)
        setIsKeyboardShown(false)
    }

    function checkCamera() {
        setCameraType(
        cameraType === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back,
        )
    }

    return (
       <View style={styles.container}>  
            <View style={styles.wrapAvatar}>     
                    {state.photo ? (
                        <View style={styles.wrapAvatarBox}>
                            <Image source={{ uri: state.photo }} style={styles.photo} />
                            <TouchableOpacity style={styles.wrapAvatarCamera} onPress={openCamera}>
                                <Feather name="camera" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.wrapAvatarFoto}>
                            <Camera style={styles.camera} ref={setCamera} type={cameraType}>
                                <TouchableOpacity >
                                    <Feather
                                        name="camera"
                                        size={50}
                                        color="#FFFFFF"
                                        style={styles.icon}
                                        onPress={takePhoto} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.checkCamera}
                                    onPress={checkCamera}
                                >
                                    <Ionicons
                                    name="ios-camera-reverse-outline"
                                    size={24}
                                    color="#BDBDBD"
                                    />
                                </TouchableOpacity>
                            </Camera>
                        </View>
                    )}
                <Text style={styles.paragraf} onPress={uploadPhotoToServer}>Upload photo</Text>

                <View style={styles.wrapAvatarForm}>  
                    <TextInput
                        style={styles.input}
                        placeholder='title'
                        value={state.name}
                        onChangeText={value => setState(prevState => ({ ...prevState, name: value }))}
                    />
                    <View style={styles.wrapLocation}>
                        <View style={styles.wrapLocationIcon}>
                            <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                        </View>
                        <TextInput
                        style={styles.inputLocation}
                        placeholder='place'                            
                        value={state.location}
                        onChangeText={value => setState(prevState => ({ ...prevState, location: value }))}
                    />  
                    </View>                                      
                </View>
                <TouchableOpacity style={styles.button}>  
                    <Text style={styles.paragraf} onPress={uploadPostToServer}>publish</Text>
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
    wrapAvatar: {
        width: 345,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        marginHorizontal: 16,
        marginTop: 32,
    },
    wrapAvatarBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    camera: {
        flex: 1,
        width: 340,
        alignItems: 'center',
    },
    checkCamera: {
        position: 'absolute',
        top: 10,
        right: 10,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: 'transparent',
    },
    wrapAvatarFoto: {
        width: 345,
        height: 300,
        backgroundColor: '#F6F6F6',
        border: '1 solid #E8E8E8',
    },
    wrapAvatarCamera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: 60,
        height: 60,
        top: 90,
        left: 140,
    },
    paragraf: {
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    wrapAvatarForm: {
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
    wrapLocation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    wrapLocationIcon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    inputLocation: {
        position: 'relative',
        width: '100%',
        height: 40,
        paddingLeft: 34,
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 19,
    },
    button: {
        width: 343,
        height: 51,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 120,
    }
})