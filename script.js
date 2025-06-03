// window.addEventListener("load", function () {
//     document.getElementById("body").style.display = "block";
//   });

let btnCursor = document.querySelector(".btn-cursor");
let getGsapButton = document.querySelector(".get-gsap-button");
let hamburgerMenuContainer = document.querySelector(
  ".hamburger-menu-container"
);
// let announcementContainer = document.querySelector(".announcement-container");
let body = document.querySelector("body");

let audio = document.querySelector("#aud");
let loginCont = document.querySelector(".login-container");
let hamAudio = document.querySelector(".hamburger-menu-container-up p");



let tl35 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".main25",
    start: "top 40%",
    // markers: true,
  },
});

tl35.from(".main-para", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  ease: "elastic.out(1,0.9)",
});
tl35.from(
  ".main25 > img",
  {
    x: "150%",
    duration: 3,
    y: "-200%",
    opacity: 0,
    scale: 0,
    rotate: 600,
    ease: "elastic.out(1,0.7)",
  },
  "-=0.5"
);
tl35.from(
  ".main25 .time",
  {
    x: "-150%",
    duration: 3,
    y: "-200%",
    opacity: 0,
    scale: 0,
    rotate: -600,
    ease: "elastic.out(1,0.7)",
  },
  "-=3.3"
);
tl35.from(
  ".main25 .adha",
  {
    x: "-150%",
    duration: 3.5,
    y: "200%",
    opacity: 0,
    scale: 0,
    rotate: -600,
    ease: "elastic.out(1,0.7)",
  },
  "-=2.5"
);

// function breakText2(container, spanWithClass = "") {
  let textContainer = document.querySelector(".main-para");
  let text = textContainer.textContent;
  // console.log(animateP);
  let clutter = "";

  // text.split("");
  // console.log(split);
  let splitted = text.split(" ");
  let i = 0;
  splitted.forEach((letter) => {
    clutter += `<span class="broken">${letter + '&#160'}</span>`;
    // i++;
  });
  // console.log(text);
  textContainer.innerHTML = clutter;


gsap.to(".broken", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".main-para",
    // markers: true,
    start: "top 90%",
    end: "300px 90%",
    scrub: true,
  },
  color: "orange",
  duration: 1,
  stagger: 0.2,
})




let audioToggle = false;
// audio.play();
loginCont.addEventListener("click", () => {
  if (audioToggle) {
    audio.pause();
    audio.currentTime = 0; // optional: reset to start
    audioToggle = false;
    loginCont.style.backgroundColor = "#fffce18f";
  } else {
    audio.play();
    audioToggle = true;
    loginCont.style.backgroundColor = "orange";
  }
});
hamAudio.addEventListener("click", () => {
  if (audioToggle) {
    audio.pause();
    audio.currentTime = 0; // optional: reset to start
    audioToggle = false;
    hamAudio.style.backgroundColor = "gray";
  } else {
    audio.play();
    audioToggle = true;
    hamAudio.style.backgroundColor = "orange";
  }
});
let mainCursor = document.querySelector(".main-cursor");
if (window.innerWidth < 800) {
  mainCursor.style.display = "none";
}

if (window.innerWidth > 800) {
  body.addEventListener("mousemove", (dets) => {
    let detsX = dets.clientX;
    let detsY = dets.clientY;
    // console.log(detsX);

    gsap.to(mainCursor, {
      x: detsX,
      y: detsY,
      duration: 0.3,
      // ease: "elastic.out(1,0.9)"
    });
  });
}

// let getResume = document.querySelector(".get-gsap-button2");
// getResume.addEventListener("click", () => {
//   window.open("https://www.google.com");
// });

getGsapButton.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 800) return;
  const rect = getGsapButton.getBoundingClientRect();
  const x = e.x - rect.left;
  const y = e.y - rect.bottom;
  gsap.to(btnCursor, {
    opacity: 1,
    x: x,
    y: y,
    duration: 0,
  });
});
getGsapButton.addEventListener("mouseenter", () => {
  if (window.innerWidth < 800) return;
  gsap.to(".btn-cursor", {
    scale: 20,
    duration: 0.6,
  });
});
getGsapButton.addEventListener("mouseleave", () => {
  if (window.innerWidth < 800) return;
  gsap.to(".btn-cursor", {
    scale: 0,
    duration: 0.5,
  });
});
let toggler = true;
getGsapButton.addEventListener("click", () => {
  if (window.innerWidth > 800) return;
  // if(toggler) {
  let isMenuOpen = toggler;
  hamburgerMenuContainer.style.visibility = isMenuOpen ? "visible" : "";
  document.querySelector(".hamburger-menu-container-up").style.transform =
    isMenuOpen ? "translateX(100%)" : "";
  document.querySelector(".hamburger-menu-container-down").style.transform =
    isMenuOpen ? "translateX(-100%)" : "";
  // announcementContainer.style.display = isMenuOpen ? "none" : "";
  getGsapButton.style.borderColor = isMenuOpen ? "black" : "";
  getGsapButton.style.color = isMenuOpen ? "black" : "";
  body.style.overflow = isMenuOpen ? "hidden" : "";
  document.querySelector(".menu-text").style.color = isMenuOpen ? "black" : "";
  // document.querySelector(".site").style.display = isMenuOpen ? "none" : "";
  document.querySelectorAll(".ham path").forEach((path) => {
    path.style.fill = isMenuOpen ? "black" : "";
  });
  // document.querySelector(".logo-container").style.color = isMenuOpen ? "black" : "";
  document.querySelectorAll(".gsap-logo path").forEach((path) => {
    path.style.fill = isMenuOpen ? "black" : "";
  });
  toggler = !toggler;
});
let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
if (window.innerWidth > 800) {
  gsap.to(".animate .windmill1", {
    delay: 2,
    // rotate: 0,
    x: "430px",
    ease: "power1.out",
    // onComplete: () => {
    //     tl.kill(); // stops timeline, but doesn't revert the styles
    // },
  });
}
if (window.innerWidth < 800) {
  gsap.to(".animate .windmill1", {
    ease: "power1.out",
    delay: 2,
    // rotate: 90,
    x: "172px",
  });
}

