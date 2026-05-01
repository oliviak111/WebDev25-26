let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let issue = data[i]; 
    build += `<div class="fitted card">
                 <h3>ID: ${issue.collision_id}</h3>
                 <hr>
                 <p>Street: ${issue.on_street_name}</p>
                 <p>Vehicle: ${issue.vehicle_type_code1}</p>
                 <p>Crash Time: ${issue.crash_time}</p>
                 <hr>
                 <p>Factor: ${issue.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>People injured: ${issue.number_of_persons_injured}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterBystreet(){
  let output = document.getElementById("output");
  let streets = document.getElementById("streets").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let issue = data[i];
    if(issue.on_street_name == streets){
      build += `<div class="fitted card">
                    <h3>ID: ${issue.collision_id}</h3>
                    <hr>
                    <p>Street: ${issue.on_street_name}</p>
                    <p>Vehicle: ${issue.vehicle_type_code1}</p>
                    <p>Crash Time: ${issue.crash_time}</p>
                    <hr>
                    <p>Factor: ${issue.contributing_factor_vehicle_1}</p>
                    <hr>
                    <p>People injured: ${issue.number_of_persons_injured}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByvehicle(){
  let output = document.getElementById("output");
  let vehicle = document.getElementById("vehicle").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let issue = data[i];
    if(issue.vehicle_type_code1 == vehicle){
      build += `<div class="fitted card">
                    <h3>ID: ${issue.collision_id}</h3>
                    <hr>
                    <p>Street: ${issue.on_street_name}</p>
                    <p>Vehicle: ${issue.vehicle_type_code1}</p>
                    <p>Crash Time: ${issue.crash_time}</p>
                    <hr>
                    <p>Factor: ${issue.contributing_factor_vehicle_1}</p>
                    <hr>
                    <p>People injured: ${issue.number_of_persons_injured}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function filterByid(){
  let output = document.getElementById("output");
  let id = document.getElementById("id").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let issue = data[i];
    if(issue.collision_id == id){
      build += `<div class="fitted card">
                    <h3>Street: ${issue.on_street_name}</h3>
                    <hr>
                    <p>ID: ${issue.collision_id}</p>
                    <p>Vehicle: ${issue.vehicle_type_code1}</p>
                    <p>Crash Time: ${issue.crash_time}</p>
                    <hr>
                    <p>Factor: ${issue.contributing_factor_vehicle_1}</p>
                    <hr>
                    <p>People injured: ${issue.number_of_persons_injured}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
