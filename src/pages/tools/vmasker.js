import VMasker from 'vanilla-masker';

function inputHandler(masks, max, event) {
    var c = event.target;
    var v = c.value.replace(/\D/g, '');
    var m = c.value.length > max ? 1 : 0;
    VMasker(c).unMask();
    VMasker(c).maskPattern(masks[m]);
    c.value = VMasker.toPattern(v, masks[m]);
}

export default function mask(element, mask) {
    VMasker(element).maskPattern(mask[0]);
    element.addEventListener('input', inputHandler.bind(undefined, mask, 14), false);
}
