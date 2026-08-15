import { pipeline } from '@xenova/transformers';
import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const inputAudio = '/home/miguel/Documents/Emcode/Videos/EmcodeWhyLeftWindows.mp3';
const tempWav = path.resolve('public/temp_audio_16k.wav');

console.log('Converting audio to 16kHz WAV...');
execSync(`ffmpeg -y -i "${inputAudio}" -ar 16000 -ac 1 -c:a pcm_s16le "${tempWav}"`);

console.log('Loading whisper model...');
const transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-tiny');

const buffer = fs.readFileSync(tempWav);
const pcmData = new Int16Array(buffer.buffer, buffer.byteOffset + 44, Math.floor((buffer.length - 44) / 2));
const float32Data = new Float32Array(pcmData.length);
for (let i = 0; i < pcmData.length; i++) {
  float32Data[i] = pcmData[i] / 32768.0;
}

console.log('Transcribing with timestamps...');
const output = await transcriber(float32Data, {
  language: 'spanish',
  task: 'transcribe',
  return_timestamps: true,
  chunk_length_s: 30,
  stride_length_s: 5
});

console.log('\n--- TRANSCRIPTION RESULT ---');
console.log(JSON.stringify(output, null, 2));

fs.writeFileSync(
  path.resolve('public/transcription.json'),
  JSON.stringify(output, null, 2)
);
console.log('Saved to public/transcription.json');
