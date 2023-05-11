import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function DefaultScreen({ route }) {
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        if (route.params) {
            setPosts((prevState) => [...prevState, route.params]);
        }
        
    }, [route.params])


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
               <FlatList
                    data={posts}
                    keyExtractor={(item, indx) => indx.toString()}
                    renderItem={({ item }) => (
                    <View style={styles.card}>
                    <View style={styles.cardImageWrap}>
                        <Image source={{ uri: item.photo }} style={styles.cardImage} />
                    </View>
                    <View style={styles.cardTextwrap}>
                        <Text style={styles.cardText}>Forrest</Text>
                    </View>
                    <View style={styles.cardInner}>
                        <View style={styles.cardWrapper}>
                        <Ionicons
                            name="chatbubble"
                            size={24}
                            color="#FF6C00"
                            onPress={() => navigation.navigate('Comments')}
                        />
                        <Text style={styles.cardNumber}>8</Text>
                        </View>
                        <View style={styles.cardWrapper}>
                            <AntDesign name="like2" size={24} color="#FF6C00" />
                            <Text style={styles.cardNumber}>153</Text>
                        </View>
                        <View style={styles.cardWrapperMap}>
                            <SimpleLineIcons
                                name="location-pin"
                                size={24}
                                color="black"
                            />
                        <Text
                            style={styles.cardLink}
                            onPress={() => navigation.navigate('Map')}
                        >
                            Ukraine
                        </Text>
                        </View>
                    </View>
                    </View>
                    )}
                />

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
    },
    card: {
        flex: 1,
    },
    cardImage: {
        width: 300,
        height: 200,
    },
    cardImageWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        marginTop: 8,
        marginStart: 16,
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.01,
        textAlign: 'start',
        fontFamily: 'Roboto-Medium',
    },
    cardInner: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginRight: 24,
        marginStart: 16,
        justifyContent: 'flex-start',
    },
    cardWrapperMap: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        marginLeft: 90,
        marginRight: 16,
        marginStart: 16,
    },
    cardNumber: {
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.01,
        fontFamily: 'Roboto-Medium',
    },
    cardLink: {
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.01,
        fontFamily: 'Roboto-Medium',
    }
})