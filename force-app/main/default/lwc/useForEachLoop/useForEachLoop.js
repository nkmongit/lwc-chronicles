import { LightningElement } from 'lwc';

export default class UseForEachLoop extends LightningElement {
    students = [
        {
            id: '001',
            name: 'Nishant Mohapatra',
            class: 'MCA',
            fee: 900000,
        },
        {
            id: '002',
            name: 'Dishant Mohapatra',
            class: 'B.tech',
            fee: 7000000,
        }
    ]
}