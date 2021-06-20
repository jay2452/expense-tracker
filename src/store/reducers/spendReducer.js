// {
//     category: null,
//     date: null,
//     amount: null,
//     description: "",
//     email: null
// }

const initialState = {
  data: [],
  currentDaySpend: 0,
  currentWeekSpend: 0,
  currentMonthSpend: 0,
  currentYearSpend: 0,
};

function getCurrentWeek() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return getWeekNumber(date.getDate(), date.getMonth() + 1, currentYear);
}

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
        const currentWeek = getCurrentWeek();
        updatedState.currentDaySpend = todaysSpend;
        updatedState.currentWeekSpend = spendsByYearWeek[currentWeek];
        updatedState.currentMonthSpend =
          spendsByYearMonth[currentYear + "-" + (new Date().getMonth() + 1)];
        updatedState.currentYearSpend = spendsByYear[currentYear];

        // debugger
      } catch (e) {
        console.error(e);
      }
      break;

    case "SET_SPEND_VALUE":
      {
        const { category, description, amount } = action.values;
        const currentDate = new Date();
        const dd = currentDate.getDate();
        const mm = currentDate.getMonth() + 1;
        const yyyy = currentDate.getFullYear();
        updatedState.data.push({
          category,
          date: dd + "-" + mm + "-" + yyyy,
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
      default :
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
    [currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1)]: 0,
  };
  const spendsByYearWeek = {
    [getWeekNumber(
      currentDate.getDate(),
      currentDate.getMonth() + 1,
      currentDate.getFullYear()
    )]: 0,
  };
  let todaysSpend = 0;

  spendsList.forEach((item) => {
    const { date, amount } = item;
    const [dd, mm, yyyy] = date.split("-").map((num) => Number(num));
    const weekNumber = getWeekNumber(dd, mm, yyyy);

    if (spendsByYear[yyyy] === undefined) spendsByYear[yyyy] = 0;
    spendsByYear[yyyy] += amount;

    const yearMonth = yyyy + "-" + mm;
    if (spendsByYearMonth[yearMonth] === undefined)
      spendsByYearMonth[yearMonth] = 0;
    spendsByYearMonth[yearMonth] += amount;

    const currentDate = new Date().getDate() + "-" +
      (new Date().getMonth() + 1) + "-" +  new Date().getFullYear();
    if (currentDate === `${dd}-${mm}-${yyyy}`) todaysSpend += amount;

    if (spendsByYearWeek[weekNumber] === undefined)
      spendsByYearWeek[weekNumber] = 0;
    spendsByYearWeek[weekNumber] += amount;
  });
  return {
    spendsByYear,
    spendsByYearMonth,
    spendsByYearWeek,
    todaysSpend,
  };
}



function getWeekNumber(dd, mm, yyyy) {
  const date = new Date(yyyy, mm - 1, dd);
  const oneJan = new Date(yyyy, 0, 1);
  const numberOfDaysInYear = Math.floor(
    (date - oneJan) / (24 * 60 * 60 * 1000)
  );
  const weekNum = Math.ceil((date.getDay() + 1 + numberOfDaysInYear) / 7);

  return `${yyyy}-${weekNum}`;
}
