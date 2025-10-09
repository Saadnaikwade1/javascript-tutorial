let a = [5, 7, 24, 65, 87];

let l=0, r=a.length-1,t=65
while(l<=r) {
    let m=parseInt((l+r)/2)
    if (a[m]===t){
        console.log(m);
        break;
    }
    else if(a[m]<t){
        l=m+1
    }
    else{
        r=m-1
    }
}

