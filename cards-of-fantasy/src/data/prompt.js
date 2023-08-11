class storyPrompt {
    constructor(speaker, sprite, text, next, option) {
        this.speaker = speaker;
        this.sprite = sprite;
        this.text = text;
        this.next = next;
        this.option = option;
    };
    // toString() {
    //     return `${this.text}`
    // };
};
// let story = {
//     "go_outside": [
//         {
//             storyPrompt: 2,
//             storyRoute: go_outside,
//             speaker: dawn,
//             text: "Sounds great! Would love to get some air and touch grass."
//         },
//         {
//             storyPrompt: 2,
//             storyRoute: go_outside,
//             speaker: dawn,
//             text: "Limsa Lominsa! This is where all of it began for me. It's quite a lively hub!"
//         },
//         {
//             storyPrompt: 2,
//             storyRoute: go_outside,
//             speaker: dawn,
//             text: "I miss the good old days of swinging a rusty axe around in my tattered, weird-looking gear."
//         },
//         {
//             storyPrompt: 2,
//             storyRoute: go_outside,
//             speaker: dawn,
//             text: "Actually, scratch that on the gear. I looked absolutely dreadful in those garbs."
//         },
//         {
//             storyPrompt: 2,
//             storyRoute: go_outside,
//             speaker: dawn,
//             text: "Glamours were so hard to obtain back in those days. But as a maurauder, I guess you needn't worry about such things."
//         },
//         {
//             storyPrompt: 2,
//             storyRoute: go_outside,
//             speaker: dawn,
//             text: "Warrior was plenty of fun though! A great introductory to the tank class, in my opinion."
//         },
//     ],

    
// }

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
    // intro1.next = intro2;
    // intro2.next = intro3;
    // intro3.next = intro4;



//stay_inside
    export const stay_inside1 = new storyPrompt(
        "Dawn", 
        "",
        "So you would like to stay in? Same, the AC is pretty nice this time of year.", 
        "", 
        []
        )
//     const stay_inside2 = new storyPrompt(
//         speaker = "Dawn", 
//         sprite = "",
//         text = "Although, living in Ishgard, I'd say it's not too bad compared to Ul'dah.", 
//         next = "", 
//         option = ""
//         )
//     const stay_inside3 = new storyPrompt(
//         speaker = "Dawn", 
//         sprite = "",
//         text = "Hm? You don't know what those places are? Which one would you like me to talk about?", 
//         next = "", 
//         option = ""
//         )
//     stay_inside1.next = stay_inside2;
//     stay_inside2.next = stay_inside3;

//         //ishgard 
//             const ishgard1 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "My humble abode! The Holy See of Ishgard is a city-state that rests in the snowy mountains alongside Dravania, home of the dragons.", 
//                 next = "", 
//                 option = ""
//                 )
//             const ishgard2 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "Weather is pretty much chilly all year-round. Snow storms and hail galore! Although during the summer, it's not too bad. Quite beautiful actually.", 
//                 next = "", 
//                 option = ""
//                 )
//             const ishgard3 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "Not long ago, Ishgard was actually at war with the dragons. They have special squadrons under the class 'Dragoons' that helped fight to protect their city.", 
//                 next = "", 
//                 option = ""
//                 )
//             const ishgard4 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "Why, I have a great friend who was actually one of Ishgard's best! His name is Estinien.", 
//                 next = "", 
//                 option = ""
//                 )
//             const ishgard5 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "He's rough around the edges, but once you get to know him, he's quite the sassy comrade. I'm sure you'd love to meet him.", 
//                 next = "", 
//                 option = ""
//                 )
//             const ishgard6 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "But enough about that, you asked to see my room! Anything in here that piques your interest?", 
//                 next = "", 
//                 option = ""
//                 )
//             ishgard1.next = ishgard2;
//             ishgard2.next = ishgard3;
//             ishgard3.next = ishgard4;
//             ishgard4.next = ishgard5;
//             ishgard5.next = ishgard6;


//             //uldah
//             const uldah1 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "Don't even get me started.", 
//                 next = "", 
//                 option = ""
//                 )
//             const uldah2 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "It's in the middle of the DESERT.", 
//                 next = "", 
//                 option = ""
//                 )
//             const uldah3 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "Wayyy too hot for me and my fur. But it's one of the wealthiest city-states in Eorzea, so they do be collecting that check.", 
//                 next = "", 
//                 option = ""
//                 )
//             const uldah4 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "They said their rent was due. But they should really invest in some kind of housing fan system to keep their citizens cool.", 
//                 next = "", 
//                 option = ""
//                 )
//             const uldah5 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "There were times I thought I'd collapse from heat stroke, especially if I wore armor.", 
//                 next = "", 
//                 option = ""
//                 )
//             const uldah6 = new storyPrompt(
//                 speaker = "Dawn", 
//                 sprite = "",
//                 text = "But enough about that, you asked to see my room! Anything in here that piques your interest?", 
//                 next = "", 
//                 option = ""
//                 )
//                 uldah1.next = uldah2;
//                 uldah2.next = uldah3;
//                 uldah4.next = uldah5;
//                 uldah5.next = uldah6;




// //go_outside
//     const go_outside1 = new storyPrompt(
//         speaker = "Dawn", 
//         sprite = "",
//         text = "", 
//         next = "", 
//         option = ""
//         )
//     const go_outside2 = new storyPrompt(
//         speaker = "Dawn", 
//         sprite = "",
//         text = "", 
//         next = "", 
//         option = ""
//         )
//     const go_outside3 = new storyPrompt(
//         speaker = "Dawn", 
//         sprite = "",
//         text = "", 
//         next = "", 
//         option = ""
//         )
//     const go_outside4 = new storyPrompt(
//         speaker = "Dawn", 
//         sprite = "",
//         text = "", 
//         next = "", 
//         option = ""
//         )
//     const go_outside5 = new storyPrompt(
//         speaker = "Dawn", 
//         sprite = "",
//         text = "", 
//         next = "", 
//         option = ""
//         )
//     const go_outside6 = new storyPrompt(
//         speaker = "Dawn", 
//         sprite = "",
//         text = "", 
//         next = "", 
//         option = ""
//         )
