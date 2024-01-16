import { HOLIDAYS } from "./holidays";

class HolidayCalculator {
  constructor(date) {
    this.date = date;
  }

  applyTwoDigits(number) {
    return number < 10 ? `0${number}` : number;
  }

  formatDate(date) {
    return (
      this.applyTwoDigits(date.getDate()) +
      "/" +
      this.applyTwoDigits(date.getMonth() + 1) +
      "/" +
      date.getFullYear()
    );
  }

  getEasterSunday(year) {
    let a, b, c, d, e, day;
    a = year % 19;
    b = year % 4;
    c = year % 7;
    d = (19 * a + 24) % 30;
    e = (2 * b + 4 * c + 6 * d + 5) % 7;
    day = 22 + d + e;

    if (day >= 1 && day <= 31) {
      return new Date(`03/${this.applyTwoDigits(day)}/${year}`);
    } else {
      return new Date(`04/${this.applyTwoDigits(day - 31)}/${year}`);
    }
  }

  getNextMonday(date) {
    //console.log("Fecha recibida: " + date.toDateString());
    while (date.getDay() !== 1) {
      date.setDate(date.getDate() + 1);
      //console.log("New date: " + date);
    }
    return date;
  }

  sumDay(stringDate, dayToSum) {
    let date = new Date(stringDate);
    date.setDate(date.getDate() + dayToSum);
    return date;
  }

  getHolidaysByYear(year) {
    let holidaysArray = [];
    //Obtiene el domingo de pascua para calcular los días litúrgicos
    let easterSunday = this.getEasterSunday(year);

    HOLIDAYS.forEach((element) => {
      let date;
      if (!element.daysToSum) {
        date = new Date(element.date + "/" + year);
      } else {
        date = this.sumDay(easterSunday.toDateString(), element.daysToSum);
      }

      if (element.nextMonday) {
        date = this.getNextMonday(date);
      }
      holidaysArray.push({
        date: this.formatDate(date),
        name: element.name,
        static: element.nextMonday,
      });
    });
    return holidaysArray;
  }

  getHolidaysByYearInterval(initialYear, finalYear) {
    let holidaysArray = [];
    //Obtiene el domingo de pascua para calcular los días litúrgicos
    for (let i = initialYear; i <= finalYear; i++) {
      let year = {
        year: i,
        holidays: [],
      };
      let easterSunday = this.getEasterSunday(i);

      HOLIDAYS.forEach((element) => {
        let date;
        if (!element.daysToSum) {
          date = new Date(element.date + "/" + i);
        } else {
          date = this.sumDay(easterSunday.toDateString(), element.daysToSum);
        }

        if (element.nextMonday) {
          date = this.getNextMonday(date);
        }
        year.holidays.push({
          date: this.formatDate(date),
          name: element.name,
          static: element.nextMonday,
        });
      });
      holidaysArray.push(year);
    }
    return holidaysArray;
  }

  isHoliday(date) {
    return !!this.getHolidaysByYear(date.getFullYear()).find((holiday) => {
      return holiday.date === this.formatDate(date);
    });
  }
}

export { HolidayCalculator };
