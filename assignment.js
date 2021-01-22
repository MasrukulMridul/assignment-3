

//#kilometerToMeter
function kilometerToMeter (km)
{  
   var meter = km * 1000;  //1km = 1000m
   return meter;
}

//#budgetCalculator
function budgetCalculator(watch,phone,laptop )
{
    var watchRate = 50;
    entireWatchRate = watch * watchRate;

     var phoneRate = 100;
     entirePhoneRate = phone * phoneRate;

     var laptopRate = 500;
     entireLaptopRate = laptop * laptopRate;

      var entireBudget = entireWatchRate + entirePhoneRate + entireLaptopRate;

   return entireBudget;
}

//#hotelCost

function hotelCost(days)
{
    var entirePrice = 0;
    //First 10 days price
    if (days <= 10)
    {
        entirePrice = days * 100;
    }
   // second 10days price
    else if (days<=20)
    {
        var first10Days = 10 * 100;
        var lasting = days - 10;
        var second10Days = lasting * 80;
        entirePrice = first10Days + second10Days;

    }
    //after 20 days overall price
    else
    {
        var first10Days = 10* 100;
        var second10Days = 10 * 80;
        var lasting = days-20;
        var othersDays = lasting * 50;
        entirePrice = first10Days + second10Days + othersDays;
    }
    return entirePrice;
}

//#megaFriend

function megaFriend("Munna","Zafree","Elon Musks","Masrukul")
{
var highest = friendsName[0];
for(var i = 0; i< friendsName.length;i++)
{
    
    if (friendsName[i].length> highest.length)

    {
        highest = friendsName[i];
    }  
} 
 return highest;
}
