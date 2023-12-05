"use strict";
(() => {
    let DaysOfTheWeek;
    (function (DaysOfTheWeek) {
        DaysOfTheWeek["SUN"] = "SUN";
        DaysOfTheWeek["MON"] = "MON";
        DaysOfTheWeek["TUE"] = "TUE";
        DaysOfTheWeek["WED"] = "WED";
        DaysOfTheWeek["THU"] = "THU";
        DaysOfTheWeek["FRI"] = "FRI";
        DaysOfTheWeek["SAT"] = "SAT";
    })(DaysOfTheWeek || (DaysOfTheWeek = {}));
    let day = DaysOfTheWeek.SAT;
    console.log(DaysOfTheWeek);
    console.log({ day });
})();
