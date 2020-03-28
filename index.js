

//////// main function --menu and "videos" injection--///////
let video = document.getElementById("right");
let left_menu = document.getElementById("left");
let inner_nav = document.getElementById("inner_nav");
function pic() {
  ///////////// lateral manu //////
  for (let i = 0; i < 20; i++) {
    left_menu.innerHTML += `<a href="#"><i class="fas fa-home"></i>Home</a>

    <a href="#"><i class="fas fa-fire"></i>Trending</a>

    <a href="#"><i class="fas fa-folder-open"></i>Subscriptions</a>
    <span class="line"></span>

    `;
  }

  //////// inner top menu  ////////
  inner_nav.innerHTML = `<ul id="menu" class="menu active">
  <li>HOME</li>
  <li>VIDEOS</li>
  <li>PLAYLIST</li>
  
  <li>COMMUNITY</li>
  <li>CHANNELS</li>
  <li>ABOUT</li>
 
</ul>`;

  ////////////// "videos" /////////////
  for (let i = 1; i <= 50; i++) {
    video_content = document.createElement(`Div`);
    video_content.className += "video_tex";
    video_inner = document.innerHTML = ` <div class="img_after"><img class="after"
                    src="https://picsum.photos/350/200?random=${Math.ceil(
                      Math.random() * 8
                    )}" alt=""></a></div>
        <h5 class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum.</h5>
        <p><span class="mill" id="minute">356184 mill </span><span class="view">3 Years ago</span></p>
    </div>`;
    video.appendChild(video_content);
    video_content.innerHTML = video_inner;
  }
}
pic();

//////////////// functions to change the background----- dark mode simulation/////////

const btnSwitch = document.querySelector('#switch');
const right= document.querySelector('#right');
const left = document.querySelector('#left');
const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');

btnSwitch.addEventListener('click', () => {
  btnSwitch.classList.toggle('active' );
  right.classList.toggle('d_mode' )
 left.classList.toggle('d_mode' )
  nav.classList.toggle('d_mode' )
  menu.classList.toggle('d_mode' )
});



///////////////  Hamburger menu toggle   ////////////////////
const contenedor_video = document.getElementById("main_container");
const contenedor_menu = document.getElementById("menu");

document.getElementById("boton-menu").addEventListener("click", () => {
  contenedor_video.classList.toggle("active");
  contenedor_menu.classList.toggle("active");
});
///////////////min width 800px///////////////
const resize = () => {
  if (window.innerWidth >= 800) {
    contenedor_video.classList.remove("active");
  } else {
    contenedor_video.classList.add("active");
  }
};
resize();
window.addEventListener("resize", () => {
  resize();
});

////////////pop-menu///////////
const pop_menu = document.getElementById("pop_menu");

document.getElementById("user").addEventListener("click", () => {
  pop_menu.classList.toggle("able");
});

document.getElementById("right").addEventListener("click", () => {
  pop_menu.classList.add("able");
});

document.getElementById("left").addEventListener("click", () => {
  pop_menu.classList.add("able");
});
document.getElementById("menu").addEventListener("click", () => {
  pop_menu.classList.add("able");
});


// jj=document.querySelectorAll('span, h5,i');
// for (let i = 0; i < jj.length; i++) {
//     jj[i].style.color='red'
  
// }