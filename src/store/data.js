
export const PRIORITY = {
  LOW: { val: 0, key: 'LOW' },
  MEDIUM: { val: 1, key: 'MEDIUM' },
  HIGH: { val: 2, key: 'HIGH' }
}

export const STATUS = {
  OPEN: {key:'Open', val:0},
  IN_PROGRESS: {key: 'In Progress', val:1},
  REVIEW: {key:'Under Review', val:2},
  PENDING: {key:'Pending', val:3},
  DONE: {key:'Done', val:4}
}


const tasks = [
  {
    id: 1,
    title: 'Task 11',
    assignedTo: 'tsk1@example.com',
    status: STATUS.OPEN,
    priority: PRIORITY.LOW,
    startDate: '09May2025',
    endDate: '',
  },
  {
    id: 2,
    title: 'Task 2',
    assignedTo: 'task2@example.com',
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.HIGH,
    startDate: '09Jan2025',
    endDate: '',
  },
  {
    id: 3,
    title: 'Task 13',
    assignedTo: 'man@anv.com',
    status: STATUS.REVIEW,
    priority: PRIORITY.MEDIUM,
    startDate: '09Sep2024',
    endDate: '',
  },
  {
    id: 4,
    title: 'Task 4',
    assignedTo: 'man@qny.com',
    status: STATUS.DONE,
    priority: PRIORITY.LOW,
    startDate: '01Jan2024',
    endDate: '',
  },
];

export default tasks;