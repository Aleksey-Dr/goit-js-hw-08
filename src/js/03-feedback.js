import throttle from "lodash.throttle";

// create elements object
const refs = {
    form: document.querySelector('.feedback-form'),
    emailLabel: document.querySelector('[name="email"]'),
    messageLabel: document.querySelector('[name="message"]'),
};

// create CONST
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

localStorageValue();

// create listeners
refs.form.addEventListener('submit', onFormSubmit);
// added throttle
refs.form.addEventListener('input', throttle(onFormInput, 500));
// refs.emailLabel.addEventListener('input', throttle(onEmailInput, 500));

function onFormInput() {

    formData[refs.emailLabel.name] = refs.emailLabel.value;
    formData[refs.messageLabel.name] = refs.messageLabel.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    // stop reboot page
    evt.preventDefault();
    // console.log('Submit email');
    // clear form
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

// checking
function localStorageValue() {

    if (localStorage.getItem(STORAGE_KEY)) {
            refs.emailLabel.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
            refs.messageLabel.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message; 
    }
}