import { moduleName } from 'react-native'
import { Ionicons, EvilIcons, Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authOperations';
import DefaultScreen from './DefaultScreen';
import CommentsScreen from './CommentsScreen';
import MapScreen from './MapScreen';

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(logout());
    }

    return (
         <NestedScreen.Navigator>
            <NestedScreen.Screen
                name="Posts"
                component={DefaultScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle: styles.bottomBorder,
                    headerRight: () => (
                        <TouchableOpacity
                        style={{ marginRight: 16 }}
                        onPress={() => dispatch(handleSubmit)}
                        >
                            <Ionicons
                                name="exit-outline"
                                size={28}
                                color="#BDBDBD"
                                backgroundColor="transparent"
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
            <NestedScreen.Screen
                name="Comments"
                component={CommentsScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle: styles.bottomBorder,
                })}
            />
            <NestedScreen.Screen name="Map" component={MapScreen} />
        </NestedScreen.Navigator>
    )
}

const styles = StyleSheet.create({
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#b3b3b3',
    },
})