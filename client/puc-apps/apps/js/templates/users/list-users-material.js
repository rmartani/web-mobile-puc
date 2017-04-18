this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["client/puc-apps/apps/js/templates/users/list-users-material.hbs"] = Handlebars.template({
    "1": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : {},
            alias2 = helpers.helperMissing,
            alias3 = "function",
            alias4 = container.escapeExpression;

        return "<div class=\"row desktop-row\">\n  <div class=\"col s3 visible-xs\">\n    <div class=\"row list-header\">\n      <div class=\"col s12 visible-xs\">Nome</div>\n      <div class=\"col s12 visible-xs\">Email</div>\n      <div class=\"col s12 visible-xs\">Sexo</div>\n      <div class=\"col s12 visible-xs\"></div>\n    </div>\n  </div>\n\n  <div class=\"col l12 col s9\" >\n    <div class=\"row\">\n      <div class=\"col s12 col l3 user-info\">" +
            alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                "name": "name",
                "hash": {},
                "data": data
            }) : helper))) +
            "</div>\n      <div class=\"col s12 col l3 user-info\">" +
            alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                "name": "email",
                "hash": {},
                "data": data
            }) : helper))) +
            "</div>\n      <div class=\"col s12 col l3 user-info\">" +
            alias4(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                "name": "gender",
                "hash": {},
                "data": data
            }) : helper))) +
            "</div>\n      <div class=\"l1\"></div>\n      <div class=\"col s12 col l2 list-actions\">\n        <i class=\"material-icons\">mode_edit</i>\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n  </div>\n</div>\n";
    },
    "compiler": [7, ">= 4.0.0"],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1;

        return "<h3>Lista de Usuários</h3>\n\n<div class=\"row hidden-xs row hidden-xs table-header desktop-row-header\">\n  <div class=\"col l12\" >\n    <div class=\"row\">\n      <div class=\"hidden-xs col s3\">Nome</div>\n      <div class=\"hidden-xs col s3\">Email</div>\n      <div class=\"hidden-xs col s3\">Sexo</div>\n      <div class=\"hidden-xs col s3\">Ações</div>\n    </div>\n  </div>\n</div>\n\n" +
            ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.users : depth0), {
                "name": "each",
                "hash": {},
                "fn": container.program(1, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "");
    },
    "useData": true
});
