
let serial=0;
// for triangle
document.getElementById('btn-triangle').addEventListener('click',function(){
    serial++;
    const productName=document.getElementById('triangle-name').innerText;
    const triangleB=document.getElementById('triangle-b').value; 
    const triangleH=document.getElementById('triangle-h').value;
    const Total=0.5*parseFloat(triangleB)*parseFloat(triangleH); 

    displayData(productName, Total);
     
   
})
// for rectangle
document.getElementById('btn-rectangle').addEventListener('click',function(){
    serial++;
    const productName=document.getElementById('rectangle-name').innerText;
    const rectangleW=document.getElementById('rectangle-w').value; 
    const rectangleI=document.getElementById('rectangle-i').value;
    const Total=parseFloat(rectangleW)*parseFloat(rectangleI); 

    displayData(productName, Total);
     
   
})



// for parallelogram
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    serial++;
    const productName=document.getElementById('parallelogram-name').innerText;
    const parallelogramB=document.getElementById('parallelogram-b').innerText; 
    const parallelogramH=document.getElementById('parallelogram-h').innerText;
    const Total=parseFloat(parallelogramB)*parseFloat(parallelogramH); 

    displayData(productName, Total);
     
   
})
// for Rhombus
document.getElementById('btn-Rhombus').addEventListener('click',function(){
    serial++;
    const productName=document.getElementById('Rhombus-name').innerText;
    const RhombusD1=document.getElementById('RhombusD1').innerText; 
    const RhombusD2=document.getElementById('RhombusD2').innerText;
    const Total=0.5*parseFloat(RhombusD1)*parseFloat(RhombusD2); 
    console.log(Total);

    displayData(productName, Total);
})
// for pentagon
document.getElementById('btn-pentagon').addEventListener('click',function(){
    serial++;
    const productName=document.getElementById('pentagon-name').innerText;
    const pentagonP=document.getElementById('pentagon-p').innerText; 
    const pentagonB=document.getElementById('pentagon-b').innerText;
    const Total=0.5*parseFloat(pentagonP)*parseFloat(pentagonB); 
    console.log(Total);

    displayData(productName, Total);
})
// for ellipse
document.getElementById('btn-ellipse').addEventListener('click',function(){
    serial++;
    const productName=document.getElementById('ellipse-name').innerText;
    const ellipseA=document.getElementById('ellipse-A').innerText; 
    const ellipseB=document.getElementById('ellipse-B').innerText;
    const Total=(3.1416*parseFloat(ellipseA)*parseFloat(ellipseB)).toFixed(2); 
   
    displayData(productName, Total);
})


// function for display values

function displayData(productName,Total){
    const container=document.getElementById('table-container');

    const tr = document.createElement("tr");
    tr.innerHTML=`<td>${serial}</td>
    <td>${productName}</td>
    <td>${Total} cm<sup>2</sup></td>
    `
    container.appendChild(tr);
}

// Go To Next Page 
document.getElementById('next-page').addEventListener('click',function(){
    window.location.href='nextpage.html';
})
