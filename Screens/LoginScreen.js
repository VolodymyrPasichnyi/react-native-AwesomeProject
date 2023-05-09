import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import backgroundImage from '../assets/images/background.png'
import { useFonts } from 'expo-font'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
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
            <View style={styles.container}>
                <ImageBackground
                    source={backgroundImage}
                    style={styles.image}>                    
                    <View style={styles.login}>
                        <Text style={styles.title}>Sign in</Text>
                            <View style={styles.loginForm}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Email'
                                    autoComplete='email'
                                    value={email}
                                    onChangeText={setEmail}  
                                />
                            </View>
                            <View style={styles.password}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    autoComplete='password'
                                    value={password}
                                    onChangeText={setPassword}  
                                />
                                <Text style={styles.textInput}> Show </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>Sign in</Text>
                            </TouchableOpacity>
                        <Text
                            style={styles.signUp}
                            onPress={() => navigation.navigate('Registration')}
                        >
                            Need an account? Sign up
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
    login: {
        paddingHorizontal: 16,
        width: '100%',
        height: '50%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        position: 'relative',
    },
    title: {
        marginTop: 30,
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.01,
    },
    loginForm: {
        marginTop: 30,
        gap: 16,
    },
    input: {
        height: 50,
        width: 343,
        marginBottom: 16,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        color: '#212121',
        fontSize: 16,
    },
    password: {
        position: 'relative',
    },
    textInput: {
        position: 'absolute',
        right: 32,
        top: 16,
        color: '#1B4371',
        fontSize: 16,
    },
    button: {
        width: 343,
        marginTop: 27,
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
    signUp: {
        color: '#1B4371',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        marginTop: 16,
        paddingBottom: 70
    }
})