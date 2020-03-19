import {deck, Player} from './main';
import {isEqual} from 'lodash';

describe('game-logic', () => {
    describe('deck', () => {
        it('should correclty return 52 cards when created', () => {
            const nDeck  = deck();
    
            expect(nDeck.length()).toEqual(52);
        });
        it('should correctly shuffle the deck of cards', () => {
            const nDeck = deck();
            nDeck.shuffle();

            const defaultCards = deck();

            expect(!isEqual(nDeck.cards, defaultCards.cards)).toBeTruthy()
        });
        it('should correctly deal a single card', () => {
            const nDeck = deck();
            const dealtCards = nDeck.dealCard();
            
            expect(dealtCards.length).toEqual(1);
            expect(nDeck.length()).toEqual(51);
        });
        it('should correctly deal more than a single card', () => {
            const rndAmount = Math.floor(Math.random() * 5);

            const nDeck = deck();
            const dealtCards = nDeck.dealCard(rndAmount);
            
            expect(dealtCards.length).toEqual(rndAmount);
            expect(nDeck.length()).toEqual(52 -rndAmount);
        })
    });

    describe('player', () => {
        it('should correctly apply handCard and tableCard to graveyard', () => {
            const p = new Player()
            const handCard = { suit: 'heart', value: '1'};
            const tableCard = { suit: 'spade', value: '4'};

            p.addToHand(tableCard)

            p.addToGraveyard(handCard, tableCard);
            expect(p.hand).toEqual([]);
            expect(p.graveyard).toEqual([ { suit: 'heart', value: '1' }, { suit: 'spade', value: '4' } ]);
        });
        it('should correctly discard a card from the player hand', () => {
            const p = new Player()

            const card = { suit: 'spade', value: '4'}
            p.addToHand(card);
            p.discardCard(card);

            expect(p.hand).toEqual([]);
        });
        it('should correctly refuse hand', () => {
            const p = new Player()
            const card = { suit: 'spade', value: '4'}
            p.addToHand(card);
            p.refuseHand();

            expect(p.hand).toEqual([]);
        })
    });
});