class CacheModel {
  /**
   *
   * 设置缓存
   * @param {*} key
   * @param {*} value
   */
  setStorage = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      throw new Error('缓存失败');
    }
  };

  /**
   * 设置缓存以及过期时间
   * @param {*} key
   * @param {*} value
   * @param {*} expires 过期时间，单位：毫秒
   */
  setStorageExt = (key, value, expires) => {
    console.log('设置缓存以及过期时间', key, value, expires);
    const params = { key, value, expires };
    expires = parseInt(expires, 10) || false;
    // let timestamp = Date.parse(new Date());
    const timestamp = new Date().getTime();
    // console.log(timestamp)
    if (!expires) {
      throw new Error('请传入过期时间');
    }
    const assignParams = Object.assign(params, { startTime: timestamp });
    try {
      console.log(key, assignParams);
      localStorage.setItem(key, JSON.stringify(assignParams));
    } catch (e) {
      throw new Error(e);
    }
  };

  /**
   * 获得缓存，如果缓存时间过期会删除该缓存并且返回null
   * @param {*} key
   */
  getStorageExt = (key) => {
    const storage = JSON.parse(localStorage.getItem(key));
    const nowTimestamp = new Date().getTime();
    if (storage) {
      // 当前时间戳大于开始的时间加上过期时间，代表还没过期
      const data =
        nowTimestamp >= storage.startTime + storage.expires
          ? this.clearStorage(key)
          : storage.value;
      return data;
    }
    return null;
  };

  /**
   *
   *获取缓存
   * @param {*} key
   */
  getStorage = (key) => localStorage.getItem(key);

  /**
   * 清除特定缓存
   * @param {*} key
   */
  clearStorage = (key) => localStorage.removeItem(key);
}

export default new CacheModel();
