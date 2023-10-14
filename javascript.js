const adjectiveArray = ['creative', 'friendly', 'funny', 'generous', 'hardworking', 'kind', 'fabulous', 'alive', 'unique', 'spectacular', 'brave', 'capable', 'considerate', 'courageous', 'fearless', 'passionate', 'thoughtful', 'warm-hearted', 'kind-hearted', 'flexible', 'honorable', 'resourceful', 'powerful', 'adaptable', 'bright', 'compassionate', 'determined', 'fantastic', 'a good person', 'incredible', 'likable', 'lovely', 'magnificent', 'wonderful', 'persistent', 'strong', 'reliable', 'responsible', 'sensible', 'sympathetic', 'tough', 'trustworthy', 'understanding', 'versatile'];
const sentenceArray = ['I\'m in the right place at the right time, doing the right thing', 'I\'m loved just for being who I am', 'I\'m good enough', 'I\'m deliberate and afraid of nothing', 'my life is about to be amazing', 'I will keep fighting', 'my perspective is unique', 'nothing can dim the light that shines from deep inside me', 'I\'m worthy of self care', 'I\'m worthy of love', 'I\'m worthy of friendship', 'I\'m worthy of kindness', 'I am rooting for myself', 'I am embracing the glorious mess of who I am', 'nothing is impossible', 'I am allowed to fail', 'I am always learning', 'I am always improving', 'I am allowed to ask for what I want and what I need', 'I\'m allowed to feel good', 'I\'m allowed to feel hurt', 'I\'m growing at my own pace', 'I\'m doing what works for me', 'I\'m open to healing', 'I\'m worthy of investing in myself', 'I belong here', 'I deserve to take up space', 'I can be soft in my heart and firm in my boundaries', 'I can hold two opposing feelings at once. It means I am processing', 'I deserve self-respect and a clean space', 'I do not pretend to be anyone or anything other than who I am', 'I have come farther than I would have ever thought possible', 'I strive for joy, not for perfection', 'my life is not a race or competition', 'my weirdness is wonderful', 'that\'s all that matters to me', 'I am special'];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getSentence(arrayOne, arrayTwo) {
    const sentence = sentenceArray[Math.floor(Math.random() * arrayTwo.length)];
    const adjective = adjectiveArray[Math.floor(Math.random() * arrayOne.length)];
    return '\"I am ' + adjective + ' and ' + sentence + '.\"';
}

function affirmationButton() {
    const affirmation = getSentence(adjectiveArray, sentenceArray);
    //document.getElementById('sentence') = (affirmation);
    document.getElementById("sentence").textContent=affirmation;
    
}

function setDate() {
    const todaysDate = new Date();
    const month = todaysDate.getUTCMonth();
    const day = todaysDate.getUTCDate();
    const year = todaysDate.getYear()+1900;
    let dayEnd = '';
    var dateText = monthNames[month] + ' ' + day + ', ' + year;
    document.getElementById("date").textContent = dateText;
}

setDate();