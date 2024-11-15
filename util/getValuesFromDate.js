export default function getValuesFromDate(values, date) {
    const filteredValues = values.filter((value) => {
        const valueDate = new Date(value.measuredAt).toLocaleDateString();
        return new Date(date).toLocaleDateString() === valueDate;
    });

    return filteredValues;
}
