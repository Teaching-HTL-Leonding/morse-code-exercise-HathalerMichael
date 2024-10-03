import { Routes } from '@angular/router';
import { EncoderComponent } from './encoder/encoder.component';
import { DecoderComponent } from './decoder/decoder.component';

export const routes: Routes = [
  {path: 'encoder', component: EncoderComponent},
  {path: '', component: EncoderComponent},
  {path: 'decoder', component: DecoderComponent}
];
