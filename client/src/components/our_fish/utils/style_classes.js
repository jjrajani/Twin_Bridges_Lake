/* Bream and Crappie classes to fix image size */
const WRAPPER_CLASS = 'col-xs-12 col-sm-6 col-md-4 fish_wrapper';
const BREAM_CLASS = 'col-xs-12 col-sm-6 col-md-4 fish_wrapper bream';
const CRAPPIE_CLASS = 'col-xs-12 col-sm-6 col-md-4 fish_wrapper crappie';

const applyClass = fish =>
    fish.text === 'Bream'
        ? BREAM_CLASS
        : fish.text === 'Crappie' ? CRAPPIE_CLASS : WRAPPER_CLASS;

export default applyClass;
