import { HumanPlayer } from "../players/human.js";
import { BotPlayer } from "../players/bot.js";
import { Game } from "./game.js";
import { config } from "../../../config.js";


/**
 * Nothing fancy here. Just a Game object builder.
 */
class GameManager {
  constructor(players) {
    this.players = players || [
      new HumanPlayer(0, config.WALL_HACK),
      new BotPlayer(1, config.WALL_HACK),
      new BotPlayer(2, config.WALL_HACK),
      new BotPlayer(3, config.WALL_HACK),
    ];
  }

  /**
   * Create a game, with document blur/focus event handling
   * bound to game pause/resume functionality.
   */
  newGame() {
    let game = new Game(this.players);

    if (typeof window !== "undefined") {
      window.currentGame = {
        game: game,
        players: this.players
      };
    }

    let gameBoard = document.querySelector('.board');
    gameBoard.focus();

    return game;
  }
}

export { GameManager };
