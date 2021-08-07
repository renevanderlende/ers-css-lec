/****************************************************************************************************/
/**
 * Shortcut to querySelectorAll.
 * @param {string} selector - The selector of the HTML element.
 * @returns {NodeListOf<HTMLElement>}
 */
export const ALL = (selector: string): NodeListOf<HTMLElement> => document.querySelectorAll<HTMLElement>(selector);
/**
 * Shortcut to getElementsByClassName.
 * @param {string} selector - The selector of the HTML element.
 * @returns {HTMLCollectionOf<HTMLElement>}
 */
export const CLS = (selector: string): HTMLCollectionOf<Element> => document.getElementsByClassName(selector);
/**
 * Shortcut to getElementById.
 * @param {string} selector - The selector of the HTML element.
 * @returns {HTMLElement | null}
 */
export const ID = (selector: string): HTMLElement | null => document.getElementById(selector);
/**
 * Shortcut to querySelector.
 * @param {string} selector - The selector of the HTML element.
 * @returns {HTMLElement | null}
 */
export const SEL = (selector: string): HTMLElement | null => document.querySelector<HTMLElement>(selector);
/**
 * Shortcut to getElementsByTagName.
 * @param {string} selector - The selector of the HTML element.
 * @returns {HTMLCollectionOf<HTMLElement>}
 */
export const TAG = (selector: string): HTMLCollectionOf<Element> => document.getElementsByTagName(selector);

/****************************************************************************************************/
interface extDoc extends Document {
	documentElement: HTMLHtmlElement;
	body: HTMLBodyElement;
	head: HTMLHeadElement;
}
/** Shortcuts to <html>, <body> and <head> elements */
export const { documentElement: html, body, head } = document as extDoc;

/****************************************************************************************************/
/**
 * Returns a values rounded up to a given number of decimals.
 * @param {number} value - The number to round up.
 * @param {number} [decimals] - The number of decimals to round up to. (default = 3)
 * @returns {number}
 */
export const clampDec = (value: number, dec: number = 3): number => (dec && dec >= 0 ? +value.toFixed(dec) : value);
/**
 * Returns a values rounded down to a given number of decimals.
 * @deprecated Consider using `clampDec()` instead.
 * @param {number} value - The number to round down.
 * @param {number} [decimals] - The number of decimals to round down to. (default = 3)
 * @returns {number}
 */
export const clampDecLow = clampDec;

/****************************************************************************************************/
/**
 * Traverse an array and execute the passed callback function for each array element found.
 * @deprecated Consider using `Array.prototype.forEach()` instead.
 * @param {Array} array - The array to traverse.
 * @param {(scope: any, index: number, value: any) => void} callback - The callback function to execute for each element.
 * @param {any} scope - The scope to execute the callback in.
 * @returns {void}
 */
export const forEachEntryIn = <T = any, scope = any>(
	array: T[],
	callback: (scope: scope, index: number, value: T) => void,
	scope: scope,
): void => {
	array.forEach((value, index) => callback(scope, index, value));
};
