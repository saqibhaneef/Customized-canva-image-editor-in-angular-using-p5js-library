import { Component, ViewChild } from '@angular/core';
import { FabricjsEditorComponent } from './angular-editor-fabric-js/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fabric-editor-custom';
  isDrawMode=true;

  @ViewChild('canvas', { static: false }) canvas: FabricjsEditorComponent;  

  ngOnInit(): void {
    this.activeClass();
    
  }
  

  public rasterize() {
    this.canvas.rasterize();
  }

  public rasterizeSVG() {
    this.canvas.rasterizeSVG();
  }

  public saveCanvasToJSON() {
    this.canvas.saveCanvasToJSON();
  }
  public saveAsBase64() {
    this.canvas.saveCanvasToBase64();
  }

  public loadCanvasFromJSON() {
    this.canvas.loadCanvasFromJSON();
  }

  public confirmClear() {
    this.canvas.confirmClear();  
  }

  public changeSize() {
    this.canvas.changeSize();
  }

  public addText() {
    this.canvas.addText();
  }

  public getImgPolaroid(event:any) {
    this.canvas.getImgPolaroid(event);
  }

  public addImageOnCanvas(url:any) {
    this.canvas.addImageOnCanvas(url);
  }

  public readUrl(event:any) {
    this.canvas.readUrl(event);    
  }

  public removeWhite(url:any) {
    this.canvas.removeWhite(url);
  }

  public addFigure(figure:any) {
    this.canvas.addFigure(figure);
  }

  public removeSelected() {
    this.canvas.removeSelected();
  }

  public sendToBack() {
    this.canvas.sendToBack();
  }

  public bringToFront() {
    this.canvas.bringToFront();
  }

  public clone() {
    this.canvas.clone();
  }

  public cleanSelect() {
    this.canvas.cleanSelect();
  }

  public setCanvasFill() {
    this.canvas.setCanvasFill();
  }

  public setCanvasImage() {
    this.canvas.setCanvasImage();
  }

  public setId() {
    this.canvas.setId();
  }

  public setOpacity() {
    this.canvas.setOpacity();
  }

  public setFill() {
    this.canvas.setFill();
  }

  public setFontFamily() {
    this.canvas.setFontFamily();
  }

  public setTextAlign(value:any) {
    this.canvas.setTextAlign(value);
  }

  public setBold() {
    this.canvas.setBold();
  }

  public setFontStyle() {
    this.canvas.setFontStyle();
  }

  public hasTextDecoration(value:any) {
    this.canvas.hasTextDecoration(value);
  }

  public setTextDecoration(value:any) {
    this.canvas.setTextDecoration(value);
  }

  public setFontSize() {
    this.canvas.setFontSize();
  }
  public setDrawSize() {
    this.canvas.setDrawSize();
  }

  public setLineHeight() {
    this.canvas.setLineHeight();
  }

  public setCharSpacing() {
    this.canvas.setCharSpacing();
  }
  public setBrushColor() {
    this.canvas.setBrushColor();
  }

  public rasterizeJSON() {
    this.canvas.rasterizeJSON();
  }

  public drawMode() {    
    this.isDrawMode=this.canvas.drawingMode();
  }

  public enableDrawMode() {    
    this.isDrawMode=this.canvas.enableDrawingMode();
  }
  public disableDrawMode() {    
    this.isDrawMode=this.canvas.disableDrawingMode();
  }  

  public addBackgroundImage(url:any) {
    this.canvas.addBackgroundImage(url);
  }

  activeClass()
  {
    var header = document.getElementById("CustomCard");
    if(header!=null){
       var btns = header.getElementsByClassName("btnMenuCustom");
       for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
             var current = document.getElementsByClassName("active");
             current[0].className = current[0].className.replace("active", "");
             this.className += " active";
            });
        }
    }
  }
  
}
