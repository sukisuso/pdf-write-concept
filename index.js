

var hummus = require('hummus');

var pdfWriter = hummus.createWriterToModify(__dirname + '/TestMaterials/template.pdf', {
  modifiedFilePath: __dirname + '/out/BasicJPGImagesTestPageModified.pdf',
  log: 'hummus.txt'
});

var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
pageModifier.startContext().getContext().writeText(
  'Jesús',
  105, 775,
  {
    font:pdfWriter.getFontForFile(__dirname + '/fonts/Roboto-Light.ttf'),
   size:10,
   colorspace:'gray',
   color:0x00
  }
);

pageModifier.startContext().getContext().writeText(
  'Juan Aguilar',
  325, 775,
  {
    font:pdfWriter.getFontForFile(__dirname + '/fonts/Roboto-Light.ttf'),
   size:10,
   colorspace:'gray',
   color:0x00
  }
);

pageModifier.startContext().getContext().writeText(
  '12345678Z',
  105, 762,
  {
    font:pdfWriter.getFontForFile(__dirname + '/fonts/Roboto-Light.ttf'),
   size:10,
   colorspace:'gray',
   color:0x00
  }
);


pageModifier.startContext().getContext().writeText(
  '+34669855524',
  325, 762,
  {
    font:pdfWriter.getFontForFile(__dirname + '/fonts/Roboto-Light.ttf'),
   size:10,
   colorspace:'gray',
   color:0x00
  }
);


pageModifier.startContext().getContext().writeText(
  'X',
  105, 690,
  {
    font:pdfWriter.getFontForFile(__dirname + '/fonts/Roboto-Light.ttf'),
   size:50,
   colorspace:'gray',
   color:0x00
  }
);

pageModifier.endContext().writePage();
pdfWriter.end();