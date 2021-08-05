// ==========================CLOCK===============================
const hour = document.getElementById("clock__hour"),
      minute = document.getElementById("clock__minute"),
      second = document.getElementById("clock__second");
const clock =  () => {
    let date = new Date();
    let hh = date.getHours() * 30 ;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minute.style.transform = `rotateZ(${mm}deg)`
    second.style.transform = `rotateZ(${ss}deg)`
}
const hours = document.getElementById("text-hour"),
      minutes = document.getElementById("text-minute"),
      textampm = document.getElementById("text-ampm"),
      dateday = document.getElementById("date-day"),
      datemonth = document.getElementById("date-month"),
      dateyear = document.getElementById("date-year");
const textClock = () => {
    let ampm;
   let date = new Date(),
        hhh = date.getHours(),
        mmm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();
        if(hhh>=12){
            hhh = hhh -12;
            ampm = "PM";
        }else{
            ampm = "AM";
        }
        if(hhh == 0){hhh= 12}
        if(hhh<10){
            hhh = `0${hhh}`
        }
        if(mmm < 10){mmm =`0${mmm}`}

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        textampm.innerHTML = ampm;
        hours.innerHTML = `${hhh}`
        minutes.innerHTML = `:${mmm}`
        dateday.innerHTML = `${day}-`
        datemonth.innerHTML = `${months[month]}-`
        dateyear.innerHTML = `${year}`
}
setInterval(clock,1000);
setInterval(textClock,1000);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
