ontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5).

## Table of contents

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

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

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

I learnt how to structure my javascript codes, as i tried 3 or more times in refactoring my code, not sure i still got the best format, but i know how to go about it when faced with a similar or more tasking challenge. STEP-BY-STEP.

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
