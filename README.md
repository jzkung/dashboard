dashboard
=========
Control Panel Documentation

1. Schemas

1.1. Tool:

Category - String
User Groups – [String]
Items: 
Name - String
	Description - String
	URL – String 
	User Groups – [String]


2. APIs

2.1.	Get direct reports for a manager
Method: GET
Route: /api/teams/getInfoFromServer/:managerId
Input Parameter: Manager’s Network ID 
Response:
Status: 200 OK
Content type: application/json
Body: List of direct reports 

Sample:
[
    {
        "name": "NewHire Abc",
        "title": "Sr SWE in Quality",
        "birthday": null,
        "hireDate": "2014-02-25T08:00:00.000Z",
        "link": "http://www.workday.com",
        "image": "modules/team/img/user-icon.png",
        "isBirthdayToday": false,
        "isAnniversaryToday": false,
        "numAnniversary": 0
    }
]

2.2.	Get all tools
Method: GET
Route: /api/tools
Input Parameter: None
Response:
Status: 200 OK
Content type: application/json
Body: List of tools 

Sample:
[{
        "category": "Daily",
        "links": [
            {
                "name": "PrimeTime",
                "description": "primetime",
                "url": "http://www.primetime.com",
                "userGroups": [
                    "emp"
                ]
            }
        ]
    }
]

    


