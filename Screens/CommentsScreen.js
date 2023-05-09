import { Ionicons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

export default function CommentsScreen() {
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.comments}>
                    <View style={styles.commentImage}>
                        <Image
                            style={styles.comment}
                            source={require('../assets/images/ContentBlock.png')}
                        />
                    </View>
                <View style={styles.commentList}>
                    <View style={styles.commentItem}>
                        <View style={styles.commentAvatarWrap}>
                            <Image
                                source={require('../assets/images/User.png')}
                                style={styles.commentAvatar}
                            />
                        </View>
                    <View style={styles.commentTextWrap}>
                        <Text style={styles.commentText}>
                            "Really love your most recent photo. I’ve been trying to
                            capture the same thing for a few months and would love some
                            tips!"
                        </Text>
                        <Text style={styles.commentData}>09 june, 2020 | 09:14</Text>
                    </View>
                    </View>
                    <View style={styles.commentItem}>
                        <View style={styles.commentTextWrap}>
                            <Text style={styles.commentText}>
                                "Really love your most recent photo. I’ve been trying to
                                capture the same thing for a few months and would love some
                                tips!"
                            </Text>
                            <Text style={styles.commentData}>09 june, 2020 | 09:14</Text>
                        </View>
                    <View style={styles.commentAvatarWrap}>
                        <Image
                            source={require('../assets/images/User.png')}
                            style={styles.commentAvatar}
                        />
                    </View>
                    </View>
                    <View style={styles.commentItem}>
                        <View style={styles.commentAvatarWrap}>
                            <Image
                            source={require('../assets/images/User.png')}
                            style={styles.commentAvatar}
                            />
                        </View>
                    <View style={styles.commentTextWrap}>
                        <Text style={styles.commentText}>
                            "Really love your most recent photo. I’ve been trying to
                            capture the same thing for a few months and would love some
                            tips!"
                        </Text>
                        <Text style={styles.commentData}>09 june, 2020 | 09:14</Text>
                    </View>
                    </View>
                    <TextInput style={styles.input} />
                        <View style={styles.commentIonicons}>
                            <Ionicons name="md-arrow-up-circle" size={34} color="#FF6C00" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'RobotoRegular',
    },
    comments: {
        display: 'flex',
        gap: 32,
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    comment: {
        width: 343,
        height: 240,
        borderRadius: 8,
    },
    commentImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    commentList: {
        gap: 24,
    },
    commentItem: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 16,
    },
    commentAvatarWrap: {
        width: 28,
        height: 28,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commentAvatar: {
        width: 28,
        height: 28,
        borderRadius: 50,
    },
    commentTextWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderTopRightRadius: 6,
        padding: 16,
        width: 299,
        gap: 8,
    },
    commentText: {
        fontFamily: 'RobotoRegular',
        fontSize: 13,
        lineHeight: 18,
    },
    commentData: {
        fontFamily: 'RobotoRegular',
        fontSize: 10,
        lineHeight: 12,
        textAlign: 'right',
        color: '#BDBDBD',
    },
    input: {
        position: 'relative',
        height: 50,
        width: 340,
        padding: 16,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#E8E8E8',
        borderEndWidth: 1,
        backgroundColor: '#F6F6F6',
        color: '#BDBDBD',
        fontSize: 16,
        lineHeight: 19,
    },
    commentIonicons: {
        position: 'absolute',
        top: 395,
        left: 300,
        textAlign: 'center',
    }
})