// if(window.innerWidth > 720) {
tl.to(".animate .windmill1", {
  rotate: 90,
  duration: 0.2,
  delay: 1,
  ease: "power1.out",
  // repeat: -1,
});
tl.to(".animate .windmill1", {
  rotate: 180,
  duration: 0.2,
  delay: 1,
  ease: "power1.out",
  // repeat: -1,
});
tl.to(".animate .windmill1", {
  rotate: 270,
  duration: 0.2,
  delay: 1,
  ease: "power1.out",
  // repeat: -1,
});
tl.to(".animate .windmill1", {
  rotate: 360,
  duration: 0.2,
  delay: 1,
  ease: "power1.out",
});

function breakText(container, spanWithClass = "") {
  let textContainer = document.querySelector(container);
  let text = textContainer.textContent;
  // console.log(animateP);
  let clutter = "";

  // text.split("");
  // console.log(split);
  let splitted = text.split("");
  let i = 0;
  splitted.forEach((letter) => {
    clutter += `<span class="${spanWithClass} ${
      spanWithClass + i
    }">${letter}</span>`;
    // console.log();
    i++;
  });
  textContainer.innerHTML = clutter;

  // console.log(clutter);
}
breakText(".animate-p", "animate-splitted-letter");
let animateLetter0 = document.querySelector(".animate-splitted-letter0");
// animateLetter0.style.position = "relative";
let animateLetter0Overlay = document.createElement("span");
animateLetter0Overlay.className = "animateLetter0Overlay";
animateLetter0.appendChild(animateLetter0Overlay);
// animateLetter0Overlay.style

let tl2 = gsap.timeline();
tl2.to(".animateLetter0Overlay", {
  y: "80%",
  delay: 0,
});
tl2.set(".animateLetter0Overlay", {
  display: "none",
});
// animateLetter0Overlay.style.display = "none";
let tl3 = gsap.timeline();
tl3.to(".animate-splitted-letter0", {
  // y: 163,
  y: "80%",
});
tl3.to(".animate-splitted-letter0", {
  scaleY: 1,
  y: 0,
  transformOrigin: "center center",
  // opacity: 0,
  // duration: ,
  // delay: 0.5,
});
// let animateLetter1 = document.querySelector(".animate-splitted-letter1");
// animateLetter1.style.position = "relative";
// let animateLetter1Overlay = document.createElement("span");
// animateLetter1Overlay.className = "animateLetter1Overlay";
// animateLetter1.appendChild(animateLetter1Overlay);

tl3.from(".animate-splitted-letter1", {
  delay: 0.8,
  y: "150%",
});
gsap.from(".animate-splitted-letter2", {
  y: "-150%",
  delay: 1,
  duration: 1.5,
  ease: "elastic.out(1,0.9)",
});

gsap.from(".animate-splitted-letter3", {
  x: "-100%",
  delay: 1.7,
  // paddingLeft: "20px",
});
gsap.from(".animate-splitted-letter4", {
  y: "150%",
  delay: 3.7,
  duration: 1,
  ease: "elastic.out(1,0.9)",
});

let animateLetter3 = document.querySelector(".animate-splitted-letter3");
animateLetter3.style.position = "relative";
let animateLetter3Overlay = document.createElement("span");
animateLetter3Overlay.className = "animateLetter3Overlay";
animateLetter3.appendChild(animateLetter3Overlay);
let tl4 = gsap.timeline();
tl4.to(".animateLetter3Overlay", {
  x: "-100%",
  delay: 1.7,
});
tl4.set(".animateLetter3Overlay", {
  display: "none",
});

let animateLetter5 = document.querySelector(".animate-splitted-letter5");
animateLetter5.style.position = "relative";
let animateLetter5Overlay = document.createElement("span");
animateLetter5Overlay.className = "animateLetter5Overlay";
animateLetter5.appendChild(animateLetter5Overlay);
animateLetter5Overlay.innerText = "1";

