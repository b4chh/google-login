import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import { InputComponent }  from './input.component'
import {NgModule} from '@angular/core'

@NgModule({
    declarations: [InputComponent],
    imports: [CommonModule, IonicModule],
    exports : [InputComponent]
})
export class InputModule { }