// Import stylesheets
import './style.css';
var count = 0;
var value = document.querySelector('#value');
var btns = document.querySelectorAll('.btn');
btns.forEach(function (btns) {
  btns.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('reset')) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'red';
    } else if (count < 0) {
      value.style.color = 'green';
    } else if (count === 0) {
      value.style.color = '#ccc';
    }

    value.textContent = count;
  });
});
