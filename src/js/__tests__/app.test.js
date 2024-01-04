import sortCharacters from '../app';

test.each([['маг', 0], ['лучник', 1], ['мечник', 2]])('%s should sorted on position %i', (character, index) => {
    const characters = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]
    const result = sortCharacters(characters);
    expect(result[index].name).toEqual(character);
  });