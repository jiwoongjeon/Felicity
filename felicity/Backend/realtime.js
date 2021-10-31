require('dotenv').config();
const recorder = require('node-record-lpcm16');

//import google cloud client library
const speech = require('@google-cloud/speech');

//create a client
const client = new speech.SpeechClient();

const encoding = 'LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'en-US';

const request = {
  config: {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  },
  single_utterance:true,
  interimResults: false, //if we want interim results, set this to true
};

//create a recognize stream
const recognizeStream = client
  .streamingRecognize(request)
  .on('error', console.error) 
  .on('data', data =>
    process.stdout.write(
      data.results[0] && data.results[0].alternatives[0]
        ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
        : `\n\nReached transcription time limit, press Ctrl+C\n`
    )
  );

//start recording and send the microphone input to the Speech API
//ensure SoX is installed
recorder
  .record({
    sampleRateHertz: sampleRateHertz,
    threshold: 0,
    //for other options, see https://www.npmjs.com/package/node-record-lpcm16#options
    verbose: false,
    recordProgram: 'arecord', //only arecord worked for me, but you can try "rec" or "sox" too
    silence: '10.0',
  })
  .stream()
  .on('error', console.error)
  .pipe(recognizeStream);

console.log('Listening, press Ctrl+C to stop.');