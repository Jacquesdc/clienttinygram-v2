# <a href="https://clienttinygram-sws3gs.stackblitz.io/">https://clienttinygram-sws3gs.stackblitz.io/</a>
# <a href="https://clienttinygram.stackblitz.io/">https://clienttinygram.stackblitz.io/</a>


On va gérer le côté client de notre application Tinygram, utilisation d'angular, et de ngrx. 

'''
npm install <br>
npm start
'''


## Components de notre application : 

#### Un composant représente une fraction de l'UI (user interface : interface utilisateur). 

Tinygram possède divers components (home / about / signin / contact / not-found entres autres) qui chacun auront une section correspondante côté front-end : 

Home représente la timeline, qui affiche les posts, en prenant en compte leur id, et les affiche par ordre décroissant (this.posts = inversedPosts.reverse(); dans le home.component.ts en passant par la méthode reverse()). 


About représente le profile, il n'est pas finalisé mais le but de cette section est de permettre à l'utilisateur de consulter son profil et 
d'y éditer ses informations personnelles (nom, prénom, mail, téléphone ...) ainsi que d'y consulter la liste de ses amis (et d'accéder à leur profil). 

not-found quant à lui correspond au cas où la route, l'url ne correspond pas. 

Contact correspond à la partie "followers" où il serait possible d'"unfollow" un de ses amis, et on pourrait concevoir une partie avec messagerie. 

Enfin la partie sign-in permet à l'utilisateur de s'authentifier via google sign in 



## Services de notre application : 

#### Les services permettent d'accéder à différentes ressources. 

Un service par ressource (un pour le post, et un pour les users) 

Pour exemple le User : l'information ne vient pas du serveur mais de google (c'est google qui dit si le token est valide et si l'user est bien connecté). 

Dans le cas de local.Storage, c'est les navigateurs qui stockent les données (session de navigateur : données stockées précèdemment). 
Et dans le cas de l'api : on appelle le serveur  <a target="_blank" href="https://model-zoo-290312.ew.r.appspot.com/"> https://model-zoo-290312.ew.r.appspot.com/</a> à l'adresse de l'api. 

Le but du service c'est d'avoir des données accessibles partout dans l'application 




