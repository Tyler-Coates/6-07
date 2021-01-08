document.getElementById("Number").addEventListener("click", determainer);
function determainer() {
  let x= document.getElementById("Number box").value;
  x= parseInt(x)
  let y= document.getElementById("Number box 2").value;
  let sum=0 
  sum = parseInt(sum)
  for (y= document.getElementById("Number box 2").value; y > 0; y--) {
 sum=sum+x
}
if (y===0) {
  alert (sum)
}}