/**
 *
 * Related: WooCommerce Product Options ( WPO )
 *
 * Usage: Remove the option price from the dropdown field type
 *
 * How to use: Here you can learn how to add a custom script to your site
 * https://barn2.com/kb/using-code-snippets/
 */

document.addEventListener("DOMContentLoaded", function () {
  // Select all <select> elements within the .wpo-field div
  document
    .querySelectorAll('.wpo-field select[name*="wpo-option"]')
    .forEach(function (selectElement) {
      // Iterate through each option element inside the select element
      selectElement
        .querySelectorAll("option")
        .forEach(function (optionElement) {
          // Remove the text inside parentheses (including the parentheses)
          optionElement.textContent = optionElement.textContent.replace(
            /\s*\(.*?\)/,
            ""
          );
        });
    });
});
