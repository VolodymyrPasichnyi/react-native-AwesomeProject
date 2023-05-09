import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import CommentsScreen from './Screens/CommentsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import MapScreen from './Screens/MapScreen';
import Home from './Screens/Home';
import PostsScreen from './Screens/PostsScreen';


const MainStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
        <NavigationContainer>
          <MainStack.Navigator >    
            <MainStack.Screen name='Registration' component={RegistrationScreen} options={{ headerShown: false }} />
            <MainStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <MainStack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
            <MainStack.Screen name='Posts' component={PostsScreen} />
            <MainStack.Screen name='CreatePosts' component={CreatePostsScreen} />
            <MainStack.Screen name='Comments' component={CommentsScreen} />
            <MainStack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }}/>
            <MainStack.Screen name='Map' component={MapScreen} />
          </MainStack.Navigator>
        </NavigationContainer>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
