var fs    = require('fs'),
    path  = require('path'),
    csv   = require('fast-csv'),
    GsAPI = require('google-spreadsheet');

var ws;
var showcaseSheet = new GsAPI('1OamR5bdhiZ8V_AfHlnz9YetKQgMUyhgThq37rLcN9AA'),
    outFile = 'app/data.csv',
    outdata = [];


var init = function () {

  ws = fs.createWriteStream(outFile);
  getGdata(0,0); 

};

var numSheet, rowLen;
var getGdata = function(sheetID, rowID) {
	if(sheetID == numSheet){
    	save();
    	return;
    };

	showcaseSheet.getInfo(function(err, sheet_info){
		numSheet = sheet_info.worksheets.length;
		curSheet = sheet_info.worksheets[sheetID];
		sheetTitle = curSheet.title;
		console.log(sheetTitle);
		console.log('');
		curSheet.getRows(function(err, row_data){
			rowLen = row_data.length;
			data = row_data[rowID];
			var entry = {};
		    entry['ID'] = data.id;
		    entry['OrgId'] = data.orgid;
		    entry['Title'] = data.title;
		    entry['URL'] = data.url
		    entry['Categories'] = data.categories;
		    entry['Element tag'] = data.elementtag;
		    entry['Author'] = data.author;
		    entry['Organizationen'] = data.organizationen;
		    entry["Publication Date"] = data.Publicationdate;
		    outdata.push(entry);
		    rowID++;
	    	if(rowID == rowLen ){
		    	rowID = 0;
		    	sheetID++;
		    };
		    
		    getGdata(sheetID, rowID);
		});

	});

};

var save = function() {
	console.log('save');
	csv.write(outdata, {headers: true}).pipe(ws);

};

init();