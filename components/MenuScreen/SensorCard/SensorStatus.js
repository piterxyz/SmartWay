import { Text, StyleSheet, View, Image } from "react-native";

export default function SensorStatus({ status }) {
    return (
        <View style={styles.statusSection}>
            <Text
                style={{
                    ...styles.status,
                    color: status == 1 ? "#1B9C73" : "#F95F4A",
                }}
            >
                {status == 1 ? "Online" : "Offline"}
            </Text>
            <Image
                source={
                    status == 1
                        ? require("../../../assets/online-icon.png")
                        : require("../../../assets/offline-icon.png")
                }
                style={{ width: 20, height: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    statusSection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    status: {
        fontFamily: "Roboto",
        fontWeight: "500",
    },
});
