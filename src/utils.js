export function getWeekNumber(dd, mm, yyyy) {
  const date = new Date(yyyy, Number(mm - 1), dd);
  const oneJan = new Date(yyyy, 0, 1);
  const numberOfDaysInYear = Math.floor(
    (date - oneJan) / (24 * 60 * 60 * 1000)
  );
  const weekNum = Math.ceil((date.getDay() + 1 + numberOfDaysInYear) / 7);

  return `${yyyy}-${weekNum}`;
}

export function getCurrentWeek() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return getWeekNumber(date.getDate(), date.getMonth() + 1, currentYear);
}


export function getCurrentDate_IN_DDMMYYY(){
    const currentDate = new Date();
    const dd = currentDate.getDate();
    let mm = currentDate.getMonth() + 1;
    if(mm.toString().length === 1){
        mm = 0 + "" + mm;
    }
    const yyyy = currentDate.getFullYear();
    const ddmmyyyy = `${dd}-${mm}-${yyyy}`;
    return ddmmyyyy;
}

export function getCurrentYearMonth() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let mm = currentDate.getMonth() + 1;
    if(mm.toString().length === 1){
        mm = 0 + "" + mm;
    }
    return `${year}-${mm}`;
}

export const currentYearMonth = getCurrentYearMonth();
export const currentYearWeek = getCurrentWeek();
export const currentDate_IN_DDMMYYYY = getCurrentDate_IN_DDMMYYY();
