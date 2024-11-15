import { View, ScrollView, StyleSheet, Text } from "react-native";
import SensorCard from "./SensorCard/SensorCard";
import { useFonts } from "expo-font";
import SensorStat from "./SensorStat";
import { useState } from "react";
import sortSensorValuesByTimestamp from "../../util/sortSensorValuesByTimestamp";

const sensors = [
    {
        id: 1,
        name: "Czujnik temperatury",
        values: [
            { value: 26, measuredAt: 1698084855231 },
            { value: 24, measuredAt: 1698084675231 },
            { value: 25, measuredAt: 1698084495231 },
            { value: 21, measuredAt: 1698084315231 },
            { value: 22, measuredAt: 1698084135231 },
            { value: 28, measuredAt: 1698083955231 },
            { value: 20, measuredAt: 1698083775231 },
        ],
        status: 1,
    },
];

export default function MenuScreen({ navigation }) {
    const [loaded] = useFonts({
        Raleway: require("../../assets/fonts/Raleway-Bold.ttf"),
    });
    const [filter, setFilter] = useState("all");

    const items =
        filter == "all"
            ? sensors
            : sensors.filter((s) => s.status == (filter == "online" ? 1 : 0));

    if (!loaded) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dzień dobry!</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.czujniki}>Czujniki</Text>
                <View
                    style={{
                        display: "flex",
                        gap: 8,
                    }}
                >
                    <View style={styles.sensorStats}>
                        <SensorStat
                            value={sensors.filter((s) => s.status == 1).length}
                            description="Online"
                            backgroundColor="#1B9C73"
                            style={filter == "offline" ? { opacity: 0.25 } : {}}
                            onPress={() => setFilter("online")}
                        />
                        <SensorStat
                            value={sensors.length}
                            description="Ogólnie"
                            style={filter != "all" ? { opacity: 0.25 } : {}}
                            onPress={() => setFilter("all")}
                        />
                        <SensorStat
                            value={sensors.filter((s) => s.status == 0).length}
                            description="Offline"
                            backgroundColor="#C04C3C"
                            style={filter == "online" ? { opacity: 0.25 } : {}}
                            onPress={() => setFilter("offline")}
                        />
                    </View>
                    <View style={styles.sensorList}>
                        {items.map((s) => (
                            <SensorCard
                                key={s.id}
                                sensorId={s.id}
                                name={s.name}
                                values={sortSensorValuesByTimestamp(s.values)}
                                value={
                                    sortSensorValuesByTimestamp(s.values)[0]
                                        .value + "°C"
                                }
                                status={s.status}
                                lastUpdate={
                                    sortSensorValuesByTimestamp(s.values)[0]
                                        .measuredAt
                                }
                                navigation={navigation}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131412",
        paddingHorizontal: 25,
        paddingTop: 30,
        color: "red",
    },
    title: {
        color: "white",
        fontSize: 48,
        fontWeight: "600",
        marginVertical: 25,
        fontFamily: "Raleway",
    },
    czujniki: {
        color: "white",
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 15,
        fontFamily: "Raleway",
    },
    sensorList: {
        display: "flex",
        gap: 8,
        overflow: "scroll",
        marginBottom: 8,
    },
    sensorStats: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
});
