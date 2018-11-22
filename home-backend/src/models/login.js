
export default {

  namespace: 'login',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
