import React, { memo } from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';

const getTextWidth = (text, font) => {
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  context.fontSize = '14px';
  const metrics = context.measureText(text);
  return metrics.width;
}

const copyToClp = (txt) => {
  txt = document.createTextNode(txt);
  var m = document;
  var w = window;
  var b = m.body;
  b.appendChild(txt);
  if (b.createTextRange) {
      var d = b.createTextRange();
      d.moveToElementText(txt);
      d.select();
      m.execCommand('copy');
  } else {
      var d = m.createRange();
      var g = w.getSelection;
      d.selectNodeContents(txt);
      g().removeAllRanges();
      g().addRange(d);
      m.execCommand('copy');
      g().removeAllRanges();
  }
  txt.remove();
}

const updateCss = (fontSize, fontFamily, lineHeight, maxLine, moreWidth) => {
  let $style = document.querySelector('#ellipsisCss');
  const dotdotdotWidth = getTextWidth("…", `16px ${fontFamily}`)
  const clampFontSize = moreWidth / dotdotdotWidth * 16;
  console.log(clampFontSize)
  if (!$style) {
    $style = document.createElement('style');
    $style.id = 'ellipsisCss';
    document.querySelector('head').appendChild($style);
  }
  const style = `.ellipsis {
  position: relative;
  max-height: ${lineHeight * maxLine}px;
  line-height: ${lineHeight}px;
  text-align: justify;
  font-family: ${fontFamily};
  white-space: pre-line;
  overflow: hidden;
}
.ellipsis-container {
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${maxLine};
  font-size: ${clampFontSize}px;
  color: transparent;
}
.ellipsis-content {
  display: inline;
  vertical-align: top;
  font-size: ${fontSize}px;
  color: #000;
}
.ellipsis-ghost {
  position:absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  color: #000;
}
.ellipsis-ghost:before {
  content: "";
  display: block;
  float: right;
  width: 50%;
  height: 100%;
}
.ellipsis-placeholder {
  display: block;
  float: right;
  width: 50%;
  height: ${lineHeight * maxLine}px;
}
.ellipsis-more {
  position: relative;
  float: right;
  font-size: ${fontSize}px;
  width: ${moreWidth}px;
  height: ${lineHeight}px;
  margin-top: ${-lineHeight}px;
}`;

  $style.innerHTML = style;
  return style;
}

const EllipsisCss = memo(props => {

  return (
    <Form style={{ width: '980px', margin: '20px auto' }}>
      <div>123</div>
    </Form>
  );
})

export default EllipsisCss;