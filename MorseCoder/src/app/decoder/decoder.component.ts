import { Component } from '@angular/core';
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
    '.',
    '-'
  ];

  decode(){
    let elements = this.inputText.split(' ');
    let resultStr : string[] = [];

    elements.forEach(element => {
      this.morseCode.includes(element);
  }

}
