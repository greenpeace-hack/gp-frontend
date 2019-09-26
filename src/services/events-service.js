

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


export const listEvents = () => new Promise((resolve, reject) => (
  resolve(events)
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

