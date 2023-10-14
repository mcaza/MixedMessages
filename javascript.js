const adjectiveArray = ['creative', 'friendly', 'funny', 'generous', 'hardworking', 'kind', 'fabulous', 'alive', 'unique', 'spectacular', 'brave', 'capable', 'considerate', 'courageous', 'fearless', 'passionate', 'thoughtful', 'warm-hearted', 'kind-hearted', 'flexible', 'honorable', 'resourceful', 'powerful', 'adaptable', 'bright', 'compassionate', 'determined', 'fantastic', 'a good person', 'incredible', 'likable', 'lovely', 'magnificent', 'wonderful', 'persistent', 'strong', 'reliable', 'responsible', 'sensible', 'sympathetic', 'tough', 'trustworthy', 'understanding', 'versatile'];
const sentenceArray = ['I am in the right place at the right time, doing the right thing', 'I am loved just for being who I am', 'I\'m good enough', 'I am deliberate and afraid of nothing', 'my life is about to be incredible', 'my perspective is unique', 'nothing can dim the light that shines from deep inside me', 'I am worthy of self care', 'I am worthy of love', 'I am worthy of friendship', 'I am worthy of kindness', 'I am rooting for myself', 'I am embracing the glorious mess of who I am', 'nothing is impossible', 'I am allowed to fail', 'I am always learning', 'I am always improving', 'I am allowed to ask for what I want and what I need', 'I am allowed to feel good', 'I am allowed to feel hurt', 'I am growing and I am going at my own pace', 'I am doing what works for me', 'I am open to healing', 'I am worthy of investing in myself', 'I belong here, and I deserve to take up space', 'I can be soft in my heart and firm in my boundaries', 'I can hold two opposing feelings at once, it means I am processing', 'I deserve self-respect and a clean space', 'I do not pretend to be anyone or anything other than who I am', 'I have come farther than I would have ever thought possible', 'I strive for joy, not for perfection', 'my life is not a race or competition', 'my weirdness is wonderful', 'that\'s all that matters to me'];

function getSentence(arrayOne, arrayTwo) {
    const sentence = Math.floor(Math.random() * arrayTwo.length);
    const adjective = Math.floor(Math.random() * arrayOne.length);
    return 'I am ' + adjective + ' and ' + sentence + '.';
}

function affirmationButton() {
    const affirmation = getSentence(adjectiveArray, sentenceArray);
    //document.getElementById('sentence') = (affirmation);
    document.getElementById("sentence").textContent=affirmation;
}