let tl5 = gsap.timeline();
tl5.to(".animate-splitted-letter5", {
  y: "150%",
  delay: 1.75,
});
// tl6.to(".animateLetter5Overlay", {
//     y: "-150%",
//     delay: 2,
// }, "-=1")
tl5.to(".animate-splitted-letter5", {
  y: "0%",
  delay: 0.25,
  duration: 0.8,
});

let animateLetter6 = document.querySelector(".animate-splitted-letter6");
animateLetter6.style.position = "relative";
let animateLetter6Overlay = document.createElement("span");
animateLetter6Overlay.className = "animateLetter6Overlay";
animateLetter6.appendChild(animateLetter6Overlay);
if (window.innerWidth > 800) {
  animateLetter6Overlay.innerText = "00";
} else {
  animateLetter6Overlay.innerText = "0";
}
let tl6 = gsap.timeline();

tl6.to(".animate-splitted-letter6", {
  y: "150%",
  delay: 2,
});
tl6.to(
  ".animateLetter6Overlay",
  {
    y: "-150%",
    delay: 2,
  },
  "-=2"
);
tl6.to(
  ".animateLetter5Overlay",
  {
    y: "-150%",
    delay: 2,
  },
  "-=1.5"
);
tl6.to(
  ".animate-splitted-letter6",
  {
    y: "0%",
    delay: 0.25,
    duration: 0.8,
  },
  "-=1.5"
);

let tl7 = gsap.timeline();
if (window.innerWidth < 1160 && window.innerWidth > 800) {
  tl7.to(".animate .flower1", {
    scale: 90,
    delay: 0.8,
    duration: 0.35,
    ease: "power1.in",
  });
  tl7.to(".animate .flower1", {
    scale: 80,
    duration: 0.2,
    ease: "power1.out",
  });
  tl7.to(".animate .flower1", {
    y: -150,
    delay: 0.05,
    opacity: 0,
    duration: 0.5,
  });
}
if (window.innerWidth > 800) {
  tl7.to(".animate .flower1", {
    scale: 170,
    delay: 0.8,
    duration: 0.35,
    ease: "power1.in",
  });
  tl7.to(".animate .flower1", {
    scale: 140,
    duration: 0.2,
    ease: "power1.out",
  });
  tl7.to(".animate .flower1", {
    y: -150,
    delay: 0.05,
    opacity: 0,
    duration: 0.5,
  });
}

if (window.innerWidth < 800) {
  tl7.to(".animate .flower1", {
    scale: 45,
    delay: 0.8,
    duration: 0.35,
    ease: "power1.in",
  });
  tl7.to(".animate .flower1", {
    scale: 35,
    duration: 0.2,
    ease: "power1.out",
  });
  tl7.to(".animate .flower1", {
    y: -150,
    delay: 0.05,
    opacity: 0,
    duration: 0.5,
  });
}

let tl8 = gsap.timeline();
if (window.innerWidth < 1160 && window.innerWidth > 800) {
  gsap.to(".animate .chakri1", {
    rotate: 360,
    repeat: -1,
    duration: 3,
    ease: "none",
  });
  tl8.to(".animate .chakri1", {
    scale: 60,
    delay: 0.8,
    duration: 0.35,
    delay: 1.1,
    ease: "power1.in",
  });
  tl8.to(".animate .chakri1", {
    scale: 50,
    duration: 1,
    duration: 0.2,
    ease: "power1.out",
  });
  tl8.to(".animate .chakri1", {
    x: "145px",
    // delay: 0.3,
    // opacity: 0,
    ease: "power1.out",
    duration: 0.5,
  });
  tl8.to(".animate .chakri1", {
    y: "130%",
    delay: 1.2,
    // opacity: 0,
    duration: 0.5,
    ease: "power1.in",
  });
}

if (window.innerWidth > 800) {
  gsap.to(".animate .chakri1", {
    rotate: 360,
    repeat: -1,
    duration: 3,
    ease: "none",
  });
  tl8.to(".animate .chakri1", {
    scale: 90,
    delay: 0.8,
    duration: 0.35,
    delay: 1.1,
    ease: "power1.in",
  });
  tl8.to(".animate .chakri1", {
    scale: 80,
    duration: 1,
    duration: 0.2,
    ease: "power1.out",
  });
  tl8.to(".animate .chakri1", {
    x: "500px",
    // delay: 0.3,
    // opacity: 0,
    ease: "power1.out",
    duration: 0.5,
  });
  tl8.to(".animate .chakri1", {
    y: "150%",
    delay: 1.2,
    // opacity: 0,
    duration: 0.5,
    ease: "power1.in",
  });
}

if (window.innerWidth < 800) {
  gsap.to(".animate .chakri1", {
    rotate: 360,
    repeat: -1,
    duration: 3,
    ease: "none",
  });
  tl8.to(".animate .chakri1", {
    scale: 35,
    delay: 0.8,
    duration: 0.35,
    delay: 1.1,
    ease: "power1.in",
  });
  tl8.to(".animate .chakri1", {
    scale: 25,
    duration: 1,
    duration: 0.2,
    ease: "power1.out",
  });
  tl8.to(".animate .chakri1", {
    x: "130px",
    // delay: 0.3,
    // opacity: 0,
    ease: "power1.out",
    duration: 0.5,
  });
  tl8.to(".animate .chakri1", {
    y: "130%",
    delay: 1.2,
    // opacity: 0,
    duration: 0.5,
    ease: "power1.in",
  });
}

