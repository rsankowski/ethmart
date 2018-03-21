Template.productInfoForm.helpers({
  deploying: function () {
    return FlowRouter.getRouteName() === 'market'
  }
})

Template.productInfoForm.events({
  'keyup .eth-amount': function (e, tmpl) {
    TemplateVar.set('sendAmount', e.currentTarget.value * 2)
  }
})
