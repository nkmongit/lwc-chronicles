import { LightningElement } from 'lwc';

export default class BindInputText extends LightningElement {
    myValue = '';

    handleChange(event) {    
        this.myValue = event.target.value;
    }
}