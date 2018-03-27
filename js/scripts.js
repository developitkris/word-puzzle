$(document).ready(function(event) {
  $("form#wordpuzzle-form").submit(function(event){

    event.preventDefault();
    var text = $("#sentence").val();
    for (var i=0; i<text.length; i++){
    if ((text[i] == "a") || (text[i] == "e") || (text[i] == "i") || (text[i] == "o") || (text[i] == "u")) {
      text=text.replace(text[i], "-");
    }

   };
   console.log(text);
 });
});
/*
function swap(word){
  var arr =[];
  for(var i = 0;i<=word.length;i++){
    if(word[i] == "a"){
      arr.push("-");
    }else{
      arr.push(word[i]);
    }
  }
  return arr.join("");
}

"banana"
*/
