
/**
 * @description IframeElement class represent iframe element of HTML.
 * This class will provide IframeElement object and related functinalities.
 */
export class IframeElement{
    private iframeObj !: HTMLIFrameElement;

    constructor(){
        this.iframeObj = document.createElement('iframe');
        // this.iframeObj.setAttribute("style","display:none");
        this.iframeObj.setAttribute("id","print-iframe");
    }
    


    /**
     * @description add child element into iframe document object.
     */
    addIntoDom(childElement : HTMLElement){
        this.iframeObj.contentDocument?.body.appendChild(childElement);
    }


    /**
     * @description method will return object of iframe class.
     */
    get getIframeElementObj(){
        return this.iframeObj;
    }
    
    /**
     * @description will show print window.
     */
    openPrintWindow() : void{

    }

}