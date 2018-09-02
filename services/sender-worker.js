'use strict';

const log = require('npmlog');
const mailers = require('../lib/mailers');

const workerId = Number.parseInt(process.argv[2]);
let running = false;

/*
const knex = require('../lib/knex');
const path = require('path');
const log = require('npmlog');
const fsExtra = require('fs-extra-promise');
const {ImportSource, MappingType, ImportStatus, RunStatus} = require('../shared/imports');
const imports = require('../models/imports');
const fields = require('../models/fields');
const subscriptions = require('../models/subscriptions');
const { Writable } = require('stream');
const { cleanupFromPost, enforce } = require('../lib/helpers');
const contextHelpers = require('../lib/context-helpers');
const tools = require('../lib/tools');
const shares = require('../models/shares');
const _ = require('../lib/translate')._;
*/

async function sendMail() {
    if (running) {
        log.error('Senders', `Worker ${workerId} assigned work while working`);
        return;
    }

    running = true;

    // FIXME

    running = false;
}

function sendToMaster(msgType) {
    process.send({
        type: msgType
    });
}

process.on('message', msg => {
    if (msg) {
        const type = msg.type;

        if (type === 'reloadConfig') {
            mailers.invalidateMailer(msg.data.sendConfigurationId);

        } else if (type === 'sendMail') {
            // FIXME
        }

    }
});

sendToMaster('worker-started');


