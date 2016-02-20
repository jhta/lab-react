import Dispatcher from '../dispatcher';

const ClientActions = {
  addClient(element) {
    Dispatcher.dispatch({
      actionType: 'ADD_CLIENT',
      data: element,
    })
    console.log("agregando cliente", element);
  },
  changeDetail(id) {
    Dispatcher.dispatch({
      actionType: 'CHANGE_DETAIL',
      data: {id: id},
    }); 
    console.log("cambiando el detalle", id);
  }
};

module.exports = ClientActions;