import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { VgAPI } from '@videogular/core';
import { Subscription } from 'rxjs/Subscription';
export declare class VgScrubBarCurrentTime implements OnInit, OnDestroy {
    API: VgAPI;
    vgFor: string;
    vgSlider: boolean;
    elem: HTMLElement;
    target: any;
    subscriptions: Subscription[];
    constructor(ref: ElementRef, API: VgAPI);
    ngOnInit(): void;
    onPlayerReady(): void;
    getPercentage(): string;
    ngOnDestroy(): void;
}
