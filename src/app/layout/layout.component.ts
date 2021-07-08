import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  strokes = ['thick', 'default', 'fill'];
  colors = ['primary', 'success', 'info', 'warning', 'danger'];
  animations = ['none', 'smooth', 'pulse'];
  shapes = ['default', 'round', 'curve'];

  currentStroke: string;
  currentColor: string;
  currentOutline: boolean = true;
  currentLock: boolean = false;
  currentAnimation: string;
  currentDisable: boolean = false;
  currentSize = 14;
  currentShape: string;
  currentPlain: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.defaultSettings();
  }

  resetSize() {
    this.currentSize = 14;
  }

  defaultSettings() {
    this.currentStroke = this.strokes[0];
    this.currentColor = this.colors[0];
    this.currentAnimation = this.animations[0];
    this.currentOutline = true;
    this.currentLock = false;
    this.currentDisable = false;
    this.resetSize();
    this.currentShape = this.shapes[0];
    this.currentPlain = false;
  }
}

