import { pipeline } from '@xenova/transformers';
import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const files = [
  { name: 'TestAwsNoCard', file: 'public/EmcodeTestAwsNoCard.mp3', outJson: 'public/transcription_testaws.json' },
  { name: 'TerraformIaC', file: 'public/EmcodeTerraformIaC.mp3', outJson: 'public/transcription_terraform.json' },
  { name: 'ServerlessAgent', file: 'public/EmcodeServerlessAgent.mp3', outJson: 'public/transcription_serverless.json' },
];

console.log('Loading whisper model...');
const transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-tiny');

for (const item of files) {
  console.log(`\n=== Processing ${item.name} ===`);
  const tempWav = path.resolve(`public/temp_${item.name}_16k.wav`);
  execSync(`ffmpeg -y -i "${item.file}" -ar 16000 -ac 1 -c:a pcm_s16le "${tempWav}"`);

  const buffer = fs.readFileSync(tempWav);
  const pcmData = new Int16Array(buffer.buffer, buffer.byteOffset + 44, Math.floor((buffer.length - 44) / 2));
  const float32Data = new Float32Array(pcmData.length);
  for (let i = 0; i < pcmData.length; i++) {
    float32Data[i] = pcmData[i] / 32768.0;
  }

  const output = await transcriber(float32Data, {
    language: 'spanish',
    task: 'transcribe',
    return_timestamps: true,
    chunk_length_s: 30,
    stride_length_s: 5
  });

  console.log(`Result for ${item.name}:`);
  console.log(JSON.stringify(output, null, 2));

  fs.writeFileSync(
    path.resolve(item.outJson),
    JSON.stringify(output, null, 2)
  );
  console.log(`Saved ${item.outJson}`);
}
console.log('All 3 audios transcribed successfully!');
