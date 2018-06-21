import store from 'store';

if (process.env.NODE_ENV === 'development') {
  window.gstore = store;
}
