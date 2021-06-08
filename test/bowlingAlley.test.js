const assert = require('assert')
const alley = require('../util/bowlingAlley.js')

describe('Bowling Alley', () => {
  describe('register bowler', () => {
    it('should save the user in a db', () => {
      let newBowler = {
        firstName: 'Tim',
        lastName: 'Little',
        shoeSize: 8,
        gender: 'M'
      }
      let createdBowler = alley.register(newBowler)
      let foundBowler = db.findBowler(createdBowler)
      assert.deepStrictEqual(createdBowler, foundBowler)

      throw new Error('not implemented')
    })
  })
  describe('rentShoes', () => {
    it('should accept the shoe size for womens or mens shoes and make sure the shoe is available', () => {
      let shoeInventory = [{
          size: 10,
          gender: 'Mens'
        }, {
          size: 8,
          gender: 'Mens'
        }, 
        {
          size: 8,
          gender: 'Womens'
        }
      ]
      assert(alley.rentShoes(shoeInventory, bowler1), true)
      assert(alley.rentShoes(shoeInventory, bowler2, 10), true)
      assert(alley.rentShoes(shoeInventory, bowler3, 9), false)

      throw new Error('not implemented')
    })
    it('should register a new bowler and rent shoes if this is a new user', () => {
    
    })
    it('you have one pair of shoes in each size for mens and womens only', () => {
    
    })
  })
  
  describe('assign lane to bowlers', () => {
    it('should place a bowler in a bowling lane', () => {
      throw new Error('not implemented')
    })
    it('No bowling lane can have more than 4 bowlers', () => {
      throw new Error('not implemented')
    })
    it('each bowler in a lane must be wearing shoes', () => {
      throw new Error('not implemented')
    })
    it('A single bowling alley has 10 lanes of bowling', () => {
      throw new Error('not implemented')
    })
    it('all bowlers have to be assigned to a lane at the same time', () => {
      throw new Error('not implemented')
    })
  })

  describe('people can wait in line to bowl', () => {
    it('the line can be infinitely long', () => {
      throw new Error('not implemented')
    })

    it('A new person joins the line randomly every 1-3 seconds with a random shoe requirement', () => {
      throw new Error('not implemented')
    })

    it('each bowling game lasts between 5-10 seconds', () => {
      throw new Error('not implemented')
    })
  })

  describe('the bowling alley hours of operation', () => {
    it('bowling alley stays open for 30 seconds M-F', () => {
      throw new Error('not implemented')
    })

    it('bowling alley stays open for 60 seconds Saturday and Sunday', () => {
      throw new Error('not implemented')
    })
  })
})