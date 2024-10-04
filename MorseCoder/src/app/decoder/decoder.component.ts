import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-decoder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './decoder.component.html',
  styleUrl: './decoder.component.css'
})
export class DecoderComponent {
  inputText : string = '';

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
    '/',
    /*'.',*/
    /*'-'*/
  ];

  alphabet : string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ,.';
  resultStr = signal('');

  isCorrect : boolean = false;
  showError : boolean = true;

  checkForRightChars(){
    this.isCorrect = true;
    this.inputText.split(' ').forEach(element => {
      if (!this.morseCode.includes(element)){
        this.isCorrect = false;
        this.showError = false;
      }
    });
    console.log(this.isCorrect);
  }

  decode(){
    this.resultStr.set('');
    let elements = this.inputText.split(' ');
    let correctChars = true;
    let tmp = '';

    elements.forEach(element => {
      if (this.morseCode.includes(element) && correctChars){
        this.morseCode.indexOf(element);
        tmp += this.alphabet[this.morseCode.indexOf(element)];
      }
      else{
        correctChars = false;
      }

  });
  this.resultStr.set(tmp);
  console.log(this.resultStr);

}

}
