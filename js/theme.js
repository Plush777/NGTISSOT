const darkModeEvent = document.querySelector('.btnDarkMode');
let choiceTheme = localStorage.getItem('theme');
let prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
let prefresLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
const domBody = document.body;

window.onload = () => {
        if (choiceTheme === 'dark') {
            domBody.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            domBody.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }

        if(prefersDarkTheme != choiceTheme){
            if(prefersDarkTheme){
                domBody.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else if(prefresLightTheme){
                domBody.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }
};

const darkActive = () => {
    domBody.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

const darkDeactive = () => {
    domBody.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}

darkModeEvent.addEventListener('click', () => {
        choiceTheme = localStorage.getItem('theme');
        if (choiceTheme === 'light') {
            darkActive();
        } else {
            darkDeactive();
        }
});