export default function formatRelativeTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30.44 * day;
    const year = 365 * day;

    const pluralize = (count, singular, plural, pluralGenitive) => {
        if (count === 1) {
            return singular;
        } else if (
            count % 10 >= 2 &&
            count % 10 <= 4 &&
            (count % 100 < 10 || count % 100 >= 20)
        ) {
            return plural;
        } else {
            return pluralGenitive;
        }
    };

    if (diff < minute) {
        const seconds = Math.floor(diff / second);
        return `${seconds} ${pluralize(
            seconds,
            "sekunda",
            "sekundy",
            "sekund"
        )} temu`;
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes} ${pluralize(
            minutes,
            "minuta",
            "minuty",
            "minut"
        )} temu`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours} ${pluralize(
            hours,
            "godzina",
            "godziny",
            "godzin"
        )} temu`;
    } else if (diff < week) {
        const days = Math.floor(diff / day);
        return `${days} ${pluralize(days, "dzień", "dni", "dni")} temu`;
    } else if (diff < month) {
        const weeks = Math.floor(diff / week);
        return `${weeks} ${pluralize(
            weeks,
            "tydzień",
            "tygodnie",
            "tygodni"
        )} temu`;
    } else if (diff < year) {
        const months = Math.floor(diff / month);
        return `${months} ${pluralize(
            months,
            "miesiąc",
            "miesiące",
            "miesięcy"
        )} temu`;
    } else {
        const years = Math.floor(diff / year);
        return `${years} ${pluralize(years, "rok", "lata", "lat")} temu`;
    }
}
