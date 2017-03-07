//Introduction to Algorithms

var ItA = (function (){
    function info(){
        
        console.log('算法导论：\n    算法导论的用例。');
        
    }
    
    return {
        info : info
    }
})();

//数据结构
//矩阵
ItA.Matrix = function (n,m){
    if(arguments.length === 2){
        this.rows = n;
        this.cols = m;
        for(var i= 0; i< n; i++){
            this.push(new Array(m));
        }
    }else if(arguments.length === 1){
        this.rows = 0;
        this.cols = 0;
        var args = arguments[0];
        var max_n = 0;
        for(var i= 0; i< args.length; i++){
            this.push([]);
            for(var j= 0; j< args[i].length; j++){
                if(max_n < args[i].length) max_n = args[i].length;
                this[i][j] = args[i][j];
            }
        }
        for(var i= 0; i< args.length; i++){
            if(args[i].length === max_n);
            else {
                for(var j= 0; j< max_n; j++){
                    if(!this[i][j]) this[i][j] = 0;
                }
            }
        }
        this.rows = args.length;
        this.cols = max_n;
    }
}
ItA.Matrix.prototype = [];
ItA.Matrix.prototype.constructor = ItA.Matrix;

ItA.Matrix.prototype.clear = function(){
    for(var n= 0; n< this.rows; n++){
        for(var m= 0; m< this.cols; m++){
            this[n][m] = 0;
        }
    }
}

ItA.Matrix.prototype.toString = function (){
    var str = '';
    for(var i= 0; i< this.rows; i++){
        str += '|';
        for(var j= 0; j< this.cols; j++){
            var l = 0;
            var stri = this[i][j].toString();
            if(stri.length< 4) {
                l = 4- stri.length;
                for(var k= 0; k< l; k++){
                    str += ' ';
                }
                str += stri;
            }else {
                str += stri;
            }
            str += ',';
        }
        str = str.substr(0,str.length-1);
        str += '|\n';
    }
    return str;
}

//算法
ItA.Sort = (function (){
    //插入排序
    function Insertion(arr,func){
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
    //Combine
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
    function Merge(arr,p,r){
        if(p<r){    //Divide
            var q = Math.floor((p+r)/2);
            Merge(arr,p,q);
            Merge(arr,q+1,r);
            MergeSub(arr,p,q,r);  //Conquer
        }
        
        
    }
    
    
    
    return {
        Insertion  : Insertion,
        Merge      : Merge
    }
    
})();

ItA.FindMaxSubarray = (function(){
    
    //寻找跨越中点的最大子数组的边界
    var FindMaxCrossingSubarray = function(arr,low,mid,high){
        var left_sum = Number.MIN_VALUE;
        var right_sum = Number.MIN_VALUE;
        var sum = 0;
        var max_left = 0;
        var max_right = 0;
        
        for(var i= mid; i>= low; i-- ){
            sum = sum + arr[i];
            if(sum > left_sum){
                left_sum = sum;
                max_left = i;
            }
        }
        sum = 0;
        for(var i= mid+1; i<= high; i++){
            sum += arr[i];
            if(sum> right_sum){
                right_sum = sum;
                max_right = i;
            }
        }
        
        return [max_left, max_right, left_sum + right_sum ];
    }
    
    var FindMaximumSubarray = function (arr, low, high){
        if(high === low)
            return [low,high,arr[low]];
        else {
            var mid = Math.floor((low+high)/2);
            var L = FindMaximumSubarray(arr,low,mid);
            var R = FindMaximumSubarray(arr,mid+1,high);
            var C = FindMaxCrossingSubarray(arr,low,mid,high);   //Cross
            
            if( L[2] >= R[2] && L[2] >= C[2]){
                return L;
            }else if( R[2] >= L[2] && R[2] >= C[2] ){
                return R;
            }else {
                return C;
            }
        }
        debugger;
    }
    
    var execute = function(arr, low, high){
        
        return FindMaximumSubarray(arr, low, high);
        debugger;
    }
    
    var DirectlyCalculating = function(arr, low, high){
        
        var sum_max = Number.MIN_VALUE;
        var left_index= 0;
        var right_index= 0;
        for(var i= low; i<= high; i++){
            for(var j= i; j<= high; j++){
                var sum = 0;
                for(var k= i; k<= j; k++){
                    sum += arr[k];
                }
                if(sum > sum_max) {
                    sum_max = sum;
                    left_index = i;
                    right_index = j;
                }
            }
            
        }
        
        return [left_index, right_index, sum_max];
    } 
    
    var DivideConquer = function (arr, low, high){
        
        return FindMaximumSubarray(arr, low, high);
        
    }
    
    return {
        
        execute     : execute,
        
        DivideConquer   : DivideConquer,
        
        DirectlyCalculating     : DirectlyCalculating
        
    }
})();

ItA.Matrix.SquareMatrixMultiply = function(A,B) {
    var n= A.rows;
    var C = new ItA.Matrix(n, n);
    for(var i= 0; i< n; i++){
        for(var j= 0; j< n; j++){
            C.clear();
            for(var k= 0; k< n; k++){
                C[i][j] = C[i][j] + A[i][k]*B[k][j];
            }
        }
    }
    return C;
}






































