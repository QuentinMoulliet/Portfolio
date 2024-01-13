const app = {

init: function () {
    app.addActiveButton();
    app.handleThemeToggle();
    app.initLocalStorage();
    app.saveToLocalStorage();
},

/**
 * Add active class to the button that was clicked
 * and remove active class from the button that was active
 */
addActiveButton: function () {
        document.querySelectorAll(".control").forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
},

/**
 * Toggle between light and dark mode
 */
handleThemeToggle: function () {
        document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        app.saveToLocalStorage();
    })
},

/**
 * Check if there is a saved theme in local storage
 * and apply it
 */
initLocalStorage: function () {
    const localModeSave = localStorage.getItem('lightMode');
    if (localModeSave) {
      const isLight = JSON.parse(localModeSave);
    if (isLight) {
        document.body.classList.add('light-mode');
      }
    }
    const localColorSave = localStorage.getItem('light-mode');
    if (localColorSave) {
      theme.handleThemeToggle(localColorSave);
    }
},

/**
* Save the current theme to local storage
*/
saveToLocalStorage: function () {
    const isLight = document.body.classList.contains('light-mode');
    const newLocalSave = JSON.stringify(isLight);
    localStorage.setItem('lightMode', newLocalSave);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
