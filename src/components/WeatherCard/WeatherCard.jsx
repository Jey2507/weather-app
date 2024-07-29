import css from "../WeatherCard/WeatherCard.module.css"

export default function WeatherCard ({items}) {
    console.log(items)

    const {
        name,
        main: { temp, feels_like, pressure, humidity, temp_min, temp_max } = {},
        wind: { speed, deg} = {},
        sys: { sunrise, sunset, country } = {},
        weather: [{ description } = {}] = [],
        clouds: { all: cloudiness } = {},
        visibility,
        coord: { lon, lat } = {},
      } = items;

    
    const formatTime = (timestamp) => new Date(timestamp * 1000).toLocaleTimeString();

    const mathSunrise = formatTime(sunrise)
    const mathSunset = formatTime(sunset)
    const mathDayLenght = formatTime(sunset - sunrise)

    return (
        <section className={css.container}>
            <div className={css.mainBox}>
                <h2 className={css.title}>Погода в {name} | {country}</h2> 
                <h3 className={css.descr}>Температура {temp}°C</h3>
            </div>
            <div className={css.card}>
                <h2>{description}</h2>
                <h3>Відчувається як - {feels_like}°C</h3>
                <h3>Мінімальна температура - {temp_min}°C</h3>
                <h3>Максимальна температура - {temp_max}°C</h3>
            </div>
            <div className={css.card}>
                <h3>Хмарність - {cloudiness}%</h3>
                <h3>Видимість - {visibility} м</h3>
                <h3>Вологість - {humidity}%</h3>
                <h3>Тиск - {pressure} hPa</h3>
                <h3>Вітер - {speed} м/с, напрямок {deg}°</h3>
                <h3>Схід сонця - {mathSunrise}</h3>
                <h3>Захід сонця - {mathSunset}</h3>
                <h3>Протяжність дня - {mathDayLenght}</h3>
                {/* <h3>Координати: довгота {lon}, широта {lat}</h3> */}
            </div>
        </section>
    )
}