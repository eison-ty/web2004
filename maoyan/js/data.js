var gettime=()=>{
    var myDate=new Date();
    var mymonth=myDate.getMonth()+1;
    var myday=myDate.getDate();
    if(mymonth<10){
        mymonth="0"+mymonth;
    }
    var myday=myDate.getDate();
    if(myday<10){
        myday="0"+myday;
    }
    var mydate=myDate.getFullYear()+"-"+mymonth+"-"+myday;
    var mytime=myDate.toLocaleTimeString('chinese',{hour12:false}); 
    document.getElementById("get_date").innerHTML=mydate;
    document.getElementById("get_time").innerHTML=mytime;
}