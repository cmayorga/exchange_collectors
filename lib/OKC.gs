var _0x11ba=['method','params','/api/spot/v3/accounts','UTC','844631SbgcAe','772746CzXrfd','124882mQJxtL','1079233ZNJTFZ','log','hasOwnProperty','stringify','1fOHdgk','45746zhlnLm','msgBox','\x20Connector\x20DEBUG\x20Mode:','HMAC_SHA_256','MacAlgorithm','balance','278324yMAhOp','fetch','704721vmIJuh','OKC','GET','payload','command','indexOf','computeHmacSignature','no\x20or\x20empty\x20response','Receiving\x20data\x20from\x20','thirdattrib','OKCoin','POST','debug','No\x20valid\x20JSON\x20data\x20received','currency','uri','\x20GetBalance','push','name','application/json','23HqXjot','URL\x20....','length','3YgDdnw','secret','parse','apikey','https://www.okcoin.com','1nINbrV','yyyy-MM-dd\x27T\x27HH:mm:ss.SSS\x27Z\x27'];var _0x15db=function(_0x2b4b95,_0x4cc066){_0x2b4b95=_0x2b4b95-0xec;var _0x11ba6a=_0x11ba[_0x2b4b95];return _0x11ba6a;};(function(_0xbf824a,_0x14e7ca){var _0x424a3a=_0x15db;while(!![]){try{var _0x1f5bdc=-parseInt(_0x424a3a(0xfe))+parseInt(_0x424a3a(0xef))*parseInt(_0x424a3a(0x105))+parseInt(_0x424a3a(0x10b))*-parseInt(_0x424a3a(0xf2))+parseInt(_0x424a3a(0xfd))+parseInt(_0x424a3a(0xf7))*-parseInt(_0x424a3a(0x10d))+-parseInt(_0x424a3a(0xff))+parseInt(_0x424a3a(0x104))*parseInt(_0x424a3a(0x100));if(_0x1f5bdc===_0x14e7ca)break;else _0xbf824a['push'](_0xbf824a['shift']());}catch(_0x1d70a5){_0xbf824a['push'](_0xbf824a['shift']());}}}(_0x11ba,0x8384d));function OKC_Settings(){var _0x127e14=_0x15db,_0x344046={'id':_0x127e14(0x10e),'name':_0x127e14(0x117),'apikey':EXKEY,'secret':EXSECRET,'thirdattrib':ADATTRIB,'method':_0x127e14(0x10f),'uri':_0x127e14(0xf6),'version':'','command':_0x127e14(0xfb),'payload':''};if(typeof ADATTRIB!='undefined')_0x344046[_0x127e14(0x116)]=ADATTRIB;return _0x344046;}function OKC_GetBalance(){var _0x259ceb=_0x15db,_0x409ea3=OKC_Settings(),_0x3deb22={'data':null,'status':!![],'message':''},_0x430f5f=[],_0x537430=0x0,_0x184be5=OKC_PrivateRequest(_0x409ea3);DebugLog(_0x259ceb(0xf0),JSON[_0x259ceb(0x103)](_0x184be5));var _0x3deb22=UrlFetchApp[_0x259ceb(0x10c)](_0x184be5[_0x259ceb(0x11c)],_0x184be5[_0x259ceb(0xfa)]);DebugLog(_0x259ceb(0x115)+_0x409ea3[_0x259ceb(0xed)],_0x3deb22);try{var _0x3deb22=JSON[_0x259ceb(0xf4)](_0x3deb22);}catch(_0x109616){return Logger[_0x259ceb(0x101)](_0x259ceb(0x11a)),![];}_0x409ea3[_0x259ceb(0x116)]['toLowerCase']()[_0x259ceb(0x112)](_0x259ceb(0x119))>=0x0&&(Browser[_0x259ceb(0x106)](_0x409ea3[_0x259ceb(0xed)]+_0x259ceb(0x107)),Browser[_0x259ceb(0x106)](JSON[_0x259ceb(0x103)](_0x3deb22)));try{Logger[_0x259ceb(0x101)]('Validating\x20datatype\x20'+_0x3deb22[0x0]['balance']);}catch(_0xe1c36a){return Logger[_0x259ceb(0x101)](_0x3deb22),Logger[_0x259ceb(0x101)](_0x259ceb(0x114)),null;}for(_0x537430 in _0x3deb22){Number(_0x3deb22[_0x537430]['balance'])*0x186a0>0x0&&_0x430f5f[_0x259ceb(0xec)]({'curcodeEX':_0x3deb22[_0x537430][_0x259ceb(0x11b)],'balance':_0x3deb22[_0x537430][_0x259ceb(0x10a)]});}return DebugLog(_0x409ea3[_0x259ceb(0xed)]+_0x259ceb(0x11d),JSON['stringify'](_0x430f5f)),_0x430f5f;}function OKC_PrivateRequest(_0x3861e5){var _0x2748e8=_0x15db;function _0x2fc8e4(_0x1b9582,_0x19e877){var _0x25360e=_0x15db;return Utilities['base64Encode'](Utilities[_0x25360e(0x113)](Utilities[_0x25360e(0x109)][_0x25360e(0x108)],_0x1b9582,_0x19e877));}var _0x27393b='';if(_0x3861e5[_0x2748e8(0x102)](_0x2748e8(0x110))===![])_0x3861e5[_0x2748e8(0x110)]='';if(_0x3861e5[_0x2748e8(0x110)]==''||_0x3861e5[_0x2748e8(0x110)]==null)_0x27393b='{}';try{var _0x27393b=JSON[_0x2748e8(0x103)](_0x3861e5[_0x2748e8(0x110)]);}catch(_0x5411b2){var _0x27393b=_0x3861e5[_0x2748e8(0x110)];}if(_0x27393b[_0x2748e8(0xf1)]<0x4)_0x27393b='';var _0x371d93=Utilities['formatDate'](new Date(),_0x2748e8(0xfc),_0x2748e8(0xf8)),_0x14da1=_0x371d93+_0x3861e5[_0x2748e8(0xf9)]+_0x3861e5[_0x2748e8(0x111)]+_0x27393b;params={'method':_0x3861e5[_0x2748e8(0xf9)],'muteHttpExceptions':!![],'headers':{'OK-ACCESS-KEY':_0x3861e5[_0x2748e8(0xf5)],'OK-ACCESS-SIGN':_0x2fc8e4(_0x14da1,_0x3861e5[_0x2748e8(0xf3)]),'OK-ACCESS-TIMESTAMP':_0x371d93,'OK-ACCESS-PASSPHRASE':_0x3861e5[_0x2748e8(0x116)],'content-type':_0x2748e8(0xee),'Accept':_0x2748e8(0xee)}},_0x27393b='';if(_0x3861e5[_0x2748e8(0x110)]!=''&&_0x3861e5[_0x2748e8(0xf9)]===_0x2748e8(0x10f))_0x27393b=CreateURIQueryString(_0x3861e5[_0x2748e8(0x110)],'?');return _0x3861e5[_0x2748e8(0x110)]!=''&&_0x3861e5[_0x2748e8(0xf9)]===_0x2748e8(0x118)&&(params[_0x2748e8(0x110)]=_0x3861e5[_0x2748e8(0x110)],_0x27393b=''),{'uri':_0x3861e5['uri']+_0x3861e5['command']+_0x27393b,'params':params};}function OKC_PublicRequest(_0x1737de){var _0x464098=_0x15db;try{var _0x1efb9f=CreateURIQueryString(_0x1737de[_0x464098(0x110)],'?');}catch(_0x35e568){var _0x1efb9f='';}if(_0x1efb9f[_0x464098(0xf1)]<0x4)_0x1efb9f='';var _0x4cf365={'method':_0x1737de[_0x464098(0xf9)],'muteHttpExceptions':!![],'Content-Type':_0x464098(0xee),'headers':{'content-type':_0x464098(0xee),'Accept':_0x464098(0xee)}};return{'uri':_0x1737de['uri']+_0x1737de['command']+_0x1efb9f,'params':_0x4cf365};}