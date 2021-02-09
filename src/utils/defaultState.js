import getData from './data';

async function defaultState() {
  const people = await getData('userDatabase', '1', 'people');
  const defaultState = {
    people: people,
    isNotificationOpen: false,
    notificationContext: '',
  };
  return defaultState;
}

export default defaultState;
