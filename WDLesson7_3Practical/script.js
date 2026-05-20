//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
//global variables
let data, info, output;

async function init(){
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data); 
}

function accidentsByBorough(){
  //Variables to keep count of accidents by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;

  //Tallying the count of accidents by borough
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == "QUEENS"){
      q++;
    }else if(accident.borough == "MANHATTAN"){
      m++;
    }else if(accident.borough == "BROOKLYN"){
      bk++;
    }else if(accident.borough == "BRONX"){
      bx++;
    }else if(accident.borough == "STATEN ISLAND"){
      s++;
    }
  }

  //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];

  //Retrieving chart type from user's selection of drop-down
  let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType)
}

function accidentsByVehicle(){
  //Challenge: Create the same functionality as in the function accidentsByVehicle() above, except you will be aggregating for the following vehicle types: 'Sedan', 'Station Wagon/Sport Utility Vehicle', 'Taxi', 'Bus', 'Motorcycle' and "Other".  "Other" isn't a vehicle type but simply meant to capture all other vehicles.

  //Variables to keep count of vehicles by type
  let t= 0, bus = 0, mt = 0, s1 = 0, ws = 0, other = 0; 

  //Tally the count of vehicles by type using decisions
  for(let i = 0; i < data.length; i++){
    let car = data[i];
    if(car.vehicle_type_code1 == "Sedan"){
      s1++;
    }else if(car.vehicle_type_code1 == "Station Wagon/Sport Utility Vehicle"){
      ws++;
    }else if(car.vehicle_type_code1 == "Taxi"){
      t++;
    }else if(car.vehicle_type_code1 == "Bus"){
      bus++;
    }else if(car.vehicle_type_code1 == "Motorcycle"){
      mt++;
    }else 
      other++;
  }
  

  //Create data for chart (as array of arrays) with 1st position of array being label
   let chartData2 = [
    ["Sedan",s1],
    ["Station Wagon/Sport Utility Vehicle",ws],
    ["Taxi",t],
    ["Bus",bus],
    ["Motorcycle",mt],
    ["Other", other]
  ];
  
  //Retrieve chart type from user's selection of drop-down
  let type = get("chartType").value;
  
  //Generate and display chart
  displayChart(chartData2, "chart", type);
}

