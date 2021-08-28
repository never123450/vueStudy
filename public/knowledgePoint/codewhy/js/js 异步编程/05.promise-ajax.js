// promise 方式的 ajax
function ajax(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.responseType = "json";
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    xhr.send();
  });
}

ajax("users.json").then(
  function (res) {
    console.log(res);
  },
  function (error) {
    console.log(error);
  }
);
