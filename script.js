function linker1() {
    let a = document.getElementById("link1");
    a.addEventListener("click", function() {
        window.open("all projects/netflix-clone-main/clone.html", "_blank");
    });
}
function linker2() {
    let a = document.getElementById("link2");
    a.addEventListener("click", function() {
        window.open("all projects/spotify clone/home.html", "_blank");
    });
}
function linker3() {
    let a = document.getElementById("link3");
    a.addEventListener("click", function() {
        window.open("all projects/calculator/calculator.html", "_blank");
    });
}

function bar() {
    let a = document.getElementById('barr');
    a.style.transform = 'translateX(50%)';
    a.style.filter = 'opacity(0)';
}
function bar2() {
    let a = document.getElementById('barr');
    a.style.transform = 'translateX(0%)';
    a.style.filter = 'opacity(1)';
}

// let a = document.querySelectorAll('.cardanchor');

// a.addEventListener('hover', () => {
//     a.style.backgroundColor = 'orange';
// })

// function player() {
//     let a = document.getElementById("vid");
//     a.autopay = true;
// }
