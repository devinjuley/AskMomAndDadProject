'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {
        title: 'How do I prevent burning my pans while cooking?',
        content: 'Every time I cook, my pans always burn! I am tired of buying new pans!',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642453571/askMomDad/Screen_Shot_2022-01-17_at_1.06.07_PM_zvuysy.png',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What food fact will make me feel like my whole life was a lie?',
        content: 'The story goes like this…Once apples are picked, they are washed, ready for the supermarkets. This process removes the natural wax of an apple. Since the waxy layer prevents moisture in the apple from escaping, this also shortens the storage time for the apple. Because of this, the apple is sprayed with a thin layer of wax to prevent the apple from drying up and being attacked by fungi. The wax layer also makes the apple look more appealing, ready to be sold in supermarkets. Next time you pick up an apple, try it!',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642453815/askMomDad/Screen_Shot_2022-01-17_at_1.10.11_PM_ayjteo.png',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'I need advice for paying taxes for someone who is self-employed',
        content: 'I am 21, self-employed, and will make $1M this year, I do not really want to pay 50% in taxes, what can I do to pay less tax? Is it worth expatriating and moving to a low tax country?',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642454038/askMomDad/Screen_Shot_2022-01-17_at_1.13.55_PM_mhdshk.png',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Where and how do I file income tax returns?',
        content: 'I am not sure so any help would be greatly appreciated!!!!!!!',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642454157/askMomDad/Screen_Shot_2022-01-17_at_1.15.53_PM_i7sgpd.png',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Is scented laundry detergent not allowed in the workplace?',
        content: 'A co-worker is complaining that my clothes are highly perfumed from my laundry detergent. Can the company force me to use a different laundry detergent?',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642454306/askMomDad/Screen_Shot_2022-01-17_at_1.18.20_PM_w37dsg.png',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How do I start a laundry business?',
        content: 'I am 25 years old and I want to start a laundry business. How hard would this be? I have some money saved up to start this business',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642454396/askMomDad/Screen_Shot_2022-01-17_at_1.19.51_PM_r9pdue.png',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My landlord is trying to increase my rent, what should I do?',
        content: 'My landlord is changing my lease mid-term & increased the amount, forcing me to sign a new agreement & they will "backdate the amount" if I do not?',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642454729/askMomDad/Screen_Shot_2022-01-17_at_1.25.24_PM_gvlnr2.png',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My landlord will not give me my rent receipt, what should I do?',
        content: 'My landlord refuses to give me a rent receipt when I pay my rent. Can I use my video recordings as proof that I paid my rent?',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642454695/askMomDad/Screen_Shot_2022-01-17_at_1.24.50_PM_ph2wlx.png',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My ex of 6 years (34F) just followed me (35M) on Instagram...',
        content: 'As I said, we dated for 6 years and broke up 2 years ago (she broke up with me). We have not spoke since October 2019. After the breakup she blocked me on social and made her page private. I, soon thereafter, deleted my IG. Just wanted to get away from social media. Earlier this year I decided to get back on IG. Her page is public now as is mine. Anyways, fast forward to Monday, and I let my curiosity get the best of me. I looked at her profile and clicked on her IG story. I do not know what I was thinking in that moment, to be honest. I guess it was just curiosity. Anyways, an hour later, she followed me and liked one of my photos. I decided to follow her back. It took me a while to get over the initial pain of the breakup, but like all of us who have been through it, I eventually moved on with my life, though I will admit there are moments that still arise in which I think about her and miss her. They are not that frequent, however, with these recent events, it is brought back these weird emotions. I guess my question is...should I reach out and say hello? Is there anything I should be reading into here or am I letting my imagination get the best of me?',
        imageURL: '',
        userId: 1,
        categoryId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What are your favorite movies of all time?!',
        content: 'So I know there are lot of these threads but I want to ask you again what are your favorite movies. Mine is probably Fight Club.',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642455076/askMomDad/Screen_Shot_2022-01-17_at_1.31.01_PM_rxnwj4.png',
        userId: 1,
        categoryId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Who is the best gen1 starter?!',
        content: 'bulbasaur, squirtle, or charmander?',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642455147/askMomDad/Screen_Shot_2022-01-17_at_1.32.21_PM_vqmkgc.png',
        userId: 1,
        categoryId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Anybody have advice on how to overcome social anxiety???',
        content: 'Hey Guys, I have been suffering from social anxiety at the beginning of my teens years and it has ruined my high school years. I have just graduated and want to get a job. But, the problem is that I have social anxiety. I have learnt so much advice but would like to learn some more. So, if you had social anxiety and overcame it. Any advice would be welcomed. Thanks, have a blessed and safe day to you all.',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642455219/askMomDad/Screen_Shot_2022-01-17_at_1.33.34_PM_zfjiz2.png',
        userId: 1,
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How to remove stain from Pipe Leak',
        content: 'I currently park my 2021 Mazda CX-5 in my apartment buildings garage. A rusted pipe leaked on to my car hood for a while apparently and now my hood is rusted. Should I use a buffer? I’m not a car expert but I’d like to try and remove it on my own. What do you recommend to purchase? If not, I can always go to a local mechanic. Any help would be appreciated.',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642455401/askMomDad/Screen_Shot_2022-01-17_at_1.36.36_PM_fmpdqu.png',
        userId: 1,
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Little pests on kitchen quartz worktop',
        content: 'we’re finding these random little weevils roaming around our quartz kitchen worktops and in some drawers. They were also found near a skylight above our kitchen island. We’ve had pest control out 5 times. Id appreciate advice / info: could they be coming from gas hob? (We’ve checked water pipes and seems ok) if they came from food (now all cleared and cleaned out) how long until they go away? why do they randomly appear from nowhere? could they be coming from the quartz? They are driving me crazy.',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642455508/askMomDad/Screen_Shot_2022-01-17_at_1.38.22_PM_wdnzda.png',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Reusing and storing used cooking oil?',
        content: 'Tell me some about this? When I worked at Burger King so many years ago, every day we replaced the Crisco shortening oil, after cooking many many vats of fries, chicken and fish, and the oil was dark. At home, I am interested in the possibilities of (for instance) making fries one day, and fried chicken the next, using the same oil. I know there can be flavor bleed-over, and particulates, but does it beat tossing/wasting good oil? How long could used oil be stored? I assume it would go rancid over time, but would there be dangers of food poisoning from microbiologicals, since they would be killed next time you fry up?',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642455642/askMomDad/Screen_Shot_2022-01-17_at_1.40.37_PM_cm5jod.png',
        userId: 1,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'I have been taking the same prescription medicine for years. Even though I am careful to take the same amount as always, the medicine is not working like it did in the past. What is happening?',
        content: 'Should I contact my doctor about this?',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642455750/askMomDad/Screen_Shot_2022-01-17_at_1.42.25_PM_xzoy2h.png',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the best way to get stains out of carpet?',
        content: 'I spilled wine on my carpet last night! :( ',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642455913/askMomDad/Screen_Shot_2022-01-17_at_1.44.51_PM_kl993f.png',
        userId: 1,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'There is a nail in my car tire. What should I do?',
        content: 'I am scared that if I take out the nail, my tire will be ruined',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642456105/askMomDad/Screen_Shot_2022-01-17_at_1.48.20_PM_rikuj4.png',
        userId: 1,
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'When should I propose to my girlfriend?',
        content: 'I have been dating my girlfriend for 3 years now and I do feel a sort of pressure to propose since all of her friends are getting married.',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642456225/askMomDad/Screen_Shot_2022-01-17_at_1.50.20_PM_dypjs9.png',
        userId: 1,
        categoryId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the best way to make friends after college?',
        content: 'It has been really hard to meet people after college. Most people at my work have children and are way too busy to hang out.',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642456383/askMomDad/Screen_Shot_2022-01-17_at_1.52.56_PM_kxmmkc.png',
        userId: 1,
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What should I take for a headache?',
        content: 'I want to take motrin but I think I should take tylenol instead?',
        imageURL: 'https://res.cloudinary.com/mabmab/image/upload/v1642456611/askMomDad/Screen_Shot_2022-01-17_at_1.56.44_PM_rbf1zb.png',
        userId: 2,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Questions', null, {});

  }
};
