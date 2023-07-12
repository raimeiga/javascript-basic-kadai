const h2 = document.getElementById('text');
const button = document.getElementById('btn');

btn.addEventListener('mousedown', ()=> {

    h2.textContent = 'ボタンをクリックしました';
});

/* 模範解答コード
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    text.textContent = "ボタンをクリックしました";
});
*/