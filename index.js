let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialsArray = ["!", "%", "$", "^", "&", "*", "(", ")", "@", "<", ">", ".", ",", "?", "{", "}", "[", "]", "#", "=", "+", "-", "_", "'", '"', ":", ";"];

let wordsArray = [ 'ability',  'able',      'about',          'above',
  'accept',   'according', 'account',        'across',
  'act',      'action',    'activity',       'actually',
  'add',      'address',   'administration', 'admit',
  'adult',    'affect',    'after',          'again',
  'against',  'age',       'agency',         'agent',
  'ago',      'agree',     'agreement',      'ahead',
  'air',      'all',       'allow',          'almost',
  'alone',    'along',     'already',        'also',
  'although', 'always',    'American',       'among',
  'amount',   'analysis',  'and',            'animal',
  'another',  'answer',    'any',            'anyone',
  'anything', 'appear',    'apply',          'approach',
  'area',     'argue',     'arm',            'around',
  'arrive',   'art',       'article',        'artist',
  'as',       'ask',       'assume',         'at',
  'attack',   'attention', 'attorney',       'audience',
  'author',   'authority', 'available',      'avoid',
  'away',     'baby',      'back',           'bad',
  'bag',      'ball',      'bank',           'bar',
  'base',     'be',        'beat',           'beautiful',
  'because',  'become',    'bed',            'before',
  'begin',    'behavior',  'behind',         'believe',
  'benefit',  'best',      'better',         'between',
  'beyond',   'big',       'bill',           'billion',
  'bit',        'black',     'blood',      'blue',       'board',
  'body',       'book',      'born',       'both',       'box',
  'boy',        'break',     'bring',      'brother',    'budget',
  'build',      'building',  'business',   'but',        'buy',
  'by',         'call',      'camera',     'campaign',   'can',
  'cancer',     'candidate', 'capital',    'car',        'card',
  'care',       'career',    'carry',      'case',       'catch',
  'cause',      'cell',      'center',     'central',    'century',
  'certain',    'certainly', 'chair',      'challenge',  'chance',
  'change',     'character', 'charge',     'check',      'child',
  'choice',     'choose',    'church',     'citizen',    'city',
  'civil',      'claim',     'class',      'clear',      'clearly',
  'close',      'coach',     'cold',       'collection', 'college',
  'color',      'come',      'commercial', 'common',     'community',
  'company',    'compare',   'computer',   'concern',    'condition',
  'conference', 'Congress',  'consider',   'consumer',   'contain',
  'continue',   'control',   'cost',       'could',      'country',
  'couple',     'course',    'court',      'cover',      'create',
  'crime',      'cultural',  'culture',    'cup',        'current',
  'customer',   'cut',       'dark',       'data',       'daughter',
  'day',         'dead',          'deal',       'death',
  'debate',      'decade',        'decide',     'decision',
  'deep',        'defense',       'degree',     'Democrat',
  'democratic',  'describe',      'design',     'despite',
  'detail',      'determine',     'develop',    'development',
  'die',         'difference',    'different',  'difficult',
  'dinner',      'direction',     'director',   'discover',
  'discuss',     'discussion',    'disease',    'do',
  'doctor',      'dog',           'door',       'down',
  'draw',        'dream',         'drive',      'drop',
  'drug',        'during',        'each',       'early',
  'east',        'easy',          'eat',        'economic',
  'economy',     'edge',          'education',  'effect',
  'effort',      'eight',         'either',     'election',
  'else',        'employee',      'end',        'energy',
  'enjoy',       'enough',        'enter',      'entire',
  'environment', 'environmental', 'especially', 'establish',
  'even',        'evening',       'event',      'ever',
  'every',       'everybody',     'everyone',   'everything',
  'evidence',    'exactly',       'example',    'executive',
  'exist',       'expect',        'experience', 'expert',
  'explain',     'eye',           'face',       'fact',
  'factor',      'fail',          'fall',       'family',
  'far',         'fast',          'father',     'fear',
  'federal',     'feel',          'feeling',    'few',
  'field',      'fight',   'figure',     'fill',     'film',
  'final',      'finally', 'financial',  'find',     'fine',
  'finger',     'finish',  'fire',       'firm',     'first',
  'fish',       'five',    'floor',      'fly',      'focus',
  'follow',     'food',    'foot',       'for',      'force',
  'foreign',    'forget',  'form',       'former',   'forward',
  'four',       'free',    'friend',     'from',     'front',
  'full',       'fund',    'future',     'game',     'garden',
  'gas',        'general', 'generation', 'get',      'girl',
  'give',       'glass',   'go',         'goal',     'good',
  'government', 'great',   'green',      'ground',   'group',
  'grow',       'growth',  'guess',      'gun',      'guy',
  'hair',       'half',    'hand',       'hang',     'happen',
  'happy',      'hard',    'have',       'he',       'head',
  'health',     'hear',    'heart',      'heat',     'heavy',
  'help',       'her',     'here',       'herself',  'high',
  'him',        'himself', 'his',        'history',  'hit',
  'hold',       'home',    'hope',       'hospital', 'hot',
  'hotel',      'hour',    'house',      'how',      'however',
  'huge',       'human',   'hundred',    'husband',  'I',
  'idea',        'identify',    'if',            'image',
  'imagine',     'impact',      'important',     'improve',
  'in',          'include',     'including',     'increase',
  'indeed',      'indicate',    'individual',    'industry',
  'information', 'inside',      'instead',       'institution',
  'interest',    'interesting', 'international', 'interview',
  'into',        'investment',  'involve',       'issue',
  'it',          'item',        'its',           'itself',
  'job',         'join',        'just',          'keep',
  'key',         'kid',         'kill',          'kind',
  'kitchen',     'know',        'knowledge',     'land',
  'language',    'large',       'last',          'late',
  'later',       'laugh',       'law',           'lawyer',
  'lay',         'lead',        'leader',        'learn',
  'least',       'leave',       'left',          'leg',
  'legal',       'less',        'let',           'letter',
  'level',       'lie',         'life',          'light',
  'like',        'likely',      'line',          'list',
  'listen',      'little',      'live',          'local',
  'long',        'look',        'lose',          'loss',
  'lot',         'love',        'low',           'machine',
  'magazine',    'main',        'maintain',      'major',
  'majority',    'make',        'man',           'manage',
  'management',  'manager',     'many',          'market',
  'marriage',    'material',    'matter',        'may',
  'maybe',    'me',      'mean',         'measure',     'media',
  'medical',  'meet',    'meeting',      'member',      'memory',
  'mention',  'message', 'method',       'middle',      'might',
  'military', 'million', 'mind',         'minute',      'miss',
  'mission',  'model',   'modern',       'moment',      'money',
  'month',    'more',    'morning',      'most',        'mother',
  'mouth',    'move',    'movement',     'movie',       'Mr',
  'Mrs',      'much',    'music',        'must',        'my',
  'myself',   'name',    'nation',       'national',    'natural',
  'nature',   'near',    'nearly',       'necessary',   'need',
  'network',  'never',   'new',          'news',        'newspaper',
  'next',     'nice',    'night',        'no',          'none',
  'nor',      'north',   'not',          'note',        'nothing',
  'notice',   'now',     "n't",          'number',      'occur',
  'of',       'off',     'offer',        'office',      'officer',
  'official', 'often',   'oh',           'oil',         'ok',
  'old',      'on',      'once',         'one',         'only',
  'onto',     'open',    'operation',    'opportunity', 'option',
  'or',       'order',   'organization', 'other',       'others',
  'our',      'out',     'outside',      'over',        'own',
  'owner',     'page',        'pain',        'painting',   'paper',
  'parent',    'part',        'participant', 'particular', 'particularly',
  'partner',   'party',       'pass',        'past',       'patient',
  'pattern',   'pay',         'peace',       'people',     'per',
  'perform',   'performance', 'perhaps',     'period',     'person',
  'personal',  'phone',       'physical',    'pick',       'picture',
  'piece',     'place',       'plan',        'plant',      'play',
  'player',    'PM',          'point',       'police',     'policy',
  'political', 'politics',    'poor',        'popular',    'population',
  'position',  'positive',    'possible',    'power',      'practice',
  'prepare',   'present',     'president',   'pressure',   'pretty',
  'prevent',   'price',       'private',     'probably',   'problem',
  'process',   'produce',     'product',     'production', 'professional',
  'professor', 'program',     'project',     'property',   'protect',
  'prove',     'provide',     'public',      'pull',       'purpose',
  'push',      'put',         'quality',     'question',   'quickly',
  'quite',     'race',        'radio',       'raise',      'range',
  'rate',      'rather',      'reach',       'read',       'ready',
  'real',      'reality',     'realize',     'really',     'reason',
  'receive',   'recent',      'recently',    'recognize',  'record',
  'red',        'reduce',       'reflect',        'region',
  'relate',     'relationship', 'religious',      'remain',
  'remember',   'remove',       'report',         'represent',
  'Republican', 'require',      'research',       'resource',
  'respond',    'response',     'responsibility', 'rest',
  'result',     'return',       'reveal',         'rich',
  'right',      'rise',         'risk',           'road',
  'rock',       'role',         'room',           'rule',
  'run',        'safe',         'same',           'save',
  'say',        'scene',        'school',         'science',
  'scientist',  'score',        'sea',            'season',
  'seat',       'second',       'section',        'security',
  'see',        'seek',         'seem',           'sell',
  'send',       'senior',       'sense',          'series',
  'serious',    'serve',        'service',        'set',
  'seven',      'several',      'sex',            'sexual',
  'shake',      'share',        'she',            'shoot',
  'short',      'shot',         'should',         'shoulder',
  'show',       'side',         'sign',           'significant',
  'similar',    'simple',       'simply',         'since',
  'sing',       'single',       'sister',         'sit',
  'site',       'situation',    'six',            'size',
  'skill',      'skin',         'small',          'smile',
  'so',         'social',       'society',        'soldier',
  'some',       'somebody',     'someone',        'something',
  'sometimes', 'son',        'song',       'soon',       'sort',
  'sound',     'source',     'south',      'southern',   'space',
  'speak',     'special',    'specific',   'speech',     'spend',
  'sport',     'spring',     'staff',      'stage',      'stand',
  'standard',  'star',       'start',      'state',      'statement',
  'station',   'stay',       'step',       'still',      'stock',
  'stop',      'store',      'story',      'strategy',   'street',
  'strong',    'structure',  'student',    'study',      'stuff',
  'style',     'subject',    'success',    'successful', 'such',
  'suddenly',  'suffer',     'suggest',    'summer',     'support',
  'sure',      'surface',    'system',     'table',      'take',
  'talk',      'task',       'tax',        'teach',      'teacher',
  'team',      'technology', 'television', 'tell',       'ten',
  'tend',      'term',       'test',       'than',       'thank',
  'that',      'the',        'their',      'them',       'themselves',
  'then',      'theory',     'there',      'these',      'they',
  'thing',     'think',      'third',      'this',       'those',
  'though',    'thought',    'thousand',   'threat',     'three',
  'through',   'throughout', 'throw',      'thus',       'time',
  'to',        'today',      'together',   'tonight',    'too',
  'top',       'total',       'tough',    'toward',     'town',
  'trade',     'traditional', 'training', 'travel',     'treat',
  'treatment', 'tree',        'trial',    'trip',       'trouble',
  'true',      'truth',       'try',      'turn',       'TV',
  'two',       'type',        'under',    'understand', 'unit',
  'until',     'up',          'upon',     'us',         'use',
  'usually',   'value',       'various',  'very',       'victim',
  'view',      'violence',    'visit',    'voice',      'vote',
  'wait',      'walk',        'wall',     'want',       'war',
  'watch',     'water',       'way',      'we',         'weapon',
  'wear',      'week',        'weight',   'well',       'west',
  'western',   'what',        'whatever', 'when',       'where',
  'whether',   'which',       'while',    'white',      'who',
  'whole',     'whom',        'whose',    'why',        'wide',
  'wife',      'will',        'win',      'wind',       'window',
  'wish',      'with',        'within',   'without',    'woman',
  'wonder',    'word',        'work',     'worker',     'world',
  'worry',     'would',       'write',    'writer',     'wrong',
  'yard',      'yeah',        'year',     'yes',        'yet',
  'you',       'young',       'your',     'yourself'
]

