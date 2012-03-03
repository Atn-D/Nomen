function setCook(nom,valeur) {
	var expDate = new Date();
	expDate.setTime(expDate.getTime() + (30 * 24 * 3600 * 1000));
	document.cookie = nom + "=" + escape(valeur) + ";expires=" + expDate.toGMTString();
}

function getCook(nom) {
	deb = document.cookie.indexOf(nom + "=")
	if (deb >= 0) {
		deb += nom.length + 1
		fin = document.cookie.indexOf(";",deb)
		if (fin < 0) fin = document.cookie.length
			return unescape(document.cookie.substring(deb,fin))
	}
	return ""
}

function contract(id, register){
	var div1 = document.getElementById(id+"_show");
	var div2 = document.getElementById(id+"_hidden");
	
	if (div1 != null && div2 != null)
	{
		div1.style.display = "none";
		div2.style.display = "table";
	}

	if (typeof register == 'undefined' || register == true)
	{
		hidden.push(id);
		setCook("HiddenForums", hidden.join('|'));
	}
}
function expand(id){
	var div1 = document.getElementById(id+"_show");
	var div2 = document.getElementById(id+"_hidden");	
	
	if (div1 != null && div2 != null)
	{
		div1.style.display = "table";
		div2.style.display = "none";
	}
	
	for(var i = 0; i < hidden.length; i++)
	{
		if (hidden[i] == id)
			hidden.splice(i, 1);
	}
	
	setCook("HiddenForums", hidden.join('|'));
}

function contractDiv(id){
	var div1 = document.getElementById(id+"_show");
	var div2 = document.getElementById(id+"_hidden");
	
	div1.style.display = "block";
	div2.style.display = "none";
	
}
function expandDiv(id){
	var div1 = document.getElementById(id+"_show");
	var div2 = document.getElementById(id+"_hidden");	
	
	div1.style.display = "none";
	div2.style.display = "block";

}

function LoadHidden() {
	if (typeof hidden == 'undefined')
	{
		hidden = getCook("HiddenForums").split('|');
		for(var i = 0; i < hidden.length; i++)
		{
			contract(hidden[i], false);
		}
	}
}

window.onload = LoadHidden;
