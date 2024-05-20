/**
 * @description Returns a function, that, as long as it continues to be invoked, will not
 * trigger the callback. The callback will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the callback on the
 * leading edge, instead of the trailing.
 *
 * `.cancel()` can be called manually to cancel the scheduled trailing invocation.
 *
 * @param {number} wait milliseconds
 */

export const debounce = (cb, wait, immediate) => {
  let timeout;

  function debounced(...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) cb.apply(context, args);
    };
    const callNow = immediate && !timeout;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) cb.apply(context, args);
  }

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};
