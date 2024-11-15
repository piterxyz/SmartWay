import { StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import sortSensorValuesByValue from "../../util/sortSensorValuesByValue";
import sortSensorValuesByTimestamp from "../../util/sortSensorValuesByTimestamp";

const customLabel = (val) => {
    return (
        <View style={{ width: 70, marginLeft: 7 }}>
            <Text style={{ color: "lightgray" }}>{val}</Text>
        </View>
    );
};

export default function SensorChart({ values }) {
    if (!values.length)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Zmiana w ciągu dnia</Text>
                <Text style={styles.description}>N\A</Text>
            </View>
        );

    const hours = [];
    const data = sortSensorValuesByTimestamp(values).map((v, i) => {
        const date = new Date(v.measuredAt);

        let dataObj = {
            value: v.value,
            dataPointText: `${v.value}°C`,
            hideDataPoint: true,
        };

        if (!hours.includes(date.getHours()) && i != values.length - 1) {
            dataObj = {
                ...dataObj,
                labelComponent: () =>
                    customLabel(
                        `${
                            date.getHours() < 10
                                ? "0" + date.getHours()
                                : date.getHours()
                        }`
                    ),
            };
            hours.push(date.getHours());
        } else if (i == values.length - 1) {
            dataObj = {
                ...dataObj,
                labelComponent: () =>
                    customLabel(
                        `${
                            date.getHours() < 10
                                ? "0" + date.getHours()
                                : date.getHours()
                        }:${
                            date.getMinutes() < 10
                                ? "0" + date.getMinutes()
                                : date.getMinutes()
                        }`
                    ),
            };
        }

        return dataObj;
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Zmiana w ciągu dnia</Text>
            <LineChart
                thickness={6}
                color="#07BAD1"
                maxValue={sortSensorValuesByValue(values)[0].value}
                noOfSections={4}
                areaChart
                yAxisTextStyle={{ color: "lightgray" }}
                data={data}
                curved
                isAnimated
                startFillColor={"rgb(84,219,234)"}
                endFillColor={"rgb(84,219,234)"}
                startOpacity={0.2}
                endOpacity={0.2}
                spacing={40}
                rulesColor="gray"
                rulesType="solid"
                initialSpacing={10}
                yAxisColor="gray"
                xAxisColor="gray"
                dataPointsHeight={20}
                dataPointsWidth={20}
                focusEnabled
                showStripOnFocus
                showTextOnFocus
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        borderRadius: 15,
        backgroundColor: "#2A2C26",
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
    },
    description: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
    },
});
