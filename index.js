
//   setInterval(function time1() {
//        var today = new Date();
//      time =
//       today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      
//       console.log();
//       return 
//   }, 1000);



//////// main function --menu and "videos" injection--///////
let video = document.getElementById("right");
  let left_menu = document.getElementById("left");
  let inner_nav = document.getElementById("inner_nav");
function pic() {
  


///////////// lateral manu //////
  for (let i = 0; i < 10; i++) {
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
  <li><i class="fas fa-search"></i></li>
</ul>`;

  
////////////// "videos" /////////////
  for (let i = 0; i < 48; i++) {
    video_content = document.createElement(`Div`);
    video_content.className += "video_tex";
    video_inner = document.innerHTML = ` <div class="img_after"><img class="after"
                    src="https://picsum.photos/350/200?random=${Math.floor(
                      Math.random() * 9
                    )}" alt=""onClick="zoom()" ></a></div>
        <h5 class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum.</h5>
        <p><span class="mill" id="minute">356184 mill </span><span class="view">3 Years ago</span></p>
    </div>`;
    video.appendChild(video_content);
    video_content.innerHTML = video_inner;
  }
}
pic();

//////////////// functions to change the background----- dark mode simulation/////////
function color1() {
  document.getElementById("right").style.background = "rgba(136, 132, 203)";
  document.getElementById("nav").style.background = "rgba(136, 132, 203)";
  document.getElementById("left").style.background = "rgba(136, 132, 203)";
  document.getElementById("menu").style.background = "rgba(136, 132, 203)";
  
  for (let i = 0; i < video.getElementsByTagName("h5").length; i++) {
    video.getElementsByTagName("h5")[i].style.color='black' ; 
  }

  for (let i = 0; i < video.getElementsByTagName("span").length; i++) {
    video.getElementsByTagName("span")[i].style.color='black' ;
  }
}


function color2() {
  document.getElementById("right").style.background = "rgb(23, 41, 57)";
  document.getElementById("nav").style.background = "rgb(23, 41, 57)";
  document.getElementById("left").style.background = "rgb(23, 41, 57)";
  document.getElementById("menu").style.background = "rgb(23, 41, 57)";
}

// function zoom(){
//   for (let i = 0; i < video.getElementsByTagName("img").length; i++) {
//     video.getElementsByTagName("img")[1].setAttribute(
//   "style", "border: 2px solid red ");
    
//   }
 
 
// }
const contenedor_video = document.getElementById("toggle");
const contenedor_menu = document.getElementById("menu");

document.getElementById('boton-menu').addEventListener('click', () => {
  contenedor_video.classList.toggle('active');
  contenedor_menu.classList.toggle('active');
});

const comprobarAncho = () => {
	if(window.innerWidth >= 768){
		contenedor_video.classList.remove('active');
	} else {
		contenedor_video.classList.add('active');
	}
}

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});