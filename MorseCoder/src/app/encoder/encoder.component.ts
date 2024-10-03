import { Component, input } from '@angular/core';
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
  resultStr : string = '';

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
        resultText.push('/');
      }
      else if (letter === ','){
        resultText.push('-');
      }
      else if (letter === '.'){
        resultText.push('.');
      }
      else{
        throw new Error('Invalid character: ' + letter);
      }

    }
    console.log(resultText);

    this.resultStr = '';
    resultText.forEach((element) => {
      this.resultStr += element + ' ';
    });
  }
}
