import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignatureComponent } from './signature/signature.component';
import { SignatureFormComponent } from './signature-form/signature-form.component';

@NgModule({
  declarations: [AppComponent, SignatureComponent, SignatureFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SignatureFormComponent },
      { path: 'signature/:name/:position', component: SignatureComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
