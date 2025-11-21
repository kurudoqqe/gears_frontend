import ThreeImg from "@/assets/images/number-three.png";
import SevenImg from "@/assets/images/number-seven.png";
import FourImg from "@/assets/images/number-four.png";
import FiveImg from "@/assets/images/number-five.png";
import OneImg from "@/assets/images/number-one.png";
import TwoImg from "@/assets/images/number-two.png";
import SixImg from "@/assets/images/number-six.png";

export const workProcesses = [
  {
    description:
      "Определяются требования к функционалу, интерфейсу и архитектуре. Собираются пожелания заказчика, анализируются потребности пользователей, выбирается MVP и стек технологий",
    title: "Составление технического задания",
    alignment: "left",
    image: OneImg,
  },
  {
    description:
      "Проект разбивается на этапы или спринты (Agile). Оцениваются сроки, бюджет, распределяются роли. Настраиваются инструменты (Jira, Trello) для отслеживания прогресса",
    title: "Планирование",
    alignment: "right",
    width: "large",
    image: TwoImg,
  },
  {
    description:
      "Создаются прототипы и вайрфреймы, после согласования разрабатывается UI/UX (цвета, шрифты, анимации). Готовые макеты передаются фронтенду",
    alignment: "left",
    title: "Дизайн",
    image: ThreeImg,
  },
  {
    description:
      "Фронтенд верстает интерфейс, бэкенд разрабатывает API и базы данных. Обеспечивается безопасность и клиентская логика",
    title: "Вёрстка и API",
    alignment: "right",
    width: "small",
    image: FourImg,
  },
  {
    description:
      "Фронтенд и бэкенд соединяются через API. Проверяется корректность запросов, передача данных и работа функций",
    title: "Совмещение модулей",
    alignment: "left",
    image: FiveImg,
  },
  {
    description:
      "Тестировщики проверяют систему: ищут баги, тестируют безопасность и нагрузку. Проводят тесты с пользователями (UAT), фиксируют и исправляют все ошибки перед выпуском",
    title: "Тестирование",
    alignment: "right",
    width: "medium",
    image: SixImg,
  },
  {
    description:
      "Продукт разворачивается на серверах. Настраивается веб-сервер, базы данных, домены, SSL. Мониторится стабильность, готовится документация",
    alignment: "left",
    title: "Деплой",
    image: SevenImg,
  },
];
