'use strict';

var serviceInfo  = {
        host: 'www.smushit.com',
        path: '/ysmush.it/ws.php'
    },
    WebService   = require('./lib/WebService'),
    ImageFile    = require('./lib/ImageFile'),
    EventEmitter = require('events').EventEmitter;

var Smosh = function (fileBuffer) {
        var smushit = null;

        EventEmitter.call(this);

        if (!(this instanceof Smosh)) {
            smushit = new Smosh();

            return smushit.init(fileBuffer);
        }
    },
    onError = function (vinyl, msg) {
        this.emit('error', msg, vinyl);
    },
    onDownload = function (vinyl, file, fileInfo) {
        var fileBuffer = new Buffer(file, 'binary');

        if (vinyl) {
            vinyl.contents = fileBuffer;
            fileBuffer     = vinyl;
        }

        this.emit('end', fileBuffer, fileInfo);
    },
    onOptimize = function (vinyl, fileInfo) {
        var imageFile = new ImageFile(fileInfo);

        imageFile
            .on('data', this.emit.bind(this, 'data'))
            .on('error', onError.bind(this, vinyl))
            .on('end', onDownload.bind(this, vinyl))
            .get();
    };

Smosh.prototype = Object.create(EventEmitter.prototype);

Smosh.prototype.init = function (file) {
    var webService = new WebService(serviceInfo),
        vinyl      = false;

    if (file.contents && file.isBuffer()) {
        vinyl = file;
        file  = file.contents;
    }

    webService
        .on('end', onOptimize.bind(this, vinyl))
        .on('error', this.emit.bind(this, 'error'))
        .execute(file);

    return this;
};

module.exports = Smosh;
