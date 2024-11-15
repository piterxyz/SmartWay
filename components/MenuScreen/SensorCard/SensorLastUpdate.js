import { StyleSheet, Text } from "react-native";
import formatRelativeTime from "../../../util/formatRelativeTime";

export default function SensorLastUpdate({ lastUpdate }) {
    return (
        <Text style={styles.lastUpdate}>
            Zaktualizowano: {formatRelativeTime(lastUpdate)}
        </Text>
    );
}

const styles = StyleSheet.create({
    lastUpdate: {
        color: "white",
        opacity: 0.5,
    },
});
