const Component = require('../lib/component');

describe('Component', () => {
	it('should take a parameter that defaults to en empty array if no argument is provided', () => {
		const component = new Component();
		const result = [];
		expect(component.children).toEqual(result);
	});
	it('should throw an error if render() is called', () => {
		const component = new Component();
		const error = new Error('Child class must implement a render() method.');
		expect(component.render).toThrow(error);
	});
    it('should return a string if renderInnerHTML is called', () => {
        const component = new Component(['<p>This is a paragraph</p>']);
        const generatedHTML = component.renderInnerHTML();
        const expectedHTML = component.children.join('');
        expect(generatedHTML).toEqual(expectedHTML)
    })
});