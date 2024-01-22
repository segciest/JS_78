var arr = [];
// Nhập mảng
function nhapMang(arrItem) {
    arr.push(arrItem);
    console.log(arr);
}
// Tổng số dương
function tongSoDuong(arr){
    var sum =0;
    for (var i =0 ; i < arr.length ; i++){
        if (arr[i]>0){
            sum += arr[i];
        }
    }
    return sum;
}
// Đếm số dương
function demSoDuong(arr){
    var count =0;
    for (var i=0;i<arr.length ; i++){
        if (arr[i]>0){
            count ++;
        }
    }
    return count;
}
// Tìm số nhỏ nhất (dùng function sortTangDan)
function soDuongnhoNhat (arr){
    for (var i=0;i<arr.length;i++){
        if (arr[i]>0){
            return arr[i];
        }
    }
}
// Tìm số chẳn cuối cùng nếu k có trả về -1
function soChanCuoiCung(arr){
    for (var i =arr.length-1;i>=0;i--){
        if (arr[i]%2==0){
            return arr[i];
        }else{
            return -1;
        }
    }
}
// Thay đổi vị trí a,b
function swap (arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    console.log(arr);
}
// Sắp xếp mảng (tăng dần)
function sortTangDan (arr){
    arr.sort(function(a,b){
        return a-b;
    })
    return arr;
}
function primeCheck(n) {
    var flag = true;
    var prime='';
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < n-1; i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        prime = 'prime';
    }
    else{
       prime = 'nonprime'
    }
    return prime;
}

// Số nguyên
function intergerCount (arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i]-Math.floor(arr[i])==0){
            count ++;
        }
    }
    return count;
}

// Đếm số dương
function positiveCount (arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i]>0){
            count ++;
        }
    }
    return count;
}
// Đếm số âm
function negativeCount (arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i]<0){
            count ++;
        }
    }
    return count;
}



// Button


// Submit array
document.getElementById('btn_nhapMang').onclick = function(){
    var arrItem = document.getElementById('txt_nhapMang').value*1;
    nhapMang(arrItem);
};

// Spec array
document.getElementById('btn_xemMang').onclick = function(){
    document.getElementById('kq').innerHTML = `Mảng hiện tại: ${arr}`;
};

// Sum positive number
document.getElementById('btn_tongDuong').onclick = function (){
    document.getElementById('kq').innerHTML = `Tổng số dương trong mảng: ${tongSoDuong(arr)}`
}

// Count positive number
document.getElementById('btn_demSoDuong').onclick = function (){
    document.getElementById('kq').innerHTML = `Có ${demSoDuong(arr)} số dương trong mảng`
}

// Smallest number
document.getElementById('btn_soNhoNhat').onclick = function (){
    document.getElementById('kq').innerHTML = sortTangDan(arr)[0];
}
// Smallest positive number
document.getElementById('btn_soDuongNhoNhat').onclick = function (){
    document.getElementById('kq').innerHTML = `Số dương nhỏ nhất trong mảng là:${soDuongnhoNhat(sortTangDan(arr))}`;
}
// lastest even number
document.getElementById('btn_soChanCuoiCung').onclick = function (){
    document.getElementById('kq').innerHTML = `Số chẵn cuối cùng trong mảng là: ${soChanCuoiCung(arr)}`;
}
// Swap array
document.getElementById('btn_swap').onclick = function(){
    var a = document.getElementById('txt_1st').value*1;
    var b = document.getElementById('txt_2nd').value*1;
    swap(arr,a,b);
    document.getElementById('kq').innerHTML = `Mảng mới: ${arr}`;
}

// Tănh dần
document.getElementById('btn_tangDan').onclick = function(){
    document.getElementById('kq').innerHTML = sortTangDan(arr);
}


// First Prime
document.getElementById('btn_firstPrime').onclick = function (){
    for(var i =0;i<arr.length;i++){
        if (primeCheck(arr[i])==='prime'){
            document.getElementById('kq').innerHTML = `Số nguyên tố đầu tiên là ${arr[i]}`
            break;
        }
        else {
            document.getElementById('kq').innerHTML = -1;
        }
    }
}

// Có bao nhiêu số nguyên
document.getElementById('btn_intergerCount').onclick = function (){
    document.getElementById('kq').innerHTML = `có ${intergerCount(arr)} số nguyên trong mảng`
}

// So sánh âm dương
document.getElementById('btn_intergerCompare').onclick = function () {
    if (positiveCount(arr)>negativeCount(arr)){
        document.getElementById('kq').innerHTML = 'Số dương nhiều hơn';
    } 
    else if(negativeCount(arr)>positiveCount(arr)){
        document.getElementById('kq').innerHTML = 'Số âm nhiều hơn'
    } else {
        document.getElementById('kq').innerHTML = 'Số dương và âm = nhau';
    }
}