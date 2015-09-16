/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import {
  SplitPanel
} from 'phosphor-splitpanel';

import {
  Widget, attachWidget
} from 'phosphor-widget';

import './index.css';


// This widget uses flexbox for layout: see ./index.css
class MyVBox extends Widget {

  constructor() {
    super();
    this.addClass('my-vbox');
  }
}


function createContent(name: string): Widget {
  var widget = new Widget();
  widget.addClass('content');
  widget.addClass(name);
  return widget;
}


function main(): void {
  var r = createContent('red');
  var y = createContent('yellow');
  var g = createContent('green');

  var b1 = createContent('blue');
  var b2 = createContent('blue');
  var b3 = createContent('blue');

  var split = new SplitPanel();
  split.children = [b1, b2, b3];

  var box = new MyVBox();
  box.id = 'main';
  box.children = [r, split, y, g];

  attachWidget(box, document.body);

  // Note that the flexbox is the root widget, not the split panel.
  // We still call `update` on the box when the window resizes, so
  // that its decendants get the resize message they need.
  window.onresize = () => box.update();
}


window.onload = main;
