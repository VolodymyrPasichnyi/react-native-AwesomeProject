import { Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { StyleSheet } from "react-native";
import Header from "./Header";

const Tabs = createBottomTabNavigator();


export default function Home() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === "Posts") {            
                        return <Feather name="grid" size={size} color='rgba(33, 33, 33, 0.8)' />
                    } else if (route.name === "Create post") {
                        return <Ionicons name="add" size={size} color='#FFFFFF' style={styles.addPost} />
                    } else if (route.name === "Profile") {
                        return <Feather name="user" size={size} color={color} />
                    }          
                },
            })}
            tabBarOptions={{
                activeTintColor: '#FF6C00',
                inactiveTintColor: 'rgba(33, 33, 33, 0.8)',
                showLabel: false,
                initialRouteName: 'PostsScreen',
            }}
            >
            
            <Tabs.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    headerShown: true,
                    header: ({ navigation, route }) => <Header title={route.name} />
                }}
            />
            
            <Tabs.Screen
                name="Create post"
                component={CreatePostsScreen}
                options={{
                    headerShown: true,
                    header: ({ navigation, route }) => <Header title={route.name} />
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    addPost: {
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FF6C00',
        width: 70,
        height: 40,
        borderRadius: 20,
        padding: 8,
    }
})