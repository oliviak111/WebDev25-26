//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card(carddata){
  let build = ""
 // let v = data[i]
  build += `<div class="fitted card">
                 <h3>Summons number: ${carddata.summons_number}</h3>
                 <hr>
                 <p>Plate: ${carddata.plate}</p>
                 <p>License type: ${carddata.license_type}</p>
                 <p>County: ${carddata.county}</p>
                 <hr>
                 <p>Status: ${carddata.violation_status}</p>
                 <hr>
                 <p>Issue: ${carddata.issuing_agency}</p>
              </div>`;
  return build;
}
