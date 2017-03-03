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
    
    //归并排序合并
    //  
    function MergeSub(arr,p,q,r){
        var L = arr.slice(p,q+1);
        var R = arr.slice(q+1,r+1);
        
        L.push(Number.MAX_VALUE);
        R.push(Number.MAX_VALUE);
        
        var i=0,j=0;
        
        for(var k= p; k< r+1; k++){
            if(L[i] <= R[j]){
                arr[k] = L[i];
                i++;
            }else{
                arr[k] = R[j];
                j++;
            }
        }
        
        
        
        
    }
    
    //归并排序
    function Sort_Merge(arr,p,r){
        if(p<r){
            var q = Math.floor((p+r)/2);
            Sort_Merge(arr,p,q);
            Sort_Merge(arr,q+1,r);
            MergeSub(arr,p,q,r);
        }
        
        
    }
    
    
    
    return {
        Sort_Insertion  : Sort_Insertion,
        Sort_Merge      : Sort_Merge
    }
    
})()