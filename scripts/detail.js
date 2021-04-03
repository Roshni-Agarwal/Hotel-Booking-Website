function GetDays(){
    var adultNumber =document.getElementById("adult").value;
    var date2= new Date(document.getElementById("date2").value);
    var date1 = new Date(document.getElementById("date1").value);
    var pp =  parseInt((date2 - date1) / (24 * 3600 * 1000))*adultNumber*1000;
    if(isNaN(pp)){
        pp=0;
    }
    return "Rs. " +pp;
}

function cal(){
    var dtToday = new Date($("#date1")[0].value);
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate()+1;
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var minDate= year + '-' + month + '-' + day;
    
    
    $('#date2').attr('min', minDate);
if(document.getElementById("date2")){
document.getElementById("price").value=GetDays();

} 
}


$(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var minDate= year + '-' + month + '-' + day;
    
    $('#date1').attr('min', minDate);
   
});

$(function(){
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate()+1;
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var minDate= year + '-' + month + '-' + day;
    
    
    $('#date2').attr('min', minDate);
});