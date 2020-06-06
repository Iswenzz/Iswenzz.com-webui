/**
 * Async delay.
 * @param ms - Delay time in millisec.
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Updating objects immutably.
 * @param oldObject - The old object.
 * @param updatedProperties - Updated properties object.
 */
export const updateObject = (oldObject: Object, updatedProperties: Object): any => {
	return {
		...oldObject,
		...updatedProperties
	};
};

/**
 * Get a DOM Element by XPath.
 * @param xpath - XPath pattern.
 * @param contextNode - The target document.
 */
export const getElementsByXPath = (xpath: string, contextNode?: Document) =>
{
	let xpathResult = null;
	if(contextNode === undefined)
		xpathResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
	else
		xpathResult = contextNode.evaluate(xpath, contextNode, null, XPathResult.ANY_TYPE, null);

	let array = [];
	let element;
	element = xpathResult.iterateNext();
	while(element)
	{
		array[array.length] = element;
		element = xpathResult.iterateNext();
	}
	return array;
}

/**
 * Get multiple DOM Elements by XPath.
 * @param xpath - The XPath pattern.
 * @param contextNode - The target document.
 */
export const getElementByXPath = (xpath: string, contextNode?: Document) =>
{
	let xpathResult = null;
	if (contextNode === undefined)
		xpathResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
	else
		xpathResult = contextNode.evaluate(xpath, contextNode, null, XPathResult.ANY_TYPE, null);
	return xpathResult.iterateNext();
}
