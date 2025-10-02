# CSS Overview & Rules

Created: October 29, 2022 12:32 PM
Type: Section - CSS
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/rules
Reviewed: No

## Rules

```css
h1 {
  color: red;
}
```

The above ☝️ code snippet is a simple CSS rule.

`h1` - This is what we'd call the **selector**. Anything that matches this selector is going to have everything inside the `{}` applied to it.

`color:` – This is called the **property**. There are about [~350 properties](https://meiert.com/en/indices/css-properties/) that you can use but to be honest you'll never use all of them. The `color` property affects the color of the font.

`red` – This is the **value**. This identifies what the value of the property is going to be. In this case, we're telling the color to be red. This is called using "named color", of which there are about [150 different colors](https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/) that CSS understands. CSS also understands hex values like `#ff0000`, rgb values like `rgb(255, 0, 0)`, and hsl values like `hsl(0, 100%, 50%)`. Here's a great article regarding different syntaxes for colors from [CSS Tricks](https://css-tricks.com/nerds-guide-color-web/).

Every property-value pair will end in a semicolon.

```css
h1 {
  color: limegreen;
  font-size: 60px;
  font-weight: normal;
  text-decoration: underline;
  text-transform: uppercase;
  border: 3px solid pink;
}
```

`font-size: 60px;` – `font-size`is how we make text bigger or smaller. The `px` represents the unit of measurement. It’s different to say something is `60px` or `60em`. CSS has a bunch of different measurements, but *most* things are measured in `px`, `em`, or `rem`. [See this CSS Tricks article](https://css-tricks.com/the-lengths-of-css/) if you want see more about the various measurements of CSS.

`font-weight: normal;` – This is how you tell the browser to keep the text's weight to normal.

`text-decoration: underline;` – This is how you tell it to underline the text. Mostly text-decoration is used for that but you'll also see `line-through` for strikethrough.

`text-transform: uppercase;` – This can be a bit confusing because we're not changing the text inside the HTML tag but we're making everything uppercase. It will also do `lowercase` or `capitalize` (the latter being capitalize the first letter of each word.) Be careful with this since if your website supports other languages, changing the cases of letters will modify the meaning.

`border: 3px solid pink;` – This is how you make borders around items. Notice we have three values for the one property: `3px`, `solid`, and `pink`. These are all separate and could be put in any order (i.e. you could say `border: solid pink 3px;` and it's the same.) The `3px` represents the thickness of the border, the `solid` represents that it's a solid line (it could be `dotted`, `dashed`, `double`, or a few others) and `pink` represents the color of the border. This is actually an example of a combined CSS property, a shortcut. You could separate this out as `border-style: solid;`, `border-color: pink;`, and `border-width: 3px;`.

## Parents and Children

```html
<div>
  <h1>An h1</h1>
</div>
```

```css
div {
  color: blue;
}
```

☝️ The `h1` will be colored blue. This is because it has a parent (or ancestor) tag that is a `div` which means that CSS will still affect it.