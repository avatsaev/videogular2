"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VgUtils = (function () {
    function VgUtils() {
    }
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @returns {number}
     */
    /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @returns {number}
         */
    VgUtils.getZIndex = /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @returns {number}
         */
    function () {
        var zIndex = 1;
        var elementZIndex;
        var tags = document.getElementsByTagName('*');
        for (var i = 0, l = tags.length; i < l; i++) {
            elementZIndex = parseInt(window.getComputedStyle(tags[i])["z-index"], 10);
            if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
            }
        }
        return zIndex;
    };
    // Very simple mobile detection, not 100% reliable
    // Very simple mobile detection, not 100% reliable
    VgUtils.isMobileDevice = 
    // Very simple mobile detection, not 100% reliable
    function () {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf("IEMobile") !== -1);
    };
    ;
    VgUtils.isiOSDevice = function () {
        return (navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
    };
    ;
    VgUtils.isCordova = function () {
        return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    };
    ;
    VgUtils.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgUtils.ctorParameters = function () { return []; };
    return VgUtils;
}());
exports.VgUtils = VgUtils;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5Qzs7OztJQUlyQzs7OztPQUlHOzs7Ozs7SUFDSSxpQkFBUzs7Ozs7SUFBaEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLGFBQW9CLENBQUM7UUFFekIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFMUUsRUFBRSxDQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0lBRUQsa0RBQWtEOztJQUMzQyxzQkFBYzs7SUFBckI7UUFDSSxNQUFNLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFHO0lBQUEsQ0FBQztJQUVLLG1CQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztLQUN0SDtJQUFBLENBQUM7SUFFSyxpQkFBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM1RjtJQUFBLENBQUM7O2dCQW5DTCxpQkFBVTs7OztrQkFGWDs7QUFHYSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ1V0aWxzIHtcbiAgICAvKipcbiAgICAgKiBJbnNwaXJlZCBieSBQYXVsIElyaXNoXG4gICAgICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzIxMTIwOVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgc3RhdGljIGdldFpJbmRleCgpOm51bWJlciB7XG4gICAgICAgIGxldCB6SW5kZXggPSAxO1xuICAgICAgICBsZXQgZWxlbWVudFpJbmRleDpudW1iZXI7XG5cbiAgICAgICAgbGV0IHRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnRaSW5kZXggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YWdzW2ldKVtcInotaW5kZXhcIl0sIDEwKTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRaSW5kZXggPiB6SW5kZXgpIHtcbiAgICAgICAgICAgICAgICB6SW5kZXggPSBlbGVtZW50WkluZGV4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB6SW5kZXg7XG4gICAgfVxuXG4gICAgLy8gVmVyeSBzaW1wbGUgbW9iaWxlIGRldGVjdGlvbiwgbm90IDEwMCUgcmVsaWFibGVcbiAgICBzdGF0aWMgaXNNb2JpbGVEZXZpY2UoKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIklFTW9iaWxlXCIpICE9PSAtMSk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpc2lPU0RldmljZSgpIHtcbiAgICAgICAgcmV0dXJuIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pcChob25lfGFkfG9kKS9pKSAmJiAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGllbW9iaWxlKVtcXC9cXHNdPyhbXFx3XFwuXSopL2kpKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGlzQ29yZG92YSgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LlVSTC5pbmRleE9mKCdodHRwOi8vJykgPT09IC0xICYmIGRvY3VtZW50LlVSTC5pbmRleE9mKCdodHRwczovLycpID09PSAtMTtcbiAgICB9O1xufVxuIl19