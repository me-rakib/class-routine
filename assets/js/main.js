// target button
const showDate = document.getElementById("date");
const showDay = document.getElementById("day");
const showTime = document.getElementById("time");


const countTime = setInterval(() => {
    const time = new Date();

    const currentDate = `${time.toString().slice(4, 10)}, ${time.getFullYear()}`;
    const currentDay = time.toLocaleString("default", {
        weekday: "long"
    });

    // show date & time
    showDate.textContent = currentDate;
    showDay.textContent = currentDay;
    showTime.textContent = time.toLocaleString("en-GB", {
            timeZone: "Asia/Kolkata"
        }).slice(12, 20);


}, 1000);



// ========== DARK / LIGHT ==========
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// check if anything is selected or not
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// implement if theme previously selected
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// select theme manually 
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //save to localstorage
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ========== DISCLAIMER ============
console.log("This webpage is a fun project. Don't take data as guaranteed")