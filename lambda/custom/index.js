/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.ab2ff0c8-e6cc-4da0-86a3-aa1511237381';

const handlers = {
    'LaunchRequest': function () {
        this.response.speak('レストランや天気を調べられます。何でもお申し付けください。');

        this.emit(':responseReady');
    },
    'QueryByCategoryAtLocationIntent': function () {
        console.log("QueryByCategoryAtLocationIntent: " + this.event.request.dialogState);

        // Create speech output
        var speechOutput = '分かりました。';
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
