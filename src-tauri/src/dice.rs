use rand::Rng;

#[derive(Debug)]
pub struct Dice {
    hand: [u8; 5],      // store player/dealer hand
    die_count: [u8; 7], // count how many each die was rolled
    rank: usize,
}

impl Dice {
    fn new() -> Dice {
        Dice {
            hand: [0; 5],
            die_count: [0; 7],
            rank: 0,
        }
    }

    pub fn create(hand: [u8; 5]) -> Dice {
        Dice {
            hand,
            die_count: [0; 7],
            rank: 0,
        }
    }

    fn deal_hand(&mut self, max_dice: u8) {
        for n in 0..max_dice as usize {
            self.hand[n] = roll_dice();
        }
    }

    pub fn rank_hand(&mut self) {
        // count numbers of die was rolled (except index 0)
        for face in self.hand {
            self.die_count[face as usize] += 1;
        }

        // There is five value in die_count (all five dice have the same face value)
        if self.die_count.contains(&5) {
            self.rank = 6;
        } else if self.die_count.contains(&4) {
            self.rank = 5;
        } else if self.die_count.contains(&3) && self.die_count.contains(&2) {
            self.rank = 4;
        } else if self.die_count.contains(&3) {
            self.rank = 3;
        } else if self.die_count.iter().filter(|&n| *n == 2).count() == 2 {
            self.rank = 2;
        } else if self.die_count.contains(&2) {
            self.rank = 1;
        } else {
            self.rank = 0;
        }
    }

    pub fn get_rank(&self) -> usize {
        self.rank
    }
}

pub struct Player {
    dice: Dice,

    // stores player's hand dealt stats, index 0 is 'Nothing special', 1 is 'One pair',... and 6 is 'Five of a kind'
    player_stats: [u8; 7],

    // Index 0 is the amount won game, 1 is lost game, 2 is drawn game of player
    player_game_results: [u8; 3],

    // Numbers of games the player has played
    games: u8,
}

fn roll_dice() -> u8 {
    let mut rng = rand::thread_rng();
    rng.gen_range(1..6)
}