breakText(".anything-p", "anything-splitted-letter");

let anythingLetter0 = document.querySelector(".anything-splitted-letter0");
anythingLetter0.style.position = "relative";
let anythingLetter0Overlay = document.createElement("span");
anythingLetter0Overlay.className = "anythingLetter0Overlay";
anythingLetter0.appendChild(anythingLetter0Overlay);
anythingLetter0Overlay.innerText = "P";

let tl9 = gsap.timeline();
tl9.to(".anything .anything-splitted-letter0", {
  y: "0%",
  duration: 1.2,
  delay: 1.8,
  ease: "elastic.out(1,0.9)",
});
tl9.to(".anything .anything-splitted-letter0", {
  y: "100%",
  duration: 1.6,
  ease: "elastic.out(2,0.9)",
  // ease: "elastic.inOut(1,0.3)"
});
tl9.to(".anything .anything-splitted-letter0", {
  y: "0%",
  duration: 1,
  ease: "elastic.out(1,0.9)",
});
let anythingLetter1 = document.querySelector(".anything-splitted-letter1");
anythingLetter1.style.position = "relative";
let anythingLetter1Overlay = document.createElement("span");
anythingLetter1Overlay.className = "anythingLetter1Overlay";
anythingLetter1.appendChild(anythingLetter1Overlay);
anythingLetter1Overlay.innerText = "r";

let tl10 = gsap.timeline();
tl10.to(".anything .anything-splitted-letter1", {
  y: "0%",
  duration: 1.2,
  delay: 2,
  ease: "elastic.out(1,0.9)",
});
tl10.to(".anything .anything-splitted-letter1", {
  y: "100%",
  duration: 1.5,
  ease: "elastic.out(2,0.9)",
  // ease: "elastic.inOut(1,0.3)"
});
tl10.to(".anything .anything-splitted-letter1", {
  y: "0%",
  duration: 1,
  ease: "elastic.out(1,0.9)",
});

let tl11 = gsap.timeline();
tl11.from(".anything .anything-splitted-letter4", {
  scale: 0,
  duration: 1.5,
  delay: 1.8,
  ease: "elastic.out(1,0.9)",
});
tl11.to(".anything .anything-splitted-letter4", {
  scaleX: -1,
  // delay: 1.4,
  duration: 0.5,
  ease: "none",
});
tl11.to(".anything .anything-splitted-letter4", {
  scaleX: 1,
  // delay: 0.5,
  duration: 0.5,
});

let anythingLetter3 = document.querySelector(".anything-splitted-letter3");
anythingLetter3.style.position = "relative";
let anythingLetter3Overlay = document.createElement("span");
anythingLetter3Overlay.className = "anythingLetter3Overlay";
anythingLetter3.appendChild(anythingLetter3Overlay);
anythingLetter3Overlay.innerHTML = `<svg class="thunder1" viewBox="0 0 134 229" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path id="bolt-path" fill-rule="evenodd" clip-rule="evenodd" d="M101.08 11C102.439 11 103.402 12.3264 102.982 13.6187L78.6746 88.3335C78.2542 89.6259 79.2175 90.9522 80.5765 90.9522H108.983C110.634 90.9522 111.574 92.8401 110.579 94.1577L10.2304 227L39.4408 125.708C39.8095 124.429 38.8499 123.154 37.5191 123.154H7.82733C6.44727 123.154 5.48193 121.789 5.94147 120.488L44.1353 12.334C44.4176 11.5346 45.1733 11 46.0211 11H101.08Z" stroke="orange" stroke-width="4" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path>
<mask id="mask0_1413_68143" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="134" height="227">
<rect id="bolt-rect" width="134" height="227" fill="orange" data-svg-origin="67 227" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; translate: none; rotate: none; scale: none;"></rect>
</mask>
<g mask="url(#mask0_1413_68143)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M102.08 10C103.439 10 104.402 11.3264 103.982 12.6187L79.6746 87.3335C79.2542 88.6259 80.2175 89.9522 81.5765 89.9522H109.983C111.634 89.9522 112.574 91.8401 111.579 93.1577L11.2304 226L40.4408 124.708C40.8095 123.429 39.8499 122.154 38.5191 122.154H8.82733C7.44727 122.154 6.48193 120.789 6.94147 119.488L45.1353 11.334C45.4176 10.5346 46.1733 10 47.0211 10H102.08Z" fill="orange"></path>
</g>
</svg>`;
let tl12 = gsap.timeline();
tl12.to(".anything .anythingLetter3Overlay ", {
  scale: 1,
  duration: 3,
  delay: 1,
  ease: "elastic.out(1,0.2)",
});
tl12.to(".anything .anythingLetter3Overlay ", {
  scale: 0,
  duration: 0.5,
  delay: 0,
  // ease: "none"
  ease: "elastic.in(1,0.6)",
});
tl12.to(".anything .anything-splitted-letter3", {
  scale: 0,
  // y: "0%",
  duration: 0,
  delay: 0,
  // delay: 1,
  // ease: "elastic.out(1,0.9)"
  ease: "none",
});
tl12.to(".anything .anything-splitted-letter3", {
  // scale: 0,
  y: "0%",
  duration: 0,
  delay: 0,
  // delay: 1,
  ease: "none",
});
tl12.to(
  ".anything .anything-splitted-letter3",
  {
    scale: 1,
    duration: 0.5,
    delay: 1,
    ease: "elastic.out(1,0.9)",
  },
  "-=0.9"
);
gsap.from(".anything .anything-splitted-letter2", {
  y: "-100%",
  duration: 1,
  delay: 2.3,
  ease: "elastic.out(1,0.8)",
});

