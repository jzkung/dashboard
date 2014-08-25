dashboard
=========
Control Panel Documentation

1. Schemas
----------

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
        Description - String
        StartDate - Date
        EndDate - Date
        UserGroups - [String]

2. APIs
-------

    2.1 Teams: 

        2.1.1	Get direct reports for a manager
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

    2.2 Tools: 

        2.2.1  Get all tools
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


        2.2.2  Create Tool
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

        2.2.3 Add New Link
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

        2.2.4 Add New User group
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

        2.2.5 Get One Tool
                Method: GET
                Route: /api/tool/:category
                Parameter: Category name
                Response:
                Status: 200 OK
                Content type: application/json
                Body: Tool

        2.2.6 Delete one tool
                Method: DELETE
                Route: /api/tool/:category
                Parameter: Category name
                Response:
                Status: 200 OK

    2.3  Notifications:

        2.3.1  Get all notifications
                Method: GET
                Route: /api/notifications
                Input Parameter: username
                Response: JSON object
                Status: 200 OK
                Content type: application/json
                Body: List of notifications 

                Sample Response:
                [
                    {
                        Id: "53f91ef73c4c3fa8b246ae99"
                        title: "Sumbit fitness reimbursement"
                        description: "adpfitness.intuit.com"
                        startDate: "2014-08-01T00:00:00.000Z"
                        endDate: "2014-10-01T00:00:00.000Z"
                    }
                ] 

        2.3.2  Create Notification
                Method: POST
                Route: /api/notifications
                Response: JSON object
                Status: 200 OK
                Content type: application/json
                Body: Newly added Notifications
                Sample Request:
                    {
                       "title":"Virtual Intuit leadership conference",
                       "description":"insight.intuit.com",
                       "startDate":"2014-08-01",
                       "endDate": "2014-9-01",
                       "userGroups":"admin"
                    }
                Response:
                    {
                        __v: 0
                        title: "Virtual Intuit leadership conference"
                        description: "insight.intuit.com"
                        endDate: "2014-09-01T07:00:00.000Z"
                        _id: "53fa58efd81c320000307109"
                        -userGroups: [
                                        "admin"
                                     ]
                        startDate: "2014-08-01T00:00:00.000Z"
                    }
                
        2.3.3  Delete notification
                Method: DELETE
                Route: /api/notifications
                Parameter: notificationId
                Status: 200 OK
                Sample Request:
                    {
                        {"notificationId":"53fa3806de72eb3d7d5379f2"
}
                    }
                Sample Response: The notification has been deleted
                
        2.3.4  Update Notification
                Method: PUT
                Route: /api/notifications
                Parameter: Notification object
                Status: 200 OK
                Content type: application/json
                Body: Newly updated notification
                Sample Request:
                    {
                        "title":"EBS Gallery Walk",
                        "description":"insight.intuit.com",
                        "startDate":"2014-08-01",
                        "endDate": "2014-12-01",
                        "userGroups":"admin"
                    }
                Sample Response: The notification has been updated

               








    


