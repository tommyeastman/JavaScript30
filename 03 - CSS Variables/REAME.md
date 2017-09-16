#Working with CSS variables

define the CSS variables under the :root{} tag.
  define a new variable a = 2 with --a: 2;
  can reference this variable in any other CSS tag i.e.
  h1{
    padding: var(--a);
  }

Define color, spacing and blur variables then reference them in .hl and img.

Define some HTML inputs, sliders and color pickers, that will update the CSS variables.
Select the inputs using document.querySelectorAll().
document.querySelectorAll() will return a NodeList by default.
NodeList is like an array - has square brackets, an index, and length.
But the difference is that it has much less methods avaialable.
Can see the avaialable methods for any object by clicking the _proto_ dropdown
in Chrome's console.
Sometimes will want to convert NodeLists to arrays, but sometimes can just
work with them, as we do here.

Use the .forEach() method of the NodeList instead of a for loop to apply the same
methodology for all 3 inputs. The methodology is to update the CSS variable based on
the inputs, any time the mouse is moved or the final value is changed.

For pixel values, need to append "px". This value is defined as a data attribute
in the HTML, data-sizing.
