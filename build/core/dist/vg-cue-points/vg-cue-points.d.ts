import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
export declare class VgCuePoints implements OnInit, OnDestroy {
    ref: ElementRef;
    onEnterCuePoint: EventEmitter<any>;
    onUpdateCuePoint: EventEmitter<any>;
    onExitCuePoint: EventEmitter<any>;
    onCompleteCuePoint: EventEmitter<any>;
    subscriptions: Subscription[];
    cuesSubscriptions: Subscription[];
    totalCues: number;
    constructor(ref: ElementRef);
    ngOnInit(): void;
    onLoad(event: any): void;
    updateCuePoints(cues: TextTrackCue[]): void;
    onEnter(event: any): void;
    onExit(event: any): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
