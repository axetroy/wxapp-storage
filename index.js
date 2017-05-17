class Storage {
  constructor(wx) {
    this.wx = wx;
  }
  static get timestamp() {
    return new Date() / 1000;
  }

  static __isExpired(entity) {
    if (!entity) return true;
    return Storage.timestamp - (entity.timestamp + entity.expiration) >= 0;
  }

  static get __info() {
    let info = {};
    try {
      info = this.wx.getStorageInfoSync() || info;
    } catch (err) {
      console.error(err);
    }
    return info;
  }

  set(key, value, expiration) {
    const entity = {
      timestamp: Storage.timestamp,
      expiration,
      key,
      value
    };
    this.wx.setStorageSync(key, JSON.stringify(entity));
    return this;
  }
  get(key) {
    let entity;
    try {
      entity = this.wx.getStorageSync(key);
      if (entity) {
        entity = JSON.parse(entity);
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
      return null;
    }

    // 没有设置过期时间, 则直接返回值
    if (!entity.expiration) return entity.value;

    // 已过期
    if (Storage.__isExpired(entity)) {
      this.remove(key);
      return null;
    } else {
      return entity.value;
    }
  }
  remove(key) {
    try {
      this.wx.removeStorageSync(key);
    } catch (err) {
      console.error(err);
    }
    return this;
  }
  clear() {
    try {
      this.wx.clearStorageSync();
    } catch (err) {
      console.error(err);
    }
    return this;
  }

  get info() {
    let info = {};

    try {
      info = this.wx.getStorageInfoSync();
    } catch (err) {
      console.error(err);
    }

    return info || {};
  }

  get length() {
    return (this.info.keys || []).length;
  }
}

module.exports = Storage;
