
document.addEventListener('DOMContentLoaded', () => {
  const dark = 'dark'
  const light = 'light'

  function getTheme() {
    return localStorage.getItem('theme') || light;
  }
  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  const colorScheme = document.querySelector('meta[name="myapp"]');
  function applyTheme(theme) {
    document.body.className = theme;
    colorScheme.content = theme;
  }

  function rotateTheme(theme) {
    if (theme === 'light') {
      return dark
    }
    return light;
  }

  const themeDisplay = document.getElementById('theme');
  const themeToggler = document.getElementById('theme-toggle');

  setTimeout(() => {
    let theme = getTheme();
    applyTheme(theme);
    themeDisplay.innerText = theme;

    themeToggler.onclick = () => {
      const newTheme = rotateTheme(theme);
      applyTheme(newTheme);
      themeDisplay.innerText = newTheme;
      saveTheme(newTheme);

      theme = newTheme;
    }
  }, 100);
});






document.addEventListener('DOMContentLoaded', () => {
class Myheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>


   <div class="topimg">
    <img src="./img/180bg.png">
   </div>
   <div class="title">
    <h3>ジブンクロニクル</h3>
   </div>



 
    </header>
        `

    }
}
customElements.define('my-header', Myheader)
});




document.addEventListener('DOMContentLoaded', () => {
class Myfooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
    <p id="date">&copy;2023</p>
<p>四国大学メディア情報学科 BHUJEL YABINDRA</p>
<a href="https://www.facebook.com/people/Yabindra-Bhujel/100012868602296/"><i class="fa-brands fa-facebook"></i></a>
<a href=""><i class="fa-brands fa-square-instagram"></i></a>
<a href=""><i class="fa-brands fa-discord"></i></a>
<a href="https://github.com/Yabindradev"><i class="fa-brands fa-square-github"></i></a>


   </footer>
        `

    }
}
customElements.define('my-footer', Myfooter)
});



document.addEventListener('DOMContentLoaded', () => {
class Globlenavibar extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
        <div class="navibar">
        <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="favorite.html">MY FAVORITE</a></li>
            <li><a href="create.html">今の私を作るもの</a></li>
        </ul>
    </div>
        `
    }
}
customElements.define('global-navibar', Globlenavibar)
});



// scrools section

document.addEventListener('DOMContentLoaded', () => {


        let mybutton = document.getElementById("myBtn");

        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop >5 || document.documentElement.scrollTop > 5) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

      });
        
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }








