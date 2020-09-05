const getCookies = (cookieHeader) => {
  return cookieHeader
    ? cookieHeader.split(";").reduce((a, v) => {
        const m = / *([^=]+)=(.*)/.exec(v);
        const key = m[1];
        const value = decodeURIComponent(m[2]);
        a[key] = value;
        return a;
      }, {})
    : {};
};

module.exports = getCookies;
