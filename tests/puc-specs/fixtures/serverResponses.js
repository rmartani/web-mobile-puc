var FIXTURES = window.FIXTURES || {};


FIXTURES.server = {

    'users': {
        'ok': [
            '200', {
                'Content-Type': 'application/json'
            },
            JSON.stringify([FIXTURES.users])
        ]
    }


};
