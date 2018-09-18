import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Superman' },
      { id: 12, name: 'Batman' },
      { id: 13, name: 'Iron Man' },
      { id: 14, name: 'Hulk' },
      { id: 15, name: 'Hawkeye' },
      { id: 16, name: 'Spiderman' },
      { id: 17, name: 'Thor' },
      { id: 18, name: 'Dr. Strange' },
      { id: 19, name: 'Black Panther' },
      { id: 20, name: 'Captain America' }
    ];
    return {heroes};
  }
}
