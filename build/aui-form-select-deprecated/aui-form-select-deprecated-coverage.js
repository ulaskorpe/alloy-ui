if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-select-deprecated/aui-form-select-deprecated.js']) {
   __coverage__['build/aui-form-select-deprecated/aui-form-select-deprecated.js'] = {"path":"build/aui-form-select-deprecated/aui-form-select-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":38},"end":{"line":1,"column":57}}},"2":{"name":"(anonymous_2)","line":45,"loc":{"start":{"line":45,"column":21},"end":{"line":45,"column":37}}},"3":{"name":"(anonymous_3)","line":55,"loc":{"start":{"line":55,"column":24},"end":{"line":55,"column":40}}},"4":{"name":"(anonymous_4)","line":61,"loc":{"start":{"line":61,"column":23},"end":{"line":61,"column":39}}},"5":{"name":"(anonymous_5)","line":92,"loc":{"start":{"line":92,"column":29},"end":{"line":92,"column":45}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":105,"column":71}},"2":{"start":{"line":3,"column":0},"end":{"line":12,"column":91}},"3":{"start":{"line":14,"column":0},"end":{"line":100,"column":3}},"4":{"start":{"line":46,"column":12},"end":{"line":46,"column":32}},"5":{"start":{"line":48,"column":12},"end":{"line":50,"column":13}},"6":{"start":{"line":49,"column":16},"end":{"line":49,"column":32}},"7":{"start":{"line":52,"column":12},"end":{"line":52,"column":25}},"8":{"start":{"line":56,"column":12},"end":{"line":56,"column":32}},"9":{"start":{"line":58,"column":12},"end":{"line":58,"column":57}},"10":{"start":{"line":62,"column":12},"end":{"line":62,"column":32}},"11":{"start":{"line":64,"column":12},"end":{"line":64,"column":28}},"12":{"start":{"line":66,"column":12},"end":{"line":66,"column":23}},"13":{"start":{"line":67,"column":12},"end":{"line":67,"column":28}},"14":{"start":{"line":68,"column":12},"end":{"line":68,"column":28}},"15":{"start":{"line":69,"column":12},"end":{"line":69,"column":34}},"16":{"start":{"line":71,"column":12},"end":{"line":81,"column":13}},"17":{"start":{"line":72,"column":16},"end":{"line":72,"column":34}},"18":{"start":{"line":73,"column":16},"end":{"line":73,"column":57}},"19":{"start":{"line":74,"column":16},"end":{"line":74,"column":53}},"20":{"start":{"line":76,"column":16},"end":{"line":78,"column":17}},"21":{"start":{"line":77,"column":20},"end":{"line":77,"column":38}},"22":{"start":{"line":80,"column":16},"end":{"line":80,"column":96}},"23":{"start":{"line":83,"column":12},"end":{"line":83,"column":44}},"24":{"start":{"line":85,"column":12},"end":{"line":85,"column":44}},"25":{"start":{"line":87,"column":12},"end":{"line":87,"column":41}},"26":{"start":{"line":89,"column":12},"end":{"line":89,"column":57}},"27":{"start":{"line":93,"column":12},"end":{"line":93,"column":32}},"28":{"start":{"line":95,"column":12},"end":{"line":97,"column":13}},"29":{"start":{"line":96,"column":16},"end":{"line":96,"column":66}},"30":{"start":{"line":102,"column":0},"end":{"line":102,"column":18}}},"branchMap":{"1":{"line":48,"type":"if","locations":[{"start":{"line":48,"column":12},"end":{"line":48,"column":12}},{"start":{"line":48,"column":12},"end":{"line":48,"column":12}}]},"2":{"line":73,"type":"binary-expr","locations":[{"start":{"line":73,"column":30},"end":{"line":73,"column":46}},{"start":{"line":73,"column":50},"end":{"line":73,"column":56}}]},"3":{"line":74,"type":"binary-expr","locations":[{"start":{"line":74,"column":30},"end":{"line":74,"column":42}},{"start":{"line":74,"column":46},"end":{"line":74,"column":52}}]},"4":{"line":76,"type":"if","locations":[{"start":{"line":76,"column":16},"end":{"line":76,"column":16}},{"start":{"line":76,"column":16},"end":{"line":76,"column":16}}]},"5":{"line":95,"type":"if","locations":[{"start":{"line":95,"column":12},"end":{"line":95,"column":12}},{"start":{"line":95,"column":12},"end":{"line":95,"column":12}}]}},"code":["(function () { YUI.add('aui-form-select-deprecated', function (A, NAME) {","","var Lang = A.Lang,","    isArray = Lang.isArray,","    isObject = Lang.isObject,","","    getClassName = A.getClassName,","","    NAME = 'select',","","    CSS_SELECT = getClassName(NAME),","    TPL_SELECT = '<select {multiple} class=\"{cssClass}\" id=\"{id}\" name=\"{name}\"></select>';","","var Select = A.Component.create({","    NAME: NAME,","","    ATTRS: {","","        multiple: {","            value: false","        },","","        options: {","            value: [],","            setter: '_setOptions'","        },","","        selectedIndex: {","            value: -1","        }","    },","","    UI_ATTRS: ['multiple', 'options', 'selectedIndex'],","","    EXTENDS: A.Field,","","    HTML_PARSER: {","        node: 'select'","    },","","    prototype: {","        FIELD_TEMPLATE: TPL_SELECT,","        FIELD_TYPE: NAME,","","        _setOptions: function(value) {","            var instance = this;","","            if (!isArray(value)) {","                value = [value];","            }","","            return value;","        },","","        _uiSetMultiple: function(value) {","            var instance = this;","","            instance.get('node').attr('multiple', value);","        },","","        _uiSetOptions: function(value) {","            var instance = this;","","            var buffer = [];","","            var option;","            var optionLabel;","            var optionValue;","            var selectedIndex = 0;","","            for (var i = 0; i < value.length; i++) {","                option = value[i];","                optionLabel = option.labelText || option;","                optionValue = option.value || option;","","                if (option.selected) {","                    selectedIndex = i;","                }","","                buffer.push('<option value=\"' + optionValue + '\">' + optionLabel + '</option>');","            }","","            var node = instance.get('node');","","            node.all('option').remove(true);","","            node.append(buffer.join(''));","","            instance.set('selectedIndex', selectedIndex);","        },","","        _uiSetSelectedIndex: function(value) {","            var instance = this;","","            if (value > -1) {","                instance.get('node').attr('selectedIndex', value);","            }","        }","    }","});","","A.Select = Select;","","","}, '3.0.3-deprecated.40', {\"requires\": [\"aui-form-field-deprecated\"]});","","}());"]};
}
var __cov_d44sT60hL7YDYVG50tNsOg = __coverage__['build/aui-form-select-deprecated/aui-form-select-deprecated.js'];
__cov_d44sT60hL7YDYVG50tNsOg.s['1']++;YUI.add('aui-form-select-deprecated',function(A,NAME){__cov_d44sT60hL7YDYVG50tNsOg.f['1']++;__cov_d44sT60hL7YDYVG50tNsOg.s['2']++;var Lang=A.Lang,isArray=Lang.isArray,isObject=Lang.isObject,getClassName=A.getClassName,NAME='select',CSS_SELECT=getClassName(NAME),TPL_SELECT='<select {multiple} class="{cssClass}" id="{id}" name="{name}"></select>';__cov_d44sT60hL7YDYVG50tNsOg.s['3']++;var Select=A.Component.create({NAME:NAME,ATTRS:{multiple:{value:false},options:{value:[],setter:'_setOptions'},selectedIndex:{value:-1}},UI_ATTRS:['multiple','options','selectedIndex'],EXTENDS:A.Field,HTML_PARSER:{node:'select'},prototype:{FIELD_TEMPLATE:TPL_SELECT,FIELD_TYPE:NAME,_setOptions:function(value){__cov_d44sT60hL7YDYVG50tNsOg.f['2']++;__cov_d44sT60hL7YDYVG50tNsOg.s['4']++;var instance=this;__cov_d44sT60hL7YDYVG50tNsOg.s['5']++;if(!isArray(value)){__cov_d44sT60hL7YDYVG50tNsOg.b['1'][0]++;__cov_d44sT60hL7YDYVG50tNsOg.s['6']++;value=[value];}else{__cov_d44sT60hL7YDYVG50tNsOg.b['1'][1]++;}__cov_d44sT60hL7YDYVG50tNsOg.s['7']++;return value;},_uiSetMultiple:function(value){__cov_d44sT60hL7YDYVG50tNsOg.f['3']++;__cov_d44sT60hL7YDYVG50tNsOg.s['8']++;var instance=this;__cov_d44sT60hL7YDYVG50tNsOg.s['9']++;instance.get('node').attr('multiple',value);},_uiSetOptions:function(value){__cov_d44sT60hL7YDYVG50tNsOg.f['4']++;__cov_d44sT60hL7YDYVG50tNsOg.s['10']++;var instance=this;__cov_d44sT60hL7YDYVG50tNsOg.s['11']++;var buffer=[];__cov_d44sT60hL7YDYVG50tNsOg.s['12']++;var option;__cov_d44sT60hL7YDYVG50tNsOg.s['13']++;var optionLabel;__cov_d44sT60hL7YDYVG50tNsOg.s['14']++;var optionValue;__cov_d44sT60hL7YDYVG50tNsOg.s['15']++;var selectedIndex=0;__cov_d44sT60hL7YDYVG50tNsOg.s['16']++;for(var i=0;i<value.length;i++){__cov_d44sT60hL7YDYVG50tNsOg.s['17']++;option=value[i];__cov_d44sT60hL7YDYVG50tNsOg.s['18']++;optionLabel=(__cov_d44sT60hL7YDYVG50tNsOg.b['2'][0]++,option.labelText)||(__cov_d44sT60hL7YDYVG50tNsOg.b['2'][1]++,option);__cov_d44sT60hL7YDYVG50tNsOg.s['19']++;optionValue=(__cov_d44sT60hL7YDYVG50tNsOg.b['3'][0]++,option.value)||(__cov_d44sT60hL7YDYVG50tNsOg.b['3'][1]++,option);__cov_d44sT60hL7YDYVG50tNsOg.s['20']++;if(option.selected){__cov_d44sT60hL7YDYVG50tNsOg.b['4'][0]++;__cov_d44sT60hL7YDYVG50tNsOg.s['21']++;selectedIndex=i;}else{__cov_d44sT60hL7YDYVG50tNsOg.b['4'][1]++;}__cov_d44sT60hL7YDYVG50tNsOg.s['22']++;buffer.push('<option value="'+optionValue+'">'+optionLabel+'</option>');}__cov_d44sT60hL7YDYVG50tNsOg.s['23']++;var node=instance.get('node');__cov_d44sT60hL7YDYVG50tNsOg.s['24']++;node.all('option').remove(true);__cov_d44sT60hL7YDYVG50tNsOg.s['25']++;node.append(buffer.join(''));__cov_d44sT60hL7YDYVG50tNsOg.s['26']++;instance.set('selectedIndex',selectedIndex);},_uiSetSelectedIndex:function(value){__cov_d44sT60hL7YDYVG50tNsOg.f['5']++;__cov_d44sT60hL7YDYVG50tNsOg.s['27']++;var instance=this;__cov_d44sT60hL7YDYVG50tNsOg.s['28']++;if(value>-1){__cov_d44sT60hL7YDYVG50tNsOg.b['5'][0]++;__cov_d44sT60hL7YDYVG50tNsOg.s['29']++;instance.get('node').attr('selectedIndex',value);}else{__cov_d44sT60hL7YDYVG50tNsOg.b['5'][1]++;}}}});__cov_d44sT60hL7YDYVG50tNsOg.s['30']++;A.Select=Select;},'3.0.3-deprecated.40',{'requires':['aui-form-field-deprecated']});
