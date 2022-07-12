"use strict";
const billInput = document.querySelector(".bill--input");

const radioBtns = document.querySelectorAll('.tip--input[name="tip"]');
const btnCustom = document.querySelector(".btn-custom");
const noOfPeople = document.querySelector(".people--input");
const tipAmount = document.querySelector(".amount--tip");
const totalAmount = document.querySelector(".amount--total");
const btnReset = document.querySelector(".btn--reset");

const labelText = document.querySelector(".label--text");

let total,
  tip,
  custom,
  previousTip,
  previousTotal,
  customTip,
  customTotal,
  totalAmountPerPerson,
  tipAmountPerPerson,
  customTipAmountPerPerson,
  customTotalAmountPerPerson;

let isChecked = false;

const init = function () {
  tipAmount.textContent = `$0.00`;
  totalAmount.textContent = `$0.00`;
  billInput.value = "";
  noOfPeople.value = "";
  btnCustom.children[0].value = "";
  radioBtns.forEach((btn) => {
    btn.checked = false;
  });
};

btnReset.addEventListener("click", init);

const getTip = function (bill, btns) {
  btns.forEach((btn) => {
    if (btn.checked) {
      tip = (+btn.value * +bill.value) / 100;
      previousTip = tip;
    }
  });
};
getTip(billInput, radioBtns);

const getTipPerPerson = function (bill, btns, num) {
  btns.forEach((btn) => {
    if (btn.checked) {
      tipAmountPerPerson = (+bill.value * +btn.value) / 100 / +num.value;
      return tipAmountPerPerson;
    }
  });
};
getTipPerPerson(billInput, radioBtns, noOfPeople);

const getTotalPerPerson = function (bill, btns, num) {
  btns.forEach((btn) => {
    if (btn.checked) {
      totalAmountPerPerson =
        (+bill.value + (+btn.value * +bill.value) / 100) / +num.value;
      return totalAmountPerPerson;
    }
  });
};
getTotalPerPerson(billInput, radioBtns, noOfPeople);

billInput.addEventListener("input", function () {
  getTipPerPerson(billInput, radioBtns, noOfPeople);
  getTotalPerPerson(billInput, radioBtns, noOfPeople);
  if (noOfPeople.value && isChecked) {
    tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    totalAmount.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
  } else if (noOfPeople.value && !isChecked && btnCustom.children[0].value) {
    getCustomAmount(billInput, btnCustom, noOfPeople);
    tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    totalAmount.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
  } else {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
});

radioBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    isChecked = true;
    // getCustomAmount(billInput, btnCustom, noOfPeople);
    getTipPerPerson(billInput, radioBtns, noOfPeople);
    getTotalPerPerson(billInput, radioBtns, noOfPeople);

    if (billInput.value && noOfPeople.value) {
      tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
      totalAmount.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
    } else {
      tipAmount.textContent = "$0.00";
      totalAmount.textContent = "$0.00";
    }
    // isChecked = false;
  });
});

const getCustomAmount = function (bill, btn, num) {
  customTip = (+btnCustom.children[0].value * +bill.value) / 100;
  tipAmountPerPerson = (customTip ? customTip : previousTip) / +num.value;
  totalAmountPerPerson = (+billInput.value + customTip) / +num.value;

  if (btn.children[0].value && billInput.value && noOfPeople.value) {
    tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    totalAmount.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
  } else {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
};

btnCustom.addEventListener("input", function (e) {
  isChecked = false;
  getCustomAmount(billInput, btnCustom, noOfPeople);
});

noOfPeople.addEventListener("input", function (e) {
  console.log(e.srcElement.value);
  if (+e.srcElement.value !== 0 && +e.srcElement.value !== "") {
    labelText.classList.add("hide");
    labelText.classList.remove("show");
    getTipPerPerson(billInput, radioBtns, noOfPeople);
    getTotalPerPerson(billInput, radioBtns, noOfPeople);
    //   getCustomAmount(billInput, btnCustom, noOfPeople);

    if (billInput.value && isChecked) {
      tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
      totalAmount.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
    } else if (billInput && !isChecked && btnCustom.children[0].value) {
      getCustomAmount(billInput, btnCustom, noOfPeople);
      tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
      totalAmount.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
    } else {
      tipAmount.textContent = "$0.00";
      totalAmount.textContent = "$0.00";
    }
  }
  if (+e.srcElement.value === 0) {
    labelText.classList.remove("hide");
    labelText.classList.add("show");
  }
});

//////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
