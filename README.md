top-trailers 

this application is a video player and sharing platform in react-redux which allows a user to 

ROUTES and USER STORIES

HOME (/home)
-visit a home page which explains the premise of the project and how to use the application before proceeding, 
-choose to go to the CAROUSEL, or ALL pages
-this page will share how many movies are in the database 
-and show the number 1 trailer

CAROUSEL (/topten)
-view movie trailer videos in a listed format, which is a sidescrolling carousel (can go L/R) w a click/drag

ALL (/movies)
-submit a trailer, adding the Name, Director, and url
<!-- -up/down vote trailers in a top 10 list (only 10), -->
-add commments to a trailer, 
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

Component Breakdown

HOME

<Index/>
    <App/>
    
<App/>
    <Instructions /> Presentational
            <Banner /> Presentational
        <TopTrailer /> Container (this could be a random video)
            <Player /> Class
            <Text /> Presentational
        <Links /> Functional to routes

TOPTEN(first submitted video)
    <Carousel />
        <Player />
            <Banner /> Presentational
        <Left/Right /> Functional

ALL
    <List /> all films w a link to a show page (modified HOME PAGE w the film and it's rank)
        <Comments /> Presentational
        <Upvote/Downvote/> Functional

REDUX ACTIONS:

    GET_MOVIES (gets all the movies)
    GET_TOPMOVIE (gets number 1)
    GET_TOPTEN (gets top ten)
    ADD_MOVIE (POST movie)
    ADD_COMMENT (POST comment)
    <!-- UPVOTE_MOVIE (increase rank of MOVIE) -->
    <!-- DOWNVOTE_MOVIE (decrease rank of MOVIE) -->

