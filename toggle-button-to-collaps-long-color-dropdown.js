/**
 * Related: WooCommerce Product Options ( WPO )
 *
 * Usage: Customer has a table column where a product option ( Doprsown with color choice) is too long which is making the table looking wired. They wanted to have a button there so only upun cliking on that button will make the color list visible.
 *
 * How to use: Here you can learn how to add a custom script to your site
 * https://barn2.com/kb/using-code-snippets/
 */

document.addEventListener("DOMContentLoaded", function () {
  // Find all color checkboxes containers
  const colorCheckboxContainers = document.querySelectorAll(
    ".wpo-color-checkboxes"
  );

  colorCheckboxContainers.forEach(function (container) {
    // Create a button to toggle the color options
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Select Color";
    toggleButton.classList.add("color-toggle-button");

    // Insert the button before the color options container
    container.parentNode.insertBefore(toggleButton, container);

    // Hide the color options container initially
    container.style.display = "none";

    // Toggle visibility on button click
    toggleButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default action
      const isHidden = container.style.display === "none";
      container.style.display = isHidden ? "block" : "none";
    });
  });
});
