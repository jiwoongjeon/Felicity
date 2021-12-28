require('dotenv').config();
const speech = require('@google-cloud/speech');
const { Translate } = require('@google-cloud/translate').v2;
const fs = require('fs')

async function transcribe(audioFile) {
    //instantiates a client and locate test file
    const client = new speech.SpeechClient();
    const filename = 'today_it_s_raining.wav';
    const file = fs.readFileSync(filename);
    const audioBytes = file.toString('base64');

    // const audio = {
    //     content: audioBytes
    // };
    const audio = {
        content: audioFile
    };

    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 44100,
        languageCode: 'en-US'
    };
    const request = {
        audio: audio,
        config: config
    };

    const [response] = await client.recognize(request);
    const transcription = response.results.map(result =>
        result.alternatives[0].transcript).join('\n');

    const result = await translateText(transcription);

    return result
}


async function translateText(transcription) {
    //instantiates a client
    const translate = new Translate();

    //target language
    const target = 'ko';

    //if translation length is 1...? 
    const [translation] = await translate.translate(transcription, target);
    console.log(`Transcription: ${transcription}`);
    console.log(`Translation: ${translation}`);

    // return [{ transcription: transcription + "\n" + translation}]
    return [{ transcription: transcription, translation: translation }]

    /* Otherwise would have to run? 
    translations = Array.isArray(translations) ? translations : [translations];
    console.log('Translations:');
    translations.forEach((translation, i) => {
        console.log(`${text[i]} => (${target}) ${translation}`);
    });
    */
}

// transcribe().catch(console.error);

module.exports = transcribe;
// exports.transcribe = transcribe;

//when returning outside of transcribe function transcription becomes a Promise object which then we have to apply .then() 