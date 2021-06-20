// {
//     category: null,
//     date: null,
//     amount: null,
//     description: "",
//     email: null
// }

import { currentDate_IN_DDMMYYYY, currentYearMonth, currentYearWeek, getWeekNumber } from "../../utils";

const initialState = {
  data: [],
  currentDaySpend: 0,
  currentWeekSpend: 0,
  currentMonthSpend: 0,
  currentYearSpend: 0,
  spendFormSelectedCategory: null,
};

export default function spendReducer(state = initialState, action) {
  const updatedState = { ...state };

  switch (action.type) {
    case "GET_SPENDS_LIST":
      try {
        updatedState.data = action.values.data;
        // sortSpendsByDate(updatedState.data);

        const {
          spendsByYear,
          spendsByYearMonth,
          spendsByYearWeek,
          todaysSpend,
        } = getSpends(updatedState.data);

        const currentYear = new Date().getFullYear();
        updatedState.currentDaySpend = todaysSpend;
        updatedState.currentWeekSpend = spendsByYearWeek[currentYearWeek];
        updatedState.currentMonthSpend = spendsByYearMonth[currentYearMonth];
        updatedState.currentYearSpend = spendsByYear[currentYear];

        // debugger
      } catch (e) {
        console.error(e);
      }
      break;

    case "SAVE_SPEND_FOR_DATE":
      {
        const { category, description, amount, date } = action.values;
        updatedState.data.push({
          category,
          date: date, // dd-mm-yyyy
          amount: Number(amount),
          description,
          email: "jayant2452@gmail.com",
        });

        updatedState.currentDaySpend += Number(amount);
        updatedState.currentWeekSpend += Number(amount);
        updatedState.currentMonthSpend += Number(amount);
        updatedState.currentYearSpend += Number(amount);
      }
      break;
    case "SELECT_SPEND_FORM_CATEGORY":
      {
        const {spendFormSelectedCategory} = action.values;
        updatedState.spendFormSelectedCategory = spendFormSelectedCategory;
      }
      break;
    default:
      break;
  }
  return updatedState;
}

function getSpends(spendsList = []) {
  const currentDate = new Date();
  const spendsByYear = {
    [currentDate.getFullYear()]: 0,
  };
  const spendsByYearMonth = {
    [currentYearMonth]: 0,
  };
  const spendsByYearWeek = {
    [currentYearWeek]: 0,
  };
  let todaysSpend = 0;

  spendsList.forEach((item) => {
    const today_ddmmyyyy = currentDate_IN_DDMMYYYY;
    const { date, amount } = item;
    let [dd, mm, yyyy] = date.split("-").map((num) => Number(num));
    if(mm.toString().length === 1){
      mm = 0 + "" + mm;
    }
    const yearMonth = yyyy + "-" + mm;
    const weekNumber = getWeekNumber(dd, mm, yyyy);
    // updating the original data with year, month, and date
    item.day = dd;
    item.yearMonth = yearMonth;
    item.year = yyyy;
    item.yearWeek = weekNumber;
    

    if (spendsByYear[yyyy] === undefined) spendsByYear[yyyy] = 0;
    spendsByYear[yyyy] += amount;

    
    if (spendsByYearMonth[yearMonth] === undefined) spendsByYearMonth[yearMonth] = 0;
    spendsByYearMonth[yearMonth] += amount;
      
    if (today_ddmmyyyy === `${dd}-${mm}-${yyyy}`) todaysSpend += amount;

    if (spendsByYearWeek[weekNumber] === undefined) spendsByYearWeek[weekNumber] = 0;
    spendsByYearWeek[weekNumber] += amount;
  });
  return {
    spendsByYear,
    spendsByYearMonth,
    spendsByYearWeek,
    todaysSpend,
  };
}
