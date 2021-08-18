function check(Array)
{
    var sum=0;
const arr=["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for(let i=0;i<Array.length;i++)
{
    for(let j=0;j<arr.length;j++)
    {
        if(Array[i]==arr[j])
        {
            sum+=j;
        }
    }
}
return sum;


}
var count = 0;
function myFunction(yName,cName)
{
    count++;
var str1=document.getElementById("input1").value;
var str2=document.getElementById("input2").value;

str1=str1.toLowerCase();
console.log(str1);
str2=str2.toLowerCase();
const Array1=Array.from(str1);
console.log(Array1);
const Array2=Array.from(str2);
let len1=Array1.length;
let len2=Array2.length;
let sum1=check(Array1);
console.log(sum1);
let sum2=check(Array2);
let n=Math.abs((len1-len2)*(sum1-sum2));
let max=Math.max(sum1,sum2);
var x=(n/max)*100;
var ans=Math.round(Math.abs(100-x));
//document.getElementById("myValue").value=ans;
//console.log("ans: " +ans)
$('#ops').fadeOut();
$('#calc').fadeIn();
$('#myValue').val(ans);
console.log("ans: " +ans);
$('#chacha').click();
$("#myValue").speedometer({divFact:10,eventListenerType:'click'});
setTimeout(
    function() {
        if (ans>100)
        {
            ans=100;
        }
        
        $('#myValue').click();
        $("#speech").append(cName+" has "+ans+"%"+" crush on "+yName);
        emoji(ans);
    },
    1000);
    
    console.log("count: " + count);
}
function emoji(ans)
{
    if(ans>=90)
        {
            $('#love').fadeIn();
        }
        else if(ans>=80 && ans<90)
        {
            $('#yay').fadeIn();
        }
        else if(ans>=70 && ans<80)
        {
            $('#wow').fadeIn();
        }
        else if(ans>=50 && ans<70)
        {
            $('#like').fadeIn();
        }
        else if(ans>=30 && ans<50)
        {
            $('#sad').fadeIn();
        }
        else if(ans>=1 && ans<30)
        {
            $('#angry').fadeIn();
        }
        else{
            $('#haha').fadeIn();
        }

}
function emojis(ans)
{
    if(ans>=90)
        {
            $('#love').fadeOut();
        }
        else if(ans>=80 && ans<90)
        {
            $('#yay').fadeOut();
        }
        else if(ans>=70 && ans<80)
        {
            $('#wow').fadeOut();
        }
        else if(ans>=50 && ans<70)
        {
            $('#like').fadeOut();
        }
        else if(ans>=30 && ans<50)
        {
            $('#sad').fadeOut();
        }
        else if(ans>=1 && ans<30)
        {
            $('#angry').fadeOut();
        }
        else{
            $('#haha').fadeOut();
        }
}
function maddy()
{

// $('#ops').fadeIn();
// $('#calc').fadeOut();
location.reload();

}
function uncle(ans,yName,cName)
{
    console.log("ans inside uncle: " +ans+yName+" "+cName);
    $('#myValue').val(0);
    $('#myValue').click();
    $('#myValue').val(ans);
    emojis(ans);
    setTimeout(
        function() {
            $('#myValue').click();
            
        },
        1000);
        $('#speech').fadeOut();
        // $('#baby').click();
         setTimeout(
            function() {
                $('#speech').fadeIn();
                emoji(ans);
                
                
             },
             1000);
        //     $('#baby').click();
    
}
function textform(name)
{
    var num=$('#input2').val();
    if(name!="" && name!=undefined && num!="" && num!=undefined)
    {
        $("#calbtn").fadeIn();
    }
    else{
        $("#calbtn").fadeOut(); 
    }

}
function text1form(name)
{
    var num=$('#input1').val();
    if(name!="" && name!=undefined && num!="" && num!=undefined)
    {
        $("#calbtn").fadeIn();
    }
    else{
        $("#calbtn").fadeOut(); 
    }

}


