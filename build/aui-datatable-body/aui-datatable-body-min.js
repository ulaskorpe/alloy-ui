YUI.add("aui-datatable-body",function(e,t){function i(){}var n=e.getClassName,r=n("table");i.NAME="dataTableBody",i.prototype={initializer:function(){e.after(this._afterRenderBody,this,"render")},_afterRenderBody:function(){this._setTableClass()},_setTableClass:function(){var e=this.get("container"),t=this.get("cssClass");e.addClass(t),e.addClass(r)}},e.Base.mix(e.DataTable.BodyView,[i])},"3.0.3-deprecated.40",{requires:["aui-classnamemanager","datatable-base","event-key","aui-event-base"]});
