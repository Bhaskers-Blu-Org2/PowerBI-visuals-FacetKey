var Handlebars = require('handlebars');module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <i class=\"fa fa-link facet-links-icon\"></i><span class=\"facet-links-count\">"
    + container.escapeExpression(((helper = (helper = helpers.links || (depth0 != null ? depth0.links : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"links","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.links : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true})