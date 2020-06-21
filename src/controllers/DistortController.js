const distortImage = require('../util/distort');

module.exports = async function(request, response) {
    const image = request.file.path;

    const path = await distortImage(image);

    return response.sendFile(path);
}