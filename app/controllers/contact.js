/*@Author:VinayKhedekar
    Controller for contact page
  */
import Controller from '@ember/controller';
import {
  match,
  not,
  gte,
  and
} from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  message:'',

  /*Check two conditions-
    1. Email Id is not blank and is isValid
    2. Message is not blank (size <=5 characters)
  */
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),

  actions: {

    sendMessage() {
      alert(`Email Id: ${this.get('emailAddress')}`+"\n"+`Message: ${this.get('message')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message','');
    }
  }
});
