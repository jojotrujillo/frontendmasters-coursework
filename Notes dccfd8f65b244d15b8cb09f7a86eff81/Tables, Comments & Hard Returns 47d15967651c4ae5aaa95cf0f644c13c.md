# Tables, Comments & Hard Returns

Created: October 28, 2022 3:25 PM
Type: Section - HTML
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/types-of-tags
Reviewed: No

## Types of Tags, Cont’d

`table`, `tr`, and `td` – If you have a table of data, this is the best way to display it. When you have tabular data (something you would put into Excel) then `table`s are very useful. The `table` is the container for the whole table, `tr` represents a row, and `td` represents one cell in the table:

```html
<table>
  <tbody>
    <tr>
      <td>(0,0)</td>
      <td>(1,0)</td>
    </tr>
    <tr>
      <td>(0,1)</td>
      <td>(1,1)</td>
    </tr>
  </tbody>
</table>
```

```html
<!-- old, deprecated tag from the MySpace days -->
<marquee>
  This is a really old feature that only works in some browsers. You should
  never use it for a real website.
</marquee>
```

## Things to Know

HTML is all about semantics. If used properly and correctly then the semantics of the tags in the webpage will allow screen readers and other assistive technologies to do their jobs to help with disabled people and make the Internet equitable.

## Comments

Comments are for the programmer and not the computer. If you stop and think about it, programming languages themselves are for the programmer since the instructions in the language get compiled down to where the computer understands them, so it’d be foolish not to insert comments where necessary.

## Note Hard Returns

```html
<p>
  This is some text.

  This is some more text.
</p>
```

☝️That will not insert a space in the text. The new best practice way of inserting a space is:

```html
<p>This is some text.</p>

<p>This is some more text.</p>
```

It’s no longer this 👇 nor should you use the <br /> tag any longer

```html
<p>
  This is some text.
  <br />
  This is some more text.
</p>
```