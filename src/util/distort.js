const { execSync } = require('child_process');
const getImageDimensions = require('image-size');
const {
    resolve
} = require('path');

module.exports = async function distortImage(image) {
    const {
        width,
        height
    } = getImageDimensions(image);

    const [filename, extension] = image.split('.');

    const path = resolve(__dirname, '..', '..', 'temp', filename + '-dt.' + extension);

    execSync(`magick ${image} -liquid-rescale 60x60% -resize ${width}x${height}! ${path}`);

    return path;
}