import { currentDate_IN_DDMMYYYY, currentYearMonth, currentYearWeek } from "../../utils";

const getCategoryWiseSpendForSelectedTimelineButton = (selectedButton,data) => {
    const categoryData = {};
    
    let searchParam = "";
    let searchValue = "";
    try {
        switch (selectedButton) {
            case "Today":
                searchParam = "date";
                searchValue = currentDate_IN_DDMMYYYY;
              break;
            case "Week":
              searchParam = "yearWeek";
              searchValue = currentYearWeek;
              break;
        
            case "Month":
              searchParam = "yearMonth";
              searchValue = currentYearMonth;
              break;
        
            case "Year":
              searchParam = "year";
              searchValue = new Date().getFullYear();
              break;
        
            default:
              break;
          }

        //   debugger;
    // console.log(data);
          data.forEach((item, idx) => {
            if(item[searchParam] === searchValue){
                if(!categoryData[item.category]) categoryData[item.category] = 0;
                categoryData[item.category] += item.amount;
            }
          });
    } catch (e) {
        console.error(e);
    }
    return categoryData;
};

export default getCategoryWiseSpendForSelectedTimelineButton;