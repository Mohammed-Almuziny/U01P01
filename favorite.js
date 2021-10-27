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
  str = str.substr(0, 100);
  str += "...";
  return str;
};

const like = (ID, favIndex) => {
  console.log(favIndex);
  // let index;
  // locations.find((location, i) => {
  //   if (location.id == ID) {
  //     console.log(location.id);
  //     index = i;
  //     return;
  //   }
  // });

  //       if (locations[index].isLike) {
  //     locations[index].isLike = false;
  //   } else {
  //     locations[index].isLike = true;
  //   }
  favLocation.splice(favIndex, 1);
  console.log(ID);
  locations[ID].isLike = false;
  localStorage.setItem("locations", JSON.stringify(locations));
  render();
};

const likeInfo = (ID, favIndex) => {
  // let index;
  // locations.find((location, i) => {
  //   if (location.id == ID) {
  //     index = i;
  //     return;
  //   }
  // });

  if (favLocation[favIndex].isLike) {
    $("i").css("color", "black");
    locations[ID].isLike = false;
  } else {
    $("i").css("color", "red");
    locations[ID].isLike = true;
  }

  localStorage.setItem("locations", JSON.stringify(locations));
};

const likeSearch = (index, val) => {
  if (locations[index].isLike) {
    locations[index].isLike = false;
  } else {
    locations[index].isLike = true;
  }

  favLocation.splice(favIndex, 1);
  localStorage.setItem("locations", JSON.stringify(locations));
  renderSearch(val);
};

const info = (ID, i) => {
  locations[ID].views = locations[ID].views + 1;
  localStorage.setItem("locations", JSON.stringify(locations));
  $("main").addClass("mainInfo");
  $("main").html(`
      <div class="info">
          <img class="infoImg" src=${favLocation[i].images[0]} alt="image" />
          <div class="infoData">
              <h2> ${favLocation[i].name} 
                  <i class="fa fa-heart" style="color:${
                    favLocation[i].isLike ? "red" : "black"
                  }" onclick="likeInfo(${favLocation[i].id}, ${i})" >
              </i>
              </h2> 
              <p>${favLocation[i].description}<P>
          </div>
      </div>`);

  let index = 0;
  let maxImages = favLocation[i].images.length - 1;
  setInterval(function () {
    index = index == maxImages ? 0 : ++index;
    $(".infoImg").attr("src", favLocation[i].images[index]).fadeIn("slow");
  }, 4000);
};

const showMore = () => {
  newMaxCard = maxCard;
  for (let i = maxCard + 1; i <= maxCard + 3; i++) {
    if (favLocation[i]) {
      $(".cards").append(`
        <div class="card" >
            <img src=${favLocation[i].image} alt="image" onclick="info(${
        favLocation[i].id
      },${i})"/>
              <div class="cardDiv">
                <span class="span"> ${favLocation[i].name}  </span>
                <p> ${shortStr(
                  favLocation[i].description
                )} <span class="readMore" onclick="info(${
        favLocation[i].id
      },${i})" >read more</span></p>
                <hr>
                <div class="cardInfo">
                  <span> view ${favLocation[i].views}  </span>
                  <i class="fa fa-heart" style="color:${
                    favLocation[i].isLike ? "red" : "black"
                  }" onclick="like(${favLocation[i].id}, ${i})" ></i>
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

  if (!favLocation[(maxCard+1)]){
    $(".btnShowMore").remove();
  }

};

const render = () => {
  $(".cards").html(` `);
  for (let i = 0; i <= maxCard; i++) {
    if (favLocation[i]) {
      $(".cards").append(`
      <div class="card" >
      <img src=${favLocation[i].image} alt="image" onclick="info(${
        favLocation[i].id
      },${i})"/>
        <div class="cardDiv">
          <span class="span"> ${favLocation[i].name}  </span>
          <p> ${shortStr(
            favLocation[i].description
          )} <span class="readMore" onclick="info(${
        favLocation[i].id
      },${i})" >read more</span></p>
          <hr>
          <div class="cardInfo">
            <span> view ${locations[i].views} </span>
            <i class="fa fa-heart" style="color:${
              favLocation[i].isLike ? "red" : "black"
            }" onclick="like(${favLocation[i].id}, ${i})" ></i>
          </div>
        </div>
  </div>
      `);
    } else {
      $(".btnShowMore").remove();
      break;
    }
    if (favLocation.length == 3) {
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

const renderSearch = (val) => {
  let newArr = favLocation.filter((location) =>
    location.name.toUpperCase().includes(val.toUpperCase())
  );
  $(".cards").html(` `);

  newArr.forEach((location, i) => {
    $(".cards").append(`
    <div class="card" >
        <img src=${location.image} alt="image" onclick="info(${location.id},${location.id})"/>
          <div class="cardDiv">
            <span class="span"> ${location.name}  </span>
            <p> ${shortStr(
              location.description
            )} <span class="readMore" onclick="info(${location.id},${location.id})" >read more</span></p>
            <hr>
            <div class="cardInfo">
              <span> view ${location.views}  </span>
              <i class="fa fa-heart" style="color:${
                location.isLike ? "red" : "black"
              }" onclick="likeSearch(${location.id}, '${val}')" ></i>
            </div>
          </div>
    </div>
`);
  });
};

render();

$(".btnShowMore").on("click", showMore);
// click(showMore());

$(document.body).on("keyup", $.searchInput, function (event) {
  if (event.keyCode == 13) {
    // 13 = Enter Key
    renderSearch($(".searchInput").val());
    $(".searchInput").val("");
    $(".btnShowMore").remove();
  }
});
