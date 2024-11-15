import { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function ControlTemplate({ children, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.template}>
            {children}
        </Pressable>
    );
}

export default function SensorControls({ status, navigation, date, setDate }) {
    const [open, setOpen] = useState(false);

    const onChange = (event, selectedDate) => {
        setOpen(false);
        setDate(selectedDate);
    };

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                justifyContent: "space-between",
            }}
        >
            <ControlTemplate onPress={() => navigation.navigate("Menu")}>
                <Image
                    source={require("../../assets/chevron-right-icon.png")}
                    style={{
                        width: 7.3,
                        height: 10,
                        opacity: 0.75,
                        transform: [{ rotate: "180deg" }],
                    }}
                />
                <Text style={{ color: "white", opacity: 0.75 }}>Wróć</Text>
            </ControlTemplate>
            <View style={styles.container}>
                <>
                    <ControlTemplate onPress={() => setOpen(true)}>
                        <Image
                            source={require("../../assets/calendar-icon.png")}
                            style={{ width: 20, height: 20, opacity: 0.75 }}
                        />
                        <Text style={{ color: "white", opacity: 0.75 }}>
                            {date.toLocaleDateString("pl-PL")}
                        </Text>
                    </ControlTemplate>
                    {open && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}
                </>
                <ControlTemplate>
                    <Image
                        source={
                            status == 1
                                ? require("../../assets/online-icon.png")
                                : require("../../assets/offline-icon.png")
                        }
                        style={{ width: 20, height: 20 }}
                    />
                    <Text
                        style={{
                            ...styles.status,
                            color: status == 1 ? "#1B9C73" : "#F95F4A",
                        }}
                    >
                        {status == 1 ? "Online" : "Offline"}
                    </Text>
                </ControlTemplate>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
    template: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        borderRadius: 45,
        backgroundColor: "#2A2C26",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
