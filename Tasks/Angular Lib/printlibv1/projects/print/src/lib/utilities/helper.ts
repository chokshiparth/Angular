import { ElementRef } from "@angular/core";

/**
 * @description this method will take an array of an elements and
 * add css properties into it.
 * @returns element with css property added.
 */
export function makeClone(elements : ElementRef[]){
    let elementWithCss : null | HTMLElement[] = [];

    if(elements.length != 0){ 
        for(let element of elements){
            //fetch element styles.
            const elementStyle = getComputedStyle(element.nativeElement);
            
            //create clone of node/elment.
            let cloneElement = element.nativeElement.cloneNode(true);

            //push element into an array.
            elementWithCss.push(cloneElement);
        }
    }else{
        elementWithCss = null;
    }

    return elementWithCss;
}