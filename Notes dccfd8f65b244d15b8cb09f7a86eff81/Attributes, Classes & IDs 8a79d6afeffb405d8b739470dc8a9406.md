# Attributes, Classes & IDs

Created: October 28, 2022 3:56 PM
Type: Section - HTML
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/attributes
Reviewed: No

## Attributes

Attributes allow you to modify behavior of a HTML tag. A good example is the `href` attribute of the `a` tag. By modifying the href we're modifying what the tag does. It's contextual as well: `href` only works on `a` tags. You can't add a `href` to a `div` and expect to suddenly work as a link. Another one we say is the `type` attribute on the `input`. By changing the type you're changing what sort of input is being shown:

```html
<input type="color" />
<h3 class="the-red-one">This one is red</h3>
```

`href` and `type` are specific to a few tags. There are other attributes like `class` and `id` that are universal and can be applied to (nearly) all tags. These themselves are inert; they don't do anything, but allow other things to find them later.

## Classes

You should use classes 95% of the time. A class is reusable. Now I could create another tag and that CSS style would be applied to it! You can also give multiple classes to one tag.

## IDs

An *ID is unique*. They're designed to not be reusable; they're unique to the page. Again, in general, even if you happen to have just one of something, it's best to just use classes for everything and more-or-less pretend that IDs are not an option at all. You really only want to use IDs when something is unique and you want to make sure it stays unique. A good example is if you have a JavaScript app that needs to put its HTML inside a specific div, you could use an ID for that.