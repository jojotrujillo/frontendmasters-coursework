# Pseudo-classes

Created: October 30, 2022 12:48 PM
Type: Section - CSS
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/pseudoclasses-and-pseudoelements
Reviewed: No

Pseudo-classes can be used to apply CSS rules when certain elements in the DOM are in a specific condition, for example:

```html
<style>
  .hover-example {
    width: 100px;
    height: 100px;
    background-color: limegreen;
    color: white;
  }
  .hover-example:hover {
    background-color: crimson;
    width: 150px;
    height: 150px;
  }
</style>
<div class="hover-example">Hover your mouse over me</div>
```

The `:hover` part selects that element **only when that condition is true**. There are are many [CSS pseudo classes](https://css-tricks.com/pseudo-class-selectors/) like being able to only select the first element of something like this:

```html
<style>
  .first-child-example {
    color: crimson;
  }
  .first-child-example:first-child {
    color: limegreen;
  }
</style>
<ol>
  <li class="first-child-example">First</li>
  <li class="first-child-example">Second</li>
  <li class="first-child-example">Third</li>
</ol>
```