var quotes = [
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Extraordinary things are always hiding in places people never think to look.",
    "Setting goals is the first step in turning the invisible into the visible.",
    "You can have it all. Just not all at once.",
    "I've missed more than 9shots in my career I've lost almost games. times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    "Say something positive, and youll see something positive.",
    "All you need is the plan, the road map, and the courage to press on to your destination.",
    "Train your mind to see the good in every situation.",
    "If you can stay positive in a negative situation, you win.",
    "Stay positive. Better days are on their way.",
    "Only in the darkness can you see the stars.",
    "I dwell in possibility.",
    "A goal is not always meant to be reached, it often serves simply as something to aim at.",
    "A No. 2 pencil and a dream can take you anywhere.",
    "In a gentle way, you can shake the world.",
    "Be yourself and people will like you.",
    "Each day provides its own gifts.",
    "Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
    "You do not find the happy life. You make it.",
    "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
    "Those who don't believe in magic will never find it.",
    "Sometimes you will never know the value of a moment, until it becomes a memory.",
    "The most wasted of days is one without laughter.",
    "To win big, you sometimes have to take big risks.",
    "To live a fulfilled life, we need to keep creating the 'what is next', of our lives. Without dreams and goals there is no living, only merely existing, and that is not why we are here."
    ];
    
    
   exports.handler = function(context, event, callback) {
    const twilioClient = context.getTwilioClient();
    let toNumber = '+50685381972';
    let fromNumber = '+13254425727';
    let quoteToPlay = quotes[Math.floor(Math.random()*quotes.length)];
    console.log(quoteToPlay);
    twilioClient.calls
    .create({
       twiml: `<Response><Say>${quoteToPlay}</Say></Response>`,
       to: toNumber,
       from: fromNumber
     }).then((result) => {
        console.log('Call Created');
        console.log(result.sid);
        return callback(null,quoteToPlay);
      })
      .catch((error) => {
        console.error(error);
        return callback(error);
      });
    };
