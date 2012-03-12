## metro-tile

A simple javascript UI library which creates Windows 8 Metro Tiles using CSS3


### Getting started

 * Include metro.js and metro.css
 * Create a metro-surface using a DIV <pre style='color:#000000;background:#ffffff;'><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"metro-surface"</span><span style='color:#a65700; '>></span>
</pre>
 * Place metro tile(s) inside metro-surface <pre style='color:#000000;background:#ffffff;'><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"metro-surface"</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"metro-tile"</span><span style='color:#a65700; '>></span>This is a metro tile<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
</pre>

 
### Example

<pre style='color:#000000;background:#ffffff;'><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>></span>
 <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
 <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.17/jquery-ui.min.js"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
 <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script type="text/javascript" src="metro-tile.js"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
 <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>link</span><span style='color:#274796; '> </span><span style='color:#074726; '>href</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"metro-tile.css"</span><span style='color:#274796; '> </span><span style='color:#074726; '>rel</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"stylesheet"</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"text/css"</span><span style='color:#a65700; '>></span>    
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"metro-surface"</span><span style='color:#a65700; '>></span>
 <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>table</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>tr</span><span style='color:#a65700; '>></span>
   <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>td</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"metro-tile metro-tile-green"</span><span style='color:#274796; '> </span><span style='color:#074726; '>href</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"./test.html"</span><span style='color:#a65700; '>></span>This is a test<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>td</span><span style='color:#a65700; '>></span>
   <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>td</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"metro-tile metro-tile-small metro-tile-orange"</span><span style='color:#a65700; '>></span>This is a test<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>td</span><span style='color:#a65700; '>></span>
   <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>td</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>style</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#008c00; '>496</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#008c00; '>240</span><span style='color:#006600; '>px</span><span style='color:#0000e6; '>"</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"metro-tile"</span><span style='color:#a65700; '>></span>This is a test<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>td</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>tr</span><span style='color:#a65700; '>></span>
 <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>table</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#a65700; '>></span>
</pre>
