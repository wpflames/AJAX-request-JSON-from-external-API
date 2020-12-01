var btn = document.getElementById('button');

btn.addEventListener('click',loadCharacters);

function loadCharacters(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://breakingbadapi.com/api/characters', true);

    xhr.onload = function(){
        if(this.status == 200){
            var characters = JSON.parse(this.responseText);

            var output = '';

            for(var i in characters){
                output += 
                        '<div class="card">' +
                        '<div class="imgBx" style="background-image: url('+characters[i].img+')">' +
                        '</div>' +
                        '<div class="caption">' +
                            '<h4>' +characters[i].name+ '</h4>' +
                        '</div>' +
                        '<ul class="list">' +
                            '<li>Nickname: ' +characters[i].nickname+ '</li>' +
                            '<li>Birthday: ' +characters[i].birthday+ '</li>' +
                        '</ul>' +
                        '</div>' ;
            }
            document.getElementById('characters').innerHTML = output;
        }
    }
    xhr.send();
}