function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6aYoYWecUrT":
        Script1();
        break;
      case "5fCrsqXwwNR":
        Script2();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencilsheets){t="https://cluelabs.com/stencil/display/widget-sheets-init-v2",s={authtool:"sl",chart:"MjIyOXw1OTA5fGQyYjZkMjk3NGFjYmIyYjBiZGY3ZTZkZDBmNDY4ZmU1"},a=Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&");(xhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var e=this.responseText,t=document.getElementsByTagName("head")[0],s=document.createElement("script");t.appendChild(s),s.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},xhttp.open("POST",t,!0),xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xhttp.send(a)}
        
}

function Script2()
{
  var player = GetPlayer();
SheetsSet('Nama Peserta', player.GetVar('Nama'));
SheetsSet('Kelas', player.GetVar('TextEntry1'));
}

