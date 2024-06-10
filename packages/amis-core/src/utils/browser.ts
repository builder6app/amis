export const chromeVersion = (function getChromeVersion() {
  const raw =
    typeof navigator !== 'undefined' &&
    navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  return raw ? parseInt(raw[2], 10) : false;
})();

export const isSafari =
  typeof navigator !== 'undefined' &&
  navigator.vendor &&
  navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('CriOS') == -1 &&
  navigator.userAgent.indexOf('FxiOS') == -1;
