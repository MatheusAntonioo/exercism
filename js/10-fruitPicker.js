console.log("Fruit Picker exercises");

console.log("----------------------");

import { notify } from './notifier';
import { order } from './grocer';

function onSuccess() {
  notify({ message: 'SUCCESS' })
}
onSuccess()

console.log("----------------------");

function onError() {
  notify({ message: 'ERROR' })
}
onError()

console.log("----------------------");

function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback);
}
orderFromGrocer()

console.log("----------------------");

function postOrder(variety, quantity) {
  const query = {variety, quantity};
  orderFromGrocer(query, onSuccess, onError);
}
postOrder()