let longerThanThreeWords = [];

wordsArray.forEach(word=>{
    if(word.length > 3){
        longerThanThreeWords.push(word);
    }
})

let acceptableWords = [];

let fourLetterWords = [];
let fiveLetterWords = [];
let sixLetterWords = [];
let sevenLetterWords = [];
let eightLetterWords = [];

longerThanThreeWords.forEach(word=>{
    if(word.length == 4){
        fourLetterWords.push(word.toLowerCase());
    }
})

longerThanThreeWords.forEach(word=>{
    if(word.length == 5){
        fiveLetterWords.push(word.toLowerCase());
    }
})

longerThanThreeWords.forEach(word=>{
    if(word.length == 6){
        sixLetterWords.push(word.toLowerCase());
    }
})

longerThanThreeWords.forEach(word=>{
    if(word.length == 7){
        sevenLetterWords.push(word.toLowerCase());
    }
})

longerThanThreeWords.forEach(word=>{
    if(word.length == 8){
        eightLetterWords.push(word.toLowerCase());
    }
})

console.log(fourLetterWords);
acceptableWords = acceptableWords.concat(fourLetterWords, fiveLetterWords, sixLetterWords, sevenLetterWords, eightLetterWords);



let availableCharacters = [];
let passwordArray = [];
let charactersToInclude = [];

