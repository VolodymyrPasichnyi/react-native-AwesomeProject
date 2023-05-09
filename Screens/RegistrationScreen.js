import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import backgroundImage from '../assets/images/background.png'
import { useFonts } from 'expo-font'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function RegistrationScreen() {
    const navigation = useNavigation();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fontsLoaded] = useFonts({
        RobotoBold: require('../assets/fonts/RobotoBold.ttf'),
        RobotoMedium: require('../assets/fonts/RobotoMedium.ttf'),
        RobotoRegular: require('../assets/fonts/RobotoRegular.ttf'),
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container} >
                <ImageBackground
                    source={backgroundImage}
                    style={styles.image}
                >
                    <View style={styles.form}>
                        <View style={styles.addImage}>
                            <AntDesign
                                name="pluscircleo"
                                size={25}
                                color="#FF6C00"
                                backgroundColor="white"
                                style={styles.buttonAddImage}
                            />
                        </View>
                        <Text style={styles.title}>Sign up</Text>
                            <TextInput
                                style={{...styles.input}}
                                placeholder="Login"
                                value={login}
                                onChangeText={setLogin}        
                            />
                            <TextInput
                                style={{...styles.input}}
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}        
                            />
                            <View style={styles.password}>
                                <TextInput
                                style={{...styles.input}}
                                placeholder="Password"
                                autoComplete="password"
                                value={password}
                                onChangeText={setPassword}        
                                />
                                <Text style={styles.textInput}> Show </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                title="Sign up"    
                                onPress={() => navigation.navigate('Home')}
                            >
                                <Text style={styles.buttonText}> Sign up </Text>
                            </TouchableOpacity>
                        <Text
                            style={styles.text}
                            onPress={() => navigation.navigate('Login')}
                        >
                            Already have an account? Sign in
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'RobotoRegular',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    form: {
        marginTop: 30,
        gap: 16,
        backgroundColor: '#fff',
        height: '70%',
        width: '100%',
        padding: 12,
        position: 'relative'
    },
    addImage: {
        position: 'absolute',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        top: -30,
        left: 135,
    },
    buttonAddImage: {
        position: 'absolute',
        left: 100,
        top: 80,
        borderRadius: 12,
    },
    title: {
        marginTop: 90,
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.01,
        textAlign: 'center',
        fontFamily: 'RobotoMedium',
    },
    input: {
        height: 50,
        width: 343,
        marginHorizontal: 16,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        color: '#212121',
        fontSize: 16,
    },
    textInput: {
        position: 'absolute',
        right: 32,
        top: 16,
        color: '#1B4371',
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FF6C00',
        marginHorizontal: 16,
        padding: 16,
        alignItems: 'center',
        borderRadius: 100,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 19,
    },
    text: {
        color: '#1B4371',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
    },
})