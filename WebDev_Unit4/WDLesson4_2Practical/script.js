// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
  let l = parseInt(document.getElementById("l").value);
  let w = parseInt(document.getElementById("w").value);
  let op = document.getElementById("output");
  let a = l * w;
  msg = "";

  if(l <= 0 || w<=0){
    msg = "Inappropriate measurement";
  }else{
    msg = `Area of ${l} and ${w} = ${a}`;
  }
  op.innerHTML = msg;
}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let ani = document.getElementById("animal").value;
  let e = document.getElementById("emotion").value;
  let op = document.getElementById("output2");
  let img = "";

  if(ani == "Bear" && e =="Funny"){
    img = "funnyBear.jpg";
  }
  if(ani == "Bear" && e =="Sad"){
    img = "sadBear.jpg";
  }
  if(ani == "Cat" && e =="Funny"){
    img = "funnyCat.jpg";
  }
  if(ani == "Cat" && e =="Sad"){
    img = "sadCat.jpg";
  }
  if(ani == "Dog" && e =="Funny"){
    img = "funnyDog.jpg";
  }
  if(ani == "Dog" && e =="Sad"){
    img = "sadDog.jpg";
  }
  op.innerHTML = `<img src="${img}">`;
}
