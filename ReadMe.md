# Read me

This project is for Front End Developer at TAL

# Tech Stack
- Angular
- DotNet
- Bootstrap

## API Interfaces
    POST api/members
    {
        "name": "",
        "age": 0,
        "dateOfBirth": Date,
        "occupation": 0,
        "deathSumInsured": 0
    }


    GET  api/members
    [{
        "name": "",
        "age": 0,
        "dateOfBirth": Date
    }]

    GET  api/members/{id}
    {
        "name": "",
        "age": 0,
        "dateOfBirth": Date,
        "occupationId": 0,
        "deathSumInsured": 0,
        "deathPremium": 0
    }

    GET  api/calculations/premium?occupationId={occupationId}&coverAmount={coverAmount}&age={age}
    {
        "deathPremium": 0
    }

    GET  api/occupations
    [{
        "id": 0,
        "name": ""
    }]


## API Controllers
- Member
- Occupation
- Calculation

### Angular Components
- Member list
- Member Add


## Notes / Assumption
- Occupation/OccupationRating data should be stored in a db, but for this demo , its stored as enums
- no unit test for AP
- As this is a demo project for UI integration DB is not in place
- For date picker and money input control a suitable npm package could be used to format