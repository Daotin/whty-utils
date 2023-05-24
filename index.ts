/**
 * 等到图片加载完成
 * @param url 图片链接
 */
export function waitForImageLoad(url: string) {
  return new Promise((request, inject) => {
    var img = new Image();
    img.src = url;
    img.addEventListener("load", function () {
      request(url);
      img.remove();
    });
  });
}

export default {
  waitForImageLoad,
};
