import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';






@NgModule({
  declarations: [MenuComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterLink
  ],
  exports: [MenuComponent],
})
export class MenuModule {}
