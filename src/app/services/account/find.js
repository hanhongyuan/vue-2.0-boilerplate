import accountTransformer from './../../transformers/account';
import store from './../../store';

// When the request succeeds
const success = (account) => {
  account = accountTransformer.fetch(account);

  store.dispatch('getAccount', account);
};

// When the request fails
const failed = () => {
};

export default () => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   */
  const succeeds = true;

  if (succeeds) {
    success({
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@doe.com',
    });
  } else {
    failed();
  }
};
