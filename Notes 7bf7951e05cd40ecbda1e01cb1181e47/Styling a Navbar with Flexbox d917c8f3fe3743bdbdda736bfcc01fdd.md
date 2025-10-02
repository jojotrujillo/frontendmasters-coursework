# Styling a Navbar with Flexbox

Created: November 12, 2022 12:42 PM
Type: Section - Navigation
Materials: https://gettingstartedwith.css.education/ch3.html
Reviewed: No

## Takeaways

- Percentage values used in font-size is a relative measurement of the base text size within the element you’re applying the rule to:

[font-size - CSS&colon; Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#values)

- Much like the body element, web browsers tend to add default margin or padding to list tags so zeroing them out will help with styling confusion:

```css
ul {
	padding: 0;
	margin: 0;
}
```

- flex-flow is a shorthand property for both flex-direction and flex-wrap 👇

[flex-flow - CSS&colon; Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)

- gap is a newer CSS property that is shorthand for row-gap and column-gap. It sets the gutters between rows and columns:

[gap - CSS&colon; Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)

- More information regarding specificity in CSS with selectors, classes, and IDs ⤵️

[Specifics on CSS Specificity | CSS-Tricks](https://css-tricks.com/specifics-on-css-specificity/)