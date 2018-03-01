/**
 * 
 * 将横线分隔式的字符转换成驼峰式字符
 * @param {any} data 
 * @returns 
 */
function camelCase(data) {
	if(!data) return null;
	const REGEXP_KEBAB_CASE = /[\:\-]+(.)/g;
	return data.replace(REGEXP_KEBAB_CASE, function(match, $1, offset){
		return offset ? $1.toUpperCase() : $1;
	})
}

export function getOneStyle(element, cssParam) {
	if(!element || !cssParam) return null;	
	element = typeof element == 'string' ? document.querySelector(element) : element;
	cssParam = camelCase(cssParam);
	if(cssParam == 'flot') {
		cssParam = 'cssFloat';
	}
	const allStyle = document.defaultView.getComputedStyle(element, null);
	return element.style[cssParam] || allStyle ? allStyle[cssParam] : null;
}

function getStyleAttr(styleAttr) {
	let style = '';
	Object.keys(styleAttr).forEach(key => {
		style += `${key}: ${styleAttr[key]};`;
	})
	return style;
}
export function getStringTypeAttr(attribute) {
	let stringAttr = '';
	Object.keys(attribute).forEach(key => {
		let attr = '';
		if(key != 'style') {
			attr = `${key}="${attribute[key]}"\n`;
		}else {
			attr = `${key}="${getStyleAttr(attribute[key])}"`;
		}
		stringAttr += attr;
	})
	return stringAttr;
}