import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
import getAccList from '@salesforce/apex/AccountController.getAccList';


export default class DeleteAccounts extends LightningElement {
    accounts;
    error;
    wiredAccountsResult;

    @wire(getAccList)
    wiredAccounts(result) {
        this.wiredAccountsResult = result;
        if(result.data) {
            this.accounts = result.data;
            this.error = undefined;
        } else if(result.error){
            this.accounts = undefined;
            this.error = result.error;
        }
    }

    deleteAccount(event) {
        const recordId = event.target.dataset.recordid;
        deleteRecord(recordId)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account Deleted',
                    variant: 'success',
                })
            )
            return refreshApex(this.wiredAccountsResult);
        })
        .catch((err) => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Error deleting record',
                    variant: 'error',
                })
            )
        })
    }
}