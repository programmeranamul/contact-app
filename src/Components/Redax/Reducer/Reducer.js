import { constanse } from "../Constanse/Constanse";

const InitialState = [
  {
    id: 0,
    name: "Anamul Hoque",
    number: "01309423215",
    email: "programmer.anamul@gmail.com",
  },
];
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case constanse.ADD_CONTACT:
      return [...state, action.payload];

    case constanse.UPDATE_CONTACT:
      const updateState = state.map((contact) =>
        contact.id == action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case constanse.DELET_CONTACT:
      const filterContact = state.filter(
        (contact) => contact.id != action.payload
      );
      state = filterContact;
      return state;
    default:
      return state;
  }
};
