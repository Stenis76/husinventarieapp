const url = "/api/";
const headers = { Accept: "application/json" };

export const room = {
  namespaced: true,
  state: {
    rooms: [],
    room: [],
  },

  getters: {
    getRooms: (state) => state.rooms,
    getRoom: (state) => state.room,
    getRoomFromRooms: (state) => (id) =>
      state.rooms.find((room) => room._id === id),
  },

  mutations: {
    setRooms(state, payload) {
      state.rooms = payload;
    },
    setRoom(state, payload) {
      state.room = payload;
    },
    createRoom(state, payload) {
      state.rooms.push(payload);
    },
  },

  actions: {
    async setRooms(state) {
      const allRooms = await fetch(url + "rooms", { headers });
      const j = await allRooms.json();
      console.log("rooms", j);
      state.commit("setRooms", j);
    },
    async createRoom(state, newRoomObject) {
      const response = await fetch(url + "newroom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newRoomObject),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          state.commit("createRoom", data);
          state.commit("setRoom", data);
        });
      return response;
    },
  },
};
