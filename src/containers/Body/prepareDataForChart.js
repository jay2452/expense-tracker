const prepareDataForChart = (dataset) => {
  console.log("prepare data fpr chart called !!!");
    sortSpendsByDate(dataset);
    const preparedData = dataset.map(item => {
        const [dd, mm, yyyy] = item.date.split("-").map(item => Number(item));
        const date = Date.UTC(yyyy, mm-1, dd);
        return [date, item.amount];
    });
    return preparedData;
}


function sortSpendsByDate(spendsList) {
    spendsList.sort((a, b) => {
      let date1 = a.date;
      let [dd1, mm1, yyyy1] = date1.split("-").map((num) => Number(num));
      date1 = new Date();
      date1.setDate(dd1);
      date1.setMonth(mm1 - 1);
      date1.setYear(yyyy1);
  
      let date2 = b.date;
      let [dd2, mm2, yyyy2] = date2.split("-").map((num) => Number(num));
      date2 = new Date();
      date2.setDate(dd2);
      date2.setMonth(mm2 - 1);
      date2.setYear(yyyy2);
      return new Date(date1).getTime() - new Date(date2).getTime();
    });
  }

export default prepareDataForChart;