import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabelComponent } from './tabel/tabel.component';
import { DeleteBtnComponent } from './delete-btn/delete-btn.component';
import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import { SwitchComponent } from '../app/CustomComponents/switch/switch.component';
import { ToggleComponent } from '../app/CustomComponents/toggle/toggle.component';
import { ModalComponent } from '../app/CustomComponents/modal/modal.component';

import { ApiService } from '../Services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    TabelComponent,
    DeleteBtnComponent,
    HomeComponent,
    SetupComponent,
    SwitchComponent,
    ToggleComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
