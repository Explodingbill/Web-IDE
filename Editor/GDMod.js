var a = [
    "a",
    "b"
];

var projectName = "HEHEHEHA";


const textTitle = document.getElementById('title');

function UpdateGDMod()
{
    window.scrollTo(0, -100);
    textTitle.innerHTML = "GDMod  -  " + projectName + ".gdmm";
}


const start = () => {
    window.requestAnimationFrame(UpdateGDMod);
  }
window.addEventListener('load', start);