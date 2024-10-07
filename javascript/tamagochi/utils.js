export default class Utils {
  percentage(quantity, total) {
    return (total / quantity) * 100;
  }
  updateValue(el, value) {
    el.innerText = value;
  }
}
