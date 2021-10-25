let cheakLoactions = JSON.parse(localStorage.getItem("locations"));
let locationsTemblet = [
  {
    id: 0,
    name: "location 0",
    image: "/image/image0.jpg",
    isLike: true,
  },
  {
    id: 1,
    name: "location 1",
    image: "/image/image0.jpg",
    isLike: false,
  },
  {
    id: 2,
    name: "location 2",
    image: "/image/image0.jpg",
    isLike: false,
  },
  {
    id: 3,
    name: "location 3 ",
    image: "/image/image0.jpg",
    isLike: false,
  },
  {
    id: 4,
    name: "location 4",
    image: "/image/image0.jpg",
    isLike: true,
  },
  {
    id: 5,
    name: "location 5",
    image: "/image/image0.jpg",
    isLike: false,
  },
  {
    id: 6,
    name: "location 6",
    image: "/image/image0.jpg",
    isLike: false,
  },
  {
    id: 7,
    name: "location 7",
    image: "/image/image0.jpg",
    isLike: false,
  },
];

let locations = [];

if (cheakLoactions == null) {
  locations = [...locationsTemblet];
  localStorage.setItem("locations", JSON.stringify(locationsTemblet));
} else {
    console.log("loacl");
  locations = [...cheakLoactions];
}


let maxCard = 2;

const like = (index) => {
  if (locations[index].isLike) {
    locations[index].isLike = false;
  } else {
    locations[index].isLike = true;
  }
  localStorage.setItem("locations", JSON.stringify(locations));
  render();
};

const showMore = () => {
    newMaxCard = maxCard;
  for (let i = maxCard + 1; i <= maxCard + 3; i++) {
    if (locations[i]) {
      $(".cards").append(`
        <div class="card">
            <img src=${locations[i].image} alt="image" />
            <span class="span"> ${locations[i].name}  
                <i class="fa fa-heart-o" style="color:${
                  locations[i].isLike ? "red" : "black"
                }" onclick="like(${i})" ></i>
            </span>
            
            
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
    $(".cards").append(`
        <div class="card">
            <img src=${locations[i].image} alt="image" />
            <span class="span"> ${locations[i].name}  
                <i class="fa fa-heart-o" style="color:${
                  locations[i].isLike ? "red" : "black"
                }" onclick="like(${i})" ></i>
            </span>
            
            
        </div>
    `);
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

$(".btnShowMore").click(showMore);
// click(showMore());
