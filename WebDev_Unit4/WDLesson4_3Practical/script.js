/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function b(){
       let m = parseFloat(document.getElementById("ib").value);
       let h = parseFloat(document.getElementById("inch").value);
       let BMI = 703 * (m/(h**2));
       let op = document.getElementById("output");
       let msg = "";
       let img ="";

       if(BMI < 18.5){
              msg = "Underweight";
              img ="underweight.png";
       }else if(BMI >= 18.5 && BMI <= 24.9){
              msg = "Healthy Weight";
       }else if(BMI >= 25 && BMI <= 29.9){
              msg = "Overweight";
              img ="overweight.png";
       }else if(BMI >= 30){
              msg = "Obesity";
              img ="obeseweight.png";
       }
       op.innerHTML = `The BMI of ${m} and ${h} is ${BMI.toFixed(2)} which is ${msg} <img src="${img}">`;
       
}

