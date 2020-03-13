
//   setInterval(function time1() {
//        var today = new Date();
//      time =
//       today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      
//       console.log();
//       return 
//   }, 1000);



//////// main function --menu and "videos" injection--///////
function pic() {
  let video = document.getElementById("right");
  let left_menu = document.getElementById("left");
  let inner_nav = document.getElementById("inner_nav");


///////////// lateral manu //////
  for (let i = 0; i < 10; i++) {
    left_menu.innerHTML += `<a href="#"><i class="fas fa-home"></i>Home</a>

    <a href="#"><i class="fas fa-fire"></i>Trending</a>

    <a href="#"><i class="fas fa-folder-open"></i>Subscriptions</a>
    <span class="line"></span>

    <h3>SUBSCRIPTIONS</h3>`;
  }

  //////// inner top menu  ////////
  inner_nav.innerHTML = `<ul id="menu">
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
function color1() {
  document.getElementById("right").style.background = "rgba(136, 132, 203)";
  document.getElementById("nav").style.background = "rgba(136, 132, 203)";
  document.getElementById("left").style.background = "rgba(136, 132, 203)";
  document.getElementById("menu").style.background = "rgba(136, 132, 203)";
  document.body.setAttribute( 'style', 'color;black ;!important' );
}

function color2() {
  document.getElementById("right").style.background = "rgb(23, 41, 57)";
  document.getElementById("nav").style.background = "rgb(23, 41, 57)";
  document.getElementById("left").style.background = "rgb(23, 41, 57)";
  document.getElementById("menu").style.background = "rgb(23, 41, 57)";
}
