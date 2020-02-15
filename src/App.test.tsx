import React from 'react';
import { mount } from 'enzyme';
import { App } from './App';
import * as redux from 'react-redux';
import { Context } from 'react-responsive';
import { initialState as appInitialState } from './store/reducer';
import { store } from './application';
import * as actions from './store/actions';

describe('[Root] <App>', () => 
{
	it('Starting application', () => 
	{
        mount((
            <redux.Provider store={store}>
                <Context.Provider value={{}}>
                    <App {...appInitialState} />
                </Context.Provider>
            </redux.Provider>
        ));
    });
    
    it('Portrait mode', () =>
    {
        mount((
            <redux.Provider store={store}>
                <Context.Provider value={{orientation: 'portrait'}}>
                    <App {...appInitialState} />
                </Context.Provider>
            </redux.Provider>
        ));
    });

    it('Dark mode', () =>
    {
        store.dispatch<any>(actions.toggleDarkMode(true));
        mount((
            <redux.Provider store={store}>
                <Context.Provider value={{}}>
                    <App {...appInitialState} />
                </Context.Provider>
            </redux.Provider>
        ));
    });
});
