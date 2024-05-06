function getData(dataId,getNextdata){
    //2s
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextdata){
        getNextdata();
        }
    },2000);         
}
//Callback hell in javascript 
    getData(1,() =>{
    console.log("Getting data 2 ...");
    getData(2,() =>{
        console.log("Getting data 3 ...");
        getData(3,() =>{
            console.log("Getting data 4 ...");
            getData(4);
        });
    });
});
