export const getMonth = (month: string): string => {
  let stringMonth;

  switch (month) {
    case '01':
      stringMonth = 'январь';
      break;
    case '02':
      stringMonth = 'февраль';
      break;
    case '03':
      stringMonth = 'март';
      break;
    case '04':
      stringMonth = 'апрель';
      break;
    case '05':
      stringMonth = 'май';
      break;
    case '06':
      stringMonth = 'июнь';
      break;
    case '07':
      stringMonth = 'июль';
      break;
    case '08':
      stringMonth = 'август';
      break;
    case '09':
      stringMonth = 'сентябрь';
      break;
    case '10':
      stringMonth = 'октябрь';
      break;
    case '11':
      stringMonth = 'ноябрь';
      break;
    case '12':
      stringMonth = 'декабрь';
      break;
    default:
      stringMonth = month;
  }

  return stringMonth;
};
