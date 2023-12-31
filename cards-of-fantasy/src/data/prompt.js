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
        "intro5", 
        []
        );
    export const intro5 = new storyPrompt(
        "You", 
        "",
        "", 
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
        "stay_inside4", 
        []
        )
    export const stay_inside4 = new storyPrompt(
        "You", 
        "",
        "", 
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
                "ishgard7", 
                []
                )
            export const ishgard7 = new storyPrompt(
                "You", 
                "",
                "", 
                "", 
                [{id:0, text: "That orb...it's so sparkly~", next: "orb1"},
                {id:1, text: "Why do you have a statue in your room-", next: "statue1"},
                {id:2, text: "You have so many plushies.", next: "plushies1"}]
                )

                    // orb
                        export const orb1 = new storyPrompt(
                            "Dawn", 
                            "",
                            "Oh, my precious bubblegum ball! Yes, it was quite the ordeal to get this.", 
                            "orb2", 
                            []
                            )
                        export const orb2 = new storyPrompt(
                            "Dawn", 
                            "",
                            "As with all MMOs, if you want something bright and shiny, you have to crawl through hell and back to obtain it.", 
                            "orb3", 
                            []
                            )
                        export const orb3 = new storyPrompt(
                            "Dawn", 
                            "",
                            "This one required me to fight through over 15 dungeons, buy all kinds of materials, and slay a bunch of eikons and then some!", 
                            "orb4", 
                            []
                            )
                        export const orb4 = new storyPrompt(
                            "Dawn", 
                            "",
                            "She's a pretty little thing, huh? Nowdays, those dungeons and trials aren't so rigourous, but nothing will top this weapon to me.", 
                            "orb5", 
                            []
                            )
                        export const orb5 = new storyPrompt(
                            "Dawn", 
                            "",
                            "It's pink, sparkly orb for goodness sake! What's not to love about it?", 
                            "orb6", 
                            []
                            )
                        export const orb6 = new storyPrompt(
                            "You", 
                            "",
                            "", 
                            "", 
                            [{id:0, text: "That orb...it's so sparkly~", next: "orb1"},
                            {id:1, text: "Why do you have a statue in your room-", next: "statue1"},
                            {id:2, text: "You have so many plushies.", next: "plushies1"},
                            {id:3, text: "I think I'm good!", next: "end1"}]
                            )

                        //statue
                        export const statue1 = new storyPrompt(
                            "Dawn", 
                            "",
                            "This statue is sacred. It's sculpted after the love of my life.", 
                            "statue2", 
                            []
                            )
                        export const statue2 = new storyPrompt(
                            "Dawn", 
                            "",
                            "He is a fellow comrade of mine who aided me in a quest to quite literally save the world. He was my greatest support and partner through it all.", 
                            "statue3", 
                            []
                            )
                        export const statue3 = new storyPrompt(
                            "Dawn", 
                            "",
                            "His name is G'raha Tia. He's incredibly strong, both in the art of war and magic, yet he's the sweetest person on Earth. I wouldn't be surprised if he had a halo, too.", 
                            "statue4", 
                            []
                            )
                        export const statue4 = new storyPrompt(
                            "Dawn", 
                            "",
                            "I'm sure you'd run into him once you start exploring Eorzea yourself! We're currently engaged. I'm thinking a spring wedding.", 
                            "statue5", 
                            []
                            )
                        export const statue5 = new storyPrompt(
                            "Dawn", 
                            "",
                            "He doesn't know it of course, but that's fine. He'll find out when the time comes~", 
                            "statue6", 
                            []
                            )
                        export const statue6 = new storyPrompt(
                            "You", 
                            "",
                            "", 
                            "", 
                            [{id:0, text: "That orb...it's so sparkly~", next: "orb1"},
                            {id:1, text: "Why do you have a statue in your room-", next: "statue1"},
                            {id:2, text: "You have so many plushies.", next: "plushies1"},
                            {id:3, text: "I think I'm good!", next: "end1"}]
                            )
                        
                        //plushies
                        export const plushies1 = new storyPrompt(
                            "Dawn", 
                            "",
                            "Oh yes, I absolutely adore them all!", 
                            "plushies2", 
                            []
                            )
                        export const plushies2 = new storyPrompt(
                            "Dawn", 
                            "",
                            "I got this one from the fae, a race of faeries that live in a beautiful land wth an array of flowers, crystal waters, and a huge tower that is their beacon of aether.", 
                            "plushies3", 
                            []
                            )
                        export const plushies3 = new storyPrompt(
                            "Dawn", 
                            "",
                            "At least...I think it is, ha ha. But these other ones I actually made myself! They are dolls made after eikons and bosses I have fought.", 
                            "plushies4", 
                            []
                            )
                        export const plushies4 = new storyPrompt(
                            "Dawn", 
                            "",
                            "You can actually make these too if you decide to become a weaver! Eorzea isn't just about the arts of war and magic, it also boasts it's arts in crafting and gathering!", 
                            "plushies5", 
                            []
                            )
                        export const plushies5 = new storyPrompt(
                            "Dawn", 
                            "",
                            "Maybe we can make some together! We can have a little crafting date and exchange plushies we make.", 
                            "plushies6", 
                            []
                            )
                        export const plushies6 = new storyPrompt(
                            "You", 
                            "",
                            "", 
                            "", 
                            [{id:0, text: "That orb...it's so sparkly~", next: "orb1"},
                            {id:1, text: "Why do you have a statue in your room-", next: "statue1"},
                            {id:2, text: "You have so many plushies.", next: "plushies1"},
                            {id:3, text: "I think I'm good!", next: "end1"}]
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
                "uldah7", 
                []
                )
            export const uldah7 = new storyPrompt(
                "You", 
                "",
                "", 
                "uldah7", 
                [{id:0, text: "That orb...it's so sparkly~", next: "orb1"},
                {id:1, text: "Why do you have a statue in your room-", next: "statue1"},
                {id:2, text: "You have so many plushies.", next: "plushies1"}]
                )

                    //end1 
                    export const end1 = new storyPrompt(
                        "Dawn", 
                        "",
                        "Alright! Well, I'm glad I could share a few of my cherished belongings with you!", 
                        "end2", 
                        []
                        )
                    export const end2 = new storyPrompt(
                        "Dawn", 
                        "",
                        "I would love to talk about more of my relics and little knickknacks, but it appears we are out of time here!", 
                        "end3", 
                        []
                        )
                    export const end3 = new storyPrompt(
                        "Dawn", 
                        "",
                        "My room is still in the works, as well as Cards of Fantasy! Which means that in due time, we'll be able to chat longer and possibly have more back and forth in the future!", 
                        "end4", 
                        []
                        )
                    export const end4 = new storyPrompt(
                        "Dawn", 
                        "",
                        "But until then, it was great talking to you! Maybe we can traverse outdoors next time hm~? (My speech will loop back to the beginning if that's a choice you would like to explore.)", 
                        "end5", 
                        []
                        )
                    export const end5 = new storyPrompt(
                        "Dawn", 
                        "",
                        "Take care, Warrior of Light!", 
                        "end6", 
                        []
                        )
                    export const end6 = new storyPrompt(
                        "You", 
                        "",
                        "", 
                        "", 
                        [{id:0, text: "(Go back to the beginning)", next: "intro1"}]
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
        "go_outside7", 
        []
        )
    export const go_outside7 = new storyPrompt(
        "You", 
        "",
        "", 
        "", 
        [{id:0, text: "A tank...to a healer?", next: "healer1"},
        {id:1, text: "What was being a warrior like?", next: "warrior1"}]
        )

            //healer 
            export const healer1 = new storyPrompt(
                "Dawn", 
                "",
                "Yeah, quite the 180, isn't it? To be honest, I enjoyed tanking...at least in dungeons.", 
                "healer2", 
                []
                )
            export const healer2 = new storyPrompt(
                "Dawn", 
                "",
                "But when the trials started getting harder, and it required proper timing to switch aggro with ur duo tank...I got overwhelmed! Tanxiety is real!!", 
                "healer3", 
                []
                )
            export const healer3 = new storyPrompt(
                "Dawn", 
                "",
                "Don't get me wrong though, switching to Astrologian was also stressful. Trying to keep everyone alive, remembering to remove debuffs etc.", 
                "healer4", 
                []
                )
            export const healer4 = new storyPrompt(
                "Dawn", 
                "",
                "But I felt more comfortable in that role. I was good at reading my party's health, timing when to do mass heals or focus on shielding the tank when necessary.", 
                "healer5", 
                []
                )
            export const healer5 = new storyPrompt(
                "Dawn", 
                "",
                "Since I had experience as a tank, I knew when they would need a healer's help because I've been in those very same situations!", 
                "healer6", 
                []
                )
            export const healer6 = new storyPrompt(
                "Dawn", 
                "",
                "Plus, Astrologian is just so much fun. Using cards to buff my teammates while also doing flashy healing moves, what more can a miquo'te ask for?", 
                "healer7", 
                []
                )
            export const healer7 = new storyPrompt(
                "Dawn", 
                "",
                "", 
                "", 
                [{id:0, text: "What's the difference between Astrologian and the other healing classes?", next: "difference1"},
                {id:1, text: "What other places do you go to, by the way? Any recommendations?", next: "places1"}]
                )

            //warrior
            export const warrior1 = new storyPrompt(
                "Dawn", 
                "",
                "It was plenty of fun! Pulling every single monster in sight and slaying them all! (Don't do this if your gear is bad)", 
                "warrior2", 
                []
                )
            export const warrior2 = new storyPrompt(
                "Dawn", 
                "",
                "You really feel like you wield all the power, especially in PvP. Or at least that's how Warrior feels to me.", 
                "warrior3", 
                []
                )
            export const warrior3= new storyPrompt(
                "Dawn", 
                "",
                "If you like to take the lead and be on the frontline, it's the perfect role for you! The gear also looks really cool. Especially Dark Knight.", 
                "warrior4", 
                []
                )
            export const warrior4= new storyPrompt(
                "Dawn", 
                "",
                "And the further you progress in your journey, the more moves you learn and the flashier you'll look~", 
                "warrior5", 
                []
                )
            export const warrior5= new storyPrompt(
                "Dawn", 
                "",
                "At the end of the day, you fight to look badass.", 
                "warrior6", 
                []
                )
            export const warrior6= new storyPrompt(
                "Dawn", 
                "",
                "", 
                "warrior7", 
                [{id:0, text: "If Limsa is a 'starter' city, why are there still so many people here who aren't new to the game?", next: "difference1"},
                {id:1, text: "What other places do you go to, by the way? Any recommendations?", next: "places1"}]
                )
