const h2 = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    setTimeout(() => {
    h2.textContent = 'ボタンをクリックしました';
    }, 2000)
  }
);