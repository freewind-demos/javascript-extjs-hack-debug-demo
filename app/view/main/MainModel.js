/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('hello.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'hello',

        loremIpsum: 'Hello extjs'
    }

    //TODO - add data, formulas and/or methods to support your view
});
