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
/****************************************************************************************************/
/*
    MDN: CSS values and units
         https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units

    Relative length units
    Unit    Relative to
    em      Font size of the element.
    ex      x-height of the element's font.
    cap     Cap height (the nominal height of capital letters) of the element's font.
    ch      Average character advance of a narrow glyph in the element’s font, as represented by the “0” (ZERO, U+0030) glyph.
    ic      Average character advance of a full width glyph in the element’s font as represented CJK water ideograph (U+6C34) glyph.
    rem     Font size of the root element.
    lh      Line height of the element.
    rlh     Line height of the root element.
    vw      1% of viewport's width.
    vh      1% of viewport's height.
    vi      1% of viewport's size in the root element's inline axis.
    vb      1% of viewport's size in the root element's block axis.
    vmin    1% of viewport's smaller dimension.
    vmax    1% of viewport's larger dimension.

    Absolute length units
    Unit    Name                Equivalent to
    cm      Centimeters         1cm = 96px/2.54
    mm      Millimeters         1mm = 1/10th of 1cm
    Q       Quarter-millimeters 1Q  = 1/40th of 1cm
    in      Inches              1in = 2.54cm = 96px
    pc      Picas               1pc = 1/16th of 1in
    pt      Points              1pt = 1/72th of 1in
    px      Pixels              1px = 1/96th of 1in

    Angle units
    Unit    Name                Description
    deg     Degrees             There are 360 degrees in a full circle.
    grad    Gradians            There are 400 gradians in a full circle.
    rad     Radians             There are 2π radians in a full circle.
    turn    Turns               There is 1 turn in a full circle.

    Time units
    Unit    Name                Description
    s       Seconds     
    ms      Milliseconds        There are 1,000 milliseconds in a second.

    Frequency units
    Unit    Name                Description
    Hz      Hertz               Represents the number of occurrences per second.
    kHz     KiloHertz           A kiloHertz is 1000 Hertz.

    Resolution unit
    Unit                        Description
    dpi                         Dots per inch.
    dpcm                        Dots per centimeter.
    dppx, x                     Dots per px unit.
*/
