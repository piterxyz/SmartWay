import { Pressable, Text, StyleSheet } from "react-native";

export default function SensorStat({
    value,
    description,
    backgroundColor = "#2A2C26",
    onPress,
    style,
}) {
    return (
        <Pressable
            onPress={onPress}
            style={{ ...styles.container, backgroundColor, ...style }}
        >
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.description}>{description}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        borderRadius: 15,
    },
    value: {
        color: "white",
        textAlign: "center",
        fontSize: 32,
    },
    description: {
        color: "white",
        textAlign: "center",
    },
});
