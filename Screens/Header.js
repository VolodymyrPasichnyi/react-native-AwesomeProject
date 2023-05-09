import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";


export default function Header({ title }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <AntDesign
                name="arrowleft"
                size={24}
                color="#212121"
                backgroundColor={'transparent'}
                onPress={() => navigation.navigate('Home')}
            />
            <Text style={styles.titleHeader}>{title}</Text>
            <MaterialIcons
                name="logout"
                size={24}
                color="black"
                backgroundColor="transparent"
                onPress={() => navigation.navigate('LoginScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 54,
        paddingBottom: 10,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 0.5 0 rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(13.5914)',
    },
    titleHeader: {
        fontFamily: 'RobotoMedium',
        fontSize: 17,
        lineHeight: 22,
        color: '#212121',
    },
})