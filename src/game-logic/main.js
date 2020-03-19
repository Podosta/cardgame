import { isEqual } from 'lodash';

const DECK_VALUES = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
const DECK_SUITS = ['heart', 'spade', 'club', 'diamond'];

export const deck = () => {
    const cards = [];

    for (let i = 0; i < DECK_VALUES.length; i++) {
        for (let k = 0; k < DECK_SUITS.length; k++) {
            cards.push({ value: DECK_VALUES[i], suit: DECK_SUITS[k] })
        }
    }

    return {
        cards,
        length: () => {
            return cards.length;
        },
        shuffle: (shuffleCount = 2) => {
            while (shuffleCount > 0) {
                for (let i = 0; i < cards.length; i++) {
                    cards[Math.floor(Math.random() * cards.length)] = cards[i];
                }

                shuffleCount--;
            }
        },
        dealCard: (dealCount = 1) => {
            const dealtCards = [];
            while (dealCount !== 0) {
                dealtCards.push(cards.shift());
                dealCount--;
            }

            return dealtCards;
        }
    }
}

export class Player {
    constructor(id) {
        this.hand = [];
        this.graveyard = [];
        this.id = id;
        this.inGameScore = 0;
    }

    updateScore(cb) {
        this.inGameScore = cb(this.inGameScore);
    }

    addToHand(card) {
        this.hand.push(card);
    }

    discardCard(handCard) {
        this.hand = this.hand.filter(current => current !== handCard)
    }

    refuseHand() {
        const oldHand = [...this.hand];

        this.hand = [];

        return oldHand
    }

    addToGraveyard(tableCards, handCard = undefined) {
        this.hand = this.hand.filter(current => current.suit !== handCard.suit && current.value !== handCard.value)

        if (!Array.isArray(tableCards)) {
            tableCards = [tableCards]
        }

        for (let i = 0; i < tableCards.length; i++) {
            this.graveyard.push(tableCards[i]);
        }

        if (handCard) {
            this.graveyard.push(handCard);
        }
    }
}


export default class {
    constructor(hostPlayer) {
        this.players = [hostPlayer];
        this.tableCards = [];
        this.deck = deck();
        this.host = hostPlayer;
        this.currentPlayer = undefined;
    }

    addPlayer() {
        this.players.push(player);
    }

    startGame() {
        this.currentPlayer = Math.floor(Math.random() * players.length);
        this.deck.shuffle();
    }

    dealCards() {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].addToHand(this.deck.dealCard());
        }
    }

    redealCase() {
        const newTableCards = this.players[1].refuseHand();

        this.tableCards = [...this.tableCards, ...newTableCards];
        // @@ logic for 2v2... 
    }

    playTurn(player, selectedTableCards, handCard) {
        if (selectedTableCards.length === 0) {
            // player has no cards to play, so they put a card down.
            player.discardCard(handCard);

            this.tableCards.push(handCard);
            return;
        }

        // if we have a selection, always add to da graveyard.
        player.addToGraveyard(selectedTableCards, handCard);
        for (let i = 0; i < selectedTableCards.length; i++) {
            this.tableCards = this.tableCards.filter(x => !isEqual(x, selectedTableCards[i]))
        }

        if (this.tableCards === 0 && selectedTableCards.length > 0) {
            // 1 card on the table, we matched it and now we get 10 points!
            player.updateScore((currentScore) => currentScore + 10)
        } else if (handCard.value === 'j') {
            if (this.tableCards.length !== 0) {
                player.addToGraveyard(this.tableCards)
            }

            player.updateScore((currentScore) => currentScore - 10);
            return;
        }

        [...selectedTableCards, handCard].forEach(currentCard => {
            ({
                true: () => {},
                [currentCard.value === 'a']: () => {
                    player.updateScore((currentScore) => currentScore + 1);
                },
                [currentCard.value === '2' && currentCard.suit === 'club']: () => {
                    player.updateScore((currentScore) => currentScore + 10)
                },
                [currentCard.value === '10' && currentCard.suit === 'diamond']: () => {
                    player.updateScore((currentScore) => currentScore + 10)
                }
            }).true();
        });
    }

    nextTurn() {
        this.currentPlayer = (currentPlayer >= players.length) ? 0 : this.currentPlayer + 1;
    }
}