let anythingLetter6 = document.querySelector(".anything-splitted-letter6");

gsap.from(".anything .anything-splitted-letter6", {
  visibility: "hidden",
  delay: 2.3,
});
let tl13 = gsap.timeline({ repeat: -1, repeatDelay: 0 });
tl13.to(".anything .anything-splitted-letter6", {
  scaleY: -1,
  delay: 2.5,
  duration: 0.2,
  ease: "none",
  // ease: "elastic.out(1,0.8)",
  // repeat: -1,
});
tl13.to(".anything .anything-splitted-letter6", {
  scaleY: 1,
  duration: 0.2,
  delay: 0,
  ease: "none",
  // ease: "elastic.out(1,0.8)",
  // repeat: -1,
});
tl13.to(".anything .anything-splitted-letter6", {
  scaleY: -1,
  // duration: 0.2,
  delay: 0,
  // repeat: -1,
  ease: "elastic.out(1,0.8)",
});
tl13.to(".anything .anything-splitted-letter6", {
  scaleY: -1,
  delay: 0,

  duration: 2.5,
  // repeat: -1,
});

// mid
tl13.to(".anything .anything-splitted-letter6", {
  scaleY: 1,
  duration: 0.2,
  delay: 0,
  ease: "none",
  // ease: "elastic.out(1,0.8)",
  // textContent: ";",
  // repeat: -1,
});
// tl13.to(".anything .anything-splitted-letter5", {
//     scaleY : 1,
//     duration: 0.2,
//     delay: 0,
//     ease: "none",
//     // ease: "elastic.out(1,0.8)",
//     // repeat: -1,
// })
tl13.to(".anything .anything-splitted-letter6", {
  scaleY: -1,
  duration: 0.2,
  delay: 0,
  ease: "none",
  // repeat: -1,
});
tl13.to(".anything .anything-splitted-letter6", {
  scaleY: 1,
  delay: 0,
  // duration: 0.2,
  ease: "elastic.out(1,0.8)",

  // duration: 2.5,
  // repeat: -1,
});
// tl13.set(".anything .anything-splitted-letter6", {

// })
//     tl13.set(".anything .anything-splitted-letter6", {
//         textContent: ":",
// })
tl13.to(".anything .anything-splitted-letter6", {
  scaleY: 1,
  delay: 0,
  textContent: ";",
  // duration: 2.5,
  ease: "none",
  // repeat: -1,
  textContent: ";",
});
anythingLetter6.style.position = "relative";
let anythingLetter6Overlay = document.createElement("span");
anythingLetter6Overlay.className = "anythingLetter6Overlay";
anythingLetter6.appendChild(anythingLetter6Overlay);

gsap.from(".anything-splitted-letter5", {
  opacity: 0,
  x: "-100%",
  delay: 2.05,
});
gsap.to(".anythingLetter6Overlay", {
  x: "-100%",
  // backgroundColor: "green",
  delay: 3,
});

let tl14 = gsap.timeline();
gsap.from(".anything-splitted-letter7", {
  opacity: 0,
  rotate: -120,
  duration: 2,
  delay: 3.5,
  ease: "elastic.out(1,0.4)",
});

gsap.from(".anything .worm1", {
  y: "100%",
  delay: 4,
  duration: 2,
  rotate: 360,
  ease: "elastic.out(1,0.9)",
  opacity: 0,
});
let headerSection1 = document.querySelector(".header-section1");
headerSection1.addEventListener("mousemove", (dets) => {
  // console.log(dets.clientX);
  let claculatedX = (dets.clientX + dets.clientX) / 50;
  let claculatedY = (dets.clientY + dets.clientY) / 25;
  gsap.to(".anything .worm1", {
    x: claculatedX,
    rotate: dets.clientX / 30,
    // rotate: dets.clientY / 50,
    y: claculatedY,
    duration: 1,
    ease: "power1.out",
  });
});
let main25 = document.querySelector(".main25");
main25.addEventListener("mousemove", (dets) => {
  // console.log(dets.clientX);
  let claculatedX = (dets.clientX + dets.clientX) / 190;
  let claculatedY = (dets.clientY + dets.clientY) / 190;
  gsap.to(".main25 img", {
    x: claculatedX,
    rotate: dets.clientX / 30,
    // rotate: dets.clientY / 50,
    y: claculatedY,
    duration: 1,
    ease: "power1.out",
  });
  gsap.to(".main25 .adha", {
    x: claculatedX,
    rotate: dets.clientX / -20,
    // rotate: dets.clientY / 50,
    y: claculatedY,
    duration: 1,
    ease: "power1.out",
  });
  gsap.to(".main25 .time", {
    x: claculatedX,
    rotate: dets.clientX / 30,
    // rotate: dets.clientY / 50,
    y: claculatedY,
    duration: 1,
    ease: "power1.out",
  });
  gsap.to(".main25 .main-para", {
    x: -claculatedX,
    // rotate: dets.clientX / 30,
    // rotate: dets.clientY / 50,
    y: -claculatedY,
    duration: 1,
    ease: "power1.out",
  });
  gsap.to(".main25 .why", {
    x: claculatedX,
    // rotate: dets.clientX / 30,
    // rotate: dets.clientY / 50,
    y: claculatedY,
    duration: 1,
    ease: "power1.out",
  });
});

