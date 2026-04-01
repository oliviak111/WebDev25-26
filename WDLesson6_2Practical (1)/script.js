function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = "";
      build += `<div class = "card">
                    <h3>${school.name}</h3>
                    <img src = "${school.image}">
                    <h3> ${school.address}</h3>
              </div>`;
  output.innerHTML = build;
}

function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Taylor Swift",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQrSgjYbgdSNwEZ8xpgfbwh_u7IwdYQVOHbsngNdHJIQsOhwyIYI9VlabtUF4vD9JdoSq6ZQ3pqFD90iwe5yo8CSllHVE9MrdHzRbeQ&s=10",
    "album":"Lover",
    "url":"https://www.taylorswift.com/"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  let build = "";
      build += `<div class = "card">
                    <h3>${artist.name}</h3>                
                    <p>${artist.album}</p>
                   <a href = "${artist.url}" target="_blank"><img src = ${artist.image}></a>
              </div>`;
  output.innerHTML = build;
}







