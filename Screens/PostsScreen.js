import { useFonts } from 'expo-font'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'

export default function PostsScreen() {
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
            <View style={styles.user}>
                <Image
                    style={styles.avatarUser}
                    source={require('../assets/images/User.png')}
                />
                <View style={styles.userData}>
                    <Text style={styles.nameUser}>Natali Romanova</Text>
                    <Text style={styles.emailUser}>email@example.com</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    user: {
        marginLeft: 16,
        marginTop: 32,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    avatarUser: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    userData: {
        flex: 1,
        justifyContent: 'center',
    },
    nameUser: {
        fontFamily: 'RobotoMedium',
        fontSize: 13,
        lineHeight: 15,
        color: '#212121',
    },
    iconLogout: {
        position: 'absolute',
        right: 50,
        top: 25,
    },
    emailUser: {
        fontFamily: 'RobotoRegular',
        fontSize: 11,
        lineHeight: 13,
        display: 'flex',
        alignItems: 'center',
        color: '#212121',
    }
})