# Font Awesome Icons

Created: November 12, 2022 3:45 PM
Type: Section - Navigation
Materials: https://gettingstartedwith.css.education/ch3.html
Reviewed: No

## Takeaways

- Font Awesome is an awesome resource for icons 🙄

[Free Icons | Font Awesome](https://fontawesome.com/search?o=r&m=free)

- The pros prefer SVGs versus icons; here’s some reading on them:

[Adding vector graphics to the web - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web#what_is_svg)

- You’ll notice the markup taken directly from Font Awesome uses the <i> element which is referred to as the idiomatic text element which is used to otherwise make a bit of text discernable from other text for some reason. More info can be found here 👇

[&colon; The Idiomatic Text element - HTML&colon; HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)

- aria-hidden: HTML attribute that could be used to hid non-interactive content from screen readers, such as icons so that accessibility users don’t get confused. Here’s more info on this:

[aria-hidden - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)

- sr-only: A CSS class that when applied hides text from regular viewers but still enables screenreaders to read off the content to accessible users:

[Accessibility](https://fontawesome.com/docs/web/dig-deeper/accessibility#semantic-icons)

- CSS attribute selectors are used to style elements based on the presence of a give attribute (refer to Code Snippet 1)

[Attribute selectors - CSS&colon; Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

```css
nav [class*="fa-"] {
	font-size: 150%;
}
```