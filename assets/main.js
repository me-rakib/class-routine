//class routine info
const showClass = (idName, value) => {
  const btnName = document.getElementById(idName);
  btnName.textContent = value;
};
showClass("mon-1-1", routine.MON.class1_1.class);
showClass("mon-1", routine.MON.class1.class);
showClass("mon-2", routine.MON.class2.class);
showClass("mon-3", routine.MON.class3.class);

showClass("tue-1", routine.TUE.class1.class);
showClass("tue-2", routine.TUE.class2.class);
showClass("tue-3", routine.TUE.class3.class);

showClass("wed-1", routine.WED.class1.class);
showClass("wed-2", routine.WED.class2.class);
showClass("wed-3", routine.WED.class3.class);
showClass("wed-4", routine.WED.class4.class);

showClass("thu-1", routine.THU.class1.class);
// showClass("thu-2", routine.THU.class2.class);
showClass("thu-3", routine.THU.class3.class);
showClass("thu-4", routine.THU.class4.class);

showClass("fri-1", routine.FRI.class1.class);
showClass("fri-2", routine.FRI.class2.class);
showClass("fri-3", routine.FRI.class3.class);
showClass("fri-4", routine.FRI.class4.class);

// target button
const showDate = document.getElementById("date");
const showDay = document.getElementById("day");
const showTime = document.getElementById("time");
const ongoingBtn = document.getElementById("class-name");

// ongoing class, if condition meet then show class name on ongoing status
const onGoingClass = (className, classId) => {
  const classIdStyle = document.getElementById(classId);
  ongoingBtn.textContent = className;
  classIdStyle.classList.add("ongoing-animated");
};

// check day
const dayCheck = (day, current) => {
  if (current == day) {
    return true;
  } else {
    return false;
  }
};

//check time
const timeCheck = (startH, startM, endH, endM) => {
  let currentTime = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Kolkata",
  });
  currentTime = currentTime.slice(12, 20);
  const timeStart = `${startH}:${startM}:00`;
  const timeEnd = `${endH}:${endM}:00`;
  // console.log(timeStart);
  if (currentTime >= timeStart && currentTime < timeEnd) {
    return true;
  } else {
    return false;
  }
};

// if day and time true then select class
const checkDayAndTime = (currentDay) => {
  if (dayCheck("Monday", currentDay)) {
    if (timeCheck(8, 15, 8, 45)) {
      onGoingClass("PY110", "mon-1-1");
    } else if (timeCheck(9, 00, 9, 30)) {
      onGoingClass("PSC", "mon-1");
    } else if (timeCheck(10, 30, 11, 45)) {
      onGoingClass("PH111", "mon-2");
    } else if (timeCheck(14, 00, 14, 30)) {
      onGoingClass("MA111", "mon-3");
    }
  } else if (dayCheck("Tuesday", currentDay)) {
    if (timeCheck(9, 00, 9, 30)) {
      onGoingClass("MA111", "tue-1");
    } else if (timeCheck(9, 45, 10, 15)) {
      onGoingClass("PSC", "tue-2");
    } else if (timeCheck(10, 30, 11, 45)) {
      onGoingClass("CS111", "tue-3");
    }
  } else if (dayCheck("Wednesday", currentDay)) {
    if (timeCheck(8, 15, 8, 45)) {
      onGoingClass("PH110", "wed-1");
    } else if (timeCheck(10, 30, 11, 00)) {
      onGoingClass("PSC", "wed-2");
    } else if (timeCheck(11, 15, 11, 45)) {
      onGoingClass("MA111", "wed-3");
    } else if (timeCheck(14, 00, 15, 15)) {
      onGoingClass("CY111", "wed-4");
    }
  } else if (dayCheck("Thursday", currentDay)) {
    if (timeCheck(8, 15, 8, 45)) {
      onGoingClass("ME110", "thu-1");
    }
    //  else if (timeCheck(9, 00, 9, 30)) {
    //   onGoingClass("PH110", "thu-2");
    // } 
    else if (timeCheck(10, 30, 11, 45)) {
      onGoingClass("PSC", "thu-3");
    } else if (timeCheck(14, 00, 14, 30)) {
      onGoingClass("ME111", "thu-4");
    }
  } else if (dayCheck("Friday", currentDay)) {
    if (timeCheck(8, 15, 8, 45)) {
      onGoingClass("ME110", "fri-1");
    } else if (timeCheck(9, 45, 10, 15)) {
      onGoingClass("PH110", "fri-2");
    } else if (timeCheck(10, 30, 11, 45)) {
      onGoingClass("PSC", "fri-3");
    } else if (timeCheck(14, 00, 16, 00)) {
      onGoingClass("ME111", "fri-3");
    }
  }
};

const countTime = setInterval(() => {
  const time = new Date();

  const currentDate = `${time.toString().slice(4, 10)}, ${time.getFullYear()}`;
  const currentDay = time.toLocaleString("default", { weekday: "long" });

  // show date
  showDate.textContent = currentDate;
  showDay.textContent = currentDay;
  showTime.textContent = time
    .toLocaleString("en-GB", { timeZone: "Asia/Kolkata" })
    .slice(12, 20);

  //which class is ongoin now
  checkDayAndTime(currentDay);
}, 1000);
