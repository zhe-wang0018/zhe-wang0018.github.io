function b64Encode (str) {
    return btoa(encodeURIComponent(str));
}
function b64Decode (str) {
    return decodeURIComponent(atob(str));
}
function myFunction(){
  	var b = b64Encode('84');
	var a = b64Decode(b);
	alert(b)
}

console.log(b);  //返回SmF2YVNjcmlwdCVFNCVCQiU4RSVFNSU4NSVBNFOSU5NyVBOCVFNSU4OCVCMCVFNyVCMiVCRSVFOSU4MCU5QQ==
console.log(a);  //返回“JavaScript 从入门到精通”