import { Team } from '../src/app.js';
import { ErrorRepository } from '../src/map.js';


test('test array Team', () => {
    const team = new Team();
    team.addAll('Dmitriy', 'Oleg', 'Nikita');
    team.add('Ivan');
    const sortArray = [ 'Dmitriy', 'Oleg', 'Nikita', 'Ivan' ];
    expect(team.toArray()).toEqual(sortArray);
});

test('test array Team', () => {
    const errorRepository = new ErrorRepository();
    errorRepository.errors = {
        '404': 'Страница не найдена',
    }
    const errorTranslate = 'Страница не найдена';
    expect(errorRepository.translate('404')).toBe(errorTranslate);
});