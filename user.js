var user = {
  name: "CAmeron",
  location: 'Utah',
  occupations: ['father', 'operations analyst', 'programmer'],
  hobbies: [
    {
      name: 'disc golf',
      type: 'sport'
    },
    {
      name: 'ballroom dance',
      type: 'art'
    },
    {
      name: 'singing',
      type: 'art'
    }
  ],
  family: [
    {
      name: 'Kennedy',
      relation: 'spouse',
      gender: 'female'
    },
    {
      name: 'Gil',
      relation: 'child',
      gender: 'male'
    },{
      name: 'Craig',
      relation: 'brother',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: 'Cafe Rio',
      type: 'Mexican',
      rating: 4
    },
    {
      name: 'Cafe Zupas',
      type: 'American',
      rating: 5
    },
    {
      name: 'In-n-Out',
      type: 'American',
      rating: 3
    }
  ]
}

module.exports = user
