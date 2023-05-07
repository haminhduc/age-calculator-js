const dateOfBirth = document.querySelector("#inputDate");
dateOfBirth.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //get date of birth
  const birthDay = parseFloat(document.getElementById("day").value);
  const birthMonth = parseFloat(document.getElementById("month").value);
  const birthYear = parseFloat(document.getElementById("year").value);
  console.log(birthDay, birthMonth, birthYear);
  // get current date
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
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
