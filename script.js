var header = `<header class="site-header py-1">
  <nav class="navbar navbar-expand-lg navbar-light container d-flex flex-column flex-md-row justify-content-between">
    <div class="row">
    <a class="py-2 txt-dark pr-2 mx-5" href="../index.html" aria-label="Product">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 177.000000 177.000000" preserveAspectRatio="xMidYMid meet">
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g transform="translate(0.000000,177.000000) scale(0.100000,-0.100000)" fill="#495464" stroke="none">
          <path d="M1036 1455 c-262 -67 -402 -294 -341 -554 38 -159 151 -272 320 -317
76 -21 238 -17 352 7 l98 21 -3 135 c-4 171 -2 179 48 194 28 9 40 18 40 31 0
17 -12 18 -170 18 -159 0 -170 -1 -170 -19 0 -14 10 -20 43 -25 83 -14 87 -20
87 -154 0 -112 -1 -120 -24 -141 -30 -28 -113 -41 -190 -30 -189 26 -306 185
-306 414 1 134 31 223 102 296 54 56 116 81 209 87 144 8 237 -39 280 -143 16
-39 28 -55 42 -55 17 0 18 6 12 68 -3 37 -8 86 -11 109 l-5 41 -62 12 c-102
19 -284 22 -351 5z" />
          <path d="M222 1433 c2 -11 18 -20 46 -26 75 -15 74 -4 70 -444 l-3 -388 -29
-58 c-18 -38 -42 -68 -67 -85 -42 -30 -43 -31 -29 -52 13 -21 68 8 135 71 102
97 115 160 115 601 l0 317 26 20 c15 12 40 21 55 21 22 0 29 5 29 20 0 19 -7
20 -176 20 -161 0 -175 -1 -172 -17z" />
        </g>
      </svg>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav">
        <a class="py-2 d-inline-block mx-5 txt-dark nav-item nav-link" id="about" href="../about.html">About Me</a>
        <a class="py-2 d-inline-block mx-5 txt-dark nav-item nav-link" id="projects" href="../projects.html">Portfolio</a>
        <a class="py-2 d-inline-block mx-5 txt-dark nav-item nav-link" id="contact" href="../contact.html">Contact Me</a>
      </div>
    </div>
    </div>
    </nav>
</header>`

var footer = `<div class="container-fluid text-center footnote-div bgd-white">
    <span class="text-muted">
      <a class="footer-link" href="https://www.linkedin.com/in/jonathan-girma/">LinkedIn</a>
      <a class="footer-link" href="https://www.github.com/jgirma">GitHub</a>
      <a class="footer-link" href="https://www.jonathangirma.com">Website</a>
      <p>© 2020 Jonathan Girma.</p>
    </span>
  </div> `

  document.getElementById('navibar').innerHTML = header;
  document.getElementById('footnote').innerHTML = footer;

  function setActive(i) {
    $('#'+i).addClass("active");
  }
