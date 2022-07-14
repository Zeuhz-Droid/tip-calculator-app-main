# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

- [Frontend Mentor - Tip calculator app solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your challenge is to build out this calculator app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

The tip-calculator demo app can be used for businesses e.g restaurant, having paying customers. The app collects 3 customer
spending info

- Their bill for a particular service
- Tips, if they will, at a percentage to their bills
- and the number of people sorting the bill.

It then returns the Amount of Tip payable per person and the Total amount payable per person.

### Screenshot

![Image After coding](images/Built%20Desktop%20preview.png)

### Links

- Solution URL: [Solution codes](https://github.com/Zeuhz-Droid/tip-calculator-app-main)
- Live Site URL: [Hosted Github site](https://zeuhz-droid.github.io/tip-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [JavaScript](https://javascript.org/) - For functionality

### What I learned

I learnt how to structure my javascript codes, as i tried 3 or more times in refactoring my codes, not sure i still got the best format, but i know how to go about it when faced with a similar or more tasking challenge. STEP-BY-STEP.

```html
<div>
  <label for="custom" class="tip--btn btn-custom">
    <input
      type="number"
      min="1"
      max="100"
      id="custom"
      value=""
      class="tip--custom"
      name="tip"
      placeholder="Custom"
    />
  </label>
</div>
```

```css
.input::placeholder {
  padding: 0;
  font-size: 2rem;
  color: var(--light-grayish-cyan);
}

.input:focus {
  font-size: 2.3rem;
  outline: none;
  color: var(--very-dark-cyan);
}
```

```js
btnCustom.addEventListener("input", function (e) {
  getCustomAmount(billInput, btnCustom, noOfPeople);
});
```

### Continued development

Currently focusing on my JavaScript, brushing it up and hoping to take on newer projects and in the nearest future combine it together with React to effect my HTML markups.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This helped me for researching values of some css property and Javascript media queries. I really liked this pattern and will use it going forward.
- [w3 schools](https://www.w3schools.com/colors/colors_converter.asp) - This is an amazing color converter. Helped me convert colors from hsl to rgba.

## Author

- Website - [Zeuhz](coming soon...)
- Frontend Mentor - [@Zeuhz-Droid](https://www.frontendmentor.io/profile/Zeuhz-Droid)
- Twitter - [@zeuhzDroid](https://www.twitter.com/zeuhzDroid)

## Acknowledgments

I would love to acknowledge GOD for keeping me alive to write the code for this project and also my tutor Jonas Schedtmann for His deep and detailed explanations.
