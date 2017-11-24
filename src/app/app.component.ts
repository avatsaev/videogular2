import { Component } from '@angular/core';
import { VgAPI } from '../../lib/core/src/services/vg-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    constructor() {}

    onPlayerReady(api: VgAPI) {
        console.log(api);
    }
}
