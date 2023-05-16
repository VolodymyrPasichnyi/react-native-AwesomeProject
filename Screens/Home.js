import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { selectIsLogIn } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import PostsScreen from '../Screens/PostsScreen';
import CreatePostsScreen from '../Screens/CreatePostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Header from '../Screens/Header';

const MainTab = createBottomTabNavigator();
const AuthStack  = createStackNavigator();


export default function Home() {
   const isAuth = useSelector(selectIsLogIn)

  return (
        <NavigationContainer>
        {isAuth ? (
            <MainTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                if (route.name === 'Posts') {
                    return (
                    <Feather
                        name="grid"
                        size={size}
                        color="rgba(33, 33, 33, 0.8)"
                    />
                    )
                } else if (route.name === 'CreatePosts') {
                    return (
                    <View style={styles.iconWrap}>
                        <Ionicons
                        name="add"
                        size={size}
                        color="#FFFFFF"
                        style={styles.addPost}
                        />
                    </View>
                    )
                } else if (route.name === 'Profile') {
                    return <Feather name="user" size={size} color={color} />
                }
                },
                tabBarActiveTintColor: '#FF6C00',
                tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
                tabBarShowLabel: false,
                initialRouteName: 'PostsScreen',
            })}
            >
            <MainTab.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                headerShown: false,
                }}
            />
            <MainTab.Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={({ navigation }) => ({
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: styles.bottomBorder,

                headerLeft: () => (
                    <TouchableOpacity
                    style={{ marginLeft: 16 }}
                    onPress={() => navigation.navigate('Home')}
                    >
                    <AntDesign
                        name="arrowleft"
                        size={24}
                        color="#212121"
                        backgroundColor={'transparent'}
                        onPress={() => navigation.navigate('Home')}
                    />
                    </TouchableOpacity>
                ),
                })}
            />
            <MainTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                headerShown: false,
                header: ({ navigation, route }) => <Header title={route.name} />,
                }}
            />
            </MainTab.Navigator>
        ) : (
            <AuthStack.Navigator>
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false }}
            />
            </AuthStack.Navigator>
        )}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    iconWrap: {
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FF6C00',
        width: 70,
        height: 40,
        borderRadius: 20,
    },
    addPost: {},
        bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#b3b3b3',
    },
});