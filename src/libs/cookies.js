
export const setCookie = (key, value, expire_days=1) => {
  let date = new Date();
  date.setTime(date.getTime() + (1000 * 60 * 60 * 24 * expire_days));
  let expires = 'expires=' + date.toUTCString();
  document.cookie = key + ' = ' + value + ';' + expires + ';path=/';
};

export const getCookie = (key) => {
  let name = key + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const removeCookie = (key) => {
  document.cookie = key + ' = ; expires = Thu, 01 Jan 1970 00:00:00 GMT ;path=/';
};
