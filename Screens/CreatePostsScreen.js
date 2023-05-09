import { Entypo, Ionicons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { StyleSheet, Text, TextInput, View } from 'react-native'


export default function CreatePostsScreen() {
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
                    <View style={styles.avatarImage}>
                        <View style={styles.avatarCamera}>
                            <Entypo name="camera" size={24} color="#BDBDBD" />
                        </View>
                    </View>
                    <Text style={styles.textPhoto}>Upload photo</Text>
                </View>
                <View style={styles.avatarForm}>  
                    <TextInput
                        style={styles.input}
                        placeholder='title'
                    />
                    <View style={styles.location}>
                        <View style={styles.locationIcon}>
                            <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='location'                            
                        />  
                    </View>                                      
                </View>
                <View style={styles.button}>  
                    <Text style={styles.publish}>Publish</Text>
                </View>
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
        backgroundColor: '#FFFFFF',
        width: 60,
        height: 60,
        top: 90,
        left: 142,
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