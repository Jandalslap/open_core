
/* Javascript for Open Core Website */

/* Allow only alphabet letters in form First Name fields */
const FName = document.getElementById('FName');

FName.addEventListener('input', function() {
  const inputValue = FName.value;
  const onlyLetters = inputValue.replace(/[^A-Za-z]/g, '');
  FName.value = onlyLetters;
});

/* Allow only alphabet letters in form Last Name fields */
const LName = document.getElementById('LName');

LName.addEventListener('input', function() {
  const inputValue = LName.value;
  const onlyLetters = inputValue.replace(/[^A-Za-z]/g, '');
  LName.value = onlyLetters;
});



