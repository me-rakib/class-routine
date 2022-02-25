//class routine info
const showClass = (idName, value) => {
  const btnName = document.getElementById(idName);
  btnName.textContent = value;
};

showClass("mon-1", routine.MON.class1.class);
showClass("mon-2", routine.MON.class2.class);
showClass("mon-3", routine.MON.class3.class);
showClass("mon-4", routine.MON.class4.class);

showClass("tue-1", routine.TUE.class1.class);
showClass("tue-2", routine.TUE.class2.class);
showClass("tue-3", routine.TUE.class3.class);
showClass("tue-4", routine.TUE.class4.class);

showClass("wed-1", routine.WED.class1.class);
showClass("wed-2", routine.WED.class2.class);
showClass("wed-3", routine.WED.class3.class);
// showClass("wed-4", routine.WED.class4.class);

showClass("thu-1", routine.THU.class1.class);
showClass("thu-2", routine.THU.class2.class);
showClass("thu-3", routine.THU.class3.class);
showClass("thu-4", routine.THU.class4.class);

showClass("fri-1", routine.FRI.class1.class);
showClass("fri-2", routine.FRI.class2.class);
showClass("fri-3", routine.FRI.class3.class);

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

  //convert into second
  const convertToSecond = (hour, min, sec) => {
    return hour * 3600 + min * 60 + sec;
  };
  const currentTimeArr = currentTime.split(":");
  const currentSecond = convertToSecond(
    currentTimeArr[0],
    currentTimeArr[1],
    parseInt(currentTimeArr[2])
  );
  const startSec = convertToSecond(startH, startM, 00);
  const endSec = convertToSecond(endH, endM, 00);

  //   //   for checking
  //   console.log(`Current Second = ${currentSecond}`);
  //   console.log(`Starting Second = ${startSec}`);
  //   console.log(`Ending Second = ${endSec}`);

  if (currentSecond >= startSec && currentSecond <= endSec) {
    return true;
  } else {
    return false;
  }
};

// if day and time true then select class
const checkDayAndTime = (currentDay) => {
  if (dayCheck("Monday", currentDay)) {
    if (timeCheck(8, 55, 9, 50)) {
      onGoingClass("CS251", "mon-1");
    } else if (timeCheck(10, 05, 11, 00)) {
      onGoingClass("CS253", "mon-2");
    } else if (timeCheck(11, 05, 12, 00)) {
      onGoingClass("CS252", "mon-3");
    } else if (timeCheck(14, 00, 16, 55)) {
      onGoingClass("CS255", "mon-4");
    }
  } else if (dayCheck("Tuesday", currentDay)) {
    if (timeCheck(8, 55, 9, 50)) {
      onGoingClass("CS250", "tue-1");
    } else if (timeCheck(10, 05, 11, 00)) {
      onGoingClass("CS251", "tue-2");
    } else if (timeCheck(11, 05, 12, 00)) {
      onGoingClass("CS253", "tue-3");
    } else if (timeCheck(14, 00, 16, 55)) {
      onGoingClass("CS254", "tue-4");
    }
  } else if (dayCheck("Wednesday", currentDay)) {
    if (timeCheck(8, 55, 9, 50)) {
      onGoingClass("CS252", "wed-1");
    } else if (timeCheck(10, 05, 11, 00)) {
      onGoingClass("MA250", "wed-2");
    } else if (timeCheck(11, 05, 12, 00)) {
      onGoingClass("CS251", "wed-3");
    } else if (timeCheck(14, 00, 16, 55)) {
      onGoingClass("CS254 & CS255", "wed-4");
    }
  } else if (dayCheck("Thursday", currentDay)) {
    if (timeCheck(8, 55, 9, 50)) {
      onGoingClass("CS253", "thu-1");
    } else if (timeCheck(10, 05, 11, 00)) {
      onGoingClass("CS252", "thu-2");
    } else if (timeCheck(11, 05, 12, 00)) {
      onGoingClass("CS250", "thu-3");
    } else if (timeCheck(13, 00, 13, 55)) {
      onGoingClass("CS251", "thu-4");
    }
  } else if (dayCheck("Friday", currentDay)) {
    if (timeCheck(8, 55, 9, 50)) {
      onGoingClass("CS253", "fri-1");
    } else if (timeCheck(10, 05, 11, 00)) {
      onGoingClass("CS250", "fri-2");
    } else if (timeCheck(11, 05, 12, 00)) {
      onGoingClass("CS252", "fri-3");
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

// ========== DARK / LIGHT ==========
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// check if anything is selected or not
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// implement if theme previously selected
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// select theme manually
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //save to localstorage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ========== DISCLAIMER ============
console.log("This webpage is a fun project. Don't take data as guaranteed");
