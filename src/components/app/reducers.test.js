import { CHOICE, game } from './reducers';

describe('game reducer', () => {
  it.skip('should add a choice', () => {
    const state = game(undefined, { type: CHOICE, payload: { id: 1, activePlayer: 'O' } });
    expect(state.squares[1]).toEqual('O');
  });
});