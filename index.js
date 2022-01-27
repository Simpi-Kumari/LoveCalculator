function Randomgeneration()
 {
    var person1=document.querySelector(".person1").value;
    var person2=document.querySelector(".person2").value;

    if (person1=="")
    {
        alert("Enter Your Name");
    } 
    else if(person2=="")
    {
        alert("Enter Your Crush Name");
    }

     else 
    {
        var love = Math.floor(Math.random() * 100 + 1);
       
       document.querySelector(".person1").setAttribute("readonly","true");
       document.querySelector(".person2").setAttribute("readonly","true");
       document.querySelector(".calculate-button").setAttribute("onclick","");
       
       
        document.querySelector("h3").innerHTML="The Love between " +"'"+ person1 + "'" +" & " +"'"+person2 + "'" + " " +"  is " + love +"%";
        
       document.querySelector(".reload").style.display="block";
       
      
    }
}
