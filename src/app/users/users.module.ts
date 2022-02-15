import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [UsersComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule, MaterialModule],
})
export class UsersModule {}
