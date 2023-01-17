/**
 *
 * @param {string} htmlString : HTML 문자열
 * @returns {HTMLElement} : HTML 요소
 */
function parseElementFromString(htmlString) {
  const domParser = new DOMParser();

  const element = domParser.parseFromString(htmlString, "text/html").body
    .firstChild;

  element.normalize();

  return element;
}

export default parseElementFromString;
