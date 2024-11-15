import { Text, Pressable, StyleSheet, View, Image } from "react-native";
import { useFonts } from "expo-font";
import SensorStatus from "./SensorStatus";
import SensorLastUpdate from "./SensorLastUpdate";

export default function SensorCard({
    name,
    value,
    values,
    lastUpdate,
    status,
    sensorId,
    navigation,
}) {
    const [loaded] = useFonts({
        Raleway: require("../../../assets/fonts/Raleway-Bold.ttf"),
    });

    return (
        <View style={styles.sensorCard}>
            <Pressable
                onPress={() =>
                    navigation.navigate("Sensor", {
                        name,
                        values,
                        lastUpdate,
                        status,
                    })
                }
            >
                <View style={styles.header}>
                    <Text style={styles.title}>{name}</Text>
                    <SensorStatus status={status} />
                </View>
                <Text style={styles.value}>{value}</Text>
                <SensorLastUpdate lastUpdate={lastUpdate} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    sensorCard: {
        backgroundColor: "#2A2C26",
        padding: 25,
        borderRadius: 15,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 19,
        fontFamily: "Raleway",
    },
    value: {
        color: "white",
        fontSize: 50,
        fontWeight: "700",
        fontFamily: "Roboto",
    },
});
