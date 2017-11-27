import { Observable } from 'rxjs/Observable';
export declare class VgControlsHidden {
    isHidden: Observable<boolean>;
    private isHiddenSubject;
    constructor();
    state(hidden: boolean): void;
}
