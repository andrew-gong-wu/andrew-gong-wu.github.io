
// annotations contains all annotations for the essay

const annotations = { 
    1: "Start with a bang. Reel them in. There are countless bad metaphors about beginnings, but they all express the same thing.", // JS object - works like a dictionary. key/value
    2: "Subversion of expectations!",
    3: "A lot of people introduce characters awkwardly. No need to be clumsy. Just shove them in there; it's obvious Holden is my living composer friend whom I regularly cuss out.",
    4: "Similar to my note on introducing people: I think this is a relatively artful way to introduce the (musical) piece.",
    5: "There's a lot of power in introducing specifics. First, they lend your writing legitimacy: when a reader goes through this sentence, they can rest assured that I am a real pianist navigating real difficulties (insanities, perhaps.) Moreover, they give me something to refer back to later. <br><br><a href=\"https://youtu.be/AkAlRaZO_Zs?feature=shared&t=1007\">Triple-octave jumps (though he later changed the metronome marking)</a>, <a href=\"https://youtu.be/AkAlRaZO_Zs?feature=shared&t=128\">four staves</a>, <a href=\"https://youtu.be/AkAlRaZO_Zs?feature=shared&t=1132\">postlude</a>.",
    6: "I care a lot about structural integrity. Bigger examples later, but even little things like the repetition of 'insanity' from paragraph to paragraph make the essay more cohesive.",
    7: "Exact repetition for emphasis. Word and phrases gain power as you repeat them.",
    8: "A big moment, and it is in some sense the thesis of the entire essay. It's the first time I really answer the question 'why play music written by living friends rather than dead strangers?'—everything else has been complaints and jokes. <br><br>It also marks the end of the 'introduction' arc of the essay, roughly speaking.",
    9: "I love alliteration, and I think this sentence (and essay) makes that quite clear. 'Begin' with the 'basics'; 'adventurous among'; 'experiment' with the 'esoteric'. <br><br>Note also that I maintain parallelism—not only is there alliteration, but it also occurs at the same relative position (right before the em dash that sets off composer names.) In a 'two'-flavored sentence (two clauses with similar vibes), there ought to be balance. <br><br>Finally, there's nothing wrong with writing things your readers won't know. That most people have not heard of Saariaho, Takemitsu, and Gubaidulina is an advantage; that's the intent, given that most people know who Bach, Beethoven, and Chopin are.",
    10: "Everyone should use italics. It's a great tool. Note how I get from one phrase to the next: first, I cut out the 'I'; then, I introduce other pianists, when previously I was working with theoretical 'should's. <br><br>Also, simplicity is your friend. I repeat the words 'how', 'play,' and 'this,' and that helps anchor the reader. No need for complicated rewordings!",
    11: "This is a nice string of 'p' and 'd' sounds—alliteration and consonance. 'Gra<i>pp</i>le<i>d</i> with the <i>p</i>oint of s<i>p</i>en<i>d</i>ing months and months <i>p</i>recision-<i>d</i>rilling <i>d</i>ifficult <i>p</i>assages.' I like it when words sound and look good.",
    12: "Another nice moment, similar to the previous annotation. '<i>D</i>riving <i>m</i>ysel<i>f</i> hal<i>f</i>-<i>m</i>a<i>d</i>.'",
    13: "Conveying the idea of 'driving myself half-mad' doesn't even require specifics here: I can get away with just gesturing at them!",
    14: "Here's another good time to talk about pace. In this sentence, I've built up to a mini-climax of sorts. 'Precision-drilling difficult passages' is four words; 'scouring YouTube to study recordings,' five; 'driving myself half-mad over <i>this note’s not crisp enough</i> or <i>that chord needs more pinky</i>,' many. In 'three'-flavored sentences, this is a general rule: smaller to bigger. Then, I let the reader hang for a moment at the em dash—and fall back to earth. <br><br>There's no point. I'm just worse than all the professionals.",
    15: "This was the first sentence I wrote for this piece, and for a few weeks, I intended to start the essay with this sentence (or some variant.) <br><br>I chose here to isolate it in a single paragraph due to its complexity and weight. Complexity: sentence length, depth. Weight: length of time—years. <br><br>And the alliteration contributes to the complexity and weight, too. 'Pianist, plagiarist'; 'realizing, renditions'; 'amateurish, amalgams, admired'; 'borrowing, blending, best, but'; 'idols, ideas, iota'; 'talent, technique.' Note that I get some consonance, too—'amateurish, amalgams, admired' all have the 'm'-sound! <br><br>Structurally, it's the climax of this 'pianistic confusion' arc, and allows me to begin talking about <i>Poetry</i> next.",
    16: "A relatively clean way, in my eyes, to talk about both myself and younger pianists in general.",
    17: "Short sentences matter! This essay skews long, in terms of sentence length, but that makes the shorter sentences more powerful in comparison.",
    18: "Refers back to 'triple-octave jumps at the tempo marking '≥176.'' Note also the micro-parallelism and 'm,' 's,' and 'w' sounds: <i>w</i>ar<i>m</i>-up <i>s</i>cale<i>s</i>, <i>s</i>lo<i>w</i>-<i>m</i>otion ju<i>m</i>p<i>s</i>.",
    19: "Refers back to 'multiple lines notated in four staves (the standard being two).' Note also the 's' and 'f' sounds: '<i>s</i>cribbled in <i>f</i>ingering '<i>s</i>olution<i>s</i>' <i>f</i>or that <i>f</i>our-<i>s</i>ta<i>ff</i> <i>s</i>ection.'",
    20: "Another subversion of expectations. Naturally, given that I've referenced 'triple-octave jumps' and the 'multiple lines notated in four staves,' the expectation would be to reference the 'single pianissimo chord repeated 90 times.' Instead, I choose to reference the idea of constantly being annoyed at Holden, which lets me use the <i>Postlude</i> later in this essay. To me, structure is everything!",
    21: "Repetition of this idea of originality, for emphasis. Alliteration to lend strength.",
    22: "Throughout the essay, I feel I've explained the conscious imitation part—'<i>how do the best pianists play this</i>,' 'scouring YouTube to study recordings,' 'amateurish amalgams of renditions I admired.' That being said, it's difficult to condense all your ideas into 650 words. Here I attempted to sneak in the notion that even when the intent is not to study to imitate, our conceptions are irrevocably colored by our first times listening to a piece. But it's a relatively small note.",
    23: "Very overt reference to 'none of it mattered.' Not particularly clever or deep but it gets the job done. This resolves the 'pianistic confusion' arc, so I can now pivot to a different idea.",
    24: "I advise people to never write meta-stuff in their essays: it's cringe. But I think I plausibly get away with it here? Throughout this paragraph, I'm trying to create a sense of 'the author is talking to you, the reader, about this piece and the words he's using to talk about this piece,' and I think it works.",
    25: "Rhythm, and plenty of 's' and 'd' sounds. '<i>S</i>o <i>d</i>early wi<i>s</i>h,' '<i>s</i>taple <i>th</i>e<i>s</i>e <i>s</i>oun<i>ds</i>.' I know 'these' doesn't actually start with 'd,' but it has the same vibe, and also the same vowel as in 'dearly,' too.",
    26: "My best attempt at music without music. I don't think I need to spell out everything going on here—just read it out loud! Rhythm, alliteration, consonance, assonance.",
    27: "The italicized words correspond to <a href=\"https://youtu.be/AkAlRaZO_Zs?feature=shared&t=844\">the <i>Peacefully flowing</i> section</a> and <a href=\"https://youtu.be/AkAlRaZO_Zs?feature=shared&t=955\">the transition to <i>Majestic</i></a>.",
    28: "See <a href=\"https://youtu.be/AkAlRaZO_Zs?feature=shared&t=713\">here</a>.",
    29: "See <a href=\"https://youtu.be/AkAlRaZO_Zs?feature=shared&t=1005\">here</a>.",
    30: "Explained (somewhat) in <a href=\"https://andrewwu.substack.com/p/music-too-great-to-be-forgotten\">this blog post.</a>",
    31: "Funnily enough, given that I'm annotating this, I do actually get to staple these sounds to my words. Anyway, another long buildup—",
    32: "—into a short letdown.",
    33: "Here I'm using a short paragraph (just one-and-a-half sentences!) to make sure I highlight the idea here: that even if you could hear everything I'm hearing, there's more to what music is. <br><br>Also worth noting the vocabulary here—small words follow an outpouring of relatively academic jargon.",
    34: "<i>Poetry</i> is a piece only I have learned, so there are things only I can say about it. But <i>also</i>, only I have lived with my specific musical confusion, and only I have had <i>Poetry</i> be a huge factor in resolving that confusion, and it's <i>only I have</i>s all the way down. I hope that idea is clear: it is, on some level, the whole point of the essay.  <br><br>Worth flagging that this relates to 'lived experiences.'",
    35: "Structure matters, so I'm going to reference 'lived experiences, surroundings, and emotional state' sequentially in the next few sentences.",
    36: "Surroundings.",
    37: "I dragged out this phrase because I wanted it to feel long. The shortest possible way of saying it is 'buried under those ninety chords.' <br><br>Also worth noting the adjective choices: by design, listless and unsettling have the 's' sound, to match pianissimo.",
    38: "Emotional state.",
    39: "The climax and the entire point of the essay. First, I played a piece no one else has played before; now, I explain something no one else will ever experience.",
    40: "The correct amount of time begins with 'five,' and 'five centuries' felt somehow too short. Some of this is just pure vibes.",
    41: "One last instance of this word, which appears at the start.",
    42: "Structurally, it's evidently 'most people,' 'I,' 'most people,' 'I.' I experimented with every possible place to break the paragraph and felt breaking before the final 'I' seemed best. <br><br>Thanks for reading! I hope you have a better sense of how I write now :)",
    43: "Note that I've been using big, complicated words to describe the (big and complicated!) act of learning piano, and that I now transition to using much smaller words—both in the highlighted text and in the following italicized questions. This is a choice for contrast.",
    44: "Here I want to convey the attitude change between half-sarcastic-complaining filled with musical jargon to genuine love. Thus I want as much contrast as possible: I begin using small words, I begin repeating myself. Contemplating, not complaining.",
    45: "What alliteration is intentional? Here, 'first' and 'famous'; 'lucky' and 'live' are intentional. 'Famous' modifies 'recordings,' the method by which we are exposed to the music; 'live' modifies 'concerts.' They occupy a similar position. 'First' and 'lucky' describe something closer to the musician themself.",
    46: "Starting consecutive sentences in the same way is a stylistic choice. To me, it usually conveys a sense of 'spokenness.'",
    47: "Starting consecutive sentences the same way, again for 'spokenness.'",
    48: "Note how simple this sentence is. That's by design: the way in which most listeners can relate to <i>Poetry</i> is not and cannot be as complex as the way in which I relate to it. So the next sentence has to be far more complicated, which it is. Compare also with the sentences that begin 'Intellectually, ... But emotionally, ...'.",
    49: "The exact correct word for the sentence, in my opinion. Firstly, anyone who's sat down and listened to the <a href=\"https://youtu.be/0hh1a6sfIB4?feature=shared\">Postlude</a> can attest to it being a feat of endurance. Secondly, the vowel sounds in 'endure' and 'eternity' match in the first two syllables.",
    50: "Again, using italics lets me gesture vaguely. <br><br>Functionally, in this essay, all these italicized phrases <i>could</i> be in quotation marks instead, but it would seriously change the vibes. Thankfully, italicizing gives me the same 'spoken' feeling. Note also that in real life, as in this essay, 'spoken words' are often smaller than written ones.",
    51: "Philosophically, I love the idea that music is at the intersection of sound and listener. But whatever the idea is, you still need a verb. I really like 'emerge' here: I like the 'm' sound that 'music' and 'emerge' share, and 'emerge' conveys a certain sense of natural-ness.",
    52: "Here I let the reader rest on the word 'insanity' for a moment. I think the 'then' does a great job of regulating the pace at which they process the slight adjustment—from 'insanity' regarding the piece's difficulties to 'insanity' regarding how much I love it.",
    53: "Structurally tight—this justifies adding the length of the <i>Postlude</i> to the third paragraph of the essay.",
    54: "This colon could have been a comma. It could even have not been at all. But I think a colon is appropriate for the amount of time I want the reader to take. In this context, 'So:' should almost be some sort of declarative statement. <i>This is the point of the essay</i>, as it were. <br><br>One more fun fact: it is grammatically correct to capitalize or to not capitalize the first word after the colon in a sentence. I am a staunch advocate for non-capitalization, but I chose to capitalize here, just for even more of the aforementioned effect.",
    55: "Good sounds: 's' to match 'listless, unsettling, pianissimo,' and the second syllable vowel matches the start of 'eternity.'",
    56: "One final return to simple vocabulary. Simple conclusions (and this is one!) deserve simple words.",
    57: "For rhythm and aesthetics: this sentence (and paragraph) feels clearly worse without this word.",
    58: "Passive voice. One of the times it seems good and necessary to convey, no matter how not-seriously, that the piece is acting <i>on me</i>, doing things <i>to me</i>. That sets the tone for the essay.",
    59: "Starting without 'well' would be far too direct. This word also (in my mind) embodies a sort of narration-out-loud feel that I hope to consistently capture throughout the essay.",
  }; 

  // note: a span is an inline HTML element used to group small pieces of text. allows us to apply special properties
  // in this case, apply the annotations

  document.querySelectorAll('.annotation').forEach(span => { // selects all elements on page with class .annotation, and loops through and does the function in {}
    span.addEventListener('click', () => { // tells browser to listen for a click event on the span, then runs the function enclosed in {}
      const annotationId = span.getAttribute('data-annotation-id'); // declares a variable named annotationId and sets it to the data-annotation-id indicated above
      const annotationContent = annotations[annotationId]; // sets annotationContent to the value in the key/value pair in annotations
      showSidebar(annotationContent); // calls a function named showSidebar that has an input with the annotation text we just set
      document.querySelectorAll('.annotation').forEach(el => el.classList.remove('clicked')); // remove clicked state from all the annotations
      span.classList.add('clicked'); // gives the span that the reader just clicked the class of 'clicked'
    });
  });

  function showSidebar(content) {
    const sidebar = document.getElementById('sidebar'); // sets sidebar to be the element on the page with id sidebar

    sidebar.innerHTML = `<p>${content}</p>`; // earlier we called showSidebar(annotationContent), so this just shows the annotation from annotations
    sidebar.style.display = 'block'; // displays sidebar as a block
  }