/**
 *
 * This script will take two fields value and will multiply them. If the results is less then to n, it will off the add to cart
 *
 * Here you can learn how to add a custom script to your site
 * https://barn2.com/kb/using-code-snippets/
 */

function checkSurface() {
  const numberFields = document.querySelectorAll('input[type="number"]');
  let valid = true;

  for (let i = 0; i < numberFields.length; i += 2) {
    const widthField = numberFields[i];
    const lengthField = numberFields[i + 1];

    if (!widthField || !lengthField) {
      continue; // Skip this iteration if either field is undefined
    }

    const width = parseFloat(widthField.value);
    const length = parseFloat(lengthField.value);
    const surface = width * length;

    if (isNaN(surface) || surface < 6) {
      valid = false;
    }
  }

  if (!valid) {
    addToCartButton.disabled = true;
    message.style.display = "block";
  } else {
    addToCartButton.disabled = false;
    message.style.display = "none";
  }
}
