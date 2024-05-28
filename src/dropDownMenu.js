import "./styles.css";

/**
 * Represents an option on a drop down menu
 */
export class MenuOption {
  /**
   * Create option for drop down menu
   * @param {*} title Display text to show on selector
   * @param {*} value unique value to identify selection
   */
  constructor(title, value) {
    this.title = title;
    this.value = value;
  }
}

/**
 * Builds a drop down menu HTML element
 * @param {*} title Title of dropdown
 * @param {*} options List of MenuOption objects
 * @param {*} callback Callback functions that takes selection value
 * @returns
 */
export function createDropDown(title, options, callback) {
  const dropDownElement = document.createElement("div");
  dropDownElement.classList.add("drop-down-menu");

  const menuButton = document.createElement("button");
  menuButton.textContent = title;
  menuButton.addEventListener("click", (e) => {
    menuOptions.classList.toggle("hide");
  });

  const menuOptions = document.createElement("ul");
  menuOptions.classList.add("hide");
  options.forEach((option) => {
    const menuOption = document.createElement("li");

    menuOption.textContent = option.title;
    menuOption.dataset.value = option.value;
    menuOptions.appendChild(menuOption);
  });

  menuOptions.addEventListener("click", (e) => {
    const value = e.target.dataset.value;
    if (value) callback(value);
  });

  dropDownElement.appendChild(menuButton);
  dropDownElement.appendChild(menuOptions);

  return dropDownElement;
}
