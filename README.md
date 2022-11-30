# Development

### Link to Deployed Website
https://github.com/ambitiouslion999/UIUX-Development

### Goal and Value of the Application
The goal and value of the application is to provide a website where
users can sort and filter through various anime titles and 
add them to a watch list where they can see how many total 
episodes they would have to watch to get through their watch list.

### Usability Principles Considered
Some of the many usability principles that I used are:

#Clarity
-I use words that the average person can
understand such as "watch list, rating, and type"

#User Control and Freedom
-I added a reset button where the user can get rid of
any changes that they made and go back to how they first saw
the website.

#Consistency and Predictability
-I made sure that the terminology that I use is consistent such as
"add to watch list" and "remove from watchlist"


### Organization of Components
I have 4 total components: Header, AnimeList, AnimeCard, and WatchList.
App calls Header and AnimeList.
AnimeList calls AnimeCard and WatchList.

### How Data is Passed Down Through Components
AnimeList calls the API and gets all the information about
various anime. The information gets passed down to AnimeCard
and gets mapped onto a card. Those cards are returned to AnimeList
and gets mapped on to a Grid List to be displayed. AnimeList also
passes to WatchList the various anime that the user decides to add to their watchlist. WatchList then maps each of those anime titles to their episode
and returns it to the AnimeList for it to be displayed and for it to calculate the total number of episodes to be watched.

### How the User Triggers State Changes
I have around 10-11 different states. The user triggers them by
clicking on various filters such as the type or rating filters.
The user alsos triggers stage changes by clicking on anime to add
to and remove from their watch list. Some states are used to
keep track of other states.

