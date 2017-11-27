import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { VgAPI } from '@videogular/core';
import { Subscription } from 'rxjs/Subscription';
export interface Option {
    id: string;
    label: string;
    selected: boolean;
}
export declare class VgTrackSelector implements OnInit, OnDestroy {
    API: VgAPI;
    vgFor: string;
    elem: HTMLElement;
    target: any;
    tracks: Array<Option>;
    trackSelected: string;
    subscriptions: Subscription[];
    ariaValue: string;
    constructor(ref: ElementRef, API: VgAPI);
    ngOnInit(): void;
    onPlayerReady(): void;
    selectTrack(trackId: string): void;
    ngOnDestroy(): void;
}
