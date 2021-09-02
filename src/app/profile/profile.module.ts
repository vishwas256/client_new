import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { httpInterceptors } from '../shared/interceptors';

@NgModule({
  declarations: [CreateProfileComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ProfileRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class ProfileModule {}
