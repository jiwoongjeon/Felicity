require('dotenv').config();
const recorder = require('node-record-lpcm16');
const speech = require('@google-cloud/speech');
const { Translate } = require('@google-cloud/translate').v2;

async function transcribe() {
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
      data.results[0] && data.results[0].alternatives[0]
        ? translateText(`${data.results[0].alternatives[0].transcript}\n`)
        : process.stdout.write(`\n\nReached transcription time limit, press Ctrl+C\n`)

      /* this is when you want to write the transcript to stdout
      process.stdout.write(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : `\n\nReached transcription time limit, press Ctrl+C\n`
      )*/
    );

  //start recording and send the microphone input to the Speech API
  //ensure SoX is installed
  recorder
    .record({
      sampleRateHertz: sampleRateHertz,
      threshold: 0,
      //for other options, see https://www.npmjs.com/package/node-record-lpcm16#options
      verbose: false,
      recordProgram: 'arecord', //only arecord worked for me, but you can try "rec" or "sox" too (or arecord -l)
      silence: '10.0'
    })
    .stream()
    .on('error', console.error)
    .pipe(recognizeStream); //pipe is the method used to take a readable stream and connect it to a writeable stream

  console.log('Listening, press Ctrl+C to stop.');
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

  /* Otherwise would have to run? 
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
      console.log(`${text[i]} => (${target}) ${translation}`);
  });
  */
}

transcribe().catch(console.error);