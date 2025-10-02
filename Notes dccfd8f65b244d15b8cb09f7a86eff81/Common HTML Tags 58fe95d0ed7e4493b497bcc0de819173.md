# Common HTML Tags

Created: October 21, 2022 1:55 PM
Type: Section - HTML
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/types-of-tags
Reviewed: No

<aside>
💡 **Notion Tip:** Add more details right in this page, including toggles, images, and webpage links, and more. Break up the page by using our different header options so that it’s easier to read. Learn more about different types of content blocks [here](https://www.notion.so/guides/types-of-content-blocks).

</aside>

## Types of Tags

`a` – Anchor. An `a` tag is a link to somewhere else. Every `a`
 tag needs a destination of where the link should take you:

```html
<a href="https://www.frontendmasters.com">Frontend Masters</a>
```

`div` – Short for division. It's not really anything by itself; it's more defined by what's in it. Very useful with CSS. You want to group together "like" things into a containing tag (like a div) to keep them together.

```html
<div style="width: 100px; height: 100px; background-color: red;"></div>
```

`span` – A container for small pieces of text. If a div is like a cardboard box, a span is like a Ziploc bag. It doesn't change the styling of anything by itself but it allows you use CSS and JavaScript later to make that text different in some way:

```html
<p>This is <span style="text-decoration: underline">important</span> text</p>
```

`ol`, `ul`, and `li` – Both `ol` and `ul` represent lists. A `ul`
is an unordered list: it's a list of things that could be shuffled and still mean the same thing. An `ol` is an organized list: what comes first matters. In either list, each item in the list is an `li`:

```html
<ol>
  <li>The First One</li>
  <li>The Second One</li>
  <li>The Third One</li>
</ol>

<ul>
  <li>An Item in the List</li>
  <li>Another Item in the List</li>
  <li>A Yet Different Item in the List</li>
</ul>
```

`button` – A button can be used by JavaScript to respond to a user clicking it, or it can be used by a form to signal a user has completed filling it and it should submit the data.

`img` – An image. You use this to load images onto the page. This can be confusing because you can use CSS to bring in images. When the image is apart of the content, like a diagram that shows data or a picture that shows something from the article, it should be an `img` tag. If it's a nice background image or something that's for decoration, use CSS. An `img` tag needs a `src` to say where the image is coming from and `alt` to say what is in the image for screen readers so that the image will still be useful to blind people, people who are hard of seeing, and Google and Bing search engines. `img` are always self-closing tags:

```html
<img
     src="http://pets-images.dev-apis.com/pets/dog25.jpg"
     alt="an adorable puppy"
     />
```