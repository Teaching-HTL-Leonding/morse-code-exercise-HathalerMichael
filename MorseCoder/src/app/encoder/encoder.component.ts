import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

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
    let resultText : string[] = [];

    for (let i = 0; i < this.inputText.length; i++){
      let letter = this.inputText[i].toUpperCase();
      let charCode = letter.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90){
        let index = letter.charCodeAt(0) - 65;
        resultText.push(this.morseCode[index]);
      }
      else if (letter === ' '){
        if (i !== 0){
          if (this.inputText[i - 1] !== ' '){
            resultText.push('/');
        }}}
      else{
        throw new Error('Invalid character: ' + letter);
      }

    }
    console.log(resultText);

    this.resultStr.set('');
    let tmp : string = '';
    resultText.forEach((element) => {

      tmp += element + ' ';
    });
    this.resultStr.set(tmp);
  }
}
