import { LightningElement } from 'lwc';

export default class BindExpressionsFromJS extends LightningElement {

    fullName = 'Nishant Mohapatra';
    email = 'nkmworkspace@gmail.com';
    phone = 9348087740;

    handleChange(event) {
        const field = event.target.name;

        if(field === 'fullName') {
            this.fullName = event.target.value;
        } else if(field === 'email') {
            this.email = event.target.value;
        } else if(field === 'phone') {
            this.phone = event.target.value;
        }
    }

    get upperCase() {
        return `${this.fullName}`.toUpperCase();
    } 
}