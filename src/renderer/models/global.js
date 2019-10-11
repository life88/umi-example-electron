export default {
  namespace: 'global',
  state: {

  },
  effects: {},
  reducers: {
    changeState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
