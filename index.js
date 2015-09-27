/**
 * Takes a url and returns a promise that resolves to a loaded Image object.
 */
export default function loadImage(url, callback) {
    let img = new Image()
    img.onload = function () {
        callback(null, img)
    }
    img.onerror = function (err) {
        callback(err)
    }
    img.src = url
}