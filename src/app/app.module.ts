import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatListModule, MatGridListModule, MatTooltipModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { GroupsComponent } from './groups/groups.component';
import { ContactEditFormComponent } from './contact-edit-form/contact-edit-form.component';
import { GroupEditFormComponent } from './group-edit-form/group-edit-form.component';
import { GroupContactAddFormComponent } from './group-contact-add-form/group-contact-add-form.component';
import { GroupContactRemoveFormComponent } from './group-contact-remove-form/group-contact-remove-form.component';
import { SearchContactPipe } from './contacts/search-contact.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ContactsComponent,
    ContactCardComponent,
    GroupCardComponent,
    GroupsComponent,
    ContactEditFormComponent,
    GroupEditFormComponent,
    GroupContactAddFormComponent,
    GroupContactRemoveFormComponent,
    SearchContactPipe
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatTooltipModule,
    MatInputModule,
    HttpClientModule,
    MatProgressBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
  ], 
  entryComponents: [
    ContactEditFormComponent,
    GroupEditFormComponent,
    GroupContactAddFormComponent,
    GroupContactRemoveFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
