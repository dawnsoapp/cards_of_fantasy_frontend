class storyPrompt {
    constructor(speaker, sprite, text, next, option) {
        this.speaker = speaker;
        this.sprite = sprite;
        this.text = text;
        this.next = next;
        this.option = option;
    };

};

//intro choices
    export const intro1 = new storyPrompt(
        "Dawn", 
        "", 
        "Hello there, my name is Dawn! Dawn Soap. Not sponsored by the dishsoap, sadly! I'm a certified master of the Astrologian class.", 
        "intro2", 
        []
        );
    export const intro2 = new storyPrompt(
        "Dawn", 
        "",
        "You look like you're new here...? Are you looking to become a healer, too? Or...no!", 
        "intro3", 
        []
        );
    export const intro3 = new storyPrompt(
        "Dawn", 
        "",
        "You're here for a tour! Sorry, I can be quite forgetful. 'Tour Guide' was in my resume, after all.", 
        "intro4", 
        []
        );
    export const intro4 = new storyPrompt(
        "Dawn", 
        "",
        "So, would you like a tour around my room? Or would you like to venture outside for a bit?", 
        "", 
        [
            {id:0, text:"Stay Inside", next: "stay_inside1"},
            {id:1, text:"Let's go outside!", next:"go_outside1"}
        ]
        )



//stay_inside
    export const stay_inside1 = new storyPrompt(
        "Dawn", 
        "",
        "So you would like to stay in? Same, the AC is pretty nice this time of year.", 
        "stay_inside2", 
        []
        )
    export const stay_inside2 = new storyPrompt(
        "Dawn", 
        "",
        "Although, living in Ishgard, I'd say it's not too bad compared to Ul'dah.", 
        "stay_inside3", 
        []
        )
    export const stay_inside3 = new storyPrompt(
        "Dawn", 
        "",
        "Hm? You don't know what those places are? Which one would you like me to talk about?", 
        "", 
        [{id:0, text: "Tell me about this place, Ishgard.", next: "ishgard1"},
        {id:1, text: "How hot is it in Ul'dah...?", next: "uldah1"}]
        )


        //ishgard 
            export const ishgard1 = new storyPrompt(
                "Dawn", 
                "",
                "My humble abode! The Holy See of Ishgard is a city-state that rests in the snowy mountains alongside Dravania, home of the dragons.", 
                "ishgard2", 
                []
                )
            export const ishgard2 = new storyPrompt(
                "Dawn", 
                "",
                "Weather is pretty much chilly all year-round. Snow storms and hail galore! Although during the summer, it's not too bad. Quite beautiful actually.", 
                "ishgard3", 
                []
                )
            export const ishgard3 = new storyPrompt(
                "Dawn", 
                "",
                "Not long ago, Ishgard was actually at war with the dragons. They have special squadrons under the class 'Dragoons' that helped fight to protect their city.", 
                "ishgard4", 
                []
                )
            export const ishgard4 = new storyPrompt(
                "Dawn", 
                "",
                "Why, I have a great friend who was actually one of Ishgard's best! His name is Estinien.", 
                "ishgard5", 
                []
                )
            export const ishgard5 = new storyPrompt(
                "Dawn", 
                "",
                "He's rough around the edges, but once you get to know him, he's quite the sassy comrade. I'm sure you'd love to meet him.", 
                "ishgard6", 
                []
                )
            export const ishgard6 = new storyPrompt(
                "Dawn", 
                "",
                "But enough about that, you asked to see my room! Anything in here that piques your interest?", 
                "", 
                [{id:0, text: "That orb...it's so sparkly~", next: "orb"},
                {id:1, text: "Why do you have a statue in your room-", next: "statue"},
                {id:2, text: "You have so many plushies.", next: "plushies"}]
                )




//             //uldah
            export const uldah1 = new storyPrompt(
                "Dawn", 
                "",
                "Don't even get me started.", 
                "uldah2", 
                []
                )
            export const uldah2 = new storyPrompt(
                "Dawn", 
                "",
                "It's in the middle of the DESERT.", 
                "uldah3", 
                []
                )
            export const uldah3 = new storyPrompt(
                "Dawn", 
                "",
                "Wayyy too hot for me and my fur. But it's one of the wealthiest city-states in Eorzea, so they do be collecting that check.", 
                "uldah4", 
                []
                )
            export const uldah4 = new storyPrompt(
                "Dawn", 
                "",
                "They said their rent was due. But they should really invest in some kind of housing fan system to keep their citizens cool.", 
                "uldah5", 
                []
                )
            export const uldah5 = new storyPrompt(
                "Dawn", 
                "",
                "There were times I thought I'd collapse from heat stroke, especially if I wore armor.", 
                "uldah6", 
                []
                )
            export const uldah6 = new storyPrompt(
                "Dawn", 
                "",
                "But enough about that, you asked to see my room! Anything in here that piques your interest?", 
                "", 
                []
                )





// //go_outside
    export const go_outside1 = new storyPrompt(
        "Dawn", 
        "",
        "Sounds great! Would love to get some air and touch grass.", 
        "go_outside2", 
        []
        )
    export const go_outside2 = new storyPrompt(
        "Dawn", 
        "",
        "Limsa Lominsa! This is where all of it began for me. It's quite a lively hub!", 
        "go_outside3", 
        []
        )
    export const go_outside3 = new storyPrompt(
        "Dawn", 
        "",
        "I miss the good old days of swinging a rusty axe around in my tattered, weird-looking gear.", 
        "go_outside4", 
        []
        )
    export const go_outside4 = new storyPrompt(
        "Dawn", 
        "",
        "Actually, scratch that on the gear. I looked absolutely dreadful in those garbs.", 
        "go_outside5", 
        []
        )
    export const go_outside5 = new storyPrompt(
        "Dawn", 
        "",
        "Glamours were so hard to obtain back in those days. But as a maurauder, I guess you needn't worry about such things.", 
        "go_outside6", 
        []
        )
    export const go_outside6 = new storyPrompt(
        "Dawn", 
        "",
        "Warrior was plenty of fun though! A great introductory to the tank class, in my opinion.", 
        "", 
        [{id:0, text: "A tank...to a healer?", route: 4},
        {id:1, text: "What was being a warrior like?", route: 6}]
        )
