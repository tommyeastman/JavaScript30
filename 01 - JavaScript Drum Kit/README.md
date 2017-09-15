kbd is an HTML tag which refers to keyboard input.
4rem means 400% bigger than default html element.
So if html default in Chrome for kbd is fontsize10, this will make it fontsize40.

Get JS keycode for any key:
http://keycode.info/

always use backticks on the outside and either single or double quotes on the inside for
querySelector. i.e.
const audio1 = document.querySelector(`audio[data-key="65"]`);
const audio2 = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const audio1 = document.querySelector(`audio[data-key='65']`);
const audio2 = document.querySelector(`audio[data-key='${e.keyCode}']`);
Is this true of everything in JS or just this method?
