var App = window.App || {};
App.modules = App.modules || {};

App.modules.CrudUser = (function() {

    /**
     * Esse método é utilizado para executar as requisição ajax
     *
     * @param {string} method - envia uma string com o método HTTP - eg: 'GET', 'POST'
     * @param {render} render
     * @param {error} error
     * @param {string} params - Request parameters - eg: /users/9823498273
     *
     */
    var makeAjaxRequest = function(method, render, error, params) {
        $.ajax({
            url: "/api/users" + (params ? ("/" + params) : ""),
            method: method,
            success: function(data) {
                render(data);
            },
            error: function(data) {
                error(data);
            }
        });
    }

    /**
     * @method renderUserList
     *
     * Essse método é responsável por:
     *
     * - selectionar a tag script com o template handlebars, que se encontra em index.html/index-material.html,
     * - compilar o template
     * - declarar o metódo para renderizar o template na template
     * - declarar o metódo para logar possível erro na requisição ajax
     * - chamar o método responsável por requisições ajax
     *
     */
    var renderUserList = function() {

        var template =
            (App.CONFIG.cssType === 'simple' ? App.Templates['client/puc-apps/apps/js/templates/users/list-users.hbs'] :
                App.Templates['client/puc-apps/apps/js/templates/users/list-users-material.hbs']),
            that = this,
            html;

        /**
         * @callback render
         */
        var render = function(data) {
            context = {
                users: data
            };
            html = template(context);
            $("#content").append(html);
            registryEvents();
        };

        /**
         * @callback error
         */
        var error = function(data) {
            console.dir(data);
        };

        var registryEvents = function() {
            $("#add-user").on('click', that.renderCreateUser());
            $("#delete-user").on('click', that.deleteUser());
            $("#show-user").on('click', that.renderUser());
        };

        makeAjaxRequest('GET', render, error);
    };


    /**
     * Implementar método para mostrar um usuário
     */
    var renderUser = function() {

    };

    /**
     * Implementar método para renderizar form
     */
    var renderCreateUser = function() {

    };

    /**
     * Implementar método para salvar um usuário, action do button submit
     */
    var saveUser = function() {

    };

    /**
     * Implementar método para remover um usuário, action do link delete
     */
    var deleteUser = function() {

    };

    /**
     * Esse método é chamado para inicializar a página
     * HOME que no nosso caso é a lista de usuários
     */
    var init = function() {
        this.renderUserList();
    }

    return {
        init: init,
        renderUserList: renderUserList,
        renderUser: renderUser,
        renderCreateUser: renderCreateUser,
        deleteUser: deleteUser
    }

})();

$(function() {
    App.modules.CrudUser.init();
});
