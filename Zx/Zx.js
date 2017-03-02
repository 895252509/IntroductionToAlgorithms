//Introduction to Algorithms

var ItA = (function(){
    
    //插入排序
    function Sort_Insertion(arr,func){
        if(typeof arr !== 'object') return -1;
        var key;
        var j;
        for(var i= 1;i<arr.length;i++){    
            key = arr[i];
            j = i - 1;
            while (j >= 0 && arr[j] > key){
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
        }
    }
    
    
    
    return {
        Sort_Insertion : Sort_Insertion
    }
    
})()