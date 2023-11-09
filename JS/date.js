function task1() {
  let date = new Date(prompt(`Задайте дату в формате (год, месяц, число) `));
  let week_days = new Array(
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  );
  let number_day = (date) => week_days[date.getDay()];
  alert(number_day(date));
}

function task2() {
  let date = new Date();
  function until_new_yaer(date) {
    let new_year = (date) => new Date(Number(date.getFullYear()) + 1, 0, 1);
    let days_until_new_yaer = Math.ceil(
      (new_year(date) - date) / (1000 * 60 * 60 * 24)
    );
    return days_until_new_yaer;
  }
  alert(`До нового года осталось дней : ${until_new_yaer(date)}`);
}

function task3() {
  let date = new Date();
  function week_days(date) {
    let day = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    let next_day = date.getDay() + 1;
    if (next_day == 7) next_day = 0;
    let obj_week_days = {
      next: day.at(next_day),
      curr: day.at(date.getDay()),
      prev: day.at(date.getDay() - 1),
    };
    return obj_week_days;
  }
  alert(`Получившийся объект находится в консоле`);
  console.log(week_days(date));
}

function task4() {
  msec = prompt(`Задайте милисекунды`);
  function msec_info(msec) {
    let msec_time = [86400000, 3600000, 60000, 1000];
    let time_left = 0;
    let msec_info = [];
    for (elem of msec_time) {
      let time = Math.floor((Number(msec) - time_left) / elem);
      time_left = time * elem + time_left;
      if (time > 0) msec_info.push(time);
      else msec_info.push(0);
    }
    let obj_msec_info = {
      d: msec_info[0],
      h: msec_info[1],
      m: msec_info[2],
      s: msec_info[3],
    };
    return obj_msec_info;
  }
  alert(`Получившийся объект находится в консоле`);
  console.log(msec_info(msec));
}

function task5() {
  let showAge = function (birthday) {
    today_date = new Date();
    time_info = today_date - birthday;
    let years = Math.floor(time_info / (86400000 * 365));
    let months = Math.floor(time_info / (86400000 * 30));
    let days = Math.floor(time_info / 86400000);
    alert(
      `Ваш возраст в годах - ${years}, месяцах - ${months} и днях - ${days}`
    );
  };
  showAge(
    new Date(prompt(`Введите дату рождения в формате (год, месяц, число) `))
  );
}

function task6() {
  let friday_13 = function () {
    let year = new Date().getFullYear();
    let arr_friday_13 = [];
    for (let i = 0; i < 12; i++) {
      let test_date = new Date(year, i, 13);
      if (test_date.getDay() == 5) {
        arr_friday_13.push(test_date);
      }
    }
    alert(`Получившийся объект находится в консоле`);
    console.log(arr_friday_13);
  };
  friday_13();
}

function task7() {
  function good_day(time) {
    if (time.getHours() > 4 && time.getHours() < 12) {
      alert(`Доброе утро`);
    } else if (time.getHours() > 11 && time.getHours() < 18) {
      alert(`Добрый день`);
    } else if (time.getHours() > 17) {
      alert(`Добрый вечер`);
    } else {
      alert(`Доброй ночи`);
    }
  }
  good_day(new Date());
}

function task8() {
  holidays = function (curr_date) {
    holidays_array = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [0, 8],
      [1, 23],
      [2, 8],
      [4, 1],
      [4, 9],
      [5, 12],
      [10, 4],
    ];
    let week_days = new Array(
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота"
    );
    let result = [];
    for (date of holidays_array) {
      result.push(
        `${date[1]}.${date[0] + 1}.${curr_date.getFullYear()} - ${
          week_days[
            new Date(curr_date.getFullYear(), date[0], date[1]).getDay()
          ]
        }`
      );
    }
    alert(result);
  };
  holidays(new Date());
}
