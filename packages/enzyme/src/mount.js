import ReactWrapper from './ReactWrapper';

/**
 * Mounts and renders a react component into the document and provides a testing wrapper around it.
 *
 * @param node
 * @returns {ReactWrapper}
 */
export default function mount(node, options) {
    const wrapper = new ReactWrapper(node, null, options);
    wrapper.hasClass = (cls) => {
        return wrapper.render().hasClass(cls);
    }
    const find = wrapper.find.bind(wrapper);
    wrapper.find = (selector) => {
        return find(selector).hostNodes();
    }
    const childAt = wrapper.childAt.bind(wrapper);
    wrapper.childAt = (index) => {
        return this.children().children().at(index);
    }
    return wrapper;
}
