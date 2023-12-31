window.qcellpath = '';
window.bUseRightTechJQuery = true;
try{
	if (RightTechPath){
		window.qcellpath = RightTechPath + 'QCELL/';
	}
} catch(e){
	window.qcellpath = './';
}
try{
	if(useRightTechJQuery === true){
		window.bUseRightTechJQuery = true;
	}else {
		window.bUseRightTechJQuery = false;
	}
} catch(e){
	window.bUseRightTechJQuery = true;
}
try{
	if(RightUseEuckr === true){
		window.bUseEuckr = true;
	}else {
		window.bUseEuckr = false;
	}
} catch(e){
	window.bUseEuckr = false;
}

_CheckMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (_CheckMobile.Android() || _CheckMobile.BlackBerry() || _CheckMobile.iOS() || _CheckMobile.Opera() || _CheckMobile.Windows());
		}
	};



this.strScriptHead = '<script src="';
this.strScriptTail = '" type="text/javascript"></script>';
this.strLinkHead = '<link href="';
this.strLinkTail = '" rel="stylesheet" type="text/css">';
this.strScript = '';
this.strCharset = window.bUseEuckr === true ? '-euc-kr' : '';
this.strResource = this.strScriptHead + window.qcellpath + 'lib/resource/resource'+this.strCharset+'.js'+this.strScriptTail;
this.strMobile = _CheckMobile.any() ? this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/'	+ 'jquery.touchSwipe.min.js'	+	this.strScriptTail : '';
this.strScript +=
	
this.strLinkHead + window.qcellpath + 'css/'					+ 'qcell_layout.css'		+	this.strLinkTail +
this.strLinkHead + window.qcellpath + 'css/'					+ 'qcell.css'				+	this.strLinkTail +
this.strLinkHead + window.qcellpath + 'css/'					+ 'qcell_scrollbar.css'				+	this.strLinkTail +

this.strScriptHead + window.qcellpath + 'lib/' 					+ 'underscore-min.js' 		+	this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/' 					+ 'underscore.string.min.js'+	this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/ds/' 				+ 'hashtable.js' 			+	this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/ds/' 				+ 'hashset.js' 				+	this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/crypto/' 			+ 'aes.js' 				+	this.strScriptTail;

if(window.bUseRightTechJQuery === true)
	this.strScript += this.strScriptHead + window.qcellpath + 'lib/jquery/' 			+ 'jquery-1.12.4.min.js'	+	this.strScriptTail;

this.strScript += this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/'	+ 'jquery.browser.min.js'	+	this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/'	+ 'jquery.mousewheel.min.js'+	this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/'	+ 'jquery.stylesheet.js'	+	this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/'	+ 'jquery.sparkline.min.js'	+	this.strScriptTail +
this.strMobile +

//this.strLinkHead + window.qcellpath + 'lib/jquery/plugins/jquery.mCustomScrollbar/' + 'jquery.mCustomScrollbar.custom.css'	+ this.strLinkTail +
//this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/jquery.mCustomScrollbar/' + 'jquery.mCustomScrollbar.custom.js'	+ this.strScriptTail +

this.strLinkHead + window.qcellpath + 'lib/jquery/plugins/jqueryUI/' + 'jquery-ui.css'	+ this.strLinkTail +
this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/jqueryUI/' + 'jquery-ui.min.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/jqueryUI/' + 'datepicker-en.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/jquery/plugins/jqueryUI/' + 'datepicker-ko' + strCharset + '.js'	+ this.strScriptTail +

this.strScriptHead + window.qcellpath + 'lib/xlsx/' + 'shim.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/xlsx/' + 'jszip.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/xlsx/' + 'FileSaver.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/xlsx/' + 'xlsx.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/xlsx/' + 'jquery.fileDownload.js'	+ this.strScriptTail +

this.strScriptHead + window.qcellpath + 'lib/format/' + 'jquery.numberformatter-1.2.4.min.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/format/' + 'ssf_min.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/format/' + 'moment-with-locales.min.js'	+ this.strScriptTail +




this.strScriptHead + window.qcellpath + 'lib/inputmask/' + 'inputmask.min.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/inputmask/' + 'inputmask.extensions.min.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/inputmask/' + 'inputmask.numeric.extensions.min.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/inputmask/' + 'inputmask.date.extensions.min.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/inputmask/' + 'jquery.inputmask.js'	+ this.strScriptTail +

this.strLinkHead + window.qcellpath + 'lib/timepicker/' + 'jquery-ui-timepicker-addon.css'	+ this.strLinkTail +
this.strScriptHead + window.qcellpath + 'lib/timepicker/' + 'jquery-ui-timepicker-addon.min.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'lib/timepicker/' + 'jquery-ui-timepicker-ko.js'	+ this.strScriptTail +
this.strScriptHead + window.qcellpath + 'js/'	+ 'qcell.all.js'		+ this.strScriptTail + 
this.strResource;
document.write(this.strScript);
