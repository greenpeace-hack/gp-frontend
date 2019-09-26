import { get } from '../services/api-service'

export const supporters = [
  {
    id: '1232',
    firstName: 'Bob',
    lastName: 'Murphy',
    email: 'bm@example.com'
  },
  {
    id: '154',
    firstName: 'Bob',
    lastName: 'Murphy',
    email: 'bm@example.com'
  },
  {
    id: '764',
    firstName: 'Bob',
    lastName: 'Murphy',
    email: 'bm@example.com'
  },
  {
    id: '9776',
    firstName: 'Bob',
    lastName: 'Murphy',
    email: 'bm@example.com'
  },
  {
    id: '134566',
    firstName: 'Bob',
    lastName: 'Murphy',
    email: 'bm@example.com'
  },
  {
    id: '3457',
    firstName: 'Bob',
    lastName: 'Murphy',
    email: 'bm@example.com'
  },
]

export const events = [
  {
    id: "1",
    description: "Some desc",
    title: "My Title 1",
    categories: [],
    location: "1,1",
    startDate: "Some desc",
    endDate: "1",
    summary: "Some desc",
    url: ""
  },
  {
    id: "2",
    description: "Some desc",
    title: "My Title 2",
    categories: [],
    location: "1,1",
    startDate: "Some desc",
    endDate: "1",
    summary: "Some desc",
    url: ""
  },
  {
    id: "3",
    description: "Some desc",
    title: "My Title 3",
    categories: [],
    location: "1,1",
    startDate: "Some desc",
    endDate: "1",
    summary: "Some desc",
    url: ""
  },
  {
    id: "1",
    description: "Some desc",
    title: "My Title 4",
    categories: [],
    location: "1,1",
    startDate: "Some desc",
    endDate: "1",
    summary: "Some desc",
    url: ""
  }
]

// export const listSupporters = () new Promise((resolve, ))


export const listEvents = () => new Promise((resolve, reject) => (
  resolve(events)

  // get('/events').then((events) => {
  // resolve(events)
  // }).catch(() => {
  // reject([])
  // })
));

export const getEvent = (id) => new Promise((resolve, reject) => (
  events.forEach(event => {
    if (event.id === id) {
      resolve(event);
    } else {
      reject(null)
    }
  })
));

