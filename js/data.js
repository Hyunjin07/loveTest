
const qnaList = [
  {
    q: '1. Do you have true friends between the opposite sexes or not ?',
   
    a: [
      { answer: 'a. Where is a friend between the opposite sex? Never.', type: [1, 2, 4, 9] },
      { answer: 'b. There is a real friend between the sexes, it is just friend.', type:  [0, 3, 6, 5, 10, 8] },
      { answer: 'c. I do not know well',  type: [7, 11 ] },
    ]
  },
  {
    q: '2. If you like someone, you want to contact them.',
    a: [
      { answer: 'a. contact right away to the men or woman.', type: [0, 3, 2, 8] },
      { answer: 'b. I think carefully about when to contact and how to contact.', type: [1, 6, 5, 10] },
      { answer: 'c. I wait until the men or woman who I like calls me first.',  type: [7, 4, 9, 11] },
    ]
  },
  {
    q: '3. What is your confession style?',
    a: [
      { answer: 'a.If the other person likes me, I will confess right away.', type: [1, 3, 2, 10, 8] },
      { answer: 'b. I wait until the other person confesses',  type: [7, 9, 11] },
      { answer: 'c. I confess at the perfect timing .', type:  [0, 6, 5, 4] }
    ]
  },
  {
    q: '4. What is the most likeable confession statement?',
    a: [
      { answer: 'a. Powerful, "Would you date with me?" ', type: [1, 2, 4 ] },
      { answer: 'b. Delicate. "I really love you, How about  you date with me?" ', type: [7, 10, 8, 9, 11 ] },
      { answer: 'c. Sensible, "We are a couple starting tomorrow" ', type: [0, 3, 6, 5 ] },
    ]
  },
  {
    q: '5. Today is my first date with my lover. What is the range of skinship acceptable?',
    a: [
      { answer: 'a. It is embarrassing, I can only hold hands.', type: [1, 7, 10, 4, 9 ] },
      { answer: 'b. What time is it these days?,I can even kiss', type: [0, 3, 6, 11]},
      { answer: 'c. We are lovers, All skinships are possible', type: [0, 3, 6, 11]},
    ]
    },
    
  {
    q: '6. Anniversary is coming, what will you doing(ex - 100, 200days).',
    a: [
      { answer: 'a. I do not care about anniversary, I act as usual.', type: [4, 9, 11 ] },
      { answer: 'b. Do I buy dinner or flower?', type: [0, 3, 6, 10 ] },
      { answer: 'c. I have already prepared a surprise event', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: "7. The lover's 'hair style changed.",
    a: [
      { answer: 'a. Do not know it',type: [1, 7, 11 ] },
      { answer: 'b. knowing it but do not say anything', type: [2, 4, 9 ] },
      { answer: 'c. Knowing it and makes a reaction', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. Your lover asks you to take her or his home after the date is over.',
    a: [
      { answer: 'a. Say bye where we met.', type: [0, 4, 9 ] },
      { answer: "b. It takes you to the stop or station near your lover's house.", type: [3, 2, 6, 5, 10, 8 ] },
      { answer: "c. take one's lover home.", type: [1, 7, 11 ] },
    ]
  },
  {
    q: '9. I have not heard from my lover all day.',
    a: [
      { answer: 'a. I wait while doing what I have to do',type: [7, 0, 5, 9 ] },
      { answer: "b. Check all social media such as lover's Instagram and Facebook.", type: [1, 3, 6, 11 ] },
      { answer: 'c. I will call and text my lover until I get a call', type: [2, 10, 8, 4 ] },
    ]
  },
  {
    q: '10. My lover comes to around my house without contact and waits for me.',
    a: [
      { answer: 'a. I am annoyed because my lover comes suddenly',  type: [4, 9, 11] },
      { answer: 'b. I am doing my job and then I will  meet my lover.',  type: [0, 2, 6, 5 ] },
      { answer: 'c. I am going to see my lover right now!',  type: [1, 7, 3, 10, 8 ] },
    ]
  },
  {
    q: '11. What kind of relationship about loving do you pursue?',
    a: [
      { answer: 'a. I like a peaceful and stable relationship with each doing his or her own thing.', type: [1, 4, 9, 11 ] },
      { answer: 'b. I like to see my lover when I miss the lover and I prefer to date a lot with lover', type: [7, 0, 3, 6, 10] },
      { answer: 'c. Flaming love is the best!', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '12. I fought so hard that I could not contain my anger while dating my lover. what do you want to do it?',
    a: [
      { answer: 'a. Just go to home', type: [3, 6, 4, 9 ] },
      { answer: 'b. To scream and get angry.', type: [0, 2, 5, 10, 8] },
      { answer: 'c. Just crying.',  type: [1, 7, 11] },
    ]
  }
]

const infoList = [
  {
    name: 'Dating is easy,  having a talent for dating. <Mouse>',
    desc: 'You, a pro-talented person in a relationship! You, a rat, know everything about a relationship, so you easily succeed in a relationship. It is mainly ambitious and has an optimistic personality, and it can be said that it is logical and very quick brain rotation. He is also good at speaking, so he is sociable and pleasant, but he likes fancy things, so he is vain or extravagant, so you have to be careful about these points. You need to be humble because you are often proud of your outstanding abilities! '
  },
  {
    name: 'I only look at you, honest dating style <Cow>',
    desc: 'You are a sunflower relationship style that only looks at the other person. He is patient in everything, so he tends to be sincere and sincere when dating, and he has a gentle and warm heart. Once you like it, you like it until the end, but your pride is quite stubborn. Also, you have to be careful about these things because you have a temper, and you have to be careful because you are jealous and love can turn into obsession! '
  },
  {
    name: "Let's date, win love <Tiger>",
    desc: 'Once you like someone, you make them mine! You, who corresponds to the tiger, is a style that goes straight to love at once. He has a tendency to lead mainly when dating, and he has a cool personality and a pleasant personality. He has a big personality and is a person who tolerates mistakes, but he is weak to temptation and excites because of his vanity. Also, you always have to be careful with what you say, because your words can hurt the other person!'
   
  },
  {
    name: 'How about this? How am I with a unique charm? <Rabbit>',
    desc: 'You are the one who captivates others! It is a style that has a mysterious and unique charm and makes the other person fall in love with it. You has developed intuition and has excellent dexterity. You is docile and optimistic, but you have to be careful that if you do it wrong, you can look like an innocent child to the other person. Also, you are prone to emotional ups and downs, so you can have a fickle mind, so if you pay attention to these aspects, you can have a good relationship!'
  },
  {
    name: 'When should we get married? Where is the honeymoon?, The owner of an ideal love affair <Dragon>',
    desc: 'You dream of the future with the lover! Rather than a realistic relationship, you have an idealistic view of the future. Because you think about the future you will spend with the person you love every day, you have the qualities to be a good groom. You are ambitious both in work and in love, so you have a high chance of great success and are very good at leadership. However, compared to high ideals, if the reality is not to your liking, there are many cases of bluffing or ignoring people!'
   
  },
  {
    name: 'What can I do on anniversary? event planner <Snake>',
    desc: "You take care of the anniversary of the other person and surprise them!, you have a great idea and a unique sense, so you have a lot of events for the other person. When you're in a relationship, you're quick to notice, and you can impress the other person every day. Overall, they have a glamorous relationship, but they have a lot of secrets and an indecisive personality. Also, you have to be careful because your ears are very thin, so you can trust other people's stories and become suspicious of others!"
    
  },
  {
    name: 'Oh, you changed your hair style today, it suits you well, So sensible <Horse>',
    desc: 'When dating, you are overflowing with sense! You are very good at speaking and have excellent handling skills, and you quickly wins the favor of others. you has an optimistic and flexible personality, and you hate being constrained. you know how to make sacrifices for your loved ones, but you are often greedy-oriented and often succumb to luxury and vanity. You have to be careful about this, as it can easily get ruined by drowning in hot water!'
  },
  {
    name: 'I like everything I do with you, Obedient<Sheep>',
    desc: "You try to match everything when dating! It has a friendly feeling and a gentle look, so you can feel comfortable in the other person's point of view. Pursue a stable relationship rather than a burning one, and the moment you open your heart to the other person, you can truly fall in love. you also have strong survivability and good resourcefulness, but on the other hand, you are stubborn to achieve everything you want. If this stubbornness gets worse, you may lose your attractiveness by appearing calculating in the eyes of others!"
  },
  {
    name: 'I am your celebrity, a talented person <Monkey>',
    desc: 'You always give happiness when you are tired and tired! You are really talented and have a lot of talent for speaking, so you often hear people say that you are a beauty in all directions. You are also versatile and intelligent, capable of doing anything well, and have a great sense of humor, so you are the type of man who is followed by a lot of people around you. When dating, you adjust the mood of the other person well and maintain a pleasant atmosphere, but you tend to place importance on his or her own face. You might want to be a little careful because of this, you might end up giving the impression of being cunning to others by rolling your hair!'
  },
  {
    name: 'This is this and that is that, public and private <Chicken>',
    desc: 'You are sure to make and break in pursuit of a neat relationship! You have a graceful and noble image, and you tend to express your elegant charm. You have good concentration and memory, so you remember everything that happened with the other person. However, if you go beyond your own line of thought, you will become cynical, and since you are usually straightforward, you can give the impression that you are cold. Since you are  a sensitive person, you are often sensitive to it, so I think it would be better to take care of your mind and treat others with a little more warmth!'
  },
  {
    name: 'I like you so much <Dog>',
    desc: 'You are an aegyo in itself! You are well rounded, and you are very social with good attachment. You are also curious because you cannot stand your questions, and you like to stick to other people like a puppy. You have a very cheerful personality, but your emotions are very ups and downs, so you are often hurt by what the other person says. Also, you have a quick temper, and you tend to not be able to act calmly, so I think you should be a little more careful about this! '
  },
  {
    name: 'A relaxed and gentle person <돼지>',
    desc: 'You have an elegant and noble character! You act relaxed when you make up your mind, and you have a gentle personality because you are very considerate of others. You are also the type that can be trusted with your honest personality, and you have a strong sense of responsibility no matter what kind of work he does. You has a strong realistic disposition, so you take care of the truth, but you lack expressive power, so you may not feel that you is being loved. You have to watch out for this, because you are secretly jealous and arrogant, enough to take revenge to the ends of the earth if someone wrongs yours!'
  },
]