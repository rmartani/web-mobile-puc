describe("Users List CRUD", function() {

    var fakeServer;

    beforeEach(function() {
        fakeServer = sinon.fakeServer.create();
        fakeServer.respondImmediately = true;

        spyOn(App.modules.CrudUser, "renderUserList");
    });

    afterEach(function() {
        fakeServer.restore();
    });

    it('should define CRUD User', function() {
        expect(App.modules.CrudUser).toBeDefined();
    });

    it('should render table', function() {

        fakeServer.respondWith('/users', FIXTURES.server.users.ok);
        App.modules.CrudUser.init();

        expect(App.modules.CrudUser.renderUserList).toHaveBeenCalled();

    });

});
