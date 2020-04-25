"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegExps {
    constructor(commands) {
        this.start = new RegExp(commands[0], 'i');
        this.mirrorTar = new RegExp(commands[1], 'i');
        this.mirror = new RegExp(commands[2], 'i');
        this.mirrorStatus = new RegExp(commands[3], 'i');
        this.list = new RegExp(commands[4], 'i');
        this.getFolder = new RegExp(commands[5], 'i');
        this.cancelMirror = new RegExp(commands[6], 'i');
        this.cancelAll = new RegExp(commands[7], 'i');
        this.disk = new RegExp(commands[8], 'i');
    }
}
exports.RegExps = RegExps;
