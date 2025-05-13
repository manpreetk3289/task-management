
import {STATUS , PRIORITY} from '../store/data';
const tableHeadData = [
    { header: 'Title', key: 'title', sort: true },
    { header: 'Assigned To', key: 'assignedTo', sort: true },
    { header: 'Status', key: 'status', sort: true, list: Object.values(STATUS) },
    { header: 'Priority', key: 'priority', sort: true, list: Object.values(PRIORITY) },
    { header: 'Start Date', key: 'startDate' },
    { header: 'End Date', key: 'endDate' }
  ];
export  {tableHeadData}