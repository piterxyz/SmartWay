export default function sortSensorValuesByValue(values) {
    values.sort((a, b) => b.value - a.value);

    return values;
}
