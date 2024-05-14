// stop animasi
var element = document.getElementById("init");
var isAnimationStopped = false;

function stopAnimation() {
  if (isAnimationStopped) {
    element.classList.remove("stopped");
    isAnimationStopped = false;
  } else {
    element.classList.add("stopped");
    isAnimationStopped = true;
  }
}

element.addEventListener("click", stopAnimation);

// bot functions start
var data = {
  chatinit: {
    title: [
      "Hello!! <span class='emoji'> &#128075;</span>",
      "I am RZEE ChatBot",
      "How can I help you?",
    ],
    options: [
      "About Me 👩‍💻",
      "Collaborate with me 🤝",
      "Contact Me 📞",
      "Just saying hello!! <span class='emoji'> &#128075;</span>",
    ],
  },

  about: {
    title: [
      "Thanks for reaching out!",
      " I am a Front End Web Designer as well as a Web Developer, but I'm still in the learning stage.",
    ],
    options: ["More About Me"],
    url: {
      more: "https://romeoaditya.github.io/romeoadityaV2.github.io/#about",
      link: ["https://romeoaditya.github.io/romeoadityaV2.github.io/#about"],
    },
  },
  collaborate: {
    title: [
      "Thanks for reaching out!",
      " To collaborate with me you can click the button below",
    ],
    options: ["Collaborations", "Other Options"],
    url: {
      more: "https://my-portfolio-v2.romeoaditya1.repl.co/#contact",
      link: ["https://my-portfolio-v2.romeoaditya1.repl.co/#contact"],
    },
  },
  contact: {
    title: [
      "Thanks for reaching out!",
      " To contact me you can click the button below",
    ],
    options: ["Contact Me", "Other Options"],
    url: {
      more: "https://my-portfolio-v2.romeoaditya1.repl.co/#contact",
      link: ["https://my-portfolio-v2.romeoaditya1.repl.co/#contact"],
    },
  },
  just: {
    title: ["Thanks for reaching out!", " Hello!! i am RZEE ChatBot!"],
    options: ["Other Options"],
    url: {
      action: "initChat",
    },
  },
};

document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
  console.log(this.innerText);
  if (this.innerText == "Start ChatBot") {
    document.getElementById("botchat").style.display = "block";
    document.getElementById("init").innerText = "Close Chat";
    initChat();
  } else {
    location.reload();
  }
}

function initChat() {
  j = 0;
  cbot.innerHTML = "";
  for (var i = 0; i < len1; i++) {
    setTimeout(handleChat, i * 500);
  }
  setTimeout(function () {
    showOptions(data.chatinit.options);
  }, (len1 + 1) * 500);
}

var j = 0;
function handleChat() {
  console.log(j);
  var elm = document.createElement("p");
  elm.innerHTML = data.chatinit.title[j];
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}

function showOptions(options) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = "<div>" + options[i] + "</div>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    opt.addEventListener("click", handleOpt);
    cbot.appendChild(opt);
    handleScroll();
  }
}

function handleOpt() {
  console.log(this);
  var str = this.innerText;
  var textArr = str.split(" ");
  var findText = textArr[0];

  document.querySelectorAll(".opt").forEach((el) => {
    el.remove();
  });
  var elm = document.createElement("p");
  elm.setAttribute("class", "test");
  var sp = '<span class="rep">' + this.innerText + "</span>";
  elm.innerHTML = sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj = data[findText.toLowerCase()];
  handleResults(tempObj.title, tempObj.options, tempObj.url);

  // Panggil fungsi yang ditetapkan dalam URL jika ada
  if (tempObj.url.action) {
    window[tempObj.url.action]();
  }

  // Panggil fungsi initChat jika opsi adalah "Other Options" dan URL yang terkait adalah nama fungsi
  if (findText.toLowerCase() === "other") {
    if (tempObj.url.link && tempObj.url.link[1] === "initChat") {
      initChat(); // Panggil fungsi initChat
    }
  }
}

function handleDelay(title) {
  var elm = document.createElement("p");
  elm.innerHTML = title;
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
}

function handleResults(title, options, url) {
  for (let i = 0; i < title.length; i++) {
    setTimeout(function () {
      handleDelay(title[i]);
    }, i * 500);
  }

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  };

  if (isObjectEmpty(url) == true) {
    console.log("having more options");
    setTimeout(function () {
      showOptions(options);
    }, title.length * 500);
  } else {
    console.log("end result");
    setTimeout(function () {
      handleOptions(options, url);
    }, title.length * 500);
  }
}

function handleOptions(options, url) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp =
      '<a class="m-link" href="' + url.link[i] + '">' + options[i] + "</a>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    cbot.appendChild(opt);
  }
  var opt = document.createElement("span");
  var inp = '<a class="m-link" href="' + url.more + '">' + "See more</a>";

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  };

  console.log(isObjectEmpty(url));
  console.log(url);
  opt.innerHTML = inp;
  opt.setAttribute("class", "opt link");
  cbot.appendChild(opt);
  handleScroll();
}

function handleScroll() {
  var elem = document.getElementById("chat-box");
  elem.scrollTop = elem.scrollHeight;
}
// bot functions end

// Typing Animation
var typed = new Typed(".typing", {
  strings: [" ", "Web Designer", "Graphic Designer", "Web Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalNavList; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalNavList; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

document.querySelector(".btn").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
