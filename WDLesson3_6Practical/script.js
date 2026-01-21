// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function average(){
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);
    let grade3 = parseFloat(document.getElementById("grade3").value);

    let op = document.getElementById("output");
    let avg = (grade1 + grade2 + grade3)/3;
    op.innerHTML=`The average of all 3 grades is ${avg}`;
}


// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function slope(){
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let y2 = parseFloat(document.getElementById("y2").value);

    let op = document.getElementById("output2");
    let slope = (y2 - y1) / (x2 - x1);
    op.innerHTML=`The slope between points (${x1},${y1}) and (${x2},${y2}) is ${slope}`;
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function bmi(){
    let h = parseFloat(document.getElementById("h").value);
    let w = parseFloat(document.getElementById("w").value);

    let op = document.getElementById("output3");
    let BMI = (703 * w)/(h ** 2);
    op.innerHTML=`The BMI value is ${BMI}`;
}