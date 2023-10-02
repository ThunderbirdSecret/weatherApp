
export function DateFormatter(timestamp) {
    const date = new Date(timestamp * 1000); // умножаем на 1000, чтобы привести к миллисекундам

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${dayOfWeek}, ${day} ${month}, ${year}.`;

    console.log(formattedDate);
    return formattedDate
}