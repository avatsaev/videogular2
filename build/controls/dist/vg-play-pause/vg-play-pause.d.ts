import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { VgAPI } from '@videogular/core';
import { Subscription } from 'rxjs/Subscription';
export declare class VgPlayPause implements OnInit, OnDestroy {
    API: VgAPI;
    vgFor: string;
    elem: HTMLElement;
    target: any;
    subscriptions: Subscription[];
    ariaValue: string;
    constructor(ref: ElementRef, API: VgAPI);
    ngOnInit(): void;
    onPlayerReady(): void;
    onClick(): void;
    onKeyDown(event: KeyboardEvent): void;
    playPause(): void;
    getState(): string;
    ngOnDestroy(): void;
}
