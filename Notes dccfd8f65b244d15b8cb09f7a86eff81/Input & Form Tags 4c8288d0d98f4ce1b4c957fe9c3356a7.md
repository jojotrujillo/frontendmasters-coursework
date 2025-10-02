# Input & Form Tags

Created: October 21, 2022 1:55 PM
Type: Section - HTML
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/types-of-tags
Reviewed: No

<aside>
💡 **Notion Tip:** Add more details right in this page, including toggles, images, and webpage links, and more. Break up the page by using our different header options so that it’s easier to read. Learn more about different types of content blocks [here](https://www.notion.so/guides/types-of-content-blocks).

</aside>

## Types of Tags, Cont’d

input – Browser inputs. One of the most common types of inputs is the text input. You can also have these input tags do numbers, dates, colors, checkboxes, radio buttons, and others. Inputs are always self-closing tags.

```html
<input type="text" />
<input type="color" />
<input type="file" />
<input type="number" />
<input type="datetime-local" />
<input type="radio" />
<input type="checkbox" />
```

`textarea` – Similar to an input but for a lot more text. You'd type long-form responses in here that could include line-breaks. Despite never having anything inside of a `textarea`, it is not a self-closing tag.

`select` and `option` - A `select` is a user-interactive input that a user can select an option from a dropdown menu. An `option` is one of the available options. Each `option` needs a value that will be sent back to the server if the user select that `option`. What's inside of the option is what shown to the user:

```html
<select>
  <option value="seattle">Seattle</option>
  <option value="portland">Portland</option>
  <option value="san-francisco">San Francisco</option>
</select>
```

`form` – A group of html tags related to gathering data from a user. This will be some combination of `input`, `textarea`, and `select` tags. You can then use this `form` element to send that data to your server. A `form` tag itself doesn't show anything; it's a just a container for the other tags.