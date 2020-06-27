top-trailers 

Rails API: https://github.com/markdenardo/wb_api
Live Demo: https://markdenardo.github.io/tt-app/

this application is a video player and sharing platform in react-redux which allows a user to 

ROUTES and USER STORIES

HOME (/home)
-visit a home page which explains the premise of the project and how to use the application before proceeding, 
-choose to go to the CAROUSEL, or ALL pages
-and show the number 1 trailer

CAROUSEL (/topten)
-view movie trailer videos in a listed format, which is a sidescrolling carousel (can go L/R) w a click/drag

ALL (/movies)
-submit a trailer, adding the Name, Director, and url
-view a full list of submitted trailers from all users (more than 10) 

MODELS:

Movie: ID, Name, Director, Year, (stretch goal Rank)
Comments: text, movieid

FETCH CALLS
API/movies (GET/POST)
API/movies/id
API/movies/rank/id (GET)
API/home (GET)
API/movies/topten (GET)

REDUX ACTIONS:

    GET_MOVIES (GET)
    ADD_MOVIE (POST movie)

    