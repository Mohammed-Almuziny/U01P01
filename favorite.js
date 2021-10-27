let cheakLoactions = JSON.parse(localStorage.getItem("locations"));
let locationsTemblet = [
  {
    id: 0,
    name: "location0 name",
    image: "/image/image0.jpg",
    isLike: false,
  },
  {
    id: 1,
    name: "location1 name",
    image: "/image/image0.jpg",
    isLike: false,
  },
  {
    id: 2,
    name: "location2 name",
    image: "/image/image0.jpg",
    isLike: false,
  },
  {
    id: 3,
    name: "location3 name",
    image: "/image/image0.jpg",
    isLike: false,
  },
];

let locations = [];

if (cheakLoactions == null) {
  locations = [...locationsTemblet];
  localStorage.setItem("locations", JSON.stringify(locationsTemblet));
} else {
  locations = [...cheakLoactions];
}

let favLocation = locations.filter((location) => location.isLike);

let maxCard = 2;

const shortStr = (str) => {
  str = str.substr(0,100)
  str+= "..."
  return str
}

const like = (ID, favIndex) => {
  console.log(favIndex);
  let index;
  locations.find((location, i) => {
    if (location.id == ID) {
      console.log(location.id);
      index = i;
      return;
    }
  });

  //       if (locations[index].isLike) {
  //     locations[index].isLike = false;
  //   } else {
  //     locations[index].isLike = true;
  //   }
  favLocation.splice(favIndex, 1);
  locations[index].isLike = false;
  localStorage.setItem("locations", JSON.stringify(locations));
  render();
};

const likeInfo = (ID, favIndex) => {
  let index;
  locations.find((location, i) => {
    if (location.id == ID) {
      index = i;
      return;
    }
  });

  console.log(index);

  if (favLocation[favIndex].isLike) {
    $("i").css("color", "black");
    locations[index].isLike = false;
  } else {
    $("i").css("color", "red");
    locations[index].isLike = true;
  }

  localStorage.setItem("locations", JSON.stringify(locations));
};

const info = (i) => {
  $("main").addClass("mainInfo");
  $("main").html(`
      <div class="info">
          <img class="infoImg" src=${favLocation[i].images[0]} alt="image" />
          <div class="infoData">
              <h2> ${favLocation[i].name} 
                  <i class="fa fa-heart-o" style="color:${
                    favLocation[i].isLike ? "red" : "black"
                  }" onclick="likeInfo(${favLocation[i].id}, ${i})" >
              </i>
              </h2> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perferendis assumenda totam quisquam eius voluptas rerum exercitationem mollitia laborum itaque.<P>
          </div>
      </div>`);


    let index = 0;
    let maxImages = favLocation[i].images.length -1;
    setInterval(function() {;
        index = (index == maxImages) ? 0 : ++index;
        $('.infoImg').attr('src',favLocation[i].images[index]).fadeIn('slow');
     }, 4000);
};

const showMore = () => {
    newMaxCard = maxCard;
    for (let i = maxCard + 1; i <= maxCard + 3; i++) {
      if (favLocation[i]) {
        $(".cards").append(`
        <div class="card" >
            <img src=${locations[i].image} alt="image" onclick="info(${i})"/>
              <div class="cardDiv">
                <span class="span"> ${locations[i].name}  </span>
                <p> ${shortStr(locations[i].description)} <span class="readMore" onclick="info(${i})" >read more</span></p>
                <hr>
                <div class="cardInfo">
                  <span> view ${locations[i].views}  </span>
                  <i class="fa fa-heart" style="color:${
                  locations[i].isLike ? "red" : "black"
                  }" onclick="like(${i})" ></i>
                </div>
              </div>
        </div>
    `);
        newMaxCard++;
      } else {
        $(".btnShowMore").remove();
        break;
      }
    }
    maxCard = newMaxCard;
  };

const render = () => {
  $(".cards").html(` `);
  for (let i = 0; i <= maxCard; i++) {
    if (favLocation[i]) {
      $(".cards").append(`
      <div class="card" >
      <img src=${favLocation[i].image} alt="image" onclick="info(${i})"/>
        <div class="cardDiv">
          <span class="span"> ${favLocation[i].name}  </span>
          <p> ${shortStr(favLocation[i].description)} <span class="readMore" onclick="info(${i})" >read more</span></p>
          <hr>
          <div class="cardInfo">
            <span> view ${locations[i].views} </span>
            <i class="fa fa-heart" style="color:${
              favLocation[i].isLike ? "red" : "black"
            }" onclick="like(${i})" ></i>
          </div>
        </div>
  </div>
      `);
    } else {
      $(".btnShowMore").remove();
      break;
    }
    if(favLocation.length == 3){
        $(".btnShowMore").remove();
    }
  }
  //   locations.forEach((location,index) => {
  //     $(".cards").append(`
  //         <div class="card">
  //             <img src=${location.image} alt="image" />
  //             <span class="span"> ${location.name}
  //                 <i class="fa fa-heart-o" style="color:${(location.isLike? "red": "black" )}" onclick="like(${index})" ></i>
  //             </span>

  //         </div>
  //     `);
  //   });

  //   $(".card").hover(
  //     function()  {
  //       $(this).children(".span").toggle();
  //     },
  //     function() {
  //       $(this).children(".span").toggle();
  //     }
  //   );
};

render();

$(".btnShowMore").on("click", showMore);
// click(showMore());
