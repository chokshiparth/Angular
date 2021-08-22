/**
 * @description This service provide functionality to print specified element.
 */
import { Component, ElementRef, Inject, Injectable, Output } from '@angular/core';
import { IframeElement } from '../utilities/iframe.element';
import { makeClone } from '../utilities/helper';

@Injectable()
export class PrintService {
  //array holds all DOM elements which needs to print.
  public printMeObj : ElementRef[] = [];
  private iframeObj !: IframeElement;
  private canva = document.createElement('canvas');

  constructor() { 
    this.iframeObj = new IframeElement();
  }

   /**
   * @description it will print all objects exist into printMeObj.
   */
  print(){
    window.print();
  }
}