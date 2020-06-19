const multer = require('multer');
const path = require('path');
const {
    randomBytes,
    createHash
} = require('crypto');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'temp'),
        filename(request, file, callback) {
            const salt = randomBytes(8).toString('hex');
            const hash = createHash('sha256').update(file.originalname).digest('hex');
            const extension = '.' + file.mimetype.split('/').pop();

            const filename = salt + hash + extension;
            callback(null, filename);
        }
    }),
}