import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgPlayer } from './vg-player/vg-player';
import { VgMedia } from './vg-media/vg-media';
import { VgCuePoints } from './vg-cue-points/vg-cue-points';
import { VgAPI } from './services/vg-api';
import { VgFullscreenAPI } from './services/vg-fullscreen-api';
import { VgUtils } from './services/vg-utils';
import { VgControlsHidden } from './services/vg-controls-hidden';

// components
export * from './vg-player/vg-player';
export * from './vg-media/vg-media';
export * from './vg-cue-points/vg-cue-points';

// services
export * from './services/vg-api';
export * from './services/vg-fullscreen-api';
export * from './services/vg-utils';
export * from './services/vg-controls-hidden';

// types
export * from './events/vg-events';
export * from './states/vg-states';

const CORE_DECLARATIONS = [
    VgPlayer, VgMedia, VgCuePoints
];

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CORE_DECLARATIONS ],
    exports: [ CORE_DECLARATIONS ],
    providers: [ VgAPI, VgFullscreenAPI, VgUtils, VgControlsHidden ]
})
export class VgCoreModule {
}
