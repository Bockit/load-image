import loadImage from './index'

/**
 * Takes a browser file object and a callback. Calls back with an error if it
 * occurred (at the moment we're not looking for one to send) and a detached
 * canvas element matching the image's dimensions with the image blitted to it.
 */
export default function imageToCanvas (file, callback) {
    var url = URL.createObjectURL(file)
    loadImage(url, function (err, image) {
        if (err) return callback(err)
        let canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0)
        // Need to do this because of the way browser's gc these ObjectUrl
        // variables. See:
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
        URL.revokeObjectURL(url)
        callback(null, canvas)
    })
}