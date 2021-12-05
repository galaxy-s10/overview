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
   * 设置缓存和过期时间
   * @param key
   * @param value
   * @param exprie
   */
  setStorageExp = (key: string, value: unknown, exprie?: number | boolean) => {
    const params = { key, value, exprie };
    exprie = exprie || false;
    const timestamp = +new Date();
    if (!exprie) {
      throw new Error('请传入过期时间');
    }
    const assignParams = Object.assign(params, { startTime: timestamp });
    try {
      localStorage.setItem(key, JSON.stringify(assignParams));
    } catch (e) {
      throw new Error(e);
    }
  };

  /**
   * 获取缓存，如果缓存时间过期会删除该缓存并且返回null
   * @param {*} key
   */
  getStorageExp = (key: string): any => {
    const str = localStorage.getItem(key);
    if (!str) return null;
    try {
      const storage = JSON.parse(str);
      const nowTimestamp = new Date().getTime();
      if (storage) {
        // 当前时间戳大于开始的时间加上过期时间，代表还没过期
        const data =
          nowTimestamp >= storage.startTime + storage.exprie
            ? this.clearStorage(key)
            : storage.value;
        return data;
      }
    } catch (err) {
      return new Error(err);
    }
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
