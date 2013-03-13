/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/music.js']) {
  _$jscoverage['plugins/music.js'] = [];
  _$jscoverage['plugins/music.js'][7] = 0;
  _$jscoverage['plugins/music.js'][8] = 0;
  _$jscoverage['plugins/music.js'][20] = 0;
  _$jscoverage['plugins/music.js'][21] = 0;
  _$jscoverage['plugins/music.js'][33] = 0;
  _$jscoverage['plugins/music.js'][34] = 0;
  _$jscoverage['plugins/music.js'][36] = 0;
  _$jscoverage['plugins/music.js'][37] = 0;
  _$jscoverage['plugins/music.js'][38] = 0;
  _$jscoverage['plugins/music.js'][40] = 0;
  _$jscoverage['plugins/music.js'][42] = 0;
  _$jscoverage['plugins/music.js'][43] = 0;
  _$jscoverage['plugins/music.js'][44] = 0;
  _$jscoverage['plugins/music.js'][45] = 0;
  _$jscoverage['plugins/music.js'][49] = 0;
  _$jscoverage['plugins/music.js'][50] = 0;
  _$jscoverage['plugins/music.js'][52] = 0;
  _$jscoverage['plugins/music.js'][53] = 0;
  _$jscoverage['plugins/music.js'][55] = 0;
  _$jscoverage['plugins/music.js'][56] = 0;
  _$jscoverage['plugins/music.js'][57] = 0;
  _$jscoverage['plugins/music.js'][59] = 0;
  _$jscoverage['plugins/music.js'][62] = 0;
  _$jscoverage['plugins/music.js'][64] = 0;
  _$jscoverage['plugins/music.js'][66] = 0;
  _$jscoverage['plugins/music.js'][69] = 0;
  _$jscoverage['plugins/music.js'][72] = 0;
}
_$jscoverage['plugins/music.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///import plugins/inserthtml.js</span>","<span class=\"c\">///commands &#38899;&#20048;</span>","<span class=\"c\">///commandsName Music</span>","<span class=\"c\">///commandsTitle  &#25554;&#20837;&#38899;&#20048;</span>","<span class=\"c\">///commandsDialog  dialogs\\music</span>","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'music'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">,</span>","        div<span class=\"k\">;</span>","","    <span class=\"c\">/**</span>","<span class=\"c\">     * &#21019;&#24314;&#25554;&#20837;&#38899;&#20048;&#23383;&#31526;&#31388;</span>","<span class=\"c\">     * @param url &#38899;&#20048;&#22320;&#22336;</span>","<span class=\"c\">     * @param width &#38899;&#20048;&#23485;&#24230;</span>","<span class=\"c\">     * @param height &#38899;&#20048;&#39640;&#24230;</span>","<span class=\"c\">     * @param align &#38452;&#38632;&#23545;&#40784;</span>","<span class=\"c\">     * @param toEmbed &#26159;&#21542;&#20197;flash&#20195;&#26367;&#26174;&#31034;</span>","<span class=\"c\">     * @param addParagraph  &#26159;&#21542;&#38656;&#35201;&#28155;&#21152;P&#26631;&#31614;</span>","<span class=\"c\">     */</span>","    <span class=\"k\">function</span> creatInsertStr<span class=\"k\">(</span>url<span class=\"k\">,</span>width<span class=\"k\">,</span>height<span class=\"k\">,</span>align<span class=\"k\">,</span>toEmbed<span class=\"k\">,</span>addParagraph<span class=\"k\">)</span><span class=\"k\">{</span>","        <span class=\"k\">return</span>  <span class=\"k\">!</span>toEmbed <span class=\"k\">?</span>","            <span class=\"k\">(</span>addParagraph<span class=\"k\">?</span> <span class=\"k\">(</span><span class=\"s\">'&lt;p '</span><span class=\"k\">+</span> <span class=\"k\">(</span>align <span class=\"k\">!=</span><span class=\"s\">\"none\"</span> <span class=\"k\">?</span> <span class=\"k\">(</span> align <span class=\"k\">==</span> <span class=\"s\">\"center\"</span><span class=\"k\">?</span> <span class=\"s\">' style=\"text-align:center;\" '</span><span class=\"k\">:</span><span class=\"s\">' style=\"float:\"'</span><span class=\"k\">+</span> align <span class=\"k\">)</span> <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">'&gt;'</span><span class=\"k\">):</span> <span class=\"s\">''</span><span class=\"k\">)</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;img align=\"'</span><span class=\"k\">+</span>align<span class=\"k\">+</span><span class=\"s\">'\" width=\"'</span><span class=\"k\">+</span> width <span class=\"k\">+</span><span class=\"s\">'\" height=\"'</span> <span class=\"k\">+</span> height <span class=\"k\">+</span> <span class=\"s\">'\" _url=\"'</span><span class=\"k\">+</span>url<span class=\"k\">+</span><span class=\"s\">'\" class=\"edui-faked-music\"'</span> <span class=\"k\">+</span>","                <span class=\"s\">' src=\"'</span><span class=\"k\">+</span>me<span class=\"k\">.</span>options<span class=\"k\">.</span>langPath<span class=\"k\">+</span>me<span class=\"k\">.</span>options<span class=\"k\">.</span>lang<span class=\"k\">+</span><span class=\"s\">'/images/music.png\" /&gt;'</span> <span class=\"k\">+</span>","                <span class=\"k\">(</span>addParagraph<span class=\"k\">?</span><span class=\"s\">'&lt;/p&gt;'</span><span class=\"k\">:</span><span class=\"s\">''</span><span class=\"k\">)</span>","            <span class=\"k\">:</span>","            <span class=\"s\">'&lt;embed type=\"application/x-shockwave-flash\" class=\"edui-faked-music\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\"'</span> <span class=\"k\">+</span>","                <span class=\"s\">' src=\"'</span> <span class=\"k\">+</span> url <span class=\"k\">+</span> <span class=\"s\">'\" width=\"'</span> <span class=\"k\">+</span> width  <span class=\"k\">+</span> <span class=\"s\">'\" height=\"'</span> <span class=\"k\">+</span> height  <span class=\"k\">+</span> <span class=\"s\">'\" align=\"'</span> <span class=\"k\">+</span> align <span class=\"k\">+</span> <span class=\"s\">'\"'</span> <span class=\"k\">+</span>","                <span class=\"k\">(</span> align <span class=\"k\">!=</span><span class=\"s\">\"none\"</span> <span class=\"k\">?</span> <span class=\"s\">' style= \"'</span><span class=\"k\">+</span> <span class=\"k\">(</span> align <span class=\"k\">==</span> <span class=\"s\">\"center\"</span><span class=\"k\">?</span> <span class=\"s\">\"display:block;\"</span><span class=\"k\">:</span><span class=\"s\">\" float: \"</span><span class=\"k\">+</span> align <span class=\"k\">)</span>  <span class=\"k\">+</span> <span class=\"s\">'\"'</span> <span class=\"k\">:</span><span class=\"s\">''</span> <span class=\"k\">)</span> <span class=\"k\">+</span>","                <span class=\"s\">' wmode=\"transparent\" play=\"true\" loop=\"false\" menu=\"false\" allowscriptaccess=\"never\" allowfullscreen=\"true\" &gt;'</span><span class=\"k\">;</span>","    <span class=\"k\">}</span>","","    <span class=\"k\">function</span> switchImgAndEmbed<span class=\"k\">(</span>img2embed<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> tmpdiv<span class=\"k\">,</span>","            nodes <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span>me<span class=\"k\">.</span>document<span class=\"k\">,</span> <span class=\"k\">!</span>img2embed <span class=\"k\">?</span> <span class=\"s\">\"embed\"</span> <span class=\"k\">:</span> <span class=\"s\">\"img\"</span><span class=\"k\">);</span>","        <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span> node<span class=\"k\">;</span> node <span class=\"k\">=</span> nodes<span class=\"k\">[</span>i<span class=\"k\">++];)</span> <span class=\"k\">{</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>node<span class=\"k\">.</span>className <span class=\"k\">!=</span> <span class=\"s\">\"edui-faked-music\"</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">continue</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            tmpdiv <span class=\"k\">=</span> me<span class=\"k\">.</span>document<span class=\"k\">.</span>createElement<span class=\"k\">(</span><span class=\"s\">\"div\"</span><span class=\"k\">);</span>","            <span class=\"c\">//&#20808;&#30475;float&#22312;&#30475;align,&#28014;&#21160;&#26377;&#30340;&#26159;&#26102;&#20505;&#26159;&#22312;float&#19978;&#23450;&#20041;&#30340;</span>","            <span class=\"k\">var</span> align <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getComputedStyle<span class=\"k\">(</span>node<span class=\"k\">,</span><span class=\"s\">'float'</span><span class=\"k\">);</span>","            align <span class=\"k\">=</span> align <span class=\"k\">==</span> <span class=\"s\">'none'</span> <span class=\"k\">?</span> <span class=\"k\">(</span>node<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">'align'</span><span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"s\">''</span><span class=\"k\">)</span> <span class=\"k\">:</span> align<span class=\"k\">;</span>","            tmpdiv<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> creatInsertStr<span class=\"k\">(</span>img2embed <span class=\"k\">?</span> node<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">\"_url\"</span><span class=\"k\">)</span> <span class=\"k\">:</span> node<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">\"src\"</span><span class=\"k\">),</span> node<span class=\"k\">.</span>width<span class=\"k\">,</span> node<span class=\"k\">.</span>height<span class=\"k\">,</span> align<span class=\"k\">,</span> img2embed<span class=\"k\">);</span>","            node<span class=\"k\">.</span>parentNode<span class=\"k\">.</span>replaceChild<span class=\"k\">(</span>tmpdiv<span class=\"k\">.</span>firstChild<span class=\"k\">,</span> node<span class=\"k\">);</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span>","","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">\"beforegetcontent\"</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        switchImgAndEmbed<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'aftersetcontent'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        switchImgAndEmbed<span class=\"k\">(</span><span class=\"k\">false</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'aftergetcontent'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">(</span>cmdName<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span>cmdName <span class=\"k\">==</span> <span class=\"s\">'aftergetcontent'</span> <span class=\"k\">&amp;&amp;</span> me<span class=\"k\">.</span>queryCommandState<span class=\"k\">(</span><span class=\"s\">'source'</span><span class=\"k\">))</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","        switchImgAndEmbed<span class=\"k\">(</span><span class=\"k\">false</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","","    me<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">\"music\"</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>","        execCommand<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>cmd<span class=\"k\">,</span> musicObj<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">,</span>","                str <span class=\"k\">=</span> creatInsertStr<span class=\"k\">(</span>musicObj<span class=\"k\">.</span>url<span class=\"k\">,</span> musicObj<span class=\"k\">.</span>width <span class=\"k\">||</span> <span class=\"s\">400</span><span class=\"k\">,</span> musicObj<span class=\"k\">.</span>height <span class=\"k\">||</span> <span class=\"s\">95</span><span class=\"k\">,</span> <span class=\"s\">\"none\"</span><span class=\"k\">,</span> <span class=\"k\">false</span><span class=\"k\">,</span> <span class=\"k\">true</span><span class=\"k\">);</span>","            me<span class=\"k\">.</span>execCommand<span class=\"k\">(</span><span class=\"s\">\"inserthtml\"</span><span class=\"k\">,</span>str<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        queryCommandState<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">,</span>","                img <span class=\"k\">=</span> me<span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">().</span>getClosedNode<span class=\"k\">(),</span>","                flag <span class=\"k\">=</span> img <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span>img<span class=\"k\">.</span>className <span class=\"k\">==</span> <span class=\"s\">\"edui-faked-music\"</span><span class=\"k\">);</span>","            <span class=\"k\">return</span> flag <span class=\"k\">?</span> <span class=\"s\">1</span> <span class=\"k\">:</span> <span class=\"s\">0</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","<span class=\"k\">}</span><span class=\"k\">;</span>"];
_$jscoverage['plugins/music.js'][7]++;
UE.plugins.music = (function () {
  _$jscoverage['plugins/music.js'][8]++;
  var me = this, div;
  _$jscoverage['plugins/music.js'][20]++;
  function creatInsertStr(url, width, height, align, toEmbed, addParagraph) {
    _$jscoverage['plugins/music.js'][21]++;
    return ((! toEmbed)? ((addParagraph? ("<p " + ((align != "none")? ((align == "center")? " style=\"text-align:center;\" ": (" style=\"float:\"" + align)): "") + ">"): "") + "<img align=\"" + align + "\" width=\"" + width + "\" height=\"" + height + "\" _url=\"" + url + "\" class=\"edui-faked-music\"" + " src=\"" + me.options.langPath + me.options.lang + "/images/music.png\" />" + (addParagraph? "</p>": "")): ("<embed type=\"application/x-shockwave-flash\" class=\"edui-faked-music\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\"" + " src=\"" + url + "\" width=\"" + width + "\" height=\"" + height + "\" align=\"" + align + "\"" + ((align != "none")? (" style= \"" + ((align == "center")? "display:block;": (" float: " + align)) + "\""): "") + " wmode=\"transparent\" play=\"true\" loop=\"false\" menu=\"false\" allowscriptaccess=\"never\" allowfullscreen=\"true\" >"));
}
  _$jscoverage['plugins/music.js'][33]++;
  function switchImgAndEmbed(img2embed) {
    _$jscoverage['plugins/music.js'][34]++;
    var tmpdiv, nodes = domUtils.getElementsByTagName(me.document, ((! img2embed)? "embed": "img"));
    _$jscoverage['plugins/music.js'][36]++;
    for (var i = 0, node; (node = nodes[(i++)]);) {
      _$jscoverage['plugins/music.js'][37]++;
      if ((node.className != "edui-faked-music")) {
        _$jscoverage['plugins/music.js'][38]++;
        continue;
      }
      _$jscoverage['plugins/music.js'][40]++;
      tmpdiv = me.document.createElement("div");
      _$jscoverage['plugins/music.js'][42]++;
      var align = domUtils.getComputedStyle(node, "float");
      _$jscoverage['plugins/music.js'][43]++;
      align = ((align == "none")? (node.getAttribute("align") || ""): align);
      _$jscoverage['plugins/music.js'][44]++;
      tmpdiv.innerHTML = creatInsertStr((img2embed? node.getAttribute("_url"): node.getAttribute("src")), node.width, node.height, align, img2embed);
      _$jscoverage['plugins/music.js'][45]++;
      node.parentNode.replaceChild(tmpdiv.firstChild, node);
}
}
  _$jscoverage['plugins/music.js'][49]++;
  me.addListener("beforegetcontent", (function () {
  _$jscoverage['plugins/music.js'][50]++;
  switchImgAndEmbed(true);
}));
  _$jscoverage['plugins/music.js'][52]++;
  me.addListener("aftersetcontent", (function () {
  _$jscoverage['plugins/music.js'][53]++;
  switchImgAndEmbed(false);
}));
  _$jscoverage['plugins/music.js'][55]++;
  me.addListener("aftergetcontent", (function (cmdName) {
  _$jscoverage['plugins/music.js'][56]++;
  if (((cmdName == "aftergetcontent") && me.queryCommandState("source"))) {
    _$jscoverage['plugins/music.js'][57]++;
    return;
  }
  _$jscoverage['plugins/music.js'][59]++;
  switchImgAndEmbed(false);
}));
  _$jscoverage['plugins/music.js'][62]++;
  me.commands.music = {execCommand: (function (cmd, musicObj) {
  _$jscoverage['plugins/music.js'][64]++;
  var me = this, str = creatInsertStr(musicObj.url, (musicObj.width || 400), (musicObj.height || 95), "none", false, true);
  _$jscoverage['plugins/music.js'][66]++;
  me.execCommand("inserthtml", str);
}), queryCommandState: (function () {
  _$jscoverage['plugins/music.js'][69]++;
  var me = this, img = me.selection.getRange().getClosedNode(), flag = (img && (img.className == "edui-faked-music"));
  _$jscoverage['plugins/music.js'][72]++;
  return (flag? 1: 0);
})};
});