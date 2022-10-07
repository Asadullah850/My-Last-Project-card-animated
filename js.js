

const text = document.querySelector(".animat");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = " front end developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "web disenar";
    }, 4000);
    setTimeout(() => {
        text.textContent = "wordpress developer ";
    }, 8000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 12000);
}

textLoad();
setInterval(textLoad, 16000);
//1s = 1000 milliseconds