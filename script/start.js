var DEBUGGER = true;

window.onload = function(){
    
    if(DEBUGGER) debugger;

    var arr= [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,-4,7];
    
    //ItA.Sort.Insertion(arr);
    //ItA.Sort.Merge(arr,0,arr.length-1);
    
    var a= ItA.FindMaxSubarray.DivideConquer(arr, 0, arr.length-1);
    
    a= ItA.FindMaxSubarray.DirectlyCalculating(arr,0,arr.length-1);
}