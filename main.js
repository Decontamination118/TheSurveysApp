writing="";
function done()
{
    document.getElementById("survey").style.display="none";
}
function writingDone()
{
    writing=document.getElementById("textArea").value;
    document.getElementById("lally").innerHTML=writing;
}