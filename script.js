function check() {
    const inEle = document.getElementById('inputElement') ;
    console.log(inEle) ;
	const gmBrd = document.getElementById('gameboard')
    console.log(gmBrd) ;
	const inStr = inEle.value ;         // lack () means 'property' (data)
    console.log(inStr)
	const upStr = inStr.toUpperCase() ; // have () means 'method'   (compute)
	console.log(upStr)
    gmBrd.innerHTML = upStr ;
}