if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-widget-toggle/aui-widget-toggle.js']) {
   __coverage__['build/aui-widget-toggle/aui-widget-toggle.js'] = {"path":"build/aui-widget-toggle/aui-widget-toggle.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":48}}},"2":{"name":"WidgetToggle","line":18,"loc":{"start":{"line":18,"column":0},"end":{"line":18,"column":24}}},"3":{"name":"(anonymous_3)","line":27,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":30}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":41,"column":26}},"2":{"start":{"line":18,"column":0},"end":{"line":18,"column":26}},"3":{"start":{"line":20,"column":0},"end":{"line":36,"column":2}},"4":{"start":{"line":28,"column":8},"end":{"line":28,"column":28}},"5":{"start":{"line":30,"column":8},"end":{"line":32,"column":9}},"6":{"start":{"line":31,"column":12},"end":{"line":31,"column":47}},"7":{"start":{"line":34,"column":8},"end":{"line":34,"column":48}},"8":{"start":{"line":38,"column":0},"end":{"line":38,"column":30}}},"branchMap":{"1":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":8},"end":{"line":30,"column":8}},{"start":{"line":30,"column":8},"end":{"line":30,"column":8}}]}},"code":["(function () { YUI.add('aui-widget-toggle', function (A, NAME) {","","/**"," * Provides standard module support for toggle visibility method through an"," * extension."," * @module aui-widget-toggle"," */","","/**"," * Widget extension, which can be used to add toggle visibility support to the"," * base Widget class, through the [Base.build](Base.html#method_build)"," * method."," *"," * @class A.WidgetToggle"," * @param {Object} The user configuration object"," */","","function WidgetToggle() {}","","WidgetToggle.prototype = {","    /**","     * Toggles widget visibility.","     *","     * @method toggle","     * @param {Boolean} visible Force the widget to be visible.","     */","    toggle: function(visible) {","        var instance = this;","","        if (!A.Lang.isBoolean(visible)) {","            visible = !instance.get('visible');","        }","","        return instance.set('visible', visible);","    }","};","","A.WidgetToggle = WidgetToggle;","","","}, '3.0.3-deprecated.40');","","}());"]};
}
var __cov_yH0fxL3kuP8S_fjT4NJLzg = __coverage__['build/aui-widget-toggle/aui-widget-toggle.js'];
__cov_yH0fxL3kuP8S_fjT4NJLzg.s['1']++;YUI.add('aui-widget-toggle',function(A,NAME){__cov_yH0fxL3kuP8S_fjT4NJLzg.f['1']++;__cov_yH0fxL3kuP8S_fjT4NJLzg.s['2']++;function WidgetToggle(){__cov_yH0fxL3kuP8S_fjT4NJLzg.f['2']++;}__cov_yH0fxL3kuP8S_fjT4NJLzg.s['3']++;WidgetToggle.prototype={toggle:function(visible){__cov_yH0fxL3kuP8S_fjT4NJLzg.f['3']++;__cov_yH0fxL3kuP8S_fjT4NJLzg.s['4']++;var instance=this;__cov_yH0fxL3kuP8S_fjT4NJLzg.s['5']++;if(!A.Lang.isBoolean(visible)){__cov_yH0fxL3kuP8S_fjT4NJLzg.b['1'][0]++;__cov_yH0fxL3kuP8S_fjT4NJLzg.s['6']++;visible=!instance.get('visible');}else{__cov_yH0fxL3kuP8S_fjT4NJLzg.b['1'][1]++;}__cov_yH0fxL3kuP8S_fjT4NJLzg.s['7']++;return instance.set('visible',visible);}};__cov_yH0fxL3kuP8S_fjT4NJLzg.s['8']++;A.WidgetToggle=WidgetToggle;},'3.0.3-deprecated.40');
