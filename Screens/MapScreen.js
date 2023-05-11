import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                region={{
                latitude: 50.412412,
                longitude: 39.922532,
                latitudeDelta: 0.001,
                longitudeDelta: 0.006,
                }}
            >
                <Marker
                    title="travel photo"
                    coordinate={{ latitude: 50.412412, longitude: 50.412412 }}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});