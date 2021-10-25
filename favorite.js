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

const like = (ID) => {
    console.log(ID);
    let index;
    locations.forEach((location, i) => {
        if(location.id = ID){
            console.log(location.id);
            index = i;
            return
        }
    })

//       if (locations[index].isLike) {
//     locations[index].isLike = false;
//   } else {
//     locations[index].isLike = true;
//   }
    locations[index].isLike = false;
  localStorage.setItem("locations", JSON.stringify(locations));
  render();
};

const showMore = () => {
  newMaxCard = maxCard;
  for (let i = maxCard + 1; i <= maxCard + 3; i++) {
    if (favLocation[i]) {
      $(".cards").append(`
        <div class="card">
            <img src=${favLocation[i].image} alt="image" />
            <span class="span"> ${favLocation[i].name}  
                <i class="fa fa-heart-o" style="color:${
                    favLocation[i].isLike ? "red" : "black"
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
  console.log(favLocation);
  for (let i = 0; i <= maxCard; i++) {
    if (favLocation[i]) {
      $(".cards").append(`
        <div class="card">
            <img src=${favLocation[i].image} alt="image" />
            <span class="span"> ${favLocation[i].name}  
                <i class="fa fa-heart-o" style="color:${
                    favLocation[i].isLike ? "red" : "black"
                }" onclick="like(${favLocation[i].id})" ></i>
            </span>
            
            
        </div>
    `);
    } else {
        $(".btnShowMore").remove();
        break;
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
