(function () {
    const whitelistedPhoneNumbers = context.getVariable('KVM-Data.whitelistedPhoneNumbers')
    const requestPhoneNumber = context.getVariable('request.queryparam.phoneNumber.1')
    const isPhoneNumberWhitelisted = whitelistedPhoneNumbers.indexOf(requestPhoneNumber) != -1
    context.setVariable('JS-WhitelistedPhoneNumberCheck.isPhoneNumberWhitelisted', isPhoneNumberWhitelisted)
})();