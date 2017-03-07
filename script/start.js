var DEBUGGER = true;

window.onload = function(){
    
    if(DEBUGGER) debugger;

    var arr= [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,-4,7];
    
    //ItA.Sort.Insertion(arr);
    //ItA.Sort.Merge(arr,0,arr.length-1);
    
    var a= ItA.FindMaxSubarray.DivideConquer(arr, 0, arr.length-1);
    
    var b= ItA.FindMaxSubarray.DirectlyCalculating(arr,0,arr.length-1);
    
    var c = new ItA.Matrix(2,2);
    c.clear();
    
    var d = new ItA.Matrix([
        [80,30,100],
        [50,20],
        [10]
    ]);
    
    var e = new ItA.Matrix([
        [10,10,10],
        [20,20,20],
        [30,30,30]
    ]);
    
    var f = ItA.Matrix.SquareMatrixMultiply(d,e);
    
    console.log(f.toString());
}