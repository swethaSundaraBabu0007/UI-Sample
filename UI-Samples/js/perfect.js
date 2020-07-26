function perfect(){
    var n = document.getElementById('t1').value;;
    var s =0;
    for(var i =1;i<=n/2;i++){
        if(n%i==0)
        s=s+i;
    }
    result = "<p>"
    if(n==s)
    result += n+" is perfect number"+"</p>";
    else
    result += n+" is not perfect number"+"</p>";
    document.getElementById('perfect').innerHTML = result;
}