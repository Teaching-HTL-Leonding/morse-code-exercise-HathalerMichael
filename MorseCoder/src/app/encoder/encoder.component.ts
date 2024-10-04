import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { initializeAudioContext, LETTER_BREAK, playDash, playDot, sleep, SYMBOL_BREAK } from './player';

@Component({
  selector: 'app-encoder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encoder.component.html',
  styleUrl: './encoder.component.css'
})
export class EncoderComponent {
  inputText : string  = '';
  resultStr = signal('');
  resultText : string[] = [];

  morseCode : string[] = [
    /* A */ '.-',
    /* B */ '-...',
    /* C */ '-.-.',
    /* D */ '-..',
    /* E */ '.',
    /* F */ '..-.',
    /* G */ '--.',
    /* H */ '....',
    /* I */ '..',
    /* J */ '.---',
    /* K */ '-.-',
    /* L */ '.-..',
    /* M */ '--',
    /* N */ '-.',
    /* O */ '---',
    /* P */ '.--.',
    /* Q */ '--.-',
    /* R */ '.-.',
    /* S */ '...',
    /* T */ '-',
    /* U */ '..-',
    /* V */ '...-',
    /* W */ '.--',
    /* X */ '-..-',
    /* Y */ '-.--',
    /* Z */ '--..',
  ];

  encode() : void{

    for (let i = 0; i < this.inputText.length; i++){
      let letter = this.inputText[i].toUpperCase();
      let charCode = letter.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90){
        let index = letter.charCodeAt(0) - 65;
        this.resultText.push(this.morseCode[index]);
      }
      else if (letter === ' '){
        if (i !== 0){
          if (this.inputText[i - 1] !== ' '){
            this.resultText.push('/');
        }}}
      else{
        throw new Error('Invalid character: ' + letter);
      }

    }
    console.log(this.resultText);

    this.resultStr.set('');
    let tmp : string = '';
    this.resultText.forEach((element) => {
      tmp += element + ' ';
    });
    this.resultStr.set(tmp);
  }

  async playMorseCode() : Promise<void>{

    initializeAudioContext();
    for (let i = 0; i < this.resultText.length; i++){
      let symbol = this.resultText[i];
      for (let j = 0; j < symbol.length; j++){
        if (symbol[j] === '.'){
          await playDot();
        }
        else if (symbol[j] === '-'){
          await playDash();
        }
        await sleep(SYMBOL_BREAK);
      }
      await sleep(LETTER_BREAK);
    }
  }
}
