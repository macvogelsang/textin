import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppCmp }   from './app.cmp';
import { HttpModule }    from '@angular/http';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';
import { TimepickerModule } from 'ng2-bootstrap/components/timepicker';

import {HomeCmp} from './home.cmp';
import {DashboardCmp} from './dashboard.cmp';
import {EventCmp} from './event.cmp';
import {EventFormCmp} from './event-form.cmp';
import {NotfoundCmp} from './notfound.cmp';

// import {MasterService} from './master.service';
// import {NotFoundCmp} from './notfound.cmp';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      DatepickerModule,
      TimepickerModule,
      RouterModule.forRoot([
          { path: ':adminid/:eventid', component: EventCmp },
          { path: 'notfound', component: NotfoundCmp },
          { path: ':adminid', component: DashboardCmp },
          { path: '', component: HomeCmp },
          { path: '**', component: NotfoundCmp }
      ]),
  ],
  declarations: [
      AppCmp,
      HomeCmp,
      DashboardCmp,
      EventCmp,
      EventFormCmp,
      NotfoundCmp
  ],
  bootstrap:    [ AppCmp ]
})
export class AppModule { }
