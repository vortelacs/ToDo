import {Category} from '../model/Category'
import {Priority} from '../model/Priority'
import {Task} from '../model/Task'

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Study'},
    {id: 4, title: 'Vacation'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Food'},
    {id: 7, title: 'Finance'},
    {id: 8, title: 'Gadgets'},
    {id: 9, title: 'Health'},
    {id: 10, title: 'Auto'},
    {id: 11, title: 'Renovation'},
  ];


  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#e5e5e5'},
    {id: 2, title: 'Medium', color: '#6a937e'},
    {id: 3, title: 'High', color: '#F1828D'},
    {id: 4, title: 'Very High!!', color: '#F1128D'}
  ];


  // не забывать - индексация приоритетов и категорий начинается с нуля
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Refuel the car',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2021-04-10')
    },

    {
      id: 2,
      title: 'Submit the reports',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2021-04-11')
    },

    {
      id: 3,
      title: 'Clean the room',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },

    {
      id: 4,
      title: 'Go on a walk with family and friends',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2021-08-17')
    },
    {
      id: 5,
      title: 'Learn quantum physics',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Listen a webinar',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2021-06-11')
    },

    {
      id: 7,
      title: 'Find a flight to Turkey and a hotel',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Prepare thhe dinner',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: 'Workout',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2021-03-12')
    },
    {
      id: 10,
      title: 'Run 2 km',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      title: 'Organise a birthday',
      completed: false
    },

    {
      id: 12,
      title: 'Go on a seminar about JAVA',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      title: 'Buy products for a week',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2021-05-11')
    },

    {
      id: 14,
      title: 'Organize a meeting about current project',
      completed: true,
      category: TestData.categories[0]
    },

    {
      id: 15,
      title: 'Pass the Java exam',
      priority: TestData.priorities[2],
      completed: true
    },


    {
      id: 16,
      title: 'Puut money on deposit',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 17,
      title: 'Ask for a pay rise',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      title: 'Get tested for Covid',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2021-02-11')

    },

    {
      id: 19,
      title: 'Compare iPhone with Samsung',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2021-10-11')

    },

    {
      id: 20,
      title: 'Football with colleagues',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2021-03-17')

    }

  ];

}
