


//计算字符串长度
function getUtf8Length(str) {
	var totalLength = 0,
		charCode,
		len = str.length,
		i;

	for (i = 0; i < len; i++) {
		charCode = str.charCodeAt(i);
		if (charCode < 0x007f) {
			totalLength++;
		} else if ((0x0080 <= charCode) && (charCode <= 0x07ff)) {
			totalLength += 2;
		} else if ((0x0800 <= charCode) && (charCode <= 0xffff)) {
			totalLength += 3;
		} else {
			totalLength += 4;
		}
	}
	
	console.log("totalLength=="+totalLength);
}

getUtf8Length("WWWWWWWWWWWW");