let skillContainerSvg = document.querySelectorAll(".skill-container svg");

skillContainerSvg.forEach((svg) => {




  svg.addEventListener("mouseenter", () => {

    svg.addEventListener("mousemove", (dets) => {
      // console.log(dets.clientX);
      let claculatedX = (dets.clientX + dets.clientX) / 150;
      let claculatedY = (dets.clientY + dets.clientY) / 150;
      gsap.to(svg, {
        x: claculatedX,
        // rotate: dets.clientX / 30,
        // rotate: dets.clientY / 50,
        y: claculatedY,
        duration: 1,
        ease: "power1.out",
      });
    });
  });
  svg.addEventListener("mouseleave", () => {

    // svg.addEventListener("mousemove", (dets) => {
      // console.log(dets.clientX);
    //   let claculatedX = (dets.clientX + dets.clientX) / 190;
    //   let claculatedY = (dets.clientY + dets.clientY) / 190;
      gsap.to(svg, {
        x: "0%",
        // rotate: dets.clientX / 30,
        // rotate: dets.clientY / 50,
        y: "0%",
        duration: 2,
        ease: "elastic.out(1,0.1)",
      });
    // });
  });



});

let here = document.querySelector(".here");
here.addEventListener("mouseenter", () => {

  here.addEventListener("mousemove", (dets) => {
    // console.log(dets.clientX);
    let claculatedX = (dets.clientX + dets.clientX) / 150;
    let claculatedY = (dets.clientY + dets.clientY) / 150;
    gsap.to(here, {
      x: claculatedX,
      // rotate: dets.clientX / 30,
      // rotate: dets.clientY / 50,
      y: claculatedY,
      duration: 1,
      ease: "power1.out",
    });
  });
});
here.addEventListener("mouseleave", () => {

  // svg.addEventListener("mousemove", (dets) => {
    // console.log(dets.clientX);
  //   let claculatedX = (dets.clientX + dets.clientX) / 190;
  //   let claculatedY = (dets.clientY + dets.clientY) / 190;
    gsap.to(here, {
      x: "0%",
      // rotate: dets.clientX / 30,
      // rotate: dets.clientY / 50,
      y: "0%",
      duration: 2,
      ease: "elastic.out(1,0.1)",
    });
  // });
});

let tl15 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sub-left1", // or a common parent of all 3 elements
    start: "top 70%",
    // toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl15.from(
  ".sub-left1 .curly-brace-left",
  {
    x: "150%",
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1,0.7)",
  },
  "a"
);
tl15.from(
  ".sub-left1 .curly-brace-right",
  {
    x: "-150%",
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1,0.7)",
  },
  "a"
);
tl15.from(
  ".sub-left1 p",
  {
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
  },
  "a"
);

let tl16 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sub-left2", // or a common parent of all 3 elements
    start: "top 70%",
    // toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl16.from(
  ".sub-left2 .curly-brace-left",
  {
    x: "150%",
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1,0.7)",
  },
  "a"
);
tl16.from(
  ".sub-left2 .curly-brace-right",
  {
    x: "-150%",
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1,0.7)",
  },
  "a"
);
tl16.from(
  ".sub-left2 p",
  {
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
  },
  "a"
);

