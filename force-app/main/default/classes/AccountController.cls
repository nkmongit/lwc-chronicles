public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList() {
        return [SELECT Id, Name FROM Account ORDER BY CreatedDate DESC LIMIT 10];
    }
}