function createPassword(){
    availableCharacters = [];
    charactersToInclude = [];
    passwordArray = [];
    const inputFromUser = document.getElementById("inputNumberOfCharacters").value;
    let lengthOfPassword = parseInt(inputFromUser);
    if(isNaN(lengthOfPassword)){
        const htmlInstructions = document.getElementById("instructionsText");
        htmlInstructions.innerText = "You must enter a number of characters";
    }
    else if(lengthOfPassword > 30){
        const htmlInstructions = document.getElementById("instructionsText");
        htmlInstructions.innerText = "That's too long! Enter a number between 6 and 30";
    }
    else if(lengthOfPassword < 6){
        const htmlInstructions = document.getElementById("instructionsText");
        htmlInstructions.innerText = "That's too short! Enter a number between 6 and 30";
    }
    else{
        const htmlInstructions = document.getElementById("instructionsText");
        htmlInstructions.innerText = "";
        if(document.getElementById("requireRealWords").checked){
            let wordsTotal = lengthOfPassword;
            let passwordWordsArray = [];
            let blankPasswordArray = [];
            for(let i = 0; i < length; i ++){
                blankPasswordArray.push("");
            }
            if(document.getElementById("requireSpecials").checked){
                blankPasswordArray[wordsTotal] = specialsArray[Math.floor(Math.random()*specialsArray.length)];
                wordsTotal -= 1;
            }
            if(document.getElementById("requireNumbers").checked){
                blankPasswordArray[wordsTotal] = numbersArray[Math.floor(Math.random()*numbersArray.length)];
                wordsTotal -= 1; 
            }
            while(wordsTotal > 12){
                console.log(acceptableWords);
                let nextWord = acceptableWords[Math.floor(Math.random()*acceptableWords.length)];
                passwordWordsArray.push(nextWord);
                console.log(nextWord);
                wordsTotal = wordsTotal - nextWord.length;
            }
            if(wordsTotal > 8 || wordsTotal == 4){
                let nextWord = fourLetterWords[Math.floor(Math.random()*fourLetterWords.length)];
                passwordWordsArray.push(nextWord);
                wordsTotal = wordsTotal - nextWord.length;
            }
            if(wordsTotal == 8){
                let nextWord = eightLetterWords[Math.floor(Math.random()*eightLetterWords.length)];
                passwordWordsArray.push(nextWord);
                wordsTotal = wordsTotal - nextWord.length;
            }
            if(wordsTotal == 7){
                let nextWord = sevenLetterWords[Math.floor(Math.random()*sevenLetterWords.length)];
                passwordWordsArray.push(nextWord);
                wordsTotal = wordsTotal - nextWord.length;
            }
            if(wordsTotal == 6){
                let nextWord = sixLetterWords[Math.floor(Math.random()*sixLetterWords.length)];
                passwordWordsArray.push(nextWord);
                wordsTotal = wordsTotal - nextWord.length;
            }
            if(wordsTotal == 5){
                let nextWord = fiveLetterWords[Math.floor(Math.random()*fiveLetterWords.length)];
                passwordWordsArray.push(nextWord);
                wordsTotal = wordsTotal - nextWord.length;
            }
            // let nextWord = longerThanThreeWords[Math.floor(Math.random()*longerThanThreeWords.length)];
            // while(wordsTotal > 0){
            //     while((wordsTotal - nextWord.length) < 4 && (wordsTotal - nextWord.length) > 0 || (wordsTotal - nextWord.length)< 0){
            //         nextWord = longerThanThreeWords[Math.floor(Math.random()*longerThanThreeWords.length)];
            //     }
            //     passwordWordsArray.push(nextWord);
            //     wordsTotal = wordsTotal =  nextWord.length; 
            //     nextWord = longerThanThreeWords[Math.floor(Math.random()*longerThanThreeWords.length)];
            // }
            console.log(passwordWordsArray);
            let text = ""
            if(document.getElementById("requireCapitals").checked){
                passwordWordsArray.forEach((word, index)=>{
                    passwordWordsArray[index] = word.charAt(0).toUpperCase() + word.slice(1);
                })
            }
            passwordWordsArray.forEach(word=>{
                text += word;
            })
            for(let i = 0; i < text.length; i ++){
                blankPasswordArray[i] = text[i];
            }

            let passwordText = "";
            blankPasswordArray.forEach(char=>{
                passwordText += char;
            })
            const htmlPassword = document.getElementById('password');
            htmlPassword.innerText = "Your suggested password is: " + passwordText;
            }
        else{
            for(let i = 0; i < lengthOfPassword; i++){
                passwordArray.push("");
            }
            charactersToInclude.push(lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]);
            lowerCaseArray.forEach(char=>{
                availableCharacters.push(char);
            });
            if(document.getElementById("requireCapitals").checked){
                upperCaseArray.forEach(char=>{
                    availableCharacters.push(char);
                });        
                charactersToInclude.push(upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]);
            }
            if(document.getElementById("requireNumbers").checked){
                numbersArray.forEach(char=>{
                    availableCharacters.push(char);
                });        
                charactersToInclude.push(numbersArray[Math.floor(Math.random()*numbersArray.length)]);
            }
            if(document.getElementById("requireSpecials").checked){
                specialsArray.forEach(char=>{
                    availableCharacters.push(char);
                });        
                charactersToInclude.push(specialsArray[Math.floor(Math.random()*specialsArray.length)]);
            }
            charactersToInclude.forEach(char=>{
                let randomIndex = Math.floor(Math.random()*passwordArray.length);
                while(passwordArray[randomIndex].length > 0){
                    randomIndex = Math.floor(Math.random()*passwordArray.length);
                }
                passwordArray[randomIndex] = char;
            })
            passwordArray.forEach((space, index)=>{
                if(space.length == 0){
                    passwordArray[index] = availableCharacters[Math.floor(Math.random()*availableCharacters.length)];
                }
            })
            let passwordText = "";
            passwordArray.forEach(char=>{
                passwordText += char;
            })
            const htmlPassword = document.getElementById('password');
            htmlPassword.innerText = "Your suggested password is: " + passwordText;
        }
        
    }
    

}



function bindButtons(){
    const htmlcreatePassword = document.getElementById("createPassword");
    htmlcreatePassword.addEventListener("click", createPassword);
    
}

bindButtons();