breakText(".effortlessly", "effortlessly-splitted-letter");
let tl17 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".header-sec2-para",
    // markers: true,
    start: "top, 60%",
  },
});
tl17.to(".effortlessly-splitted-letter", {
  // scaleY: -1,
  color: "orange",
  duration: 0.3,
  // scale: -1,
  stagger: 0.05,
  ease: "none",
});
tl17.to(
  ".effortlessly-splitted-letter",
  {
    // scaleY: 1,
    color: "#fffce0",
    duration: 0.3,
    delay: 0.35,
    ease: "none",
    // scale: -1,
    stagger: 0.05,
  },
  "-=0.7"
);
breakText(".animate2", "animate2-splitted-letter");
tl17.to(
  ".animate2-splitted-letter",
  {
    // scaleY: -1,
    color: "orange",
    duration: 0.3,
    // scale: -1,
    stagger: 0.05,
    ease: "none",
  },
  "-=0.7"
);
tl17.to(
  ".animate2-splitted-letter",
  {
    // scaleY: 1,
    color: "#fffce0",
    duration: 0.3,
    delay: 0.35,
    ease: "none",
    // scale: -1,
    stagger: 0.05,
  },
  "-=0.7"
);
breakText(".smooth", "smooth-splitted-letter");
tl17.to(".smooth-splitted-letter", {
  scaleY: -1,
  duration: 0.3,
  // delay: 0.4,
  // scale: -1,
  stagger: 0.05,
  ease: "none",
  color: "orange",
});
tl17.to(
  ".smooth-splitted-letter",
  {
    scaleY: 1,
    duration: 0.3,
    // delay: 0.35,
    ease: "none",
    // scale: -1,
    stagger: 0.05,
    color: "#fffce0",
  },
  "-=0.4"
);
breakText(".performance", "performance-splitted-letter");
tl17.to(
  ".performance-splitted-letter",
  {
    scaleY: -1,
    duration: 0.3,
    // delay: 0.4,
    // scale: -1,
    stagger: 0.05,
    ease: "none",
    color: "orange",
  },
  "-=0.6"
);
tl17.to(
  ".performance-splitted-letter",
  {
    scaleY: 1,
    duration: 0.3,
    // delay: 0.75,
    ease: "none",
    // scale: -1,
    stagger: 0.05,
    color: "#fffce0",
  },
  "-=0.3"
);
breakText(".fun", "fun-splitted-letter");
breakText(".stuff", "stuff-splitted-letter");
tl17.from(
  ".fun-splitted-letter",
  {
    y: "100%",
    // delay: 0.5,
    stagger: 0.1,
    duration: 2,
    ease: "elastic.out(1,0.2)",
    opacity: 0,
    // color: "#0ae448"
  },
  "-=0.5"
);
tl17.from(
  ".stuff-splitted-letter",
  {
    y: "100%",
    // delay: 0.5,
    stagger: 0.1,
    duration: 2,
    ease: "elastic.out(1,0.2)",
    // color: "#0ae448",
    opacity: 0,
  },
  "-=1.9"
);
tl17.to(
  ".fun-splitted-letter",
  {
    color: "orange",
    stagger: 0.1,
  },
  "-=2"
);
tl17.to(
  ".fun-splitted-letter",
  {
    color: "#fffce0",
    stagger: 0.1,
  },
  "-=1.2"
);
tl17.to(
  ".stuff-splitted-letter",
  {
    color: "orange",
    stagger: 0.1,
  },
  "-=1.2"
);
tl17.to(
  ".stuff-splitted-letter",
  {
    color: "#fffce0",
    stagger: 0.1,
  },
  "-=0.5"
);

let tl18 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".header-sec2-para",
    // markers: true,
    start: "top, 60%",
  },
});
tl18.from(".chakri2", {
  scale: 0,
  // duration: 2,
  // ease: "elastic.out(1,0.5)"
});
tl18.to(
  ".chakri2",
  {
    scale: 0,
    rotate: 180,
    // duration: 1,
    // ease: "elastic.out(1,0.5)"
  },
  "+=2"
);

function bar() {
  let a = document.getElementById("barr");
  a.style.transform = "translateX(50%)";
  a.style.filter = "opacity(0)";
}
function bar2() {
  let a = document.getElementById("barr");
  a.style.transform = "translateX(0%)";
  a.style.filter = "opacity(1)";
}
// let tl19 = gsap.timeline({
//   scrollTrigger: {
//     scroller: "body",
//     trigger: ".thats-right-anything",
//     // markers: true,
//     start: "top 65%",
//   },
// });

// if (window.innerWidth < 800) {
//   gsap.from(".flower2-mobile", {
//     x: "200%",
//     duration: 3,
//     rotate: 180,
//     ease: "elastic.out(1,0.9)",
//     scrollTrigger: {
//       scroller: "body",
//       trigger: ".flower2-mobile",
//       // markers: true,
//       start: "-130% 0%",
//       // end: "70% 100%",
//     },
//   });
// }

let scrollBtn = document.querySelectorAll(".m2secb");
let overlay = document.querySelectorAll(".m2seco");

scrollBtn.forEach((btn) => {
  btn.addEventListener("mouseenter", (dets) => {
    // console.log(btn.classList[0]);
    let firstClass = btn.classList[0];
    let target = `.${firstClass} div`;
    // console.log(target);
    gsap.to(`${target}`, {
      scale: 500,
    });
  });
});
scrollBtn.forEach((btn) => {
  btn.addEventListener("mouseleave", (dets) => {
    // console.log(btn.classList[0]);
    let firstClass = btn.classList[0];
    let target = `.${firstClass} div`;
    // console.log(target);
    gsap.to(`${target}`, {
      scale: 0,
    });
  });
});



let tl30 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".scrollp",
    start: "top, 55%",
  },
});
tl30.from(".scroll h1", {
  x: "200%",
  duration: 1.5,
  ease: "power4.out",
});
tl30.from(
  ".scroll p",
  {
    x: "200%",
    duration: 1.5,
    ease: "power4.out",
  },
  "-=1.45"
);

