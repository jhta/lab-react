import Dispatcher from '../dispatcher';

const ClientActions = {
  addClient(client) {
    debugger
    Dispatcher.dispatch({
      actionType: 'ADD_CLIENT',
      data: client,
    })
    console.log("agregando cliente", client);
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