dashboard
=========
Control Panel Documentation

1. Schemas

Tools:

    1.1. Tool:

    Category - String
    User Groups – [String]
    Links: 
        Name - String
    	Description - String
    	URL – String 
    	User Groups – [String]

Notificaitons:

    1.2. Notifications:

    Title - String, required
    Link - String
    Description - String
    StartDate - Date
    EndDate - Date
    UserGroups - [String]

2. APIs

    2.1.	Get direct reports for a manager
        Method: GET
        Route: /api/teams/getInfoFromServer/:managerId
        Input Parameter: Manager’s Network ID 
        Response:
        Status: 200 OK
        Content type: application/json
        Body: List of direct reports 

        Sample Response:
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

Tools: 

    2.2.	Get all tools
        Method: GET
        Route: /api/tools
        Input Parameter: None
        Response:
        Status: 200 OK
        Content type: application/json
        Body: List of tools 

        Sample Response:
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


    2.3 Create Tool
        Method: POST
        Route: /api/tools
        Sample Request:
        {
                "category": "Test",
                "userGroups": ["ebs","manager"],
                "links": [
                    {
                        "name": "HR Insight",
                        "description": "a place to go when you have questions!",
                        "url": "http://insight.intuit.com",
                        "userGroups": ["ebs","manager"]
                    }
                ]   
        }
        Response:
        Status: 200 OK
        Content type: application/json
        Body: Newly added tool

    2.4 Add New Link
        Method: PUT
        Route: /api/addLink/:category
        Parameter: Category name
        Sample Request:
        {
                "links": 
                    {
                        "name": "Test test",
                        "description": "a place to go when you have questions!",
                        "url": "http://insight.intuit.com",
                        "userGroups": ["ebs","manager"]
                    }
        }
        Response:
        Status: 200 OK
        Content type: application/json
        Body: Newly updated tool

    2.5 Add New User group
        Method: PUT
        Route: /api/addUsergroup/:category
        Parameter: Category name
        Sample Request:
        {
          "userGroups":"test"
        }
        Response:
        Status: 200 OK
        Content type: application/json
        Body: Newly updated tool

    2.6 Get One Tool
        Method: GET
        Route: /api/tool/:category
        Parameter: Category name
        Response:
        Status: 200 OK
        Content type: application/json
        Body: Tool

        2.7 Delete one tool
        Method: GET
        Route: /api/tool/:category
        Parameter: Category name
        Response:
        Status: 200 OK





    


