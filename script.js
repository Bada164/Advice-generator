const btn = document.querySelector('.btn');

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        document.querySelector('h2').innerHTML = `ADVICE #${data.slip.id}`;
        document.querySelector('h1').innerHTML = `"${data.slip.advice}"`;
    });
}


btn.addEventListener('click', getAdvice);