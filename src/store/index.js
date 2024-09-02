import { createStore } from "vuex";
import { toRaw } from "vue";

const store = createStore({
  strict: false,
  state() {
    return {
      userItems: [
        {
          id: 1,
          name: "Shoes 1",
        },
        {
          id: 2,
          name: "Shoes 2",
        },
        {
          id: 3,
          name: "Shoes 3",
        },
        {
          id: 4,
          name: "Shoes 4",
        },
        {
          id: 5,
          name: "T-shirt 1",
        },
        {
          id: 6,
          name: "T-shirt 2",
        },
        {
          id: 7,
          name: "T-shirt 3",
        },
        {
          id: 8,
          name: "T-shirt 4",
        },
      ],
      itemsForSelect: [
        {
          id: 11,
          name: "Jacket 1",
        },
        {
          id: 12,
          name: "Jacket 2",
        },
        {
          id: 13,
          name: "Jacket 3",
        },
        {
          id: 14,
          name: "Jacket 4",
        },
        {
          id: 15,
          name: "Hoodie 1",
        },
        {
          id: 16,
          name: "Hoodie 2",
        },
        {
          id: 17,
          name: "Hoodie 3",
        },
        {
          id: 18,
          name: "Hoodie 4",
        },
      ],
      selectedItem: {},
      selectedItemsByUser: [],
      isUserItemsReached: false,
    };
  },
  getters: {
    getUserItems(state) {
        return state.userItems;
    },
    getItemsForSelect(state) {
        return state.itemsForSelect;
    },
    getSelectedItem(state) {
        return state.selectedItem;
    },
    getSelectedItemsByUser(state) {
        return state.selectedItemsByUser;
    },
    isUserItemsReached(state) {
        return state.isUserItemsReached;
    },
  },
  mutations: {
    SET_SELECTED_ITEM(state, payload) {
      state.selectedItem = payload;
      payload = null;
    },
    SET_SIBU(state, payload) {
      const { selectedItemsByUser } = state;
      const updatedArr = [payload, ...toRaw(selectedItemsByUser)];
      state.selectedItemsByUser = updatedArr;

      if (state.selectedItemsByUser.length === 6) {
        state.isUserItemsReached = true;
      }

      payload = null;
    },
    UPDATE_SIBU(state, payload) {
      state.selectedItemsByUser = payload;

      if (state.isUserItemsReached) {
        state.isUserItemsReached = false;
      }

      payload = null;
    },
  },
  actions: {
    updateSelectedItem({ commit }, payload) {
      const { param } = payload;
      commit("SET_SELECTED_ITEM", param);
    },
    updateItemForSelect({ commit, state }, payload) {
      if (state.selectedItemsByUser.length === 6) {
        return;
      }

      const { param, ptype } = payload;
      commit("SET_SIBU", param);
    },
    deleteUserCardAct({ commit, state }, payload) {
      const { selectedItemsByUser } = state;
      const id = payload?.param?.id;

      for (let i = 0; i < selectedItemsByUser.length; i++) {
        if (selectedItemsByUser[i].id === id) {
          selectedItemsByUser.splice(i, 1);
          break;
        }
      }

      commit("UPDATE_SIBU", selectedItemsByUser);
    },
  },
});

export default store;
