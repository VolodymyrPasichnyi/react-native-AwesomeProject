import { moduleName } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DefaultScreen from './DefaultScreen';
import CommentsScreen from './CommentsScreen';
import MapScreen from './MapScreen';


const NestedScreen = createStackNavigator();

export default function PostsScreen() {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen name='Default' component={DefaultScreen} options={{ headerShown: false }} />
            <NestedScreen.Screen name='Comments' component={CommentsScreen} />
            <NestedScreen.Screen name='Map' component={MapScreen} />
        </NestedScreen.Navigator>
    )
}