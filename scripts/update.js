var fs    = require('fs')
  , path  = require('path')
  , csv   = require('fast-csv')
  , GsAPI = require('google-spreadsheet');

var showcaseSheet = new GsAPI('1OamR5bdhiZ8V_AfHlnz9YetKQgMUyhgThq37rLcN9AA');

showcaseSheet.getInfo(function(err, sheet_info){

  console.log( sheet_info.title + ' is loaded' );

  var sheet1 = sheet_info.worksheets[0];
  console.log('sheet 1 title:', sheet1.title);

  sheet1.getRows( function( err, rows ){
    console.log('sheet 1 length: ', rows.length);
  });

});