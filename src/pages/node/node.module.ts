import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NodePage } from './node';

@NgModule({
  declarations: [
    NodePage,
  ],
  imports: [
    IonicPageModule.forChild(NodePage),
  ],
})
export class NodePageModule {}
