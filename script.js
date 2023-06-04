/**
 * Show the tab content with the specified ID and hide all othertabs.
 * @param {string} tabId - The ID of the tab to activate.
 * @param {string} tabsWrapClass - The class of the tab wrapper elements.
 */
function activateTabs(tabId, tabsWrapClass) {
  const tabWrappers = document.querySelectorAll("." + tabsWrapClass);

  // Check if there are any elements with the specified class
  if (!tabWrappers.length) {
    console.error("No elements found with class " + tabsWrapClass);
    return;
  }

  // Loop through all tab wrappers
  tabWrappers.forEach((wrapper) => {
    const isTargetTab = wrapper.id === tabId;

    // Hide all tab wrappers except the target one
    wrapper.style.display = isTargetTab ? "grid" : "none";
  });
}

function switchBurgerMenu(
  classWrapper,
  activationClass,
  classTrigger,
  additionalActivatingClass
) {
  if (!classWrapper || !activationClass || !classTrigger) {
    throw new Error("class is undefined");
  }

  const wrapper = document.querySelector(`.${classWrapper}`);
  const trigger = document.querySelector(`.${classTrigger}`);

  trigger.addEventListener("click", () => {
    wrapper.classList.toggle(activationClass);
  });

  const additionalActivation = document.querySelectorAll(
    `.${additionalActivatingClass}`
  );

  additionalActivation.forEach((element) => {
    element.addEventListener("click", () => {
      trigger.click();
    });
  });
}

switchBurgerMenu(
  "burger-menu",
  "burger-menu--active",
  "trigger",
  "burger-menu__сatigories"
);
