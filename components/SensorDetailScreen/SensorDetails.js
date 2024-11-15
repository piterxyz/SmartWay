import { StyleSheet, View } from "react-native";
import SensorStat from "../MenuScreen/SensorStat";
import sortSensorValuesByTimestamp from "../../util/sortSensorValuesByTimestamp";
import sortSensorValuesByValue from "../../util/sortSensorValuesByValue";
import getValuesFromDate from "../../util/getValuesFromDate";
import SensorChart from "./SensorChart";

export default function SensorDetails({ values }) {
    return (
        <View>
            <View style={styles.container}>
                <SensorStat
                    description="Ostatnie"
                    value={
                        values.length
                            ? sortSensorValuesByTimestamp(values)[0].value
                            : "NA"
                    }
                />
                <SensorStat
                    description="Najwyżej"
                    value={
                        values.length
                            ? sortSensorValuesByValue(values)[0].value
                            : "NA"
                    }
                />
                <SensorStat
                    description="Najniżej"
                    value={
                        values.length
                            ? sortSensorValuesByValue(values)[values.length - 1]
                                  .value
                            : "NA"
                    }
                />
            </View>
            <SensorChart values={values} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
});