let tl31 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".svggp",
    start: "top, 55%",
  },
});
tl31.from(".svgg h1", {
  x: "200%",
  duration: 1.5,
  ease: "power4.out",
});
tl31.from(
  ".svgg p",
  {
    x: "200%",
    duration: 1.5,
    ease: "power4.out",
  },
  "-=1.45"
);

let tl32 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".texttp",
    start: "top, 55%",
  },
});
tl32.from(".textt h1", {
  x: "200%",
  duration: 1.5,
  ease: "power4.out",
});
tl32.from(
  ".textt p",
  {
    x: "200%",
    duration: 1.5,
    ease: "power4.out",
  },
  "-=1.45"
);

let tl33 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".uiip",
    start: "top, 55%",
  },
});
tl33.from(".uii h1", {
  x: "200%",
  duration: 1.5,
  ease: "power4.out",
});
tl33.from(
  ".uii p",
  {
    x: "200%",
    duration: 1.5,
    ease: "power4.out",
  },
  "-=1.45"
);

// let svgItemPart1 = document.querySelector(".svg-item-part1");
// let svgItemPart2 = document.querySelector(".svg-item-part2");
// let tl28 = gsap.timeline({
//   // repeat: -1,
//   scrollTrigger: {
//     scroller: "body",
//     trigger: ".svg-container",
//     start: "top, 50%",
//   },
// });

// if(window.innerWidth > 800) {

gsap.from(".skill-container svg", {
  y: "200%",
  stagger: 0.1,
  duration: 1,
  ease: "elastic.out(1,0.8)",
  scrollTrigger: {
    scroller: "body",
    trigger: ".skill-container",
    start: "top, 70%",
  },
});
// }

let count = 1;

let leftBtn = document.querySelector(".swiper-button-prev");
let rightBtn = document.querySelector(".swiper-button-next");
let h1Text = document.querySelector(".video-info h1");
let pText = document.querySelector(".video-info p");
let tl29 = gsap.timeline();

const swiper = new Swiper(".swiper", {
  direction: "horizontal", // horizontal now
  loop: true,
  speed: 800, // smoothness
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  effect: "slide",
  simulateTouch: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideNextTransitionStart: () => {
      count++;

      if (count == 7) {
        count = 1;
      }
      // console.log(count);
      tl29.to(h1Text, {
        y: "100%",
        opacity: 0,
        duration: 0.3,
      });
      tl29.to(h1Text, {
        y: "100%",
        opacity: 0,
        duration: 0.3,
      });
      tl29.to(
        h1Text,
        {
          y: "0%",
          opacity: 1,
          duration: 0.3,
        },
        "-=0.1"
      );
      tl29.to(
        pText,
        {
          y: "100%",
          opacity: 0,
          duration: 0.3,
        },
        "-=1"
      );
      tl29.to(pText, {
        y: "100%",
        opacity: 0,
        duration: 0.3,
      });
      tl29.to(
        pText,
        {
          y: "0%",
          opacity: 1,
          duration: 0.3,
        },
        "-=0.1"
      );
      setTimeout(caseCounter, 300);
    },
    slidePrevTransitionStart: () => {
      count--;
      if (count == 0) {
        count = 6;
      }
      // console.log("swiped");
      // console.log(count);
      tl29.to(h1Text, {
        y: "100%",
        opacity: 0,
        duration: 0.3,
      });
      tl29.to(h1Text, {
        y: "100%",
        opacity: 0,
        duration: 0.3,
      });
      tl29.to(
        h1Text,
        {
          y: "0%",
          opacity: 1,
          duration: 0.3,
        },
        "-=0.1"
      );
      tl29.to(
        pText,
        {
          y: "100%",
          opacity: 0,
          duration: 0.3,
        },
        "-=1"
      );
      tl29.to(pText, {
        y: "100%",
        opacity: 0,
        duration: 0.3,
      });
      tl29.to(
        pText,
        {
          y: "0%",
          opacity: 1,
          duration: 0.3,
        },
        "-=0.1"
      );
      setTimeout(caseCounter, 400);
    },
  },
});

function caseCounter() {
  switch (count) {
    case 1:
      h1Text.textContent = "Spotify UI Clone";
      pText.textContent = "{ HTML, CSS, JavaScript }";
      break;
    case 2:
      h1Text.textContent = "GSAP Homepage";
      pText.textContent = "{ HTML, CSS, JavaScript, GSAP, Swiper.js }";
      break;
    case 3:
      h1Text.textContent = "Netflix UI Clone";
      pText.textContent = "{ HTML, CSS }";
      break;
    case 4:
      h1Text.textContent = "The Shoe Company";
      pText.textContent = "{ HTML, JavaScript, Tailwind CSS }";
      break;
    case 5:
      h1Text.textContent = "Rock Paper Scissors Game";
      pText.textContent = "{ HTML, CSS, JavaScript }";
      break;
    case 6:
      h1Text.textContent = "Calculator";
      pText.textContent = "{ HTML, CSS, JavaScript }";
      break;
    default:
  }
}
