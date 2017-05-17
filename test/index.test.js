/**
 * Created by axetroy on 2017/4/4.
 */

import test from 'ava';
import Storage from '../index';

function sleep(s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, s * 1000);
  });
}

class Wx {
  constructor() {
    this.store = {};
  }
  getStorageInfoSync() {
    return {
      keys: Object.keys(this.store),
      currentSize: 1024,
      limitSize: 2048
    };
  }
  removeStorageSync(key) {
    delete this.store[key];
  }
  clearStorageSync() {
    this.store = {};
  }
  getStorageSync(key) {
    return this.store[key];
  }
  setStorageSync(key, value) {
    this.store[key] = value;
  }
}

let store;

test.beforeEach(async () => {
  store = new Storage(new Wx());
});

test.serial('basic function', async t => {
  store.set('author', 'axetroy');
  t.deepEqual(store.get('author'), 'axetroy');
  store.remove('author');
  t.deepEqual(store.get('author'), null);
  t.pass();
});

test.serial('store data with expiration', async t => {
  store.set('name', 'axetroy', 2); // after 2s, data gonna be expiration.
  t.deepEqual(store.get('name'), 'axetroy');

  await sleep(1);
  t.deepEqual(store.get('name'), 'axetroy');

  // it should be remove after 2s
  await sleep(1);
  t.deepEqual(store.get('name'), null);
  t.pass();
});

test.serial('clear', async t => {
  store.set('name', 'axetroy', 2); // after 2s, data gonna be expiration.
  store.clear();
  t.deepEqual(store.get('name'), null);
  t.pass();
});
