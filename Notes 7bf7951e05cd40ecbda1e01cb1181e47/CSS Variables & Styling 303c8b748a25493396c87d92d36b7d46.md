# CSS Variables & Styling

Created: October 21, 2022 1:55 PM
Type: Section - Text
Materials: https://gettingstartedwith.css.education/ch2.html
Reviewed: No

<aside>
💡 **Notion Tip:** Add more details right in this page, including toggles, images, and webpage links, and more. Break up the page by using our different header options so that it’s easier to read. Learn more about different types of content blocks [here](https://www.notion.so/guides/types-of-content-blocks).

</aside>

## Takeaways

- To declare global CSS variables to be used throughout your CSS document you could combine the :root pseudo-class with —<variable name> to create global CSS variables.

ℹ️ :root has greater specificity than regular HTML tags.

[&colon;root - CSS&colon; Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:root#declaring_global_css_variables)

- Custom properties (variables) in CSS start with two dashes followed by the variable name. More info on CSS custom properties ⬇️

[Using CSS custom properties (variables) - CSS&colon; Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

- For a deeper dive on the box model in CSS and box sizing refer to the following CSS Tricks article 👇 Bonus: they give the current best practice way of universal box sizing with inheritance 😎

[Box Sizing | CSS-Tricks](https://css-tricks.com/box-sizing/#aa-universal-box-sizing-with-inheritance)

- Browsers will typically add some padding and margin surround the page, so to circumvent the following rule eliminates that:

```css
body {
	padding: 0;
	margin: 0;
}
```