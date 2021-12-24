window.onload = () => {
    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);
	document.getElementsByTagName("html")[0].style.visibility = "visible";
}

//<script type="text/javascript" src="js/removewatermark.js"></script>