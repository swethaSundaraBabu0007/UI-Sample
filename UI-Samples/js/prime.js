function prime()
{
    var n =  document.getElementById('t2').value;
    var flag = true;
    for(var i=2;i<=Math.sqrt(n);i++)
    if(n%i==0)
    {
        flag= false;
        break;
    }
    result = "<p>";
    if(flag)
        result += n+" is Prime Number"+"</p>";
    else
        result += n+" is not Prime Number"+"</p>";
    document.getElementById('prime').innerHTML = result;
}