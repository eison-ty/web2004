var date=(()=>{
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
    console.log(mydate,mytime);
    divT.innerHTML=mydate;
})()