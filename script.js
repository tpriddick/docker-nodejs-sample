function check() {
	const inEle1 = document.getElementById('inputElement1').value ;
	const gmBrd = document.getElementById('inputElement2').value ;
	let newInner = "" ;
	for (let i = 0; i < 5; i++) {
		newInner += '<td class=\'' + gmBrd[i] + '\'>' + inEle1[i] + '</td>'
	}
	document.getElementById('gameboard').innerHTML = newInner ;
}