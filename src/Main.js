import './main.css'
import imageRasp00 from "./images/rasp_00.jpeg"
import imageRasp01 from "./images/rasp_01.jpg"
import imageRasp02 from "./images/rasp_02.jpg"

export function Main() {
  return (
    <section>
      <img src={imageRasp00} alt="rasp" className="main--photo" />
      <h1>Raspberry Pi 3 model B+</h1>
      <p>Линейка одних из самых популярных одноплатных микрокомпьютеров в 2018 году пополнилась моделью Raspberry Pi 3 Model B plus (Кириллическое наименование Распберри Пи 3 Модель Б плюс) c обновленным 64-битным четырехъядерным процессором, работающим на частоте 1,4 ГГц со встроенным металлическим радиатором, c Wi-Fi 5 ГГц, более быстрым (300 Мбит/с) Ethernet и возможностью подключения PoE.</p>
      <p className="text-description"><strong>Процессор</strong> : Broadcom BCM2837B0 ARMv8, Cortex-A53 1.4 ГГц, 64-бит <br />
        <strong>Дополнительно</strong>: На процессоре установлена металлическая крышка для теплоотвода <br />
        <strong>Оперативная память</strong>: 1 ГБ LPDDR2 (900 МГц) <br />
        <strong>Объем встроенной памяти</strong>: Карта памяти приобретается отдельно<br />
        <strong>Модуль беспроводной связи</strong>: Cypress CYW43455<br />
        <strong>Wi-Fi</strong>: IEEE 802.11.b/g/n/ac, 2.4GHz / 5GHz<br />
        <strong>Bluetooth</strong>: 4.2 с поддержкой BLE (Bluetooth Low Energy)<br />
        <strong>Модуль LAN</strong>: Microchip LAN7515, 300 Мб/сек, Gigabit Ethernet over USB 2.0<br />
        <strong>Поддержка POE</strong>: Да (с помошью отдельного модуля PoE HAT)<br />
        <strong>Видеочип</strong>: Broadcom VideoCore IV<br />
        <strong>Операционная система</strong>: Без ОС, Загружается с сайта производителя<br />
        <strong>Разъемы</strong>: USB 2.0 х4, HDMI, RJ-45, USB microB, AV-out, GPIO, разъем для камеры, слот для microSDHC<br />
        <strong>Наша гарантия</strong>: 12 месяцев</p>
      <img src={imageRasp01} alt="rasp" className="big--photo, big--photo01" />
      <img src={imageRasp02} alt="rasp" className="big--photo" />
      <p>
        Идея создания дешёвого компьютера появилась в 2006 году у группы коллег: Эбена Аптона, Роба Маллинса, Джека Ланга и Алана Майкрофта. Они создали несколько прототипов, после чего к ним присоединился Дэвид Брэбен, они основали фонд Raspberry Pi Foundation и начали работу над компьютером. <br />

        В мае 2011 года Брэбен представил первый концепт Raspberry Pi размером с USB-флеш-накопитель
        Большая часть моделей одноплатных компьютеров Raspberry Pi распространяется полностью собранным на четырёхслойной печатной плате размером примерно с банковскую карту (модели A и A+, Zero и Zero W исполнены в иных форм-факторах). <br />
        В стандартный комплект поставки входит только сам мини-компьютер. Корпус, блок питания и карту памяти необходимо заказывать отдельно.</p>
    </section>
  )
}
