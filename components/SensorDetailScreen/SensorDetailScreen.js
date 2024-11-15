import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import SensorControls from "./SensorControls";
import SensorDetails from "./SensorDetails";
import getValuesFromDate from "../../util/getValuesFromDate";

export default function SensorDetailScreen({ route, navigation }) {
    const [loaded] = useFonts({
        Raleway: require("../../assets/fonts/Raleway-Bold.ttf"),
    });
    const [date, setDate] = useState(new Date());

    const { name, values, status } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <SensorControls
                status={status}
                navigation={navigation}
                date={date}
                setDate={setDate}
            />
            <SensorDetails values={getValuesFromDate(values, date)} />
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
});
