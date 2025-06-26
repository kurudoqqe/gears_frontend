<script setup></script>

<template>
  <section class="work-process page-container" id="processes">
    <h1>процесс работы</h1>
    <div class="processes">
      <div class="work first">
        <h2>Составление технического задания</h2>
        <p class="text-2">
          Определяются требования к функционалу, интерфейсу и архитектуре.
          <br />
          Собираются пожелания заказчика, анализируются потребности <br />
          пользователей, выбирается MVP и стек технологий
        </p>
      </div>
      <div class="work second">
        <h2>Планирование</h2>
        <p class="text-2">
          Проект разбивается на этапы или спринты <br />
          (Agile). Оцениваются сроки, бюджет, <br />
          распределяются роли. Настраиваются <br />
          инструменты (Jira, Trello) для отслеживания <br />
          прогресса
        </p>
      </div>
      <div class="work third">
        <h2>Дизайн</h2>
        <p class="text-2">
          Создаются прототипы и вайрфреймы, после <br />
          согласования разрабатывается UI/UX (цвета, <br />
          шрифты, анимации). Готовые макеты передаются <br />
          фронтенду
        </p>
      </div>
      <div class="work fourth">
        <h2>Вёрстка и API</h2>
        <p class="text-2">
          Фронтенд верстает интерфейс, бэкенд <br />
          разрабатывает API и базы данных. <br />
          Обеспечивается безопасность и клиентская <br />
          логика
        </p>
      </div>
      <div class="work fifth">
        <h2>Совмещение модулей</h2>
        <p class="text-2">
          Фронтенд и бэкенд соединяются через API. <br />
          Проверяется корректность запросов, <br />
          передача данных и работа функций
        </p>
      </div>
      <div class="work sixth">
        <h2>Тестирование</h2>
        <p class="text-2">
          Тестировщики проверяют систему: ищут баги, тестируют <br />
          безопасность и нагрузку. Проводят тесты с <br />
          пользователями (UAT), фиксируют и исправляют все <br />
          ошибки перед выпуском
        </p>
      </div>
      <div class="work seventh">
        <h2>Деплой</h2>
        <p class="text-2">
          Продукт разворачивается на серверах. <br />
          Настраивается веб-сервер, базы данных, домены, <br />
          SSL. Мониторится стабильность, готовится <br />
          документация
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.work-process {
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin: 200px auto 0;
}

.processes {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.work {
  display: flex;
  flex-direction: column;
  gap: 15px;

  &.second {
    align-self: end;

    > h2 {
      align-self: end;
    }

    .text-2 {
      text-align: end;
    }
  }

  &.third {
    margin-left: 80px;
  }

  &.fourth {
    align-self: end;

    margin-right: 160px;

    > h2 {
      align-self: end;
    }

    .text-2 {
      text-align: end;
    }
  }

  &.sixth {
    align-self: end;

    > h2 {
      align-self: end;
    }

    .text-2 {
      text-align: end;
    }
  }

  &.seventh {
    margin-left: 200px;
  }
}
</style>
