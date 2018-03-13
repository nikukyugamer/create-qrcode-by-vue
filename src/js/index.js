"use strict";

// TODO: コンポーネント化
const QRCODE_IMAGE_AREA = 'qrcode-image-area';
const INPUT_TEXT_AREA = 'input-text';

let createQrcode = (inputTextAreaElementName) => {
  let qrcode = new QRCode(document.getElementById(QRCODE_IMAGE_AREA), {
    width: 128,
    height: 128,
    colorDark : '#000000',
    colorLight : '#ffffff',
    correctLevel : QRCode.CorrectLevel.H
  });

  let elementNameOfInputText = document.getElementById(inputTextAreaElementName);
  qrcode.makeCode(elementNameOfInputText.value);
};

let appTitle = new Vue({
  el: '#app-title',
  data: {
    app_title: '🍣 QRコードを作るやつ 🍣'
  }
});

let inputTextArea = new Vue({
  el: '#input-text-area',
  data: {
    input_text: '',
    place_holder_text: 'URLをここに入れて',
    text_area_size: '35'
  },
  methods: { // TODO: NOT DRY...
    create_qrcode_image: () => {
      document.getElementById(QRCODE_IMAGE_AREA).innerHTML = '';
      createQrcode(INPUT_TEXT_AREA);
    }
  }
});

let createQrcodeImage = new Vue({
  el: '#create-qrcode-image',
  data: {
    value: '🍣 QRコードを作るぞ 🍣'
  },
  methods: { // TODO: NOT DRY...
    create_qrcode_image: () => {
      document.getElementById(QRCODE_IMAGE_AREA).innerHTML = '';
      createQrcode(INPUT_TEXT_AREA);
    }
  }
});

let qrcodeIsBelow = new Vue({
  el: '#qrcode-is-below',
  data: {
    qrcode_is_below: '🍣 ↓ここに QRコード が出るよ↓ 🍣'
  }
});

let qrcodeIsAbove = new Vue({
  el: '#qrcode-is-above',
  data: {
    qrcode_is_above: '🍣 ↑ここに QRコード が出るよ↑ 🍣'
  }
});
