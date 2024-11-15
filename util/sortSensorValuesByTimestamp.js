export default function sortSensorValuesByTimestamp(values) {
    values.sort((a, b) => a.measuredAt - b.measuredAt);

    return values;
}
