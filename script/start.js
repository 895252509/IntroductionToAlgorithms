var DEBUGGER = true;

window.onload = function(){
    
    if(DEBUGGER) debugger;

    var arr= [5,2,4,6,9,1,3];
    
    
    //ItA.Sort_Insertion(arr);
    ItA.Sort_Merge(arr,0,arr.length-1);
    
    
}