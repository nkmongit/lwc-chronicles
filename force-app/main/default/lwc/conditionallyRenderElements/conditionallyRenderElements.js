import { LightningElement } from 'lwc';

export default class ConditionallyRenderElements extends LightningElement {
    showMe = false;
    handleChange(event) {
        this.showMe = event.target.checked;
        console.log(this.showMe);
    }
}