import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Enzyme adapter for react unit tests.
 */
configure({ adapter: new Adapter() });

/**
 * Polyfill for matchMedia.
 */
Object.defineProperty(window, 'matchMedia', 
{
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});