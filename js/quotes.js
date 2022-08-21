const quotes = [
  {
    quote:
      "Start writing, no matter what. The water does not flow until the faucet is turned on.",

    author: "Louis L’Amour",
  },
  {
    quote:
      "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",

    author: "William Faulkner",
  },
  {
    quote: "The first draft is just you telling yourself the story.",

    author: "Terry Pratchett",
  },
  {
    quote: "Start before you’re ready.",

    author: "Steven Pressfield",
  },
  {
    quote: "You can always edit a bad page. You can’t edit a blank page",

    author: "Jodi Picoult",
  },
  {
    quote:
      "You can’t wait for inspiration. You have to go after it with a club.",

    author: "Jack London",
  },
  {
    quote:
      "I have never started a poem yet whose end I knew. Writing a poem is discovering.",

    author: "Robert Frost",
  },
  {
    quote:
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",

    author: "Toni Morrison",
  },

  {
    quote:
      "I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles.",

    author: "Shannon Hale",
  },

  {
    quote: "First, find out what your hero wants, then just follow him!",

    author: "Ray Bradbury",
  },

  {
    quote:
      "The greatest part of a writer’s time is spent in reading, in order to write. A man will turn over half a library to make a book.",

    author: "Samuel Johnson",
  },

  {
    quote:
      "Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way.",

    author: "E. L. Doctorow",
  },

  {
    quote: "To produce a mighty book, you must choose a mighty theme.",

    author: "Herman Melville",
  },

  {
    quote:
      "Description begins in the writer’s imagination but should finish in the reader’s.",

    author: "Stephen King",
  },

  {
    quote:
      "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",

    author: "Robert Frost",
  },

  {
    quote:
      "If you want to be a writer, you must do two things above all others: read a lot and write a lot.",

    author: "Stephen King",
  },

  {
    quote:
      "Never write anything that does not give you great pleasure. Emotion is easily transferred from the writer to the reader.",

    author: "Joseph Joubert",
  },

  {
    quote:
      "The most valuable of all talents is that of never using two words when one will",

    author: "Thomas Jefferson",
  },

  {
    quote:
      "It is perfectly okay to write garbage as long as you edit brilliantly.",

    author: "C. J. Cherryh",
  },

  {
    quote: "Half my life is an act of revision.",

    author: "John Irving",
  },

  {
    quote:
      "Writing without revising is the literary equivalent of waltzing gaily out of the house in your underwear.",

    author: "Patricia Fuller",
  },

  {
    quote: "Write your first draft with your heart. Rewrite with your head.",

    author: "Mike Rich",
  },

  {
    quote:
      "So the writer who breeds more words than he needs, is making a chore for the reader who reads.",

    author: "Dr. Seuss",
  },

  {
    quote:
      "You write to communicate to the hearts and minds of others what's burning inside you, and we edit to let the fire show through the smoke.",

    author: "Arthur Plotnik",
  },

  {
    quote:
      "It took me fifteen years to discover I had no talent for writing, but I couldn’t give it up because by that time I was too famous",

    author: "Robert Benchley",
  },

  {
    quote:
      "There’s no such thing as writer’s block. That was invented by people in California who couldn’t write.",

    author: "Terry Pratchett",
  },

  {
    quote:
      "Outside of a dog, a book is man’s best friend. Inside of a dog, it’s too dark to read.",

    author: "Groucho Marx",
  },

  {
    quote:
      "I love deadlines. I like the whooshing sound they make as they fly by.",

    author: "Douglas Adams",
  },

  {
    quote:
      "If my doctor told me I had only six minutes to live, I wouldn't brood. I'd type a little faster.",

    author: "Isaac Asimov",
  },

  {
    quote: "If you have no critics, you’ll likely have no success.",

    author: "Malcolm X",
  },

  {
    quote:
      "If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.",

    author: "Somerset Maugham",
  },

  {
    quote:
      "If the book is true, it will find an audience that is meant to read it.",

    author: "Wally Lamb",
  },

  {
    quote:
      "I went for years not finishing anything. Because, of course, when you finish something you can be judged.",

    author: "Erica Jong",
  },

  {
    quote: "If I waited for perfection, I would never write a word.",

    author: "Margaret Atwood",
  },

  {
    quote: "Difficulties mastered are opportunities won.",

    author: "Winston Churchill",
  },

  {
    quote:
      "Ignore all hatred and criticism. Live for what you create, and die protecting it.",

    author: "Lady Gaga",
  },

  {
    quote: "You can make anything by writing.",

    author: "C.S. Lewis",
  },

  {
    quote:
      "The true alchemists do not change lead into gold; they change the world into words.",

    author: "William H. Gass",
  },

  {
    quote:
      "Imagination is everything. It is the preview of life’s coming attractions.",

    author: "Albert Einstein",
  },

  {
    quote: "Words are our most inexhaustible source of magic.",

    author: "J. K. Rowling",
  },

  {
    quote:
      "A bird doesn’t sing because it has an answer; it sings because it has a song.",

    author: "Maya Angelou",
  },

  {
    quote:
      "I must write it all out, at any cost. Writing is thinking. It is more than living, for it is being conscious of living.",

    author: "Anne Morrow Lindbergh",
  },

  {
    quote:
      "I write to give myself strength. I write to be the characters that I am not. I write to explore all the things I’m afraid of.",

    author: "Joss Whedon",
  },

  {
    quote:
      "I can shake off everything as I write; my sorrows disappear, my courage is reborn.",

    author: "Anne Frank",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `BY . ${todaysQuote.author}`;
