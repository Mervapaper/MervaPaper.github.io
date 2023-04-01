(function($){$.fn.multiStepForm=function(args){if(args===null||typeof args!=='object'||$.isArray(args))
throw " : Called with Invalid argument";var form=this;var tabs=form.find('.tab');var steps=form.find('.step');steps.each(function(i,e){$(e).on('click',function(ev){})});form.navigateTo=function(i){tabs.removeClass('current').eq(i).addClass('current');form.find('.previous').toggle(i>0);atTheEnd=i>=tabs.length-1;form.find('.next').toggle(!atTheEnd);form.find('.submit').toggle(atTheEnd);fixStepIndicator(curIndex());return form}
function curIndex(){return tabs.index(tabs.filter('.current'))}
function fixStepIndicator(n){steps.each(function(i,e){i==n?$(e).addClass('active'):$(e).removeClass('active')})}
form.find('.previous').click(function(){form.navigateTo(curIndex()-1)});form.find('.next').click(function(){if('validations' in args&&typeof args.validations==='object'&&!$.isArray(args.validations)){if(!('noValidate' in args)||(typeof args.noValidate==='boolean'&&!args.noValidate)){form.validate(args.validations);if(form.valid()==!0){form.navigateTo(curIndex()+1);return!0}
return!1}}
form.navigateTo(curIndex()+1)});form.find('.submit').on('click',function(e){if(typeof args.beforeSubmit!=='undefined'&&typeof args.beforeSubmit!=='function')
args.beforeSubmit(form,this);if(typeof args.submit==='undefined'||(typeof args.submit==='boolean'&&args.submit)){form.submit()}
return form});typeof args.defaultStep==='number'?form.navigateTo(args.defaultStep):null;form.noValidate=function(){}
return form}}(jQuery))