const dateOfBirth = document.querySelector("#inputDate");
dateOfBirth.addEventListener("submit", handleSubmit);

// get current date
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

function handleSubmit(event) {
  event.preventDefault();
  //get date of birth
  const birthDay = parseFloat(document.getElementById("day").value);
  const birthMonth = parseFloat(document.getElementById("month").value);
  const birthYear = parseFloat(document.getElementById("year").value);
  if (validateBirthDate(birthDay, birthMonth, birthYear)) {
    console.log("birth year are valid");
    ageCalculator(birthDay, birthMonth, birthYear);
  }
}

function ageCalculator(birthDay, birthMonth, birthYear) {
  // calculate age
  let yearOfAge = currentYear - birthYear;
  let monthOfAge = 0;
  let dayOfAge = 0;

  switch (birthMonth) {
    case 2:
      if (birthDay <= currentDay) {
        dayOfAge = currentDay - birthDay;
        if (birthMonth <= currentMonth) {
          monthOfAge = currentMonth - birthMonth;
        } else {
          monthOfAge = 12 + currentMonth - birthMonth;
          yearOfAge = yearOfAge - 1;
        }
      } else {
        dayOfAge = 31 + currentDay - birthDay;
        if (birthMonth <= currentMonth) {
          monthOfAge = currentMonth - birthMonth - 1;
        } else {
          monthOfAge = 12 + currentMonth - birthMonth - 1;
          yearOfAge = yearOfAge - 1;
        }
      }

      break;
    case 4:
    case 6:
    case 9:
    case 10:
      if (birthDay <= currentDay) {
        dayOfAge = currentDay - birthDay;
        if (birthMonth <= currentMonth) {
          monthOfAge = currentMonth - birthMonth;
        } else {
          monthOfAge = 12 + currentMonth - birthMonth;
          yearOfAge = yearOfAge - 1;
        }
      } else {
        dayOfAge = 31 + currentDay - birthDay;
        if (birthMonth <= currentMonth) {
          monthOfAge = currentMonth - birthMonth - 1;
        } else {
          monthOfAge = 12 + currentMonth - birthMonth - 1;
          yearOfAge = yearOfAge - 1;
        }
      }

      break;
    default:
      if (birthDay <= currentDay) {
        dayOfAge = currentDay - birthDay;
        if (birthMonth <= currentMonth) {
          monthOfAge = currentMonth - birthMonth;
        } else {
          monthOfAge = 12 + currentMonth - birthMonth;
          yearOfAge = yearOfAge - 1;
        }
      } else {
        dayOfAge = 30 + currentDay - birthDay;
        if (birthMonth <= currentMonth) {
          monthOfAge = currentMonth - birthMonth - 1;
        } else {
          monthOfAge = 12 + currentMonth - birthMonth - 1;
          yearOfAge = yearOfAge - 1;
        }
      }
      break;
  }

  console.log("day: ", dayOfAge, "- month:", monthOfAge, "- year:", yearOfAge);
  // display results
  const showYear = document.querySelector(".calculated-year");
  const showMoth = document.querySelector(".calculated-month");
  const showDay = document.querySelector(".calculated-day");
  showYear.innerText = yearOfAge;
  showMoth.innerText = monthOfAge;
  showDay.innerText = dayOfAge;
}
function validateBirthDate(birthDay, birthMonth, birthYear) {
  let dayError = false;
  let monthError = false;
  let yearError = false;

  const monthErrorMessage = document.querySelector(".month-error-message");
  const yearErrorMessage = document.querySelector(".year-error-message");
  const dayErrorMessage = document.querySelector(".day-error-message");

  if (birthYear < 0 || birthYear > currentYear || isNaN(birthYear)) {
    yearErrorMessage.style.opacity = 1;
    console.log("invalid birthYear");
    yearError = true;
  } else {
    yearErrorMessage.style.opacity = 0;
    console.log("Valid birthYear");
    yearError = false;
  }
  if (birthMonth < 1 || birthMonth > 12 || isNaN(birthMonth)) {
    monthErrorMessage.style.opacity = 1;
    console.log("invalid birthMonth");
    monthError = true;
  } else {
    monthErrorMessage.style.opacity = 0;
    console.log("Valid birthMonth");
    monthError = false;
  }
  if (birthDay < 1 || birthDay > 31 || isNaN(birthDay)) {
    dayErrorMessage.style.opacity = 1;
    console.log("invalid birthDay");
    dayError = true;
  } else {
    dayErrorMessage.style.opacity = 0;
    console.log("Valid birthDay");
    dayError = false;
  }
  if (dayError == true || yearError == true || monthError == true) {
    return false;
  }
  return true;
}
