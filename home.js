let cheakLoactions = JSON.parse(localStorage.getItem("locations"));
let locationsTemblet = [
  {
    id: 0,
    name: "Bora Bora",
    description:
      'The small island of Bora Bora (just about 6 miles long and a little more than 2 miles wide) overflows with beauty. A dormant volcano rises up at its center and fans out into lush jungle before spilling into an aquamarine lagoon. In fact, author James Michener, who wrote "Tales of the South Pacific," called Bora Bora "the most beautiful island in the world." The 18th-century British explorer James Cook even coined it as the "Pearl of the Pacific." The very definition of a tropical getaway, blissful Bora Bora abounds with luxurious resorts, sunny skies, warm waters and friendly locals. ',
    image: "image/image0.jpg",
    images: ["image/image0-1.jpg", "image/image0-2.jpg", "image/image0.jpg"],
    views: 0,
    isLike: true,
  },
  {
    id: 1,
    name: "Maui",
    description:
      "Maui is not nearly as large as the Big Island, nor is it as small as Lanai, as bustling as Oahu or as quiet as Kauai. For many Hawaii vacationers, Maui is just right – offering a taste of just about everything the Aloha State has to offer, from impressive wildlife to intriguing history and culture. While on a visit here, you can shimmy alongside professional hula dancers, golf along coastal fairways, sail down a zip line, snorkel alongside five different types of sea turtles or simply lounge along some of Hawaii's most notable beaches.",
    image: "image/image1.jpg",
    images: ["image/image1-1.jpg", "image/image1-2.jpg", "image/image1.jpg"],
    views: 0,
    isLike: false,
  },
  {
    id: 2,
    name: "London",
    description:
      "The English writer Samuel Johnson famously said, \"You find no man, at all intellectual, who is willing to leave London. No, Sir, when a man is tired of London, he is tired of life; for there is in London all that life can afford.\" More than two centuries have passed since Johnson's era, but his words still ring true. Life in London is nothing short of invigorating, and travelers find that one visit isn't enough to experience everything this two-millennia-old city has to offer.",
    image: "image/image2.jpg",
    images: ["image/image2-1.jpg", "image/image2-2.jpg", "image/image2.jpg"],
    views: 0,
    isLike: false,
  },
  {
    id: 3,
    name: "Rome",
    description:
      "Rome, the city of seven hills, enjoyed a mythic beginning. Romulus and Remus – twin brothers who were nursed by a she-wolf and fathered by a war god – reportedly founded the Eternal City. And although historians are a little skeptical about this epic entry into the world, most travelers are absolutely certain that there is something magical about Rome. Whether it's the mystery of nearby Vatican City or the ghosts of the Colosseum, an afternoon caffè on Piazza Navona or a piled-high plate of pasta at a trattoria, Roma is sure to enchant.",
    image: "image/image3.jpg",
    images: ["image/image3-1.jpg", "image/image3-2.jpg", "image/image3.jpg"],
    views: 0,
    isLike: false,
  },
  {
    id: 4,
    name: "Glacier National Park",
    description:
      'Named for the remnants of glaciers from the ice age, Glacier National Park is located on the border of Canada and Montana. It is often called the "Crown of the Continent," because of its dizzying array of natural beauty. A favorite spot among hikers, the park features a variety of trails for all skill levels, ranging from the easy Trail of the Cedars (home to towering and beautiful cedars) to the challenging Grinnell Glacier (which offers sweeping views). What\'s more, the park boasts more than 700 lakes, numerous waterfalls and two mountain ranges, spread across more than 1 million acres that shelter a variety of wildlife. ',
    image: "image/image4.jpg",
    images: ["image/image4-1.jpg", "image/image4-2.jpg", "image/image4.jpg"],
    views: 0,
    isLike: true,
  },
  {
    id: 5,
    name: "Barcelona",
    description:
      "Barcelona contains both the authentically historic and the wildly bizarre. From the scenic trails of the colorful Park Güell to the romantic narrow alleys of Barri Gòtic; from the beachside nightclubs to the city's dozens of sacred churches and architectural marvels, this city by the sea seems to attract all types: the adventurer, the couple, the partier, the culture lover – and more – with an almost overwhelming variety of things to do. You could stay for a few days, but chances are you'll need a whole week to explore.",
    image: "image/image5.jpg",
    images: ["image/image5-1.jpg", "image/image5-2.jpg", "image/image5.jpg"],
    views: 0,
    isLike: false,
  },
  {
    id: 6,
    name: "Maldives",
    description:
      "You've seen photos of the Maldives before: picture-perfect private villas suspended over striking blue waters, alabaster white sand beaches and spectacular sunsets dipping into the horizon. The scenic beauty of the Maldives is something to behold, something you can't quite understand until you're there in person.",
    image: "image/image6.jpg",
    images: ["image/image6-1.jpg", "image/image6-2.jpg", "image/image6.jpg"],
    views: 0,
    isLike: false,
  },
  {
    id: 7,
    name: "Banff",
    description:
      "If you're itching to experience the lifestyle of a Swiss skiing village, but don't want to fork over the cash for a trans-Atlantic flight, consider Banff. Thanks to its location in the heart of the Canadian Rockies near the southeastern border of Banff National Park – Canada's first national park – taking trips here will decrease not only your flight time from the U.S. but also your expenses (although only marginally). Banff caters to intrepid explorers who prefer to end the day in a nice hotel rather than roughing it at the campgrounds (though, there are plenty of those, too). Opportunities for adventure abound, so pick your sport: Ski down Mount Norquay, hike to the massive, free-standing limestone pillars known as the Hoodoos, \"scramble\" up the face of the Stoney Squaw Mountain or bike along Healy Creek. When you are exhausted, retreat to your cozy (and warm) resort, and replenish yourself with a hefty helping of bison meat.",
    image: "image/image7.jpg",
    images: ["image/image7-1.jpg", "image/image7-2.jpg", "image/image7.jpg"],
    views: 0,
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

let maxCard = 2;

const shortStr = (str) => {
  str = str.substr(0, 100);
  str += "...";
  return str;
};

const like = (index) => {
  if (locations[index].isLike) {
    locations[index].isLike = false;
  } else {
    locations[index].isLike = true;
  }
  localStorage.setItem("locations", JSON.stringify(locations));
  render();
};

const likeInfo = (index) => {
  if (locations[index].isLike) {
    locations[index].isLike = false;
  } else {
    locations[index].isLike = true;
  }
  localStorage.setItem("locations", JSON.stringify(locations));
  info(index);
};

const likeSearch = (index, val) => {
  if (locations[index].isLike) {
    locations[index].isLike = false;
  } else {
    locations[index].isLike = true;
  }

  localStorage.setItem("locations", JSON.stringify(locations));
  renderSearch(val);
};

const info = (i) => {
  locations[i].views = locations[i].views + 1;
  localStorage.setItem("locations", JSON.stringify(locations));
  $("main").addClass("mainInfo");
  $("main").html(`
    <div class="info">
        <img class="infoImg" src=${locations[i].images[0]} alt="image" />
        <div class="infoData">
            <h2> ${locations[i].name} 
                <i class="fa fa-heart" style="color:${
                  locations[i].isLike ? "red" : "black"
                }" onclick="likeInfo(${i})" >
            </i>
            </h2> 
            <p>${locations[i].description}<P>
        </div>
    </div>`);

  let index = 0;
  let maxImages = locations[i].images.length - 1;
  setInterval(function () {
    index = index == maxImages ? 0 : ++index;
    $(".infoImg").attr("src", locations[i].images[index]).fadeIn("slow");
  }, 4000);
};

const showMore = () => {
  newMaxCard = maxCard;
  for (let i = maxCard + 1; i <= maxCard + 3; i++) {
    if (locations[i]) {
      $(".cards").append(`
      <div class="card" >
      <img src=${locations[i].image} alt="image" onclick="info(${i})"/>
        <div class="cardDiv">
          <span class="span"> ${locations[i].name}  </span>
          <p> ${shortStr(
            locations[i].description
          )} <span class="readMore" onclick="info(${i})" >read more</span></p>
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
    $(".cards").append(`
        <div class="card" >
            <img src=${locations[i].image} alt="image" onclick="info(${i})"/>
              <div class="cardDiv">
                <span class="span"> ${locations[i].name}  </span>
                <p> ${shortStr(
                  locations[i].description
                )} <span class="readMore" onclick="info(${i})" >read more</span></p>
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
  }
};

const renderSearch = (val) => {
  let newArr = locations.filter((location) =>
    location.name.toUpperCase().includes(val.toUpperCase())
  );
  $(".cards").html(` `);

  newArr.forEach((location, i) => {
    $(".cards").append(`
    <div class="card" >
        <img src=${location.image} alt="image" onclick="info(${location.id})"/>
          <div class="cardDiv">
            <span class="span"> ${location.name}  </span>
            <p> ${shortStr(
              location.description
            )} <span class="readMore" onclick="info(${
      location.id
    })" >read more</span></p>
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

$(".btnShowMore").click(showMore);

$(document.body).on("keyup", $.searchInput, function (event) {
  if (event.keyCode == 13) {
    renderSearch($(".searchInput").val());
    $(".searchInput").val("");
    $(".btnShowMore").remove();
  }
});
