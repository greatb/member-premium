# Desing Helper

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
	"occupation": 0,
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
- Angular
- DotNet