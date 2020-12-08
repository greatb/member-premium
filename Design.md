# Desing Helper

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

GET  api/members/{id}/premium?occupationId={occupationId}
{
	"deathPremium": 0
}

GET  api/occupations
[{
	"id": 0,
	"name": ""
}]


## Controllers
- Member
- Occupation

## Database/storage
- As this is a demo project for UI integration DB is not in place

## Project
### Angular

#### Components
- Member list
- Member Add
- Member View

### API DotNet

## Notes
- Occupation/OccupationRating data should be stored in a db, but for this demo , its stored as enums