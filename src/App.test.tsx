import React from 'react';
import { mount } from 'enzyme';
import { App } from './App';
import configureMockStore from 'redux-mock-store';
import * as redux from 'react-redux';
import thunk from 'redux-thunk';
import { Context } from 'react-responsive';
import { initialState as appInitialState } from './store/reducer';
import { initialState as homeInitialState } from './containers/Home/store/reducer';

const rootStore = {
    app: appInitialState,
    home: homeInitialState
}

let mockStore = configureMockStore([thunk])(rootStore);
function updateMockStore(props: Object)
{
    mockStore = configureMockStore([thunk])({
        ...rootStore,
        ...props
    });
}

describe('[Root] <App>', () => 
{
	it('Starting application', () => 
	{
        mount((
            <redux.Provider store={mockStore}>
                <Context.Provider value={{}}>
                    <App {...appInitialState} />
                </Context.Provider>
            </redux.Provider>
        ));
    });
    
    it('Portrait mode', () =>
    {
        mount((
            <redux.Provider store={mockStore}>
                <Context.Provider value={{orientation: 'portrait'}}>
                    <App {...appInitialState} />
                </Context.Provider>
            </redux.Provider>
        ));
    });

    it('Dark mode', () =>
    {
        updateMockStore({
            app: {
                ...appInitialState,
                isDarkMode: true
            }
        });
        mount((
            <redux.Provider store={mockStore}>
                <Context.Provider value={{}}>
                    <App {...appInitialState} />
                </Context.Provider>
            </redux.Provider>
        ));